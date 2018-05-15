export default {
  // host: 'http://10.1.2.201:8080',
  host: 'http://10.1.2.9:8080',

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
}
