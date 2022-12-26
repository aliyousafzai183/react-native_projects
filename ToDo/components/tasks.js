import { transformFileSync } from '@babel/core';
import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.main}>
            <Text style={styles.sub1}>{props.name}</Text>
            <TouchableOpacity>
                <Text style={styles.sub2}>X</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 15
    },
    sub1: {
        width: '90%',
        fontSize: 20,
        padding: 10,
        borderRadius: 10,
        marginRight: 5,
        fontSize: 20,
        backgroundColor: '#d8d8d8',
        color:'black'
    },
    sub2: {
        fontSize: 20,
        borderRadius: 10,
        padding: 10,
        fontWeight: 'bold',
        backgroundColor: '#a881af'
    }
})



export default Task;