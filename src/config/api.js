export default {
  host: 'http://10.1.2.201:8080',
  // host: 'http://10.1.2.9:8080',

  user: '/careerbro/user/user',
  getUserSum: '/careerbro/user/sum',

  login: '/careerbro/sys/login',

  /**
   * GET /:uid  关注公司
   * POST  取消关注
   */
  attentionCompany: '/careerbro/attention/corperation' ,
  /**
   * GET /:uid  关注岗位
   * POST  取消关注
   */
  attentionJob: '/careerbro/attention/industry' ,

  userJoin: '/careerbro/salary/user', // :uid 用户发布薪资信息

  addFeedback: '/careerbro/feedback/feedback', // 发布反馈信息

  searchCollege: '/careerbro/college/college', // 学校模糊搜索
  searchDistrict: '/careerbro/district/district', // 地区 模糊搜索
  searchJob: '/careerbro/job/job', // 岗位 模糊搜索
  searchIndustry: '/careerbro/industry/industry', // 行业模糊搜索
  searchCorperation: '/careerbro/corperation/corperation', // 公司模糊搜索

  addSalary: '/careerbro/salary/salary', // post

  comment: '/careerbro/comment/comment', // post

  addSalary1: '/careerbro/salary/salary', // post

  addSalary2: '/careerbro/salary/salary', // post
}
