import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
const buttonRipple = {
  color: 'lightgray',
  borderless: true,
}

class Button extends Component {



  render() {

    const {
      getPressedButtonValue,
      clearAll,
      deleteLastCharacter,
      addHistory,
      openHistory,
    } = this.props;

    return(
      <View style={styles.buttonComponent}>
        <View style={styles.leftSideButtons}>
          <Pressable
            style = {styles.leftSideButton}
            android_ripple={buttonRipple}
            onPress={clearAll}
          >
            <Text style={styles.buttonText}>AC</Text>
          </Pressable>
          <Pressable
            style = {styles.leftSideButton}
            android_ripple={buttonRipple}
            onPress={deleteLastCharacter}
          > 
            <Text style={styles.buttonText}>DEL</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('%')}}>
            <Text style={styles.buttonText}>%</Text>
          </Pressable>
          <Pressable
            style = {styles.leftSideButton }
            android_ripple={buttonRipple}
            onPress={() => { getPressedButtonValue('7')}}
            >
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('8')}}> 
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('9')}}>
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('4')}}>
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('5')}}> 
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('6')}}>
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('3')}}>
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('2')}}> 
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('1')}}>
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple}
          onPress={openHistory}
          >
            <Text style={styles.buttonText}>H</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('0')}}> 
            <Text style={styles.buttonText}>0</Text>
          </Pressable>
          <Pressable style = {styles.leftSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('.')}}>
            <Text style={styles.buttonText}>.</Text>
          </Pressable>
        </View>

        <View style={styles.rightSideButtons}>
          <Pressable style={styles.rightSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('÷')}}>
            <Text style={styles.buttonTextRight}>÷</Text>
          </Pressable>
          <Pressable style={styles.rightSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('×')}}>
            <Text style={styles.buttonTextRight}>×</Text>
          </Pressable>
          <Pressable style={styles.rightSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('-')}} >
            <Text style={styles.buttonTextRight}>−</Text>
          </Pressable>
          <Pressable style={styles.rightSideButton} android_ripple={buttonRipple} onPress={() => { getPressedButtonValue('+')}}>
            <Text style={styles.buttonTextRight}>+</Text>
          </Pressable>
          <Pressable style={styles.rightSideButton} android_ripple={buttonRipple} onPress={addHistory}>
            <Text style={styles.equalsButton}>=</Text>
          </Pressable>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonComponent: {
    flex: 7,
    flexDirection: 'row'
  },
  leftSideButtons: {
    flex: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  rightSideButtons: {
    flex: 2
  },
  leftSideButton: {
    width: '33.33%',
    height: '20%',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 30,
    textAlign: 'center',
  },
  buttonTextRight: {
    fontSize: 30,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 40,
  },
  equalsButton: {
    fontSize: 30,  
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'blue',
    color: 'white',
    padding: 10, 
    borderRadius: 40,
  },
  rightSideButton: {
    borderColor: 'blue',
    height: '20%',
    justifyContent: 'center',

  }
});

export default Button;