import React, { Component, useState } from 'react';
import { Switch, Image,View, StyleSheet,Text, Linking,Modal ,TextInput } from 'react-native';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Entypo'
import CheckBox from '@react-native-community/checkbox';
import { TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker'
import { color } from 'react-native-reanimated';
import Photo from '../../../assets/images/photo.png'
import LinearGradient from 'react-native-linear-gradient'
 const RegisterScreen=(props)=> {
    
     const [photo,setPhoto]=useState(null)
    const [upload,setUpload]=useState(false)
    
     const [firstName,setFirstName]=useState('')
     const [toggleCheckBox,setToggleCheckBox]=useState(false);
     const [lastName,setLastName]=useState('')
     const [ province,setProvince]=useState('')
     const [email,setEmail]=useState('')
     const [password,setPassword]=useState('')
     const [twoStep,setTwoStep]=useState(false)
     const [passwordSame,setPasswordSame]=useState(true);
     const [confirmModalShow,setConfirmModalShow]=useState(false);
     
     const onSubmit=()=>{
         setConfirmModalShow(true);
       // 
     }
     const onSubmitConfirm=()=>{
         setConfirmModalShow(false),
        props.navigation.navigate('Documentacion')
     }

     handleChoosePhoto = () => {
        const options = {
          noData: true,
        }
       
        ImagePicker.launchImageLibrary(options, response => {
          if (response.uri) {
            setPhoto(response);
            setUpload(true);
          }
        })
      }

     const passwordVerify=(pass)=>{
         
        if(pass===password)
        {
         setPasswordSame(true)
        }
        else
        {
         setPasswordSame(false)
        }
     }
  
        return ( <View style={styles.container}>
             {
                    confirmModalShow? <Modal
                    transparent={true}
                    animationType="fade"
                   onRequestClose={() => {setConfirmModalShow(false)}}
                    visible={confirmModalShow}>
                     
                  <View style={styles.modalBackground}>
                  <View style={styles.activityIndicatorWrapper}>
                      
                       <View style={styles.danger}>
                           <Text style={styles.dangerText}>!</Text>
                       </View>

                       <Text style={styles.modalHeader}>Es necesaria una foto clara donde se vea tu rostro</Text>
                       
                       <Text style={styles.modalMessage}>No importal si es de cuerpo completo solo tu rostro</Text>
                      
                       <TouchableOpacity onPress={()=>{onSubmitConfirm()}}>
                           <LinearGradient start={{x: 1, y: 0.9}} 
                            end={{x: 0, y: 1}}
                            locations={[0, 0.3, 0.9]} 
                            style={styles.Button} colors={['#ff4000','#cc3300','#b32d00']}>
          
                               <Text style={styles.buttonText}>Entrar</Text>
                               </LinearGradient> 
        
                               </TouchableOpacity>
                      </View></View>
                 
                  </Modal>:null
                }


            <ScrollView showsVerticalScrollIndicator={false}  style={styles.innerContainer}>
           
           <View style={styles.userImageContainer}>
            <TouchableOpacity  onPress={()=>{handleChoosePhoto()}}>
             {!upload?<Image style={styles.userImages} source={Photo} />:<Image  style={styles.userImages} source={{uri:photo.uri}} />}
            </TouchableOpacity>
</View>

       
            <View style={styles.rowInput}>
                           <TextInput value={firstName} onChangeText={(text)=>{setFirstName(text)}} secureTextEntry={true} style={styles.input}  placeholder='Nombre' />
                           
                           </View> 
            <View style={styles.rowInput}>
                           <TextInput value={lastName} onChangeText={(text)=>{setLastName(text)}} secureTextEntry={true} style={styles.input}  placeholder='Apellido' />
                          
                           </View> 
            
           <View style={styles.rowInput}>
                           <TextInput value={email} onChangeText={(text)=>{setEmail(text)}} secureTextEntry={true} style={styles.input}  placeholder='Correo Electronico' />
       
                           </View> 
                           <View style={styles.rowInput}>
                           <TextInput
                           keyboardType = 'numeric'
                           value={province} onChangeText={(text)=>{setProvince(text)}} secureTextEntry={true} style={styles.input}  placeholder='Celular' />
                           
                           </View> 
            <View style={styles.rowInput}>
                           <TextInput value={password} onChangeText={(text)=>{setPassword(text)}} secureTextEntry={true} style={styles.input}  placeholder='Contrasena' />
                          
                           </View> 
            <Text style={styles.passwordInfo}>la contrasena debe tenar minimo 8 caracteres </Text>
            <View style={styles.rowInput}>
                           <TextInput  onChangeText={(text)=>{passwordVerify(text)}} secureTextEntry={true} style={passwordSame?styles.input:styles.inputWrong}  placeholder='Confirmar contrasena' />
                          
                           </View> 





<View style={styles.row}>

    <Text style={styles.rowElelemt}>Acepto los </Text>
    <Text style={styles.rowElelemtA} >Terminos y Condiciones</Text>

   
    <CheckBox
    disabled={false}
    value={toggleCheckBox}
    onValueChange={(newValue) =>setToggleCheckBox(newValue)}
  />
   

    </View>




            <TouchableOpacity onPress={()=>onSubmit()} style={styles.docButton}>

<Text style={styles.docbuttonText}>Documentacion</Text>

<Icon style={styles.arrowIcon} name='chevron-right' />

</TouchableOpacity>
          
            
                        
            </ScrollView>
                        </View> );
    }

const styles=StyleSheet.create({
    container:{
        backgroundColor:'#e6f2ff',
        flex:1,
        
    },
    modalCont:{
        flex:1,
        
    },
   
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000080'
      },

      activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
       padding:20,
        borderRadius: 30,
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
        margin:30,

      },
    innerContainer:{
        
        margin:20,
        marginTop:0,

        paddingTop:30
    },
    phone:{
        width:'100%',
        flexDirection:'row',

    },
    countryCode:{
        flex:4,
    },
    phoneNo:{
        flex:6,
        
        
    },
    rowInput:{
        width:'100%',
        flexDirection:'row',

        marginTop:20
        

    },
    input:{
        flex:9,
        backgroundColor:'white',
        height:50,
        borderRadius:30,
        padding:10,
        paddingLeft:20
    },
    inputWrong:{
        flex:9,
        backgroundColor:'white',
        borderColor:'red',
        borderWidth:2,
        height:50,
        borderRadius:30,
        padding:10,
        paddingLeft:20
    },
    Button:{

        
    
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0000cc',
        padding:18,
        borderRadius:30,
        marginTop:20,
        marginBottom:30,
        


        

    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    rowElelemtA:{
        textDecorationLine:'underline',
        color:'blue',
        fontSize:16
    },
    rowElelemt:{
        color:'#0000cc',
        fontSize:17
        
    },
   

    docButton:{

        width:'100%',
        marginTop:20,
        marginBottom:30,
       flexDirection:'row',
       alignItems:'center',
    },
    docbuttonText:{
        color:'black',
        fontWeight:'bold',
        fontSize:20,
        flex:9,
    },
    arrowIcon:{
     fontSize:20,
        flex:1,
    },



    userImageContainer:{
        width:150,
        height:150,
        backgroundColor:'white',
        borderRadius:150,
        alignSelf:'center',
        padding:40,
        justifyContent:'center'
    },
    userImages:{
        width:'100%',
        height:'90%',

        alignSelf:'center'
        
    },
    passwordInfo:{
        marginTop:5,
        marginBottom:-10,
        color:'gray'
    },

    row:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:10
    },
    regTextRegister:{
        
        fontWeight:'bold',
        fontSize:17,
    },
    switch:{

        fontSize:15,

    },
    danger:{
        width:80,
        height:80,
        borderRadius:80,
        backgroundColor:'#cc0000',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center',
    },
    dangerText:{
        color:'white',
        fontSize:40,
        fontWeight:"bold"
    },
    modalHeader:{
        marginTop:10,
        fontWeight:'bold',
        textAlign:'center',
        fontSize:23,
    },
    modalMessage:{
        color:'gray',
        fontSize:20,
        textAlign:'center',
        marginTop:20,
    },
    Button:{

        
    
        backgroundColor:'#0000cc',
        padding:15,
        paddingLeft:95,
        paddingRight:95,
        borderRadius:30,
        marginTop:20,
        


        

    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    
})
export default RegisterScreen;