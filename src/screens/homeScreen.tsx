import { StyleSheet, Image, SafeAreaView } from "react-native";
import { VStack, Heading, Center, Text, Row } from 'native-base';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { styles } from './styles';
import * as Icons from '@expo/vector-icons';






export function Home() {


    return (
        <SafeAreaView style={styles.container}>
            <VStack bgColor="white" flex={1} padding={6}>
                <Input
                    bg={'white'}
                    placeholder="Precurar por imóveis"
                    InputLeftElement={<Icons.MaterialIcons
                        name="pageview"
                        size={42}
                        color="#E8770D" />}
                />

                <VStack style={{ padding: 10 * 2 }}>
                     {/* <Row
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",a
                        }}
                    >
                     </Row> */}
                </VStack>
                   
            </VStack>
        </SafeAreaView>
    );
}