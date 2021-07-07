const initialStats = {
  hello: {
    loading: false,
    data: null,
    err: null,
  },
  emailExists: {
    emailSignupMod: false,
    emailExistsErr: false,
  },
  userLoggedIn: {
    isLoggedIn: false,
    accessToken: null,
    path: null,
  },
  userSignIn: {
    signInErr: null,
  },
  userInfo: {
    loading: false,
    userName: null,
    userEmail: null,
    userPhoto: null,
    userLevel: null,
    userEXP: null,
  },
  userSet: {
    darkMode: false,
    redirect: '/daily',
  },
  daily: {
    loading: false,
    top: {
      monthlyBudget: null,
      monthlyUsed: null,
      exMonthlyUsed: null,
    },
    bottom: [],
    categoryList: null,
  },
  budget: {
    loading: true,
    categories: null,
    budgetGraph: null,
    userGraph: null,
    err: false,
  },
  socialData: {
    email: null,
    photo: null,
    username: null,
  },
  yearlyData: {
    top: [],
    bottom: {
      best: [
        {
          date: 'YYYY-MM-DD',
          categoryname: '치킨',
          saveMoney: 5000,
        },
        {
          date: 'YYYY-MM-DD',
          categoryname: '피자',
          saveMoney: 6000,
        },
        {
          date: 'YYYY-MM-DD',
          categoryname: '떡볶이',
          saveMoney: 7000,
        },
      ],
      topthree: [
        {
          date: 'YYYY-MM-DD',
          memo: '치킨',
          cost: 7000,
        },
        {
          date: 'YYYY-MM-DD',
          memo: '피자',
          cost: 6000,
        },
        {
          date: 'YYYY-MM-DD',
          memo: '떡볶이',
          cost: 5000,
        },
      ],
      achievement: [
        {
          scrooge: [],
          leastspend: [],
        },
      ],
    },
  },
  navEffect: {
    currentPath: '/daily',
  },
};
export default initialStats;
