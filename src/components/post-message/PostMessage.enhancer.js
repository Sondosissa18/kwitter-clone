import { connect } from "react-redux";
import { createMessage, listOfMessages } from "../../redux/actions";
import { updateScroll } from "../message-feed/MessageFeed";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
  error: state.messages.error,
  loading: state.messages.loading,
  update: state.messages.update,
  postLoading: state.messages.postLoading
});
// https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
const mapDispatchToProps = {
  createMessage,
  listOfMessages,
  // getUser,
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
