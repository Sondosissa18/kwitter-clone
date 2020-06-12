import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../../redux/actions";
import { createUser } from "../../redux/actions";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Form, FormInput, Button, Card } from "shards-react";

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
        <label htmlFor="editText">Edit Profile</label>
        <Form
          onSubmit={this.handleSubmit}
          style={{
            display: "flex",
            flexDirection: "row",
            float: "right",
            flexWrap: "wrap",
            width: "200px",
          }}
        >
          <label htmlFor="displayname">Edit Display Name:</label>

          <FormInput
            style={{ display: "block" }}
            type="text"
            name="displayName"
            autoFocus
            required
            onChange={this.handleChange}
            placeholder="enter"
            value={this.state.displayName}
          />

          <br />
          <br />

          <FormInput
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
            placeholder="enter"
            value={this.state.about}
          />

          <br />
          <br />
          <label htmlFor="about">Edit Bio</label>
          <Button
            outline
            variant="primary"
            //size="btn btn-secondary btn-sm" //  "sm"
            type="submit"
            value="submit"
            onSubmit={this.handleSubmit}
          >
            Save Edit
          </Button>
          <br />
          <br />
        </Form>
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
