import React from "react";
import { Loader } from "../loader/Loader";
import UploadImgProfile from "../profile/UploadImgProfile";
import UpdateUser from "../profile/UpdateUser";
import DeleteUser from "./DeleteUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import {
  Card,
  CardTitle,
  CardImg,
  CardBody,
  CardFooter,
  //Button,
} from "shards-react";
import { connect } from "react-redux";
import { getUser } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

class ProfileCard extends React.Component {
  componentDidMount() {
    console.log("componentDidMount");
    this.props.getUser();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUser !== prevProps.currentUser) {
      this.props.getUser();
    }
  }

  render() {
    if (this.props.username === null) {
      return <Loader />;
    }

    const createDate = new Date(this.props.createdAt);
    const updateDate = new Date(this.props.updatedAt);
    console.log(this.props.displayName);
    return (
      <React.Fragment>
        <div id="container">
          <div className="container">
            <Card border="light" style={{ maxWidth: "70" }}>
              <CardImg
                className="cardImg"
                variant="top"
                src={
                  this.props.pictureLocation
                    ? "https://kwitter-api.herokuapp.com" +
                      this.props.pictureLocation
                    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                }
              />
              <UploadImgProfile username={true} />
              {/* this.props.currentUser */}
              <CardBody>
                <Link to={`/profile/${this.props.users}`}>
                  {/* <Link to="/profile" Component={this.props.currentUser}> */}
                  <CardTitle className="title">
                    {this.props.displayName}
                  </CardTitle>
                </Link>
                <div className="bio">
                  {this.props.displayName //.about
                    ? this.props.about
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
                <DeleteUser username={true} />
              </CardFooter>
            </Card>
          </div>
        </div>
        <UpdateUser />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    pictureLocation: state.users.pictureLocation,
    createdAt: state.users.createdAt,
    updatedAt: state.users.updatedAt,
    about: state.users.about,
    displayName: state.users.displayName,
    currentUser: state.users.currentUser,
    username: state.users.username,
  };
};
const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard);
