import React, { Component } from "react"
import { View } from "react-native"
import Header from "./src/Header"
import ProductCard from "./src/ProductCard"
import BottomNavigation from "./src/BottomNavigation"

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "Yogie"
    }
    const name = "ABC"
    // console.log(name)
    // console.log(this.state.name)
  }

  componentDidMount() {
    // console.log(name)  // error
    // console.log(this.state.name)
    // this.setState({ name: "XYZ" })
  }

  render() {
    // console.log(this.state.name)
    return (
      <View style={{ flex: 1 }}>
        <Header title={"Deals of The Week"} style={{ flex: 1 }} />
        <ProductCard namaSaya={this.state.name} style={{ flex: 1 }} />
        <BottomNavigation style={{ flex: 1 }} />
      </View>
    )
  }
}

export default App

// Todo-List
// Toolbar header with Title
// Product List:
// Image
// Text - Product name
// Text - Price
// Button - Quantity
// Bottom navigation
