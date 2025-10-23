import { StyleSheet } from 'react-native';
import {  COLORS_Inicial, COLORS_White} from './colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    paddingBottom: 70,
    justifyContent: 'flex-end',
    backgroundColor: COLORS_Inicial.background,
  },

  BoasVindas: {
    color: COLORS_Inicial.text,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },

  Botoes: {
    alignSelf: 'center',
    width: 260,
  },

  BtnCadastro: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS_White.button,
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',
  },

  BtnLogin: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS_White.button,
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
    height: 40,
    justifyContent: 'center',
  },

  TxtLogin: {
    textAlign: 'center',
    color: COLORS_Inicial.textBtn,
    fontWeight: 'bold',
  },

  TxtCadastro: {
    textAlign: 'center',
    color: COLORS_Inicial.textBtn,
    fontWeight: 'bold',
  },
});
