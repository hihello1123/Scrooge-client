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
    userName: null,
    userEmail: null,
    userPhoto: null,
    userLevel: null,
    userEXP: null,
  },
  userSet: {
    darkMode: false,
  },
  daypage: {
    top: {
      monthlyBudget: null,
      monthlyUsed: null,
      exmonthlyUsed: null,
    },
    bottom: null,
    categoryList: null,
  },
  budget: {
    budgetGraph: null,
    categories: null,
    userGraph: null,
  }
};
export default initialStats;
