import React from "react";
import { connect } from "react-redux";
import { setUserPics } from "../../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
// import "shards-ui/dist/css/shards.min.css";
import {
  //Form,
  //FormInput,
  Card,
  Button,
} from "react-bootstrap";

class UploadImgProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }
  handleChange = (event) => {
    console.log(event.target.files[0]);
    this.setState({
      selectedFile: event.target.files[0],
    });
  };

  handleSubmit = (event) => {
    console.log(event.target.files);
    event.preventDefault();
    const data = new FormData();
    data.append("picture", this.state.selectedFile);
    this.props.setUserPics(data);
  };

  render() {
    return (
      <React.Fragment>
        <Card
          onSubmit={this.handleSubmit}
          style={{ display: "flex", flexDirection: "row" }}
        >
          <input
            onChange={this.handleChange}
            style={{ borderRadius: "0", paddingTop: "10px" }}
            squared="true"
            size="sm"
            type="file"
            id="picture"
            name="picture"
            accept="image/png, image/jpeg, image/gif"
          />
          <Button
            onClick={this.handleSubmit}
            squared="true"
            theme="primary"
            size="sm"
            type="submit"
            value="Upload Picture"
          >
            Upload
          </Button>
        </Card>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = {
  setUserPics,
};

export default connect(null, mapDispatchToProps)(UploadImgProfile);
