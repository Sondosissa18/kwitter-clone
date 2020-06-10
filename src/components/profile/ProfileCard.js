import React from "react";
import { Loader } from "../loader/Loader";
//import { UploadImgProfile } from "../profile/UploadImgProfile";
//import DeleteUser from "./DeleteUser";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Card, CardTitle, CardImg, CardBody, CardFooter } from "shards-react";
import { connect } from "react-redux";
import { createUser } from "../../redux/actions";
//import { React } from "./node_modules/react";
//import "./node_modules/bootstrap/dist/css/bootstrap.min.css";
//import Card from "react-bootstrap/Card";

class ProfileCard extends React.Component {
  componentDidMount() {
    this.props.createUser();
  }

  // componentDidUpdate(){}
  //const ProfileCard = ({ getUser, loading, error }) => {

  // handleGetUser = (event) => {
  //   event.preventDefault();
  //   getUserPic(props);
  // };

  // handleUpdate = (event) => {
  //   const userName = event.target.username;
  //   const inputValue = event.target.value;
  //   if ((prevProps) => ({ ...prevProps, [userName]: inputValue }));
  // };

  render() {
    // if (this.props.result === null) {
    //   return <Loader />;
    // }

    return (
      <React.Fragment>
        <div id="container">
          <div className="container">
            <Card border="light" style={{ maxWidth: "200" }}>
              <CardImg
                className="cardImg"
                variant="top"
                src={
                  this.props.currentUser.pictureLocation
                    ? "getUserPic()" + this.props.currentUser.pictureLocation
                    : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
                }
              />
              {/* <UploadImgProfile username={this.props.username} /> */}
              <CardBody>
                {/* <Link to={`/profile/${this.props.username}`}> */}
                {/* <Link to="/profile" Component={this.props.username}>*/}
                <CardTitle className="title">
                  {this.props.currentUser.displayName}
                </CardTitle>
                {/* </Link> */}
                <div className="bio">
                  {this.props.currentUser.about
                    ? this.props.currentUser.about
                    : "Bio Here"}
                </div>
              </CardBody>
              <CardFooter
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                <p>
                  Created:{" "}
                  {new Date(this.props.currentUser.createdAt).toDateString()}
                </p>
                <p>
                  Last Updated:{" "}
                  {new Date(this.props.currentUser.updatedAt).toDateString()}
                </p>

                {/* <DeleteUser username={this.props.username} /> */}
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
