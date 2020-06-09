import { connect } from "react-redux";
// import { SIGNUP } from "../../redux/actions/auth";
import { createUser, getUser, updateUser } from "../../redux/actions/users.js";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
});

// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  createUser,
  getUser,
  updateUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
