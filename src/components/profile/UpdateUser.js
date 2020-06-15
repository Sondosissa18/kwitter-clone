import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../redux/actions";
import { createUser } from "../../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
//import "shards-ui/dist/css/shards.min.css";
import {
  //Form,
  //FormInput,
  Card,
  Button,
} from "react-bootstrap";

class UpdateUser extends React.Component {
  state = {
    displayName: "",
    about: "",
  };
  componentDidMount() {
    //this.props.updateUser(this.props.username);
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      displayName: this.state.displayName,
      about: this.state.about,
    };
    this.props.updateUser(data);
    this.setState({
      displayName: "",
      about: "",
    });
  };

  render() {
    return (
      <React.Fragment>
        {/* <label htmlFor="editText">Edit Profile</label> */}
        <form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            float: "right",
            flexWrap: "wrap",
            width: "250px",
          }}
        >
          <Card
            style={{
              padding: "3%",
              backgroundColor: "#F0FFF0",
              border: "1px solid",
              color: "blue",
              fontFamily: "monospace",
            }}
          >
            <Card.Title style={{ fontSize: "16px" }}>
              Edit Display Name:
            </Card.Title>
            <Card.Text>
              <input
                style={{ display: "block" }}
                type="text"
                name="displayName"
                autoFocus
                required
                onChange={this.handleChange}
                placeholder="text here"
                value={this.state.displayName}
                size="lg"
              />
              <br />
              <Card.Title style={{ fontSize: "16px" }}>Edit Bio:</Card.Title>
              <input
                style={{
                  borderRadius: "0",
                  paddingTop: "10px",
                  display: "block",
                }}
                squared="true"
                size="sm"
                type="text"
                name="about"
                required
                onChange={this.handleChange}
                placeholder="text here"
                value={this.state.about}
              />
              <br />
              <Button
                //outline
                variant="primary"
                //size="btn btn-secondary btn-sm" //  "sm"
                type="submit"
                value="submit"
                onSubmit={this.handleSubmit}
              >
                Save Edit
              </Button>
            </Card.Text>
          </Card>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    about: state.users.about,
    displayName: state.users.displayName,
    username: state.users.username,
  };
};

const mapDispatchToProps = {
  updateUser,
  createUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUser);
