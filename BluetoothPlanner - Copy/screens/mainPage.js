import * as React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView} from 'react-native';

// Importing style
import styles from "../styles/mainPageStyle";

// importing component
import Plan from '../components/PlanComponent';

const MainScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.wrapper}>

            <View style={styles.wrapper1}>
                <Text style={styles.heading1}>Bluetooth</Text>
                <Text style={styles.heading1}>Planner</Text>
            </View>

            <View style={styles.wrapper2}>
                <Plan no="#" start="Start Time" end="End Time" del="Cancel" />
                <ScrollView style={styles.scroll}>
                    <Plan no="1" start="04:30" end="22:30" del="X" />
                    <Plan no="2" start="02:00" end="12:30" del="X" />
                    <Plan no="3" start="01:30" end="06:30" del="X" />
                    <Plan no="4" start="07:30" end="09:30" del="X" />
                </ScrollView>
            </View>

            <View style={styles.wrapper3}>
                <TouchableOpacity style={{
                    height: '38%',
                    backgroundColor: '#436AC8',
                    borderWidth: 1,
                    borderColor: '#295740',
                    padding: 10
                }}
                onPress={() => navigation.navigate('planPage')}

                ><Text style={styles.button}>+</Text></TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default MainScreen;