import { connect } from "react-redux";
import { listOfMessages, createMessage } from "../../redux/actions";

const mapStateToProps = (state) => ({
  messages: state.messages.messages,
  loading: state.messages.loading,
  error: state.messages.error,
  text: state.messages.text

});

const mapDispatchToProps = {
  onListOfMessages: listOfMessages,
  onCreateMessage: createMessage
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);
