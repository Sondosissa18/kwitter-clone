import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, FormInput, Button } from "shards-react";
import "shards-ui/dist/css/shards.min.css";
//import api from "../../utils/api";
//import { api } from "src/utils/api";
//import Card from "react-bootstrap/Card";

class UploadImgProfile extends React.Component {
  handleGetUser = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    this.props.setUser(data);
  };
  render() {
    return (
      <React.Fragment>
        {this.props.username === this.props.loggedInUsername && (
          <Form
            onSubmit={this.handleGetUser}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <FormInput
              style={{ borderRadius: "0", paddingTop: "10px" }}
              squared
              size="sm"
              type="file"
              name="picture"
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
        )}
      </React.Fragment>
    );
  }
}

export default UploadImgProfile;
