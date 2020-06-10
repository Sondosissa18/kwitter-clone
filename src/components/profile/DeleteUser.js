import React from "react";
import { Button } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { render } from "@testing-library/react";

class DeleteUser extends React.Component {
  handleDeleteUser = (event) => {
    const confirmed = window.confirm("Delete will be Final");
    if (confirmed) {
      this.props.deleteUser();
    }
  };

  render() {
    return (
      <React.Fragment>
        {this.props.username === this.props.loggedInUsername && (
          <Button
            outline
            theme="danger"
            size="sm"
            onClick={this.handleDeleteUser}
          >
            Delete
          </Button>
        )}
      </React.Fragment>
    );
  }
}

//export default DeleteUser;
