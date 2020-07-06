import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import CreditCard from "./CreditCard";

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <CreditCard name="Abdellah Alaoui" date="11/22" suffix="3904" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
    marginTop: 20
  }
});

export default App;
