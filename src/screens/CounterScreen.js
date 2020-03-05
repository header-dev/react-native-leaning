import React, { Component, useReducer } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const COUNTER_INCREMENT = 1

const CounterScreen  = () => {

    const reducer = (state, action) => {
        return { ...state, counter: state.counter + action.payload }
    }

    const [state, dispatch] = useReducer(reducer, { counter: 0 })
    const { counter } = state

    return (
        <View>
            <Button title="Increase" onPress={ () => dispatch({ type:'inc', payload: COUNTER_INCREMENT }) }/>
            <Button title="Decrease" onPress={ () => dispatch({ type:'dec', payload: -1 * COUNTER_INCREMENT }) } />
            <Text>Current Counter : { counter }</Text>
        </View>
    )
}

const styles = StyleSheet.create({});

export default CounterScreen;