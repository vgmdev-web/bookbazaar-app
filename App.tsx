import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import AppNavigator from './src/navigation/appnavigator';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoarding0 from './src/components/landing/spashscreen';
import OnBoarding2 from './src/components/landing/onboarding2';
import OnBoarding3 from './src/components/landing/onboarding3';
import onboarding4 from './src/components/landing/onboarding4';
import Login from './src/components/Auth/signin';
import Register from './src/components/Auth/signuperror';
import EmailVerifation from './src/components/Auth/signupveremail';
import PhoneVerifation from './src/components/Auth/signupverephone';
import SucessVerification from './src/components/Auth/successveri';
import Forgetpassword from './src/components/Forgetpassword/Forgetpassword'
import Resetpassword from './src/components/Forgetpassword/emailRest'
import Resetmobilepassword from './src/components/Forgetpassword/PhoneReset'
import Emailverification from './src/components/Forgetpassword/EmailVerification'
import Mobileverification from './src/components/Forgetpassword/PhoneVerification'
import Newpassword from './src/components/Forgetpassword/NewPassword'
import Home from './src/components/Views/home'
import Vendor from './src/components/Views/vendords'
import Detailmenu from './src/components/Views/Detailmenu'
import Authors from './src/components/Views/authors'
import Authorsdetails from './src/components/Views/authorsdetails'
import Catagery from './src/components/Views/Categery'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={OnBoarding0} />
        <Stack.Screen name="onboarding2" component={OnBoarding2} />
        <Stack.Screen name="onboarding3" component={OnBoarding3} />
        <Stack.Screen name="onboarding4" component={onboarding4} />

        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="Verification" component={EmailVerifation} />
        <Stack.Screen name="verificationphone" component={PhoneVerifation} />
        <Stack.Screen name="Sucess" component={SucessVerification} />
        <Stack.Screen name="forget" component={Forgetpassword} />
        <Stack.Screen name="reset" component={Resetpassword} />
        <Stack.Screen name="mobreset" component={Resetmobilepassword} />
        <Stack.Screen name="emailverification" component={Emailverification} />
        <Stack.Screen name="mobileverification" component={Mobileverification} />
        <Stack.Screen name="newpassword" component={Newpassword} />

        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="vendor" component={Vendor} />
        <Stack.Screen name="detailmenu" component={Detailmenu} />
        <Stack.Screen name="authors" component={Authors} />
        <Stack.Screen name="authorsdetails" component={Authorsdetails} />
        <Stack.Screen name="catagery" component={Catagery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}