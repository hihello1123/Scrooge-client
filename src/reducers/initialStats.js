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
    budgetGraph: null,
    categories: null,
    userGraph: null,
  },
  socialData: {
    email: null,
    photo: null,
    username: null,
  },
  budget: {
    loading: true,
    categories: null,
    usedGraph: null,
    budgetGraph: null,
    err: false,
  },
};
export default initialStats;
