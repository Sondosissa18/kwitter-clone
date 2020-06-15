import { connect } from "react-redux";
import { addLikeAction, listOfMessages } from "../../redux/actions";

// https://react-redux.js.org/using-react-redux/connect-mapstate#connect-extracting-data-with-mapstatetoprops
const mapStateToProps = (state) => ({
    // likes: state.messages
    username: state.auth.username
  });
  // https://react-redux.js.org/using-react-redux/connect-mapdispatch#connect-dispatching-actions-with-mapdispatchtoprops
  const mapDispatchToProps = {
    addLikeAction,
    listOfMessages
  };
  
  export const enhancer = connect(mapStateToProps, mapDispatchToProps);
  
