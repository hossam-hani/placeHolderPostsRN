import React, { Component } from "react";
import { Container, Content, Text, Badge, View } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Comments extends Component {
  render() {
    const { name, email, body } = this.props.comment;
    return (
      <View
        style={{
          backgroundColor: "#f9f8f8",
          padding: 15,
          borderRadius: 10,
          margin: 10
        }}
      >
        <Text style={{ fontSize: 12, color: "#2d3436" }}>{body}</Text>

        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row", marginTop: 10 }}>
            <Icon name="user" color="#636e72" size={10} />
            <Text style={{ fontSize: 10, color: "#636e72", paddingLeft: 2 }}>
              {name}
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginTop: 5 }}>
            <Icon name="at" color="#636e72" size={10} />
            <Text style={{ fontSize: 10, color: "#636e72", paddingLeft: 2 }}>
              {email}
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
