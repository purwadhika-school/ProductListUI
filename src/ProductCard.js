import React, { Component } from "react"
import { View, Text, Image } from "react-native"
import { Colors } from "../assets/Colors"

// 2 Component : functional, class
class ProductCard extends Component {
  render() {
    return <View style={{ flex: 1, backgroundColor: Colors.grey }} />
  }
}

export default ProductCard
