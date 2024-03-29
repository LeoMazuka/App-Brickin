import React, { useState } from 'react';
import { VStack, Heading, Center, Text } from 'native-base';
import axios from 'axios'; // fazer solicitações HTTP

import { Input } from "../components/input";
import { Button } from "../components/button";
import { useFonts, Urbanist_700Bold, Urbanist_900Black } from "@expo-google-fonts/urbanist";
import { styles } from './styles';


export function Cadastrar() {



    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (field: string, value: string) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = async () => {
        try {
            // Faça uma solicitação POST para o backend com os dados do formulário
            const response = await axios.post('http://localhost:3000/clients', formData);
            console.log(response.data); // Exiba a resposta do backend no console
            // Adicione aqui a lógica para lidar com a resposta do backend, por exemplo, exibir uma mensagem de sucesso
        } catch (error) {
            console.error('Erro ao cadastrar:', error);
            // Adicione aqui a lógica para lidar com erros, por exemplo, exibir uma mensagem de erro
        }
    };

    const [fontLoaded] = useFonts({
        Urbanist_700Bold,
        Urbanist_900Black,
    });
    if (!fontLoaded) {
        return null;
    }

    return (
        <VStack bgColor="white" flex={1} padding={10}>
            <Center>
                <Heading size="xl" color="#E8770D" my={10}>
                    Cadastrar
                </Heading>
                <Input
                    padding="2"
                    placeholder="Nome:"
                    mb="4"
                    onChangeText={(value) => handleChange('name', value)}
                />
                <Input
                    padding="2"
                    placeholder="Email:"
                    mb="4"
                    onChangeText={(value) => handleChange('email', value)}
                />
                <Input
                    padding="2"
                    placeholder="Senha:"
                    mb="4"
                    secureTextEntry={true}
                    onChangeText={(value) => handleChange('password', value)}
                />

                <Input
                    padding="2"
                    placeholder="Confirme a senha:"
                    mb="4"
                    secureTextEntry={true}
                    onChangeText={(value) => handleChange('password', value)}
                />

                <Button color="white" mb={4} title="Cadastrar" onPress={handleSubmit} />
                <Text style={styles.title} marginX="20">
                    Já tem uma conta? <Text color="#E8770D">login</Text>
                </Text>
            </Center>
        </VStack>

    );
}