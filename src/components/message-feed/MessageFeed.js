import React, { Component } from "react";
import { Loader } from "../loader";
import "./MessageFeed.css";
import { PostMessageContainer } from "../post-message/";
import { AddLikeContainer } from "../add-like";
import { Container, Row, Col, Card } from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroller';

export class MessageFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: 10,
      hasMoreItems: true,
      scrollLoading: false,
      newMessages: [],
      comparedMessageArray: []
    }
    this.newMessages = []
  }

  onListOfMessages = (event) => {
    this.props.onListOfMessages();
  };

  componentDidUpdate(prevProps) {
    if (this.props.messages.length > 0) {
      console.log(this.props.postLoading)
    if ((this.props.likesLoading === true)) {
      console.log(prevProps);
      setTimeout(() => {
        for (let i = 0; i < this.props.messages.length; i++) {
          if (prevProps.messages[i].likes.length != this.props.messages[i].likes.length) {
            console.log('success!')
          let newMessagesObject = {...this.state.newMessages}
          newMessagesObject[i] = (<Card
          style={{
            margin: "1%",
            padding: "2%",
            width: "26%",
            color: "purple",
            fontSize: "18px",
          }}
          key={[i]}
        >
          <div key={this.props.messages[i].id}>
            <p>{this.props.messages[i].username}</p>
            <p>{this.props.messages[i].text}</p>
            <p>Likes: {this.props.messages[i].likes.length}</p>
  
            <AddLikeContainer
              messageIdProps={this.props.messages[i].id}
              likes={this.props.messages[i].likes}
            />
          </div>
        </Card>)
          this.setState({ newMessages: newMessagesObject })
          this.showMessages()
        }
        }
      }, 500);
      console.log(prevProps.messages)
    } 
    
    if ((this.props.postLoading === true)) {
      // console.log(prevProps);
      console.log('success!')
      setTimeout(() => {
        for (let i = 0; i < this.props.messages.length; i++) {
          if (prevProps.messages[i].createdAt != this.props.messages[i].createdAt) {
            console.log('success!')
          let newMessagesObject = {...this.state.newMessages}
          newMessagesObject[i] = (<Card
          style={{
            margin: "1%",
            padding: "2%",
            width: "26%",
            color: "purple",
            fontSize: "18px",
          }}
          key={[i]}
        >
          <div key={this.props.messages[i].id}>
            <p>{this.props.messages[i].username}</p>
            <p>{this.props.messages[i].text}</p>
            <p>Likes: {this.props.messages[i].likes.length}</p>
  
            <AddLikeContainer
              messageIdProps={this.props.messages[i].id}
              likes={this.props.messages[i].likes}
            />
          </div>
        </Card>)
          this.setState({ newMessages: newMessagesObject })
          this.showMessages()
        }
        }
      }, 1000);
      console.log(prevProps.messages)
    } 
  }
  }

  componentDidMount() {
    this.onListOfMessages();
    if (this.props.messages.length > 0) {
      for (let i = 0; i < this.props.messages.length; i++){
        this.state.newMessages.push(<Card
        style={{
          margin: "1%",
          padding: "2%",
          width: "26%",
          color: "purple",
          fontSize: "18px",
        }}
        key={[i]}
      >
        <div key={this.props.messages[i].id}>
          <p>{this.props.messages[i].username}</p>
          <p>{this.props.messages[i].text}</p>
          <p>Likes: {this.props.messages[i].likes.length}</p>

          <AddLikeContainer
            messageIdProps={this.props.messages[i].id}
            likes={this.props.messages[i].likes}
          />
        </div>
      </Card>)
      }
    }
  }


  //TODO: INFINITE SCROLLING
  //LIMIT MESSAGES ON SCREEN?
  //ADD MORE AS YOU REACH BOTTOM?
  //
  showMessages() {
    const items = [];
    for (let i = 0; i < this.state.items; i++) {
      items.push(this.state.newMessages[i])
    }
    return items;
  }

  loadMore() {
    if (this.state.items === 100) {
      this.setState({ hasMoreItems: false, scrollLoading: false });
    } else {
      setTimeout(() => {
        this.setState({ items: this.state.items + 10, scrollLoading: true});
      }, 2000);
      console.log(this.state.items);
    }
  }

  // infiniteScroll() {
  //   let infScrollArray = [];
  //   infScrollArray.push(<InfiniteScroll
  //   pageStart={0}
  //   loadMore={this.loadMore.bind(this)}
  //   hasMore={this.state.hasMoreItems}
  //   loader={<Loader />}
  //   >
  //   {this.showMessages()}
  //   </InfiniteScroll>)
  //   return infScrollArray;
  // }
  

  render() {
    return (
      <Container style={{ marginTop: "3%", height: "200px" }}>
        <div id="messageFeed">
          <div id="messages">
            <PostMessageContainer />
              <InfiniteScroll
              pageStart={0}
              loadMore={this.loadMore.bind(this)}
              hasMore={this.state.hasMoreItems}
              loader={<div key={500}><Loader /></div>}
              >
              {this.showMessages()}
              </InfiniteScroll>
              {/* {console.log(this.props.likesLoading)} */}
            {this.props.loading && <Loader />}
            {this.props.error && (
              <p style={{ color: "red" }}>{this.props.error.message}</p>
            )}
          </div>
        </div>
      </Container>
    );
  }
}
