import React from "react";
import { Loader } from "../loader/Loader";
import { UploadImgProfile } from "../profile/UploadImgProfile";
import { DeleteUser } from "./DeleteUser";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
//import { React } from "./node_modules/react";
//import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

//class ProfileCard extends React.Component{
// componentDidMount(){}
// componentDidUpdate(){}
// Not to be confused with "this.setState" in classes
// const [state, setState] = useState({
//   username: "",
//   password: "",
// });

export const ProfileCard = ({ getUser, loading, error }) => {

  const handleGetUser = (event) => {
    event.preventDefault();
    getUser(props);
  };

  const handleUpdate = (event) => {
    const userName = event.target.username;
    const inputValue = event.target.value;
    if ((prevProps) => ({ ...prevProps, [userName]: inputValue }));
  };

    render() {
    if (this.props.result === null) {
      return <Loader />;
    }
  }
  return (
    <React.Fragment>
      <div id="container">
        <div className="container">
          <Card border="light" style={{ maxWidth: "200" }}>
            <CardImg
              className="cardImg"
              variant="top"
              src={
                user.pictureSpot
                  ? "getUser()" + user.pictureSpot
                  : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              }
            />
            <UploadImgProfile username={this.props.username} />
            <CardBody>
              <Link to={`/profile/${this.props.username}`}>
                {/* <Link to="/profile" Component={this.props.username}>*/}
                <CardTitle className="title">{user.displayName}</CardTitle>
              </Link>
              <div className="bio">{user.about ? user.about : "Bio Here"}</div>
            </CardBody>
            <CardFooter
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
              }}
            >
              <p>Created: {new Date(user.createdAt).toDateString()}</p>
              <p>Last Updated: {new Date(user.updatedAt).toDateString()}</p>

              <DeleteUser username={this.props.username} />
            </CardFooter>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfileCard;
