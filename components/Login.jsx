import { View, Text, Image, TouchableOpacity} from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();
  return (
    <View>
      <Image 
      source={require('./../assets/images/Login.jpeg')}
      style={{
        width:'100%',
        height:500
      }}
      />
      <View style={styles.container}>
        <Text style={{ fontSize:32, fontFamily:'roboto-medium', textAlign:'center', marginTop:10}}>Seyahat Planlayıcısı</Text>
        <Text style={{ fontSize:17, fontFamily:'roboto', textAlign:'center', color:Colors.GRAY, marginTop:20}}>Yeni maceralara atılmaya hazır mısın? Nereye gitmek istediğinizi seçin ve arkanıza yaslanın. Hadi başlayalım </Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/sign-in')}>
            <Text style={{ color:Colors.WHITE, textAlign:'center', fontFamily:'roboto-medium', fontSize:18}}>Devam Et</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',
        padding: 25

    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 15,
        borderRadius: 99,
        marginTop:'20%'
    }
})