export default {
  // host: 'http://127.0.0.1:8080',
  // host: 'http://10.30.4.119:8080',
  // host: 'http://10.1.2.9:8080',
  // host: 'http://47.94.255.76:8080',
  host: 'https://api.brocareer.com',

  user: '/careerbro/user/user',
  getUserSum: '/careerbro/user/sum',

  login: '/careerbro/sys/login',


  attention: '/careerbro/attention/attention' ,
  isAttention: '/careerbro/attention/isAttend' ,
  cancelAttention: '/careerbro/attention/cancelAttend' ,

  userJoin: '/careerbro/salary/user', // :uid 用户发布薪资信息

  addFeedback: '/careerbro/feedback/feedback', // 发布反馈信息

  searchCollege: '/careerbro/college/college', // 学校模糊搜索
  searchDistrict: '/careerbro/district/district', // 地区 模糊搜索
  searchJob: '/careerbro/job/job', // 岗位 模糊搜索
  searchIndustry: '/careerbro/industry/industry', // 行业模糊搜索
  searchCorperation: '/careerbro/corporation/corporation', // 公司模糊搜索

  salary: '/careerbro/salary/salary', // post
  salaryUser: '/careerbro/salary/user/', // get 根据用户ID查询用户发布的薪资信息
  salaryShoucang: '/careerbro/salary/eva_system/', // get 获取用户关注（收藏）的薪资
  salaryComment: '/careerbro/salary/comment/',  // get 获取用户评论赞同的薪资

  comment: '/careerbro/comment/comment', // post 评论
  commentSalary: '/careerbro/comment/salary', // post 评论

  salaryOption : '/careerbro/salary/eva_system', // post 对薪资信息的同意、感谢、反对、收藏、分享

  agreeComment: '/careerbro/comment/agree/', // post

  getHotCompany: '/careerbro/salary/getMostCor', //热门公司
  getHotCity: '/careerbro/salary/getMostCity', //热门城市

  searchAllInfo: '/careerbro/salary/getSearch',

  getAllIndustry: '/careerbro/industry/industry'
}
