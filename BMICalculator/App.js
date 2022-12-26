import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';

const image = { uri: "https://i.pinimg.com/736x/32/c2/78/32c278b4ded725fcd2566b19a9ac91ca.jpg" };

const app = () => {
  const [result, setResult] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [statusColor, setColor] = useState('red');

  const bmi = () => {
    let newWeight = weight * 2.205;
    let newHeight = height*height;
    let value = 703 * (newWeight/newHeight);
    if (value < 16) {
      setResult("Very Severely Underweight!!!");
      setColor("yellow");
    }else if(value >= 16 && value < 17){
      setResult("Severely Underweight!!");
      setColor("yellow");
    }else if(value >= 17 && value < 18.5){
      setResult("Underweight!");
      setColor("yellow");
    }else if(value >= 18.5 && value < 25){
      setResult("Normal (healthy weight)");
      setColor("darkturquoise");
    }else if(value >= 25 && value < 30){
      setResult("Moderate Overweight!");
      setColor("red");
    }else if(value >= 30 && value < 35){
      setResult("Severely Overweight!!");
      setColor("red");
    }else if(value >= 35 && value < 40){
      setResult("Severely Overweight!!!");
      setColor("red");
    }else if (value > 40){
      setResult("Very Severely Overweight!!!");
      setColor("red");
    }
  }

  const reset = () =>{
    setResult("");
  }
  return (
    <View style={styles.main}>
      <ImageBackground style={styles.container} source={image}>

        <View style={styles.wrapper1}>
          <Text style={styles.heading1}>BMI Calculator</Text>
        </View>

        <View style={styles.wrapper2}>
          <Text style={styles.heading2}>Height : </Text>
          <TextInput
            style={styles.input1}
            placeholder="in Inches"
            placeholderTextColor={'darkgrey'}
            onChangeText={(text) => { setHeight(text) }}
          />
        </View>

        <View style={styles.wrapper3}>
          <Text style={styles.heading2}>Weight : </Text>
          <TextInput
            style={styles.input1}
            placeholder="in Kgs"
            placeholderTextColor={'darkgrey'}
            onChangeText={(text) => { setWeight(text) }}
          />
        </View>

        <View style={styles.wrapper4}>
          <TouchableOpacity onPress={bmi}>
            <Text style={styles.heading3}>CALCULATE</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.wrapper4}>
          <Text style={{
            fontSize: 25,
            color: statusColor,
            padding: 5,
          }}>{result}</Text>
        </View>

        <View style={styles.wrapper5}>
          <Text style={styles.heading4}>@Developed by Ali Yousafzai</Text>
        </View>

      </ImageBackground>

    </View>


  )
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  container: {
    padding: 10,
    backgroundColor: 'ghostwhite',
    height: '110%',
    alignItems: 'center'
  },

  wrapper1: {
    width: '100%', 
    alignItems: 'center',
  },
  heading1: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    padding: 20
  },

  wrapper2: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: '50%',
    justifyContent: 'center'
  },
  input1: {
    borderColor: 'white',
    borderWidth: 1,
    backgroundColor:'white',
    width: '22%',
    fontSize: 20,
    color: 'black',
    height: 40,
  },
  heading2: {
    fontSize: 20,
    color: 'white',
    padding: 5,
    width: '22%'
  },

  wrapper3: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: '10%',
    justifyContent: 'center'
  },

  wrapper4: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginTop: '20%',
    justifyContent: 'center'
  },
  heading3: {
    fontSize: 15,
    padding: 15,
    color: 'white',
    borderRadius: 10,
    backgroundColor: 'darkslateblue',
    fontWeight: 'bold'
  },

  wrapper5:{
    marginTop:'30%'
  },
  heading4:{
    fontSize:15,
    color:'gray'
  }
})

export default app;