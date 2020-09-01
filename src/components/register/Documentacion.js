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
 const Documentacion=(props)=> {
    
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
     
     const onsubmit=()=>{
         setConfirmModalShow(true);
       // 
     }
     const onSubmitConfirm=()=>{
         }

     const onBancaria=()=>{
         
         props.navigation.navigate('Bancaria')
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


      const onAccept=()=>{

        setConfirmModalShow(false),
        props.navigation.navigate('MainApp')
    
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

                       <Text style={styles.modalHeader}>¡Solicitud Enviada!</Text>
                       
             <Text style={styles.modalMessage}>Recibiras la confirmacion{'\n'}de tu solicitud por correo</Text>
                      
                       <TouchableOpacity onPress={()=>{onAccept()}}>
                           <LinearGradient start={{x: 1, y: 0.9}} 
                            end={{x: 0, y: 1}}
                            locations={[0, 0.3, 0.9]} 
                            style={styles.Button} colors={['#ff4000','#cc3300','#b32d00']}>
          
                               <Text style={styles.buttonText}>Aceptar</Text>
                               </LinearGradient> 
        
                               </TouchableOpacity>
                      </View></View>
                 
                  </Modal>:null
                }


            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}  style={styles.innerContainer}>
           
          
            <View style={styles.rowInputdoc}>
                           <TextInput  value={password} onChangeText={(text)=>setPassword(text)} style={styles.inputdoc}  placeholder='ID (Cedula)' />
                           <TouchableOpacity style={styles.Icondoc}>
                           <Image style={styles.inputIcons}  source={Photo}  />
                            </TouchableOpacity>
                           </View> 
                           
            <View style={styles.rowInputdoc}>
                           <TextInput  value={password} onChangeText={(text)=>setPassword(text)} style={styles.inputdoc}  placeholder='Documento RTV' />
                           <TouchableOpacity style={styles.Icondoc}>
                           <Image style={styles.inputIcons}  source={Photo}  />
                            </TouchableOpacity>
                           </View> 

            <View style={styles.rowInputdoc}>
                           <TextInput  value={password} onChangeText={(text)=>setPassword(text)} style={styles.inputdoc}  placeholder='Licencia' />
                           <TouchableOpacity style={styles.Icondoc}>
                           <Image style={styles.inputIcons}  source={Photo}  />
                            </TouchableOpacity>
                           </View> 

            <View style={styles.rowInputdoc}>
                           <TextInput  value={password} onChangeText={(text)=>setPassword(text)} style={styles.inputdoc}  placeholder='Hoja de Delincuencia' />
                           <TouchableOpacity style={styles.Icondoc}>
                           <Image style={styles.inputIcons}  source={Photo}  />
                            </TouchableOpacity>
                           </View> 

            <View style={styles.rowInputdoc}>
                           <TextInput  value={password} onChangeText={(text)=>setPassword(text)} style={styles.inputdoc}  placeholder='Marchamo' />
                           <TouchableOpacity style={styles.Icondoc}>
                           <Image style={styles.inputIcons}  source={Photo}  />
                            </TouchableOpacity>
                           </View> 



   





            <TouchableOpacity onPress={()=>onBancaria()} style={styles.docButton}>

<Text style={styles.docbuttonText}>Anadir informacion bancaria</Text>

<Icon style={styles.arrowIcon} name='chevron-right' />

</TouchableOpacity>
          
<Text style={styles.vehicalDataHeader}>

Datos del Vehiculo

    </Text>

    <View style={styles.vehicalRow}>
        <TextInput style={styles.vehicalInput} placeholder='Marca' />
        <TextInput style={styles.vehicalInput} placeholder='Modelo'/>
    </View>

<View style={styles.vehicalRow}>
<TextInput style={styles.vehicalInput} placeholder='Marca' />
        <TextInput style={styles.vehicalInput} placeholder='Modelo'/>
    
</View>

<View style={styles.vehicalRow}>
<TextInput style={styles.vehicalInput} placeholder='Placas' />
        <TextInput style={styles.vehicalInput} placeholder='Color' />
</View>
<TouchableOpacity onPress={()=>{onsubmit()}}>
                           <LinearGradient start={{x: 1, y: 0.9}} 
                            end={{x: 0, y: 1}}
                            locations={[0, 0.3, 0.9]} 
                            style={styles.Button} colors={['#ff4000','#cc3300','#b32d00']}>
          
                               <Text style={styles.buttonTextdoc}>Enviar Solicitud</Text>
                               </LinearGradient> 
        
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
        marginBottom:0,

        paddingTop:15
    },
    rowInputdoc:{
        width:'100%',
        flexDirection:'row',

        marginTop:20,
        paddingLeft:10,
        paddingRight:10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    },
    inputdoc:{
        flex:9,
        backgroundColor:'white',

        borderTopLeftRadius:30,
        borderBottomLeftRadius:30,
        padding:10,
        paddingLeft:20
    },
    Icondoc:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        borderTopRightRadius:30,
        borderBottomRightRadius:30,
        marginRight:20,
        paddingRight:20,

        
    },
    inputIcons:{
        width:25,
        height:18,
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
        marginBottom:15,
       flexDirection:'row',
       alignItems:'center',
    },
    docbuttonText:{
        color:'black',
        fontWeight:'bold',
        fontSize:18,
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
    vehicalDataHeader:{
        fontSize:21,
        color:'#003399',
        fontWeight:'bold',
        marginBottom:15,
    },
    vehicalRow:{

        flexDirection:'row',
        marginBottom:10,

    },
    vehicalInput:{
        flex:1,
        backgroundColor:"white",
        borderRadius:30,
        padding:10,
        marginRight:10
    },
buttonTextdoc:{
    alignSelf:'center',
    color:'white',
    fontSize:22,
    fontWeight:'bold'
},
    
})
export default Documentacion;