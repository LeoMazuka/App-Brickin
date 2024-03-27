import { StyleSheet, Image, SafeAreaView, TouchableOpacity, View } from "react-native";
import { VStack, Heading, Center, Text, Row, Box, HStack, FlatList, ScrollView, StatusBar } from 'native-base';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { styles } from './styles';
import * as Icons from '@expo/vector-icons';
import { useFonts, Urbanist_700Bold, Urbanist_900Black } from "@expo-google-fonts/urbanist";
import PLACES from '../consts/places'
import { useState } from "react";










const Home = () => {

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: '#fff'
            }}
        >

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={style.img}
                >
                    <Image
                        source={require('../../assets/logoBrickin.png')}
                    />
                    <Icons.MaterialIcons style={style.icon} name="pageview" size={42} color="#E8770D" />


                </View>

                <View>
                    <Text style={style.HeaderTitle}>Início</Text>
                </View>

                <View style={{
                    flex: 1,
                    backgroundColor: '#E8770D',
                    paddingVertical: 20,
                    paddingHorizontal: 20,
                    marginHorizontal: 27,
                    borderRadius: 10
                }}>
                    <View>
                        <Text style={style.cardTitle}>Aproveite um mês grátis </Text>
                        <Text style={style.cardTitle}>de premium</Text>
                        <Text style={style.cardFooter}>Depois, pague somente</Text>
                        <Text style={style.cardFooter}>R$ 11,90/mês. Cancele</Text>
                        <Text style={style.cardFooter}>quando quiser.</Text>
                    </View>
                </View>
            </ScrollView>


        </SafeAreaView>
    );





    /* const [fontLoaded] = useFonts({
        Urbanist_700Bold,
        Urbanist_900Black,
    });
    if (!fontLoaded) {
        return null;
    } */
}
const style = StyleSheet.create({
    container: {
        flex: 1
    },

    img: {
        paddingVertical: 40,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    icon: {
        paddingHorizontal: 20
    },

    cardImage: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    HeaderTitle: {
        fontSize: 23,
        fontWeight: "bold",
        color: 'black',
        paddingHorizontal: 27,
        paddingVertical: 15
    },

    cardTitle: {
        fontSize: 23,
        fontWeight: "bold",
        color: 'white',
        paddingVertical: 4
    },

    cardFooter: {
        color: 'white',
    }






})

export default Home;