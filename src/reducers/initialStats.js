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
    top: {
      monthlyBudget: null,
      monthlyUsed: null,
      exMonthlyUsed: null,
    },
    bottom: [
      {
        id: 1,
        categoryname: '식비',
        moneyId: 1,
        moneyCost: 10000,
        moneyMemo: '롯데리아',
        moneyDate: '2021-06-22',
      },
      {
        id: 2,
        categoryname: '식비',
        moneyId: 1,
        moneyCost: 10000,
        moneyMemo: '롯데리아',
        moneyDate: '2021-06-22',
      },
    ],
    categoryList: null,
  },
  budget: {
    budgetGraph: null,
    categories: null,
    userGraph: null,
  },
  socialData: {
    email: null,
    photo: null,
    username: null,
  },
  // 년도별 데이터: {
  //   차트data: [
  //     [{ type: 'date', id: 'Date' }, { type: 'number', id: 'Won/Loss' }],
  //     [new Date(2021, 8, 12), 100000],
  //   ]
  // }
};
export default initialStats;
