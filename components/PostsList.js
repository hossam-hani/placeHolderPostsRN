import React, { Component } from "react";
import { List, ListItem, Text } from "native-base";
import { Actions } from "react-native-router-flux";
export default class PostsList extends Component {
  render() {
    const posts = this.props.posts.map(post => (
      <ListItem key={post.id} onPress={() => Actions.post({ id: post.id })}>
        <Text>{post.title}</Text>
      </ListItem>
    ));
    return <List>{posts}</List>;
  }
}
