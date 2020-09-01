import React, { Component,useState} from 'react';
import { View,StyleSheet,TextInput,ScrollView,Image,Modal, Text,TouchableOpacity,  } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import babyImage from '../../../assets/images/bebes_white.png'
import PetsImage from '../../../assets/images/pets_white.png'
import CheckBox from '@react-native-community/checkbox'
import RoundCheckbox from 'react-native-round-checkbox';
 
import LinearGradient from 'react-native-linear-gradient'
const ProfilePage=(props)=>{
    
    const [modalOpen,setModalOpen]=useState();
    const [babyAllowed,setBabyAllowed]=useState(false);

    const [petAllowed,setPetAllowed]=useState(false);
    const [selected,setSelected]=useState(null);
    const [value,setValue]=useState(true);
    let met;
    const openModal=(checked,method)=>{
       
       
     
        console.log(selected);
        setValue(checked);
        setModalOpen(true);
    }
    const onReject=()=>{
     setSelected(null);
     setModalOpen(false);
    }
    const onAccept=()=>{

        alert(value)
        selected(value);
        setModalOpen(false)

    }
    return (
        <View style={styles.container}>



{
    modalOpen?<Modal
    transparent={true}
                    animationType="fade"
                   onRequestClose={() => {setModalOpen(false)}}
                    visible={modalOpen}
                
    
    >
    <View style={styles.modalContainer}>
        <View style={styles.modal}>

          <View style={styles.warning}>
              <Text style={styles.warningText}>!</Text>
              </View>


<Text style={styles.warningMessage}>Cuentas con silla{'\n'}de Seguridad</Text>
<TouchableOpacity style={styles.Button} onPress={()=>{onAccept()}}>
                           
                               <Text style={styles.buttonTextom}>Si</Text>
                             
                               </TouchableOpacity>
<TouchableOpacity onPress={()=>{onReject()}}>
                           <LinearGradient start={{x: 1, y: 0.9}} 
                            end={{x: 0, y: 1}}
                            locations={[0, 0.3, 0.9]} 
                            style={styles.loginButton} colors={['#ff4000','#cc3300','#b32d00']}>
          
                               <Text style={styles.buttonText}>No</Text>
                               </LinearGradient> 
        
                               </TouchableOpacity>



</View></View>
        </Modal>:null




}




        <View style={styles.innerContainer}>


        <ScrollView showsVerticalScrollIndicator={false} >

<TouchableOpacity style={styles.userImageContainer} onPress={()=>{handleChoosePhoto()}}>
 {<Image  style={styles.userImages} source={{uri:'https://cdn4.vectorstock.com/i/1000x1000/08/33/profile-icon-male-user-person-avatar-symbol-vector-20910833.jpg'}} />}
</TouchableOpacity>

<Text style={styles.nameText}>Guillermo  Lopez</Text>

<View style={styles.ratingRow}>
            <Icon name='star' style={styles.star} />
            <Text style={styles.rating}>4.85</Text>

            </View>

            <View style={styles.row}>
            <Text style={styles.key} >Total de viajes:</Text>
            <Text style={styles.value}>4.85</Text>

            </View>
            <View style={styles.row}>
            <Text  style={styles.key} >Tiempo:</Text>
            <Text style={styles.value}>4.85</Text>

            </View>

 
 <View style={styles.rowText}>
    <Text style={styles.input} >{props.user?props.user.phoneNo:""}</Text>
              
 </View> 
 <View style={styles.rowText}>
    <Text style={styles.input} >{props.user?props.user.phoneNo:""}</Text>
              
 </View> 
 
 <View style={styles.rowText}>
    <Text style={styles.input} >{props.user?props.user.phoneNo:""}</Text>
              
 </View> 
 
 <View style={styles.rowText}>
    <Text style={styles.input} >{props.user?props.user.phoneNo:""}</Text>
              
 </View> 





 <Text style={styles.withHeading}>Permites llevar:</Text>
 

 
<View style={styles.row}>

    <View style={[styles.selector]}>
<Image style={styles.image} source={PetsImage} />
<Text style={styles.selectorText}>Mascotas</Text>
<View style={styles.box}>
<RoundCheckbox
            size={20}

            style={styles.checkBox}
            borderColor={'white'}
            backgroundColor={"white"}
            iconColor={'red'}
            checked={petAllowed}
            onValueChange={checked => openModal(checked,setSelected((val)=>setPetAllowed(val)))}/>
</View>
        </View>

        <View style={[styles.selector]}>
<Image style={styles.image} source={babyImage} />
<Text style={styles.selectorText}>Bebe</Text>
<View style={styles.box}>
<RoundCheckbox
            size={20}
            style={styles.checkBox}
            borderColor={'white'}
            backgroundColor={"white"}
            iconColor={'red'}
            checked={babyAllowed}
            onValueChange={checked => openModal(checked,(val)=>setBabyAllowed(val))}
        />
</View>
        </View>


    </View>



            
</ScrollView>
       




           </View>




     </View>
      
    );
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'#e6f2ff',
        flex:1,
        
    },
    innerContainer:{
        
        margin:20,
        marginTop:30,
        marginBottom:0,
        padding:10,
        paddingBottom:0,
    },
    
    rowText:{
        width:'100%',
        flexDirection:'row',

        marginTop:20,
        backgroundColor:'white',
        height:50,
        borderRadius:30,
        padding:10,
        paddingLeft:20,
        justifyContent:'center',
        alignItems:'center',

    },
    input:{
        flex:1,
       
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
   
   

    loginButton:{

        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0000cc',
        padding:15,
        borderRadius:30,
      
        marginBottom:30,

    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },

    userImageContainer:{
        width:150,
        height:150,
        
        alignSelf:'center',
        marginBottom:20,
    },
    userImages:{
        width:150,
        height:150,
        borderRadius:100,
        
        
    },
    Info:{
        marginTop:5,
        marginBottom:-10,
        color:'#668cff',
        
    },

    fieldContainer:{
        marginTop:5,
        marginBottom:5,
    },

    ratingRow:{
        flexDirection:"row",
        alignItems:'center',

        justifyContent:'center'
    },
    star:{
        fontSize:18,
        color:'gray',
    },
    rating:{
        marginLeft:3,
        color:'gray'

    },
    nameText:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:18,
    },


    row:{
        flexDirection:"row",
        alignItems:'center',
        justifyContent:'center'
    },
    key:{
        fontSize:18,
        color:'black',
    },
    value:{
        marginLeft:3,
        color:'black',
        fontWeight:'bold'

    },
    withHeading:{

        marginTop:30,
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20,
        alignSelf:'center',
    },
    selector:{
        flex:1,
        marginLeft:5,
        marginRight:5,
        borderRadius:30,
        padding:10,
        backgroundColor:'blue',
        marginLeft:5,
        marginRight:5,
        flexDirection:'row',
        alignItems:'center',
        
    },
     image:{
         width:20,
         height:20,
         margin:5,
     },
     selectorText:{
         color:'white',
         margin:5,
     },
     box:{
         flexDirection:"row-reverse",
       
        position:'absolute',
        right:10,
     },
     checkBox:{
         backgroundColor:'white',
     },
     loginButton:{

        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0000cc',
        padding:15,
        borderRadius:30,
        marginTop:10,
        

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





    Button:{

        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        borderRadius:30,
        marginTop:20,
        
        borderBottomColor:'#cc3300',
        borderWidth:2,


        

    },
    buttonTextom:{
        color:'#cc3300',
        fontWeight:'bold',
        fontSize:20
    },

    modalContainer:{
        flex:1,
        padding:20,
        justifyContent:'center',
        backgroundColor: '#00000080'
    },
    modal:{
         backgroundColor:'white',
         borderRadius:30,
         padding:20,
    },
    warning:{
        alignSelf:'center',
        width:80,height:80,
        backgroundColor:'blue',
        borderRadius:80,
        justifyContent:'center',
        alignItems:'center',
    },
    warningText:{
        color:'white',
        fontSize:50,
        fontWeight:'bold'
    },
    warningMessage:{
        fontSize:25,
        marginTop:20,
        textAlign:'center',
        alignSelf:'center',
        fontWeight:'bold'
    },
   
   
  
})
export default ProfilePage