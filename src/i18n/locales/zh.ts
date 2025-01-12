import { projects2to5 } from './projectTranslations/zh/projects2-5';
import { projects6to10 } from './projectTranslations/zh/projects6-10';

export default {
  translation: {
    hero: {
      titles: [
        "人工智能/机器学习工程师",
        "大语言模型专家",
        "全栈开发工程师"
      ],
      role: "高级人工智能/机器学习工程师",
      skills: {
        ai: "AI专长：大语言模型 | RAG系统 | 神经网络 | 计算机视觉 | 自然语言处理",
        blockchain: "AI基础设施：AWS SageMaker | Google Cloud AI | Azure ML | PyTorch | TensorFlow",
        fullstack: "开发技术：Python | TypeScript | React | FastAPI | Django | Node.js",
        uiux: "AI工具：LangChain | Pinecone | OpenAI | Anthropic | Together AI",
        tools: "MLOps：Docker | Kubernetes | MLflow | DVC | Weights & Biases",
        projects: "近期项目：AI聊天机器人平台 | 语音助手 | 小说写作AI | 图像搜索引擎",
        industries: "行业：企业AI | 医疗保健 | 教育科技 | 研究 | 创业公司",
        focus: "重点：构建可扩展的AI解决方案和创新的机器学习应用"
      }
    },
    nav: {
      about: "关于",
      experience: "工作经验",
      projects: "项目",
      testimonials: "推荐",
      contact: "联系"
    },
    workExperience: {
      title: "工作经验",
      roles: {
        lead: "首席开发工程师",
        senior: "高级开发工程师",
        technical: "技术主管",
        fullstack: "全栈开发工程师"
      },
      companies: {
        companyA: "A公司",
        companyB: "B公司",
        companyC: "C公司",
        companyD: "D公司"
      },
      duration: {
        lead: "2020年1月 - 至今",
        senior: "2018年1月 - 2019年12月",
        technical: "2016年1月 - 2017年12月",
        fullstack: "2014年1月 - 2015年12月"
      },
      responsibilities: {
        lead: {
          1: "领导开发团队创建数据分析平台",
          2: "实施机器学习算法进行预测分析",
          3: "与跨职能团队合作增强产品功能"
        },
        senior: {
          1: "使用React和Node.js开发Web应用",
          2: "优化应用性能和用户体验",
          3: "指导初级开发人员并进行代码审查"
        },
        technical: {
          1: "监督移动应用程序的开发",
          2: "与利益相关者协调收集需求",
          3: "确保遵守最佳编码实践和标准"
        },
        fullstack: {
          1: "使用MERN技术栈构建和维护Web应用",
          2: "实现数据交换的RESTful API",
          3: "与设计师密切合作创建响应式布局"
        }
      }
    },
    testimonials: {
      title: "客户评价",
      projectTitle: "项目",
      country: "国家",
      platform: "平台",
      feedback: {
        1: "在公司文化分析项目上的出色工作。提供的数据可视化和见解正是我们所需要的。",
        2: "AI聊天机器人的实现超出了我们的预期。非常专业和全面的方法。",
        3: "在我们的图像搜索引擎上做得很出色。与Google搜索API的集成非常顺畅。",
        4: "Ollabot平台改变了我们的客户服务。强烈推荐！",
        5: "Jsonscout对我们的数据转换需求来说是一个改变游戏规则的工具。出色的实现。",
        6: "文档编辑器直观且功能强大。非常注重细节。",
        7: "语音助手的实现完美无缺。对自然交互印象深刻。",
        8: "Novmuser AI彻底改变了我们的写作过程。AI集成无缝。",
        9: "预售启动平台超出了我们的预期。非常专业的实现。",
        10: "整数转换解决方案正是我们所需要的。优秀的优化。",
        11: "为Autheo开发的智能合约安全且高效。出色的工作！",
        12: "Project Athena显著改善了我们的Web3安全性。出色的实现。",
        13: "Chrome扩展完美满足了我们的房地产数据需求。非常满意。"
      }
    },
    projects: {
      title: "精选项目",
      1: {
        title: "公司文化分析",
        description: "数据驱动的公司文化指标分析平台",
        details: [
          "开发了一个综合数据分析平台，专注于通过实时指标和见解来衡量和改善公司文化。",
          "使用React和Recharts实现交互式仪表板，可视化关键绩效指标、员工满意度和团队参与度指标。",
          "集成机器学习算法以识别公司文化数据中的趋势和模式。",
          "构建了一个强大的后端系统，可处理来自多个来源的大型数据集。"
        ]
      },
      ...projects2to5,
      ...projects6to10,
      11: {
        title: "项目 Athena - Web3安全平台",
        description: "保护Web3生态系统用户的高级安全平台",
        details: [
          "开发了一个全面的Web3安全平台，专注于保护用户免受冒充诈骗、钓鱼诈骗和钱包盗窃。",
          "使用Slither和Mythril等工具实施智能合约安全审计，以识别区块链应用中的漏洞。",
          "开发并集成钱包连接功能，使用Web3.js进行安全用户身份验证。",
          "创建实时交易监控系统，以检测和警告用户可疑活动。",
          "实施去中心化身份解决方案，以增强用户隐私和安全性。",
          "设计用户友好的界面，显示安全警报和风险评估。"
        ]
      },
      12: {
        title: "StarC项目 - 太阳能技术资源中心",
        description: "国际太阳能技术和应用资源中心网站",
        details: [
          "为国际太阳能技术和应用资源中心网络(STAR-C)开发综合网站。",
          "实施自定义WordPress主题和插件修改。",
          "集成SEO优化和Google地图功能。",
          "创建文档管理系统和活动日历。",
          "专注于为最不发达国家和小岛屿发展中国家建立强大的能力网络。",
          "项目时间：2023.8.13-20，网站访问地址：starc-project.org",
          "使用技术：WordPress、PHP、JavaScript、CSS、Google Maps API、SEO工具"
        ]
      },
      13: {
        title: "Creek Waters - 房地产着陆页",
        description: "房地产着陆页开发",
        details: [
          "为AX Capital创建了一个视觉吸引人的着陆页，突出其豪华物业，使用React.js和Tailwind CSS。",
          "开发了响应式和用户友好的界面，确保在所有设备上获得最佳浏览体验。",
          "实现了处理物业咨询和咨询请求的电子邮件发送功能。",
          "通过API集成实时数据，为访问者提供最新的物业信息。",
          "优化了网站以提高搜索引擎的可见性和自然流量。",
          "项目时间：2023.5，网站访问地址：sales-inquiries.ae/axcapital/creek-waters",
          "使用技术：React.js、Tailwind CSS、电子邮件集成、SEO优化"
        ]
      }
    }
  }
};
