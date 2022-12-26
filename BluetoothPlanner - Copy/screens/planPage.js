import * as React from 'react-native';
import { useState } from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

// importing styles from style
import styles1 from '../styles/planPageStyle';
import styles from "../styles/mainPageStyle";

const initialState = {
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
};

const main = () => {
  const [value, setValue] = useState(initialState);

  return (
    <KeyboardAvoidingView style={styles.wrapper}>

      <View style={styles.wrapper1}>
        <Text style={styles.heading1}>Bluetooth</Text>
        <Text style={styles.heading1}>Planner</Text>
      </View>

      <View style={styles1.wrapper1}>
        <Text style={styles1.tag}>Repeat On:</Text>
        <View style={styles1.checkBoxMainWrapper}>
          <View style={styles1.checkBoxWrapper}>
          <CheckBox
              value={value.monday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  monday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Monday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
          <CheckBox
              value={value.tuesday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  tuesday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Tuesday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
          <CheckBox
              value={value.wednesday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  wednesday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Wednesday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
          <CheckBox
              value={value.thursday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  thursday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Thursday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
          <CheckBox
              value={value.friday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  friday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Friday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
          <CheckBox
              value={value.saturday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  saturday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Saturday</Text>
          </View>

          <View style={styles1.checkBoxWrapper}>
          <CheckBox
              value={value.sunday}
              onValueChange={value1 =>
                setValue({
                  ...value,
                  sunday: value1,
                })
              }
            />
            <Text style={styles1.checkBoxText}>Sunday</Text>
          </View>

        </View>
      </View>

      <View style={styles1.wrapper2}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#436AC8',
            borderWidth: 1,
            borderColor: '#295740',
          }}
        >
          <Text style={styles1.heading1}>Time off</Text>
        </TouchableOpacity>
      </View>

      <View style={styles1.wrapper2}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#436AC8',
            borderWidth: 1,
            borderColor: '#295740',
          }}
        >
          <Text style={styles1.heading1}>Time on</Text>
        </TouchableOpacity>
      </View>

      <View style={styles1.wrapper2}>
        <TouchableOpacity
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#436AC8',
            borderWidth: 1,
            borderColor: '#295740',
          }}
        >
          <Text style={styles1.heading1}>Save</Text>
        </TouchableOpacity>
      </View>

    </KeyboardAvoidingView>
  )
}

export default main;