import React, { Component, useState, Fragment } from 'react';
import { View, StyleSheet,Text, Image,SafeAreaView, Linking, ImageBackground  } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo'
import logo from '../../assets/images/logo_login.png'
import Header from '../../assets/images/header.png'
import LinearGradient from 'react-native-linear-gradient'
const LoginScreen =(props)=> {
    
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

const onForgot=()=>{
  Linking.openURL("http://ride.rideapp.com/forgot").catch(err=>{

  alert("Some Error Occured,Can't Change password,Try Again");
  })    
    }


   const onLogin=()=>
    {
        props.navigation.navigate('MainApp')
    }



    
        return ( 
        <Fragment>
            <SafeAreaView style={{ flex: 0, backgroundColor: 'red' }} />
        <View style={styles.container}>


<View style={styles.loginHeader}>
              
                <View style={styles.headerBack}>
               <ImageBackground style={styles.headerBackImage} source={Header}>




                    <View style={styles.headerImage}>
                    <Image  style={styles.headerImageStyle} source={logo} />
                    </View>
</ImageBackground>
                    </View>

                </View>

                <View>

                    <View style={styles.loginForm}>

                        <View style={styles.mainForm}>

                            <Text style={styles.formHeader}>Bienvenido a Ride!</Text>
                          
                            <View style={styles.rowInput}>
                           <TextInput style={styles.input} value={email} onChangeText={(text)=>setEmail(text)}  placeholder='Enter Email' />
                           <View style={styles.Icon}>
                           <Icon style={styles.inputIcons}  name='mail' size={20} />
                            </View>
                            </View>
                            
                            <View style={styles.rowInput}>
                           <TextInput secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)} style={styles.input}  placeholder='Enter Password' />
                           <View style={styles.Icon}>
                           <Icon style={styles.inputIcons}  name='lock' size={20} />
                            </View>
                           </View> 

                           <View style={styles.forgot}>
                             <Text style={styles.forgotText1}>¿Olvidaste tu contrasena?</Text>
                             <Text onPress={()=>onForgot()} style={styles.forgotText2}>Recuperala</Text>
                           </View>

                           <TouchableOpacity onPress={()=>{onLogin()}}>
                           <LinearGradient start={{x: 1, y: 0.9}} 
                            end={{x: 0, y: 1}}
                            locations={[0, 0.3, 0.9]} 
                            style={styles.loginButton} colors={['#ff4000','#cc3300','#b32d00']}>
          
                               <Text style={styles.buttonText}>Entrar</Text>
                               </LinearGradient> 
        
                               </TouchableOpacity>


                               <View  style={styles.registerView}>
                               <Text style={styles.rvText1}>¿No tienes una cuenta?</Text>
                             <Text onPress={()=>props.navigation.navigate("RegisterScreen")} style={styles.rvText2}>Registrate como Conductor</Text>
                          

                                   </View>


                            </View>

                            <View style={styles.mainForm}>


</View>
</View>
                        </View>

            </View>
            </Fragment>
             );
    }


const styles=StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#e6f2ff',
    },

    loginHeader:{
    width:'100%',
    height:'20%',
  
    },
    headerBack:{
        backgroundColor:'#003399',
        width:'100%',
        height:150,
        alignItems:'center',
        borderBottomEndRadius:30,
        borderBottomLeftRadius:30,
        flexDirection:'column-reverse'
        
    },
    headerBackImage:{
        margin:10,
        width:'95%',
        height:'95%',
        flexDirection:'column-reverse'

    },
    headerImage:{
        
        width:140,
        height:140,
        borderRadius:140,
        backgroundColor:'white',
         margin:-70,
         justifyContent:'center',
         alignItems:'center',
         alignSelf:'center',

    },
    inputIcons:{
        color:'red',
    },
    headerImageStyle:{

        width: 100,
        height:80,


    },
    loginForm:{
        margin:20,
        marginTop:90,

        padding:10

    },

    formHeader:{
        fontSize:30,
        fontWeight:'bold',
        alignSelf:'center'
    },
    formInnerHeader:{

        fontSize:14,
        color:'gray',
        alignSelf:'center'
    },
    

    rowInput:{
        width:'100%',
        flexDirection:'row',

        marginTop:20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    input:{
        flex:9,
        backgroundColor:'white',

        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        padding:10,
        paddingLeft:20
    },
    Icon:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        borderTopRightRadius:30,
        borderBottomRightRadius:30,

        
    },
    forgot:{

        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        
        marginTop:20,



    },
    forgotText1:{

        color:'black',

    },forgotText2:{

        color:'#80b3ff',
        fontWeight:"bold"

    },

    loginButton:{

        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0000cc',
        padding:15,
        borderRadius:30,
        marginTop:20,
        marginBottom:30,


        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 10,

    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    registerView:{
        justifyContent:'center',
        alignItems:'center',
       marginTop:20,
        alignSelf:"stretch"
    },
    rvText1:{
        color:'black',
    },
    rvText2:{
        color:'#80b3ff',
        fontWeight:'bold',
        fontSize:18

    },


})
 
export default LoginScreen;