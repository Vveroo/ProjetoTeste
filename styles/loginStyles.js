import { StyleSheet } from 'react-native';
import { COLORS_Inicial, COLORS_White } from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:  COLORS_Inicial.background,
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  seta: {
    flex: 1,
    justifyContent: 'flex-up',
    marginTop: 30,
  },
  title: {
    fontSize: 25,
    marginBottom: 40,
    fontWeight: 'bold',
    color: COLORS_Inicial.text,
    alignSelf: 'center',
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#f1f1f1',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderWidth: 0.7,
    borderColor: COLORS_White.button,
  },

  icon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    height: '100%',
  },

  mostrarEsconderSenha: {
    color: COLORS_White.button,
    padding: 5,
   },

  forgotPassword: {
    marginBottom: 20,
    color: COLORS_White.button,
    textDecorationLine: 'underline',
  },

  button: {
    width: '100%',
    height: 50,
    backgroundColor: COLORS_White.button,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

  signUp: {
    color: '#000',
  },

  signUpLink: {
    color: COLORS_White.button,
    textDecorationLine: 'underline',
  },

  errorText: {
    position: 'absolute',
    color: 'red',
    alignSelf: 'flex-start',
    marginBottom: -17,
    bottom: 20, 
    left: 20,
  },

  divider: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  linha: {
    width: '40%',
    height: 1,
    backgroundColor: 'black',
  },

  txtOu: {
    color: 'black',
  },

  cadastro: {
    marginTop: 14,
    alignItems: 'center',
  },

  contComG: {
    backgroundColor: 'transparent',
    padding: 10,
    borderRadius: 25,
    width: 210,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: 'black',
  },

  txtBtn: {
    marginLeft: 10,
    flex: 1,
    textAlign: 'center',
  },

  googleIcon: {
    width: 24,
    height: 24,
  },

});