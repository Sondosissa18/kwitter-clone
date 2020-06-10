import React from "react";
import { MenuContainer } from "../components";
import ProfileCard from "../components/profile/ProfileCard";

//import { MessageList } from "../components";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Card from "react-bootstrap/Card";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <h2>Profile</h2>
    <div className="container">
      <div className="ProfileCard">
        <ProfileCard />
        username={this.props.match.params.username} />
      </div>
      <div className="ListOfMessages">
        <h4 style={{ margin: "auto" }}> Your Posts</h4>
        {""}
        {/* <ListOfMessages username={this.props.match.params.username} /> */}
      </div>
    </div>
  </>
);
