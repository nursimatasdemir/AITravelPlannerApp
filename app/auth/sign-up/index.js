import { View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from './../../../constants/Colors'
import Ionicons from '@expo/vector-icons/Ionicons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './../../../configs/firebaseConfig'

export default function SignUp() {

  const navigation = useNavigation();
  const router = useRouter();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  const onCreateAccount=()=>{

    if(!email && !password && !fullName){
      alert('Lütfen tüm alanları doldurunuz');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    router.replace('/myTrip');
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("--",errorMessage, errorCode);
    // ..
  });
  }

  return (
    <View style={{padding: 25, paddingTop:50, backgroundColor:Colors.WHITE, height:'100%'}}>

      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      <Text style={{paddingTop:80, fontFamily:'roboto-bold', fontSize:30, textAlign:'center'}}>Hesap Oluştur</Text>
            {/* User Full Name */}
            <View style={{marginTop:50}}>
              <Text style={{fontFamily:'roboto', fontSize:15, textAlign:'justify', paddingBottom:10}}>Kullanıcı Adı</Text>
              <TextInput style={styles.input} placeholder='Kullanıcı Adı' onChangeText={(value)=>setFullName(value)}/>
            </View>

            {/* Email */}
            <View style={{marginTop:20}}>
              <Text style={{fontFamily:'roboto', fontSize:15, textAlign:'justify', paddingBottom:10}}>Email</Text>
              <TextInput style={styles.input} placeholder='Mail adresinizi giriniz' onChangeText={(value)=>setEmail(value)}/>
            </View>
      
            {/* Password */}
            <View style={{marginTop:20}}>
              <Text style={{fontFamily:'roboto', fontSize:15, textAlign:'justify', paddingBottom:10}}>Şifre</Text>
              <TextInput secureTextEntry={true} style={styles.input} placeholder='Şifrenizi giriniz' onChangeText={(value)=>setPassword(value)}/>
            </View>

            {/*SignUp Button */}
              <TouchableOpacity onPress={onCreateAccount} style={{padding:20, backgroundColor:Colors.PRIMARY, borderRadius:15, marginTop:50}}>  
                <Text style={{color:Colors.WHITE, textAlign:'center'}}>Hesap Oluştur</Text>
              </TouchableOpacity>
            {/*SignIn Button */}
            <TouchableOpacity onPress={()=>router.replace('auth/sign-in')} style={{padding:20, backgroundColor:Colors.WHITE, borderRadius:15, marginTop:20, borderWidth:1}}>  
                <Text style={{color:Colors.PRIMARY, textAlign:'center'}}>Giriş Yap</Text>
              </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
      padding:15,
      borderWidth:1,
      borderRadius:15,
      borderColor:Colors.GRAY,
      fontFamily:'roboto'
    }
})