import React, { Component,useState } from 'react';
import { View,StyleSheet,TextInput, Image,Text,TouchableOpacity } from 'react-native';
import SettingRowWithBankCard from '../SettingRowWithBankCard';
import DefaultTheme from '../../constants/DefaultTheme';
import TextInputMask from 'react-native-text-input-mask';
import Entypo from 'react-native-vector-icons/Entypo';
import valid from "card-validator";
import LinearGradient from 'react-native-linear-gradient'
const { card, primary, text, textInput } = DefaultTheme.colors;
const cardTypes = {
    "visa": require('../../../assets/images/visa.png'),
    "mastercard": require('../../../assets/images/mastercard.png'),
    "american-express": require('../../../assets/images/american_express.png'),
    "discover": require('../../../assets/images/discover_network.png'),
    "carnet": require('../../../assets/images/carnet.png'),
}
const Bancaria=(props)=>{


    const [form, setForm] = useState({
        cardNumber: "",
        name: "",
        expiry: "",
        cvv: "",
        type: null,
    });
    const [statuses, setStatuses] = useState({
        number: "incomplete",
        expiry: "incomplete",
        cvv: "incomplete",
        name: "incomplete", 
    });

    const toStatus = validation => {
        return validation.isValid ? "valid" :
            validation.isPotentiallyValid ? "incomplete" :
                "invalid";
    };

    const handleCardNumberChange = (extracted) => {
        let validator = valid.number(extracted);
        let cardType = validator.card ? validator.card.type : null;
        let newForm = {
            ...form,
            type: cardType,
            cardNumber: extracted,
        };
        let newStatuses = {
            ...statuses,
            number: toStatus(validator),
        };
        setForm(newForm);
        setStatuses(newStatuses);
        const card = {
            valid: toStatus(validator) === 'valid' && statuses.expiry === 'valid' && statuses.cvv === 'valid' && statuses.name === 'valid',
            values: newForm,
            status: newStatuses
        }
       
    }
    const handleNameChange =  (name) => {
        let newForm = {
            ...form,
            name: name,
        };
        let statusName = !!name ? "valid" : "incomplete";
        let newStatuses = {
            ...statuses,
            name: statusName,
        };
        setForm(newForm);
        setStatuses(newStatuses);
        const card = {
            valid: statuses.number === 'valid' && statuses.expiry === 'valid' && statuses.cvv === 'valid' && statusName === 'valid',
            values: newForm,
            status: newStatuses
        }
      
    }

    const handleExpiryChange = (expiry) => {
        const expiryValidation = valid.expirationDate(expiry);
        let newForm = {
            ...form,
            expiry,
        };
        let newStatuses = {
            ...statuses,
            expiry: toStatus(expiryValidation),
        };
        setForm(newForm);
        setStatuses(newStatuses);
        const card = {
            valid: statuses.number === 'valid' && toStatus(expiryValidation) === 'valid' && statuses.cvv === 'valid' && statuses.name === 'valid',
            values: newForm,
            status: newStatuses
        }
       
    }

    const handleCvvChange = (cvv) => {
        const cvvValidation = valid.cvv(cvv, 3);
        let newForm = {
            ...form,
            cvv,
        };
        let newStatuses = {
            ...statuses,
            cvv: toStatus(cvvValidation),
        };
        setForm(newForm);
        setStatuses(newStatuses);
        const card = {
            valid: statuses.number === 'valid' && statuses.expiry === 'valid' && toStatus(cvvValidation) === 'valid' && statuses.name === 'valid',
            values: newForm,
            status: newStatuses
        }
       
    }


    return (
        <View style={styles.container}>
        <View style={styles.innerContainer}>

<Text style={styles.heading}>Agrega los datos de tu tarjeta</Text>


<View style={styles.back}>
        <View style={{ paddingBottom: 20 }}>
                    <Text style={styles.labelText}>Numero de tarjeta</Text>
                    <View style={styles.row}>
                        <TextInputMask
                            keyboardType={'number-pad'}
                            mask={"[0000] [0000] [0000] [0000]"}
                            placeholder={'**** **** **** 0000'}
                            style={[styles.textInputStyle, { flex: 1, }, statuses.number !== 'valid' && { color: 'red'}]}
                            onChangeText={(formatted, extracted) => handleCardNumberChange(extracted)}
                            value={form.cardNumber}
                        />
                        <View style={styles.imageCompanyContainer}>
                            { form.type !== null && <Image
                                source={cardTypes[form.type]}
                                resizeMode={'contain'}
                                style={{ height: 22, width: 32, }}
                            />}
                        </View>
                    </View>
                    <Text style={styles.labelText}>Nombre</Text>
                    <TextInput
                        autoCapitalize={'characters'}
                        placeholder={'Nombre del titular'}
                        style={[styles.textInputStyle, { marginRight: 10 }]}
                        onChangeText={(text) => handleNameChange(text)}
                        value={form.name}
                    />
                    <View style={[styles.row, { justifyContent: 'space-between', marginRight: 10 }]}>
                        <View style={styles.itemRow}>
                            <Text style={styles.labelText}>MM/AA</Text>
                            <TextInputMask
                                keyboardType={'number-pad'}
                                mask={"[00]{/}[00]"}
                                placeholder={'00/00'}
                                style={[styles.textInputStyle, statuses.expiry !== 'valid' && { color: 'red' }]}
                                onChangeText={(formatted, extracted) => handleExpiryChange(extracted)}
                                value={form.expiry}
                            />
                        </View>
                        <View style={styles.itemRow}>
                            <Text style={styles.labelText}>CVV</Text>
                            <TextInputMask
                                keyboardType={'number-pad'}
                                mask={"[000]"}
                                placeholder={'***'}
                                style={[styles.textInputStyle, { flex: 1 }, statuses.cvv !== 'valid' && { color: 'red' }]}
                                onChangeText={(formatted, extracted) => handleCvvChange(extracted)}
                                value={form.cvv}
                            />
                        </View>
                    </View>
                </View>


</View>


<TouchableOpacity onPress={()=>{onLogin()}}>
                           <LinearGradient start={{x: 1, y: 0.9}} 
                            end={{x: 0, y: 1}}
                            locations={[0, 0.3, 0.9]} 
                            style={styles.loginButton} colors={['#ff4000','#cc3300','#b32d00']}>
          
                               <Text style={styles.buttonText}>Guardar</Text>
                               </LinearGradient> 
        
                               </TouchableOpacity>

<TouchableOpacity style={styles.Button} onPress={()=>{onLogin()}}>
                           
                               <Text style={styles.buttonTextom}>Omitir</Text>
                             
                               </TouchableOpacity>


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
        padding:10
    },
    heading:{
        alignSelf:'center',
        color:'gray',
        fontSize:18,
        marginTop:20,
        marginBottom:30,
    },
    optionContainer: {
        marginTop: 20,
        backgroundColor: card,
        paddingLeft: 20,
        paddingRight: 10,
        elevation: 3,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    },
    optionText: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 18,
        color: text,
    },
    textInputStyle: {
        fontFamily: 'Sarabun-Medium',
        color: textInput,
        fontSize: 14,
        padding: 0,
        height: 30,
        borderBottomWidth: 1,
        borderBottomColor: 'gray'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemRow: {
        width: '45%',
    },
    labelText: {
        fontFamily: 'Sarabun-Medium',
        fontSize: 14,
        color: primary,
    },
    imageCompanyContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        backgroundColor: '#E1E1E1',
        height: 30,
        width: 38,
        borderRadius: 10
    },
    back:{
        backgroundColor:'white',
        padding:15,
        borderRadius:20,

    },
    loginButton:{

        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#0000cc',
        padding:15,
        borderRadius:30,
        marginTop:40,
        

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


})
export default Bancaria;