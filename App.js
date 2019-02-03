import React, { Component } from "react"
import { View } from "react-native"
import Header from "./src/Header"
import ProductCard from "./src/ProductCard"

export default class App extends Component {
  render() {
    return (
      <View>
        <Header />
        <ProductCard />
      </View>
    )
  }
}

// Todo-List
// Toolbar header with Title
// Product List:
// Image
// Text - Product name
// Text - Price
// Button - Quantity
// Bottom navigation
