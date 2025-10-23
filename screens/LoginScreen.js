import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../auth/authContext';
import { styles } from '../styles/loginStyles';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Email inválido')
    .required('Obrigatório'),
  password: yup
    .string()
    .min(8, ({ min }) => `A senha deve ter ${min} caracteres`)
    .required('Obrigaório'),
});

export default function Login() {
  const { token, user, saveToken, saveUser } = useAuth();
  const navigation = useNavigation();
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const submit = (values) => {
    console.log('Dados enviados:', values);
    // colocar API futuramente (;
    saveToken('fake-token');
    saveUser({ email: values.email });
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.seta} onPress={() => navigation.navigate('InicialScreen')}>
        <MaterialIcons name="keyboard-arrow-left" size={30} color="black" style={styles.icon} />
      </TouchableOpacity>
      <Text style={styles.title}>É bom te ter de volta!</Text>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '' }}
        onSubmit={submit}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
          isValid,
        }) => (
          <>
            <View style={styles.inputContainer}>
              <Icon name="mail-outline" size={25} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
            </View >
            <View style={{ minHeight: 6 }}>
              {errors.email && touched.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Icon name="lock-closed-outline" size={25} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Senha"
                secureTextEntry={!mostrarSenha}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
              />

              <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
                <Text style={styles.mostrarEsconderSenha}>
                  {mostrarSenha ? <Icon name="eye-off" size={25} style={styles.icon} /> : <Icon name="eye" size={25} style={styles.icon} />}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ minHeight: 6 }}>
              {errors.password && touched.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
              <Text style={styles.forgotPassword}>Recuperar senha</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
              disabled={!isValid}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={styles.divider}>
        <View style={styles.linha} />
        <Text style={styles.txtOu}>OU</Text>
        <View style={styles.linha} />
      </View>

      <View style={styles.cadastro}>
        <TouchableOpacity style={styles.contComG}>
          <Image
            source={{
              uri: 'https://img.icons8.com/?size=512&id=17949&format=png',
            }}
            style={styles.googleIcon}
          />
          <Text style={styles.txtBtn}>Continuar com o Google</Text>
        </TouchableOpacity>

      </View>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.signUp}>
                Ainda não tem conta? <Text style={styles.signUpLink}>Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
}