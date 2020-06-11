import React from "react";
import { Loader } from "../loader/Loader";
import { UploadImgProfile } from "../profile/UploadImgProfile";
import DeleteUser from "./DeleteUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card, CardTitle, CardImg, CardBody, CardFooter } from "shards-react";
import { connect } from "react-redux";
import { createUser } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

class ProfileCard extends React.Component {
  componentDidMount() {
    this.props.createUser(this.props.currentUser);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      this.props.createUser(this.props.currentUser);
    }
  }

  render() {
    if (this.props.result === null) {
      return <Loader />;
    }

    const createDate = new Date(this.props.createdAt);
    const updateDate = new Date(this.props.updatedAt);

    return (
      <React.Fragment>
        <div id="container">
          <div className="container">
            <Card border="light" style={{ maxWidth: "70" }}>
              <CardImg
                className="cardImg"
                variant="top"
                src={
                  this.props.currentUser //.pictureLocation
                    ? "https://kwitter-api.herokuapp.com" +
                      this.props.currentUser //.pictureLocation
                    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                }
              />
              <UploadImgProfile username={true} />
              {/* this.props.currentUser */}
              <CardBody>
                <Link to={`/profile/${this.props.currentUser}`}>
                  {/* <Link to="/profile" Component={this.props.currentUser}> */}
                  <CardTitle className="title">
                    {this.props.currentUser}
                    {/* .displayName */}
                  </CardTitle>
                </Link>
                <div className="bio">
                  {this.props.currentUser //.about
                    ? this.props.currentUser //.about
                    : "You don't have a Bio Yet"}
                </div>
              </CardBody>
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <p>Joined: {createDate.toDateString()}</p>
                <p>Last Updated: {updateDate.toDateString()}</p>
                <DeleteUser username={this.props.username} />
              </CardFooter>
            </Card>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    currentUser: state.users.currentUser.user,
  };
};

export default connect(mapStateToProps, { createUser })(ProfileCard);
