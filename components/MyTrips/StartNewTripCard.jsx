import { View, Text, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from '../../constants/Colors';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {
    const router = useRouter();
  return (
    <View
        style={{
            padding:20,
            marginTop:50,
            display:'flex',
            alignItems:'center',
            gap:25
        }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{fontSize:25, fontFamily:'roboto-medium', marginTop:10}} >Henüz planınız yok.</Text>
      <Text style={{fontSize:17, textAlign:'center', fontFamily:'roboto', marginTop:10, color:Colors.GRAY}} >Yeni maceralara atılmanın tam sırası. Seyahatini planlamaya hemen başla</Text>
      
      <TouchableOpacity
        onPress={()=>router.push('/create-trip/search-place')}
        style={{
          backgroundColor:Colors.PRIMARY,
          padding:15,
          borderRadius:15,
          paddingHorizontal:30
        }}
      >
        <Text style={{color:Colors.WHITE, fontFamily:'roboto-medium', fontSize:17}}>Hemen başla</Text>
      </TouchableOpacity>
    
    </View>
  )
}