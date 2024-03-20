
import React from "react";
import { Login } from './src/screens/Login'
import { Cadastrar } from './src/screens/Cadastrar'
import { Home } from './src/screens/homeScreen'
import { NativeBaseProvider, Center } from "native-base";
import { StyleSheet, Image, SafeAreaView } from "react-native";



export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  img:{
    position: 'relative',
    margin: '9%'
  }
})