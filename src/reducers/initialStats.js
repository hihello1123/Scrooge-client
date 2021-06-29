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
  userInfo: {
    userName: null,
    userEmail: null,
    userPhoto: null,
    userLevel: null,
    userexp: null,
  },
  userSet: {
    darkmode: false,
  },
  daily: {
    top: {
      monthlyBudget: null,
      monthlyUsed: null,
      exmonthlyUsed: null,
    },
    bottom: null,
    categorylist: null,
  },
};
export default initialStats;
