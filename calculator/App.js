import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Button from './src/components/Button'
import Display from './src/components/Display'

export default class App extends Component {
    state = {
        displayValue: '0'
    }

    addDigit = n => {
        this.setState({ displayValue: n })
    }

    clearMemory = () => {
        this.setState({ displayValue: 0 })
    }

    setOperation = operation => {

    }

    render() {
        return (
            <View style={styles.container}>
                <Display value={this.state.displayValue} />
                <View style={styles.buttons}>
                    <Button label='AC' triple onPress={this.clearMemory} />
                    <Button label='/' operation onPress={this.setOperation} />
                    <Button label='7' onPress={this.addDigit} />
                    <Button label='8' onPress={this.addDigit} />
                    <Button label='9' onPress={this.addDigit} />
                    <Button label='*' operation onPress={this.setOperation} />
                    <Button label='4' onPress={this.addDigit} />
                    <Button label='5' onPress={this.addDigit} />
                    <Button label='6' onPress={this.addDigit} />
                    <Button label='-' operation onPress={this.setOperation} />
                    <Button label='1' onPress={this.addDigit} />
                    <Button label='2' onPress={this.addDigit} />
                    <Button label='3' onPress={this.addDigit} />
                    <Button label='+' operation onPress={this.setOperation} />
                    <Button label='0' double onPress={this.addDigit} />
                    <Button label='.' onPress={this.addDigit} />
                    <Button label='=' operation onPress={this.setOperation} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
})
