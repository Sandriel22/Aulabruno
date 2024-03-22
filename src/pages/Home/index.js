import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { useNavigation } from '@react-navigation/native'; // Usando a Navegação

export default function Home(){
    const navigation = useNavigation(); //chamando ela
    return(
        <View style={styles.container}>
            <Text>Tela Home</Text>
            <Button 
            title="Ir para sobre" 
            onPress={() => navigation.navigate('Sobre') }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})