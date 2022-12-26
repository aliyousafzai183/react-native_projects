import React from 'react';
import { render,Text, View, ScrollView, StyleSheet, TouchableOpacity, TextInput, KeyboardAvoidingView,Keyboard } from 'react-native';
import Task from './components/tasks';
import { useState } from 'react';

const app = () => {
  const [task, setTask] = useState([]);
  const [text, setText] = useState();

  const addTask = () =>
  {
    if(text==null) return;
    setTask([...task,text]);
    Keyboard.dismiss();
    setText(null);
  }

  return (
    <KeyboardAvoidingView style={styles.mainWrapper}>

      <View style={styles.wrapper1}>
        <Text style={styles.heading1}>Todo-List</Text>
      </View>

      <ScrollView style={styles.subWrapper1}>
        {
          [...task].forEach(element => {
              <Task text={element}/>
          })
        }
      </ScrollView>

      <View style={styles.subWrapper2}>
        <View style={styles.subWrapper3}>
          <TextInput
            placeholderTextColor={'white'}
            style={styles.input}
            placeholder="Write todo here . . ."
            onChangeText={(value) => setText(value)}
          />
        </View>

        <View style={styles.subWrapper4}>
          <TouchableOpacity onPress={addTask}><Text style={styles.button1}>Add</Text></TouchableOpacity>
        </View>

      </View>

    </KeyboardAvoidingView>
  )
}



const styles = StyleSheet.create({

  mainWrapper: {
    backgroundColor: 'white',
    padding: 20
  },

  wrapper1: {
    marginTop:20,
    marginbottom:10
  },

  heading1: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 5,
    color:'black'
  },

  subWrapper1: {
    height: '83%',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight: 5,
  },

  subWrapper2: {
    display: 'flex',
    flexDirection: 'row',
    height:'20%'
  },

  subWrapper3: {
    width: '80%',
    padding: 5,
  },

  subWrapper4: {
    width: '20%',
    padding: 6,
  },

  button1: {
    padding:8,
    textAlign:'center',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: '#a881af',
    color:'white'
  },

  input: {
    borderRadius: 50,
    fontSize: 20,
    backgroundColor: '#5dbea3',
    color:'white',
  },

})

export default app;