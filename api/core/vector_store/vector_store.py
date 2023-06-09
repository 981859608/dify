from flask import Flask
from llama_index import ServiceContext, GPTVectorStoreIndex
from requests import ReadTimeout
from tenacity import retry, retry_if_exception_type, stop_after_attempt

from core.vector_store.milvus_vector_store_client import MilvusVectorStoreClient
from core.vector_store.pinecone_vector_store_client import PineconeVectorStoreClient
from core.vector_store.qdrant_vector_store_client import QdrantVectorStoreClient
from core.vector_store.weaviate_vector_store_client import WeaviateVectorStoreClient

SUPPORTED_VECTOR_STORES = ['weaviate', 'qdrant', 'pinecone', 'milvus']


class VectorStore:

    def __init__(self):
        self._vector_store = None
        self._client = None

    def init_app(self, app: Flask):
        if not app.config['VECTOR_STORE']:
            return

        self._vector_store = app.config['VECTOR_STORE']
        if self._vector_store not in SUPPORTED_VECTOR_STORES:
            raise ValueError(f"Vector store {self._vector_store} is not supported.")

        if self._vector_store == 'weaviate':
            self._client = WeaviateVectorStoreClient(
                endpoint=app.config['WEAVIATE_ENDPOINT'],
                api_key=app.config['WEAVIATE_API_KEY'],
                grpc_enabled=app.config['WEAVIATE_GRPC_ENABLED']
            )
        elif self._vector_store == 'qdrant':
            self._client = QdrantVectorStoreClient(
                url=app.config['QDRANT_URL'],
                api_key=app.config['QDRANT_API_KEY'],
                root_path=app.root_path
            )
        elif self._vector_store == 'pinecone':
            self._client = PineconeVectorStoreClient(
                api_key=app.config['PINECONE_API_KEY'],
                environment=app.config['PINECONE_ENVIRONMENT']
            )
        elif self._vector_store == 'milvus':
            self._client = MilvusVectorStoreClient(
                host=app.config['MILVUS_HOST'],
                port=app.config['MILVUS_PORT'],
                user=app.config['MILVUS_USER'],
                password=app.config['MILVUS_PASSWORD'],
                use_secure=app.config['MILVUS_USE_SECURE'],
            )

        app.extensions['vector_store'] = self

    @retry(reraise=True, retry=retry_if_exception_type(ReadTimeout), stop=stop_after_attempt(3))
    def get_index(self, service_context: ServiceContext, index_struct: dict) -> GPTVectorStoreIndex:
        vector_store_config: dict = index_struct.get('vector_store')
        index = self.get_client().get_index(
            service_context=service_context,
            config=vector_store_config
        )

        return index

    def to_index_struct(self, dataset_id: str) -> dict:
        return {
            "type": self._vector_store,
            "vector_store": self.get_client().to_index_config(dataset_id)
        }

    def get_client(self):
        if not self._client:
            raise Exception("Vector store client is not initialized.")

        return self._client

    def support_hit_testing(self):
        if isinstance(self._client, MilvusVectorStoreClient):
            # search API not return vector data
            return False

        return True