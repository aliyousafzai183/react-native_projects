import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// importing Screens
import PlanPage from './screens/planPage';
import MainPage from './screens/mainPage';

// Main Screen
const MainScreen = ({navigation}) => {
  return (
    <MainPage navigation={navigation}/>
  )
}

// AddPlan Screen
const AddPlanScreen = () => {
  return (
    <PlanPage />
  )
}

// Navigation Screen
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
         name="main" 
         component={MainScreen} 
         options={{headerShown:false}}
        />
        <Stack.Screen 
          name="planPage" 
          component={AddPlanScreen} 
          options={{
            title: 'Go Back',
            headerStyle: {
              backgroundColor: '#3D49C7',
            }, 
            headerTintColor: '#ffff',
            headerTitleStyle: {
              fontSize:20
            },
            }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;