import React, { Component } from 'react';
import { View } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';;
export default class Login extends Component {
     constructor(props){
          super(props);
          this.state={
              isSigninInProgress:false,
              userInfo:null
          }
         GoogleSignin.configure({
             scopes: [], // what API you want to access 
             webClientId: '159205357066-ljvp0q00ev7eq4gim0vj6c4r23j60695.apps.googleusercontent.com',
             offlineAccess: true, 
             hostedDomain: '', 
             forceConsentPrompt: true,
             accountName: ''
         });
      }
signIn = async () => {
     try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
           console.log('_____userinfo',userInfo)
           this.setState({ userInfo });
     } catch (error) {
         console.log(error)
     }
}
render() {
   return (
      <View 
      style={{flex:1,
      justifyContent:"center",
      alignItems:"center"
      }}>
      
       <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={()=>{this.signIn()}}
        disabled={this.state.isSigninInProgress} />
    </View>
);}
};