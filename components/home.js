import React, { Component } from "react";
import { Container, Header, Content, Text, Body } from "native-base";
import PostsList from "./PostsList";
import Spinner from "react-native-loading-spinner-overlay";
import axios from "axios";
class home extends Component {
  constructor() {
    super();
    this.state = {
      posts: undefined,
      isLoading: false
    };
  }

  async componentDidMount() {
    this.setState({
      isLoading: true
    });
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    const posts = res.data;
    this.setState({
      posts,
      isLoading: false
    });
  }

  render() {
    const { posts, isLoading } = this.state;

    const loadingSpinner = (
      <Spinner
        visible={isLoading}
        textContent={"Loading..."}
        color="#2f3542"
        textStyle={{ color: "#2f3542" }}
        overlayColor="rgba(255, 255, 255,1.0)"
      />
    );

    return (
      <Container>
        <Header>
          <Body>
            <Text>PlaceHolder Posts</Text>
          </Body>
        </Header>
        <Content>
          {posts === undefined ? loadingSpinner : <PostsList posts={posts} />}
        </Content>
      </Container>
    );
  }
}

export default home;
