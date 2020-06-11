import React from "react";
import { connect } from "react-redux";
import { setUserPic } from "../../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Form, FormInput, Button } from "shards-react";
//import api from "../../utils/api";
//import { api } from "src/utils/api";
//import Card from "react-bootstrap/Card";

class UploadImgProfile extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formdata = new FormData(event.target);
    this.props.setUserPic(formdata);
  };

  // this.props
  //   .setUserPic(event.target)
  //   .then((event) => window.location.reload());
  //};
  render() {
    return (
      <React.Fragment>
        {/* {this.props.username === this.props.loggedInUsername && ( */}
        <Form
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <FormInput
            style={{ borderRadius: "0", paddingTop: "10px" }}
            squared
            size="sm"
            type="file"
            name="picture"
            accept="image/png, image/jpeg, image/gif"
          />
          <Button
            squared
            theme="primary"
            size="sm"
            type="submit"
            value="Upload Picture"
          >
            Upload
          </Button>
        </Form>
        {/* )} */}
      </React.Fragment>
    );
  }
}

// const mapStateToProps = (state) => {
//   return {
//     result: state.users.setUserPic.result,

//loading: state.users.setUserPic.loading,
// error: state.users.setUserPic.error,

//loggedInUsername: state.auth.login.result.username,
//state.users.currentUser.user
//   };
// };

// export default connect(mapStateToProps, { setUserPic })(UploadImgProfile);

// export default connect(
//   (state) => ({
//     loggedInUsername: state.auth.login.result.username,
//   }),
//   { setUserPic }
// )(UploadImgProfile);
