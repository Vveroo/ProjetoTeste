import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import { styles } from '../styles/inicialStyles';
import { useNavigation } from '@react-navigation/native';

export default function InicialScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.BoasVindas}>Bem-Vindo!</Text>
            <View style={styles.Botoes}>
                <TouchableOpacity
                    style={styles.BtnLogin}
                    onPress={() => navigation.navigate('LoginScreen')}
                >
                    <Text style={styles.TxtLogin}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.BtnCadastro}
                    onPress={() => navigation.navigate('CadastroScreen')}
                >
                    <Text style={styles.TxtCadastro}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
