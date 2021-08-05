import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';

class Screen extends Component {
  render() {

    const {
      expression,
      result,
    } = this.props;

    return(
      <View style={styles.screenComponent}>
        <Text style={styles.expression}>{expression}</Text>
        <Text style ={styles.result}> {result}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  screenComponent: {
    flex: 3,
    backgroundColor: 'blue',
  },
  expression: {
    color: 'white',
    fontSize: 30,
    textAlign: 'right',
    padding: 10,
  },
  result: {
    color: 'white',
    fontSize: 20,
    textAlign: 'right',
    padding: 10,
  }
});

export default Screen;