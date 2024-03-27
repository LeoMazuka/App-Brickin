
import React from "react";
import { Login } from './src/screens/Login'
import { Cadastrar } from './src/screens/Cadastrar'
import  Home  from './src/screens/homeScreen'
import { NativeBaseProvider, Center } from "native-base";
import { StyleSheet, Image, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";



const App = () => {
  return (

    <NativeBaseProvider>
      {/* <Center
      style={styles.img}>
        <Image
          source={require('./assets/logoBrickin.png')}
        />
      </Center> */}
      {/* <Cadastrar /> */}
      <Home />

    </NativeBaseProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  img: {
    position: 'relative',
    margin: '9%'
  }
})