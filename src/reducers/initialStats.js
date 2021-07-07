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
  monthlyData: {
    data: [
      {
        title: '합계 10000원',
        groupId: '지정되지않은카테고리',
        date: '2021-07-14',
        id: '메모지롱',
      },
    ],
  },
  navEffect: {
    currentPath: '/daily',
  },
};
export default initialStats;
