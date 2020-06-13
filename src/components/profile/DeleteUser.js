import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../../redux/actions";
import { Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
//import { render } from "@testing-library/react";

class DeleteUser extends React.Component {
  handleDeleteUser = (event) => {
    event.preventDefault();
    const confirmed = window.confirm("Delete will be Final");
    if (confirmed) {
      this.props.deleteUser(this.props.username);
    }
  };

  render() {
    return (
      <React.Fragment>
        <Button
          outline
          theme="danger"
          size="sm"
          onClick={this.handleDeleteUser}
        >
          Delete Profile
          {/* {console.log(this.props.deleteUser)} */}
        </Button>
      </React.Fragment>
    );
  }
}

export default connect(null, { deleteUser })(DeleteUser);
