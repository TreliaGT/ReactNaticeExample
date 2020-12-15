import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React , { useState } from 'react';
import { StyleSheet, Text, View , Button, TextInput} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={main} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
}

function main({ navigation }){
  const [text, setText] = useState('');
  return (
    <View style={styles.container}>
    <Text>Welcome to the test App</Text>
    <View style={styles.buttonContainer}>

      <TextInput
        style={{height: 40}}
        placeholder="Type here"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />

      <Text style={{padding: 10, fontSize: 18}}>
        {text}
      </Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
      <Button
        onPress={() => {
          alert("No Don't do that");
        }}
        title="Don't Press This"
        color="#ff0000"
      />
    </View>
      <StatusBar style="auto" />
    
  </View>
  
  );

}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}


function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
  
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer :{
    margin: 10,
  }
});
