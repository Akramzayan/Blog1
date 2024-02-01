import { userActions } from "../reducers/userReducer";
export const logout =() => (dispatch) => {
    dispatch(userActions.resetuserInfo());
    localStorage.removeItem("account");
 
}
