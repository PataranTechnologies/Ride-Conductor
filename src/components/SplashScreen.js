import React, { Component } from 'react';
import { ImageBackground,StyleSheet,Image } from 'react-native';
import Splash from '../../assets/images/splash.png'
class SplashScreen extends Component {
    state = {  }
    constructor(props)
    {
        super(props)
        this.state={

            splash:true,

        }

    }

    componentDidMount()
    {
        setTimeout(()=>{

         
           this.props.navigation.navigate('UserAuthStack');

        },3000);
    }
    render() { 
        return ( 
                
            <ImageBackground style={styles.background} source={Splash}>

               

                </ImageBackground>
         );
    }
}
const styles=StyleSheet.create({
    background:{
        flex:1,
        justifyContent:"center",
        alignItems:'center',
        alignSelf:"stretch",

    },
    logo:{

        width:'40%',
        height:'30%'

    }
})
 
export default SplashScreen;