import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from '../auth/authContext';
import { styles } from '../styles/loginStyles';
import { useState } from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

