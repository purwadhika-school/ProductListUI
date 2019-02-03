import React, { Component } from "react"
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native"
import { Colors } from "../assets/Colors"

// 2 Component : functional, class
class ProductCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hasil: 0,
      angka_satu: "0",
      angka_dua: "0"
    }
  }

  calculate = () => {
    const result =
      parseInt(this.state.angka_satu) + parseInt(this.state.angka_dua)
    this.setState({ hasil: result })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: Colors.grey }}>
        {/* <Text style={{ fontSize: 25 }}>{this.props.namaSaya}</Text> */}
        <TextInput
          onChangeText={txt => this.setState({ angka_satu: txt })}
          style={{ backgroundColor: Colors.red, margin: 10 }}
          placeholder="Isi angka pertama"
        />
        <TextInput
          onChangeText={txt => this.setState({ angka_dua: txt })}
          style={{ backgroundColor: Colors.red, margin: 10 }}
          placeholder="Isi angka kedua"
        />

        <TouchableOpacity onPress={() => this.calculate()}>
          <Text>Hitung!</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 25 }}>Hasil: {this.state.hasil}</Text>
      </View>
    )
  }
}

export default ProductCard

// 1. create method to calculate the numbers
// 2. fire those method from button click
// 3. get the result and show to the text component
