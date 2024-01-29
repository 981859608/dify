const translation = {
  currentPlan: '当前套餐',
  upgradeBtn: {
    plain: '升级套餐',
    encourage: '立即升级',
    encourageShort: '升级',
  },
  viewBilling: '管理账单及订阅',
  buyPermissionDeniedTip: '请联系企业管理员订阅',
  plansCommon: {
    title: '选择适合您的套餐',
    yearlyTip: '订阅年度计划可免费获得 2个月！',
    mostPopular: '最受欢迎',
    planRange: {
      monthly: '按月',
      yearly: '按年',
    },
    month: '月',
    year: '年',
    save: '节省',
    currentPlan: '当前计划',
    contractSales: '联系销售',
    contractOwner: '联系团队管理员',
    free: '免费',
    startForFree: '免费开始',
    getStartedWith: '开始使用',
    contactSales: '联系销售',
    talkToSales: '联系销售',
    modelProviders: '支持的模型提供商',
    teamMembers: '团队成员',
    buildApps: '构建应用程序数',
    vectorSpace: '向量空间',
    vectorSpaceTooltip: '向量空间是 LLMs 理解您的数据所需的长期记忆系统。',
    vectorSpaceBillingTooltip: '向量存储是将知识库向量化处理后为让 LLMs 理解数据而使用的长期记忆存储，1MB 大约能满足1.2 million character 的向量化后数据存储（以 OpenAI Embedding 模型估算，不同模型计算方式有差异）。在向量化过程中，实际的压缩或尺寸减小取决于内容的复杂性和冗余性。',
    documentProcessingPriority: '文档处理优先级',
    documentProcessingPriorityTip: '如需更高的文档处理优先级，请升级您的套餐',
    documentProcessingPriorityUpgrade: '以更快的速度、更高的精度处理更多的数据。',
    priority: {
      'standard': '标准',
      'priority': '优先',
      'top-priority': '最高优先级',
    },
    logsHistory: '日志历史',
    customTools: '自定义工具',
    unavailable: '不可用',
    days: '天',
    unlimited: '无限制',
    support: '支持',
    supportItems: {
      communityForums: '社区论坛',
      emailSupport: '电子邮件支持',
      priorityEmail: '优先电子邮件和聊天支持',
      logoChange: 'Logo更改',
      SSOAuthentication: 'SSO 认证',
      personalizedSupport: '个性化支持',
      dedicatedAPISupport: '专用 API 支持',
      customIntegration: '自定义集成和支持',
      ragAPIRequest: 'RAG API 请求',
      agentMode: '代理模式',
      workflow: '工作流',
    },
    comingSoon: '即将推出',
    member: '成员',
    memberAfter: '个成员',
    messageRequest: {
      title: '消息额度',
      tooltip: '为不同方案提供基于 OpenAI 模型的消息响应额度。',
    },
    annotatedResponse: {
      title: '标注回复数',
      tooltip: '标注回复功能通过人工编辑标注为应用提供了可定制的高质量问答回复能力',
    },
    ragAPIRequestTooltip: '指单独调用 Dify 知识库数据处理能力的 API。',
    receiptInfo: '只有团队所有者和团队管理员才能订阅和查看账单信息',
  },
  plans: {
    sandbox: {
      name: 'Sandbox',
      description: '200次 GPT 免费试用',
      includesTitle: '包括：',
    },
    professional: {
      name: 'Professional',
      description: '让个人和小团队能够以经济实惠的方式释放更多能力。',
      includesTitle: 'Sandbox 计划中的一切，加上：',
    },
    team: {
      name: 'Team',
      description: '协作无限制并享受顶级性能。',
      includesTitle: 'Professional 计划中的一切，加上：',
    },
    enterprise: {
      name: 'Enterprise',
      description: '获得大规模关键任务系统的完整功能和支持。',
      includesTitle: 'Team 计划中的一切，加上：',
    },
  },
  vectorSpace: {
    fullTip: '向量空间已满。',
    fullSolution: '升级您的套餐以获得更多空间。',
  },
  apps: {
    fullTipLine1: '升级您的套餐以',
    fullTipLine2: '构建更多的程序。',
  },
  annotatedResponse: {
    fullTipLine1: '升级您的套餐以',
    fullTipLine2: '标注更多对话。',
    quotaTitle: '标注的配额',
  },
}

export default translation
