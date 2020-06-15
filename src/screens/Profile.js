import React from "react";
import { MenuContainer } from "../components";
import ProfileCard from "../components/profile/ProfileCard";
import { MessageFeedContainer } from "../components";
//import { listOfMessages, createMessage } from "../../redux/actions";
//import { messagefeed } from "../../redux/actions";
//import "bootstrap/dist/css/bootstrap.min.css";
//import Card from "react-bootstrap/Card";

export const ProfileScreen = () => (
  <>
    <MenuContainer />
    <br />
    <h2 style={{ color: "purple", marginLeft: "10%" }}>Profile Page</h2>
    <br />
    <div className="container">
      <div className="ProfileCard">
        <ProfileCard username={true} />
      </div>
      <div className="ListOfMessages">
        <h3 style={{ margin: "auto", color: "purple", marginBottom: "2px" }}>
          {" "}
          Your Posts
        </h3>{" "}
        <MessageFeedContainer username={true} />
      </div>
    </div>
  </>
);

//{

/* {this.props.messages.map((message) => {
  return (
    <message
      key={message.id}
      text={message.text}
      likes={message.likes.length}
      username={message.username}
      displayName={message.displayName}
      id={message.id}
      />
  );
  })} */
// }
