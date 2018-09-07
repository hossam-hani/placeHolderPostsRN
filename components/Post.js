import React, { Component } from "react";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  View,
  Spinner
} from "native-base";
import axios from "axios";
import { Actions, ActionConst } from "react-native-router-flux";

import Comment from "./Comment";

export default class Post extends Component {
  constructor() {
    super();
    this.state = {
      title: undefined,
      body: undefined,
      comments: undefined
    };
  }
  async componentDidMount() {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.props.id}`
    );
    const commentsRes = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.props.id}/comments`
    );
    const comments = commentsRes.data;
    const post = res.data;
    this.setState({
      title: post.title,
      body: post.body,
      comments: comments
    });
  }
  render() {
    const { title, body, comments } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Text style={{ color: "blue" }} onPress={Actions.pop}>
              Back
            </Text>
          </Left>
        </Header>
        <Content>
          <View
            style={{
              padding: 10,
              backgroundColor: "#0984e3"
            }}
          >
            <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
              {title === undefined ? "...." : title}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 13,
              padding: 10,
              color: "#2d3436",
              paddingTop: 10
            }}
          >
            {title === undefined ? "Loading" : body}
          </Text>
          <Text style={{ fontSize: 25, padding: 10, color: "#2f3542" }}>
            Comments
          </Text>

          {comments === undefined ? (
            <Spinner color="blue" />
          ) : (
            comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))
          )}
        </Content>
      </Container>
    );
  }
}
