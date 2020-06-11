import { connect } from "react-redux";
import { createMessage, listOfMessages } from "../../redux/actions";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  error: state.messages.error,
});
// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  createMessage,
  listOfMessages
  // getUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
