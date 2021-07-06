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
      best: [],
      topthree: [],
      achieve: [
        {
          scrooge: [],
          leastspend: [],
        },
      ],
    },
  },
  // 년도별 데이터: {
  //   차트data: [
  //     [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
  //     [new Date(2021, 8, 12), 100000],
  //   ]
  // }
};
export default initialStats;
