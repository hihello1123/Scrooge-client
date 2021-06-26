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
    isLoggedIn: true,
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
};
export default initialStats;
