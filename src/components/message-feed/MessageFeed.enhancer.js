import { connect } from "react-redux";
import { listOfMessages } from "../../redux/actions";

const mapStateToProps = (state) => ({
    messages: state.messages.messages
});

const mapDispatchToProps = {
  onListOfMessages: listOfMessages
};

export const enhancer = connect(mapStateToProps, mapDispatchToProps);

