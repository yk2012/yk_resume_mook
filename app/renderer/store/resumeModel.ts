const resumeModel: TSRcReduxModel.Props<TSResume.IntactResume> = {
  namespace: 'resumeModel',
  openSeamlessImmutable: true,
  state: {
    // 简历信息字段
    base: {
      avatar: '',
      username: 'YK菌',
      area: '安徽·合肥',
      school: '安徽牛逼大学',
      major: '计算机科学与技术',
      degree: '本科',
      hometown: '安徽',
      onSchoolTime: {
        beginTime: '2019.09',
        endTime: '2022.06',
      },
    },
    contact: {
      phone: '12345678909',
      email: '',
      github: 'https://github.com/yk2012',
      juejin: 'https://juejin.cn/user/'
    },
    work: {
      job: '前端工程师',
      city: "上海|杭州|南京|合肥",
      cityList: ['上海', '杭州', '南京', '合肥'],
    },
    hobby: '羽毛球、跑步、阅读',
    skill: '熟悉React | 熟悉Vue',
    skillList: [
      '熟悉Vue.js',
      '熟悉React',
      '熟悉webpack',
      '了解设计模式',
      '了解Node.js',
    ],
    evaluation: '掘金博主',
    evaluationList: [
      '掘金博主',
      'CSDN博主',
      '沟通能力强',
      '代码洁癖',
    ],
    certificate: '安徽第一届吹牛逼大赛参与奖',
    certificateList: ['安徽第一届吹牛逼大赛'],
    schoolExperience: [
      {
        beginTime: '2016.09',
        endTime: '2017.09',
        post: '文艺部会长',
        department: '校团委学生会',
        content:
          '计划、组织、协调各年级学生组织的文艺和文化娱乐活动｜承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
        parseContent: [
          '计划、组织、协调各年级学生组织的文艺和文化娱乐活动',
          '承办好学生会部的学生文艺晚会。有效地与社团部开展合作项目',
        ],
      },
    ],
    workExperience: [
      {
        beginTime: '2017.09',
        endTime: '2019.04',
        post: '前端工程师',
        department: '湖南瞎说大学网络中心',
        content:
          '担任TickNet工作室前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用｜任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理',
        parseContent: [
          '担任TickNet工作室前端工程师，与湖南瞎说大学网络中心合作，围绕微信企业号开发或主导多个应用',
          '任职期间基于微信企业号开发校内闲余市场，采用Vue.js主导开发，并与湖南xxx科技有限公司合作，主导开发该公司官网及后台管理',
        ],
      },
    ],
    projectExperience: [
      {
        beginTime: '2021.03',
        endTime: '2021.05',
        projectName: 'visResumeMook 可视化简历平台',
        post: '前端工程师',
        content:
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版｜通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档｜通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
        parseContent: [
          'Electron + React Hooks 打造简历平台，只需输入一次信息，套用多份模版',
          '通过 jsonfile 方式实现主题换肤，支持导出 PDF 简历文档',
          '通过 indexDB 方式实现历史简历缓存，通过可视化拖拽形式，自定义组件模版',
        ],
        date: 1621145137865,
      },
    ],
  }
}

export default resumeModel