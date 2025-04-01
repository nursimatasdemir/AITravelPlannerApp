import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import {CreateTripContext} from './../../context/CreateTripContext';
import Ionicons from '@expo/vector-icons/Ionicons';
import moment from 'moment';


export default function ReviewTrip() {

  const navigation = useNavigation();
  const {tripData, settripData} = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    })
  },[]);

  return (
    <View style={{
      padding:25,
      paddingTop:75,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>
      <Text style={{
        fontFamily:'roboto-bold',
        fontSize:35,
        margin:10
      }}>Seyahatinizi gözden geçirin</Text>

      <View style={{
        marginTop: 20,
        }}> 
        <Text style={{
          fontFamily:'roboto-bold',
          fontSize:20
        }}>Sizin için en uygun planı oluşturmadan önce lütfen seçimlerinizi gözden geçirin</Text>

        {/* Destination Info */}
        <View style={{
          marginTop: 20,
          display:'flex',
          flexDirection:'row',
          gap: 20
        }}>
          {/* <Ionicons name="location-sharp" size={34} color={"black"}/> */}
          <Text style={{fontSize:30}}>📍</Text>
          <View>
            <Text style={{fontFamily:'roboto', fontSize:20, color:Colors.GRAY}}>Hedef Konum</Text>
            <Text style={{fontFamily:'roboto-medium', fontSize:20}}>{tripData?.locationInfo?.name}</Text>
          </View>
        </View>
        
        {/* Date Info */}
        <View style={{
          marginTop: 25,
          display:'flex',
          flexDirection:'row',
          gap: 20
        }}>
          {/* <Ionicons name="location-sharp" size={34} color={"black"}/> */}
          <Text style={{fontSize:30}}>🗓️</Text>
          <View>
            <Text style={{fontFamily:'roboto', fontSize:20, color:Colors.GRAY}}>Tarih</Text>
            <Text style={{fontFamily:'roboto-medium', fontSize:20}}>
              {moment(tripData?.startDate).format('DD.MM.YY') 
              + " - " +
              moment(tripData?.endDate).format('DD.MM.YY')+" "}
            </Text>
          </View>
        </View>

        {/* Traveller Info */}
        <View style={{
          marginTop: 25,
          display:'flex',
          flexDirection:'row',
          gap: 20
        }}>
          {/* <Ionicons name="location-sharp" size={34} color={"black"}/> */}
          <Text style={{fontSize:30}}>🚌</Text>
          <View>
            <Text style={{fontFamily:'roboto', fontSize:20, color:Colors.GRAY}}>Tarih</Text>
            <Text style={{fontFamily:'roboto-medium', fontSize:20}}>
              {tripData?.traveler?.title}
            </Text>
          </View>
        </View>


        {/* Budget Info */}
        <View style={{
          marginTop: 25,
          display:'flex',
          flexDirection:'row',
          gap: 20
        }}>
          <Text style={{fontSize:30}}>💵</Text>
          <View>
            <Text style={{fontFamily:'roboto', fontSize:20, color:Colors.GRAY}}>Bütçe</Text>
            <Text style={{fontFamily:'roboto-medium', fontSize:20}}>
              {tripData?.budget} 
            </Text>
          </View>
        </View>

      </View> 

      <TouchableOpacity 
        onPress={()=>router.replace('/create-trip/generate-trip')}
      style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:80
      }}>
        <Text style={{
          textAlign:'center',
          color:Colors.WHITE,
          fontFamily:'roboto-medium',
          fontSize:20
        }}> Seyahatimi Planla </Text>
      </TouchableOpacity>

    </View>
  )
}