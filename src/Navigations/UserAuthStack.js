import React, { Component } from 'react';
import LoginScreen from '../components/LoginScreen'
import RegisterScreen from '../components/register/RegisterScreen'
import Documentacion from '../components/register/Documentacion'

import Bancaria from '../components/register/Bancaria'

import {createStackNavigator,HeaderTitle} from 'react-navigation-stack'
import Header from '../components/customHeader/header'
const option= {
    title: 'Chat',
    headerStyle: {
         backgroundColor: '#cc3300',
        
                   },
    headerTitleStyle: {
         color: 'white', 
         
        },
        

}
UserAuthStack=createStackNavigator({
    LoginScreen:{
        screen:LoginScreen,
        navigationOptions: {
            headerShown: false,
          }
    },
    RegisterScreen:{screen:RegisterScreen,
        navigationOptions: ({ navigation }) => {  return {    headerTitle: () => <Header title="Solicitar Registro" backTo='LoginScreen' navigation={navigation} />,
        headerLeft:null,

}; }},
    Documentacion:{screen:Documentacion,
        navigationOptions: ({ navigation }) => {  return {    headerTitle: () => <Header title="Documentacion" backTo='RegisterScreen' navigation={navigation} />,
               headerLeft:null,
    
    }; }},
    Bancaria:{screen:Bancaria,
        navigationOptions: ({ navigation }) => {  return {    headerTitle: () => <Header title="Informacion Bancaria" backTo='Documentacion' navigation={navigation} />,
               headerLeft:null,
    
    }; }},

})

export default UserAuthStack;
