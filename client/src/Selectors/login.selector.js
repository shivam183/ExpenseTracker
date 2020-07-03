export const getIsUserLoggedIn = state => state.loginReducer.isLoggedIn
export const getError=state=>state.loginReducer.error
export const getToken=state=>state.loginReducer.token
export const getID=state=>state.loginReducer._id
export const getName=state=>state.loginReducer.firstName