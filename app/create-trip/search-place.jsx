import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import {CreateTripContext} from './../../context/CreateTripContext';
import { useContext } from 'react';

export default function SearchPlace() {

  const navigation = useNavigation();
  const {tripData, setTripData} = useContext(CreateTripContext);
  const router = useRouter();

  useEffect(() => {
    navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitle: 'Aradığınız Yeri Bulun'
    })
  }, []);
  useEffect(() => {
    console.log(tripData);
  }),[tripData];

  return (
    <View
        style={{padding:25,
            paddingTop:75,
            backgroundColor:Colors.WHITE,
            height:'100%'
        }}
    >
      
      <GooglePlacesAutocomplete
       placeholder='Yer arayın...'
       onPress={(data, details = null) => {
         console.log(data.description);
         console.log(details?.geometry.location);
         console.log(details?.photos[0]?.photo_reference);
         console.log(details?.url);
         setTripData({
          locationInfo: {
            name:data.description,
            coordinates:details?.geometry.location,
            photoRef:details?.photos[0]?.photo_reference,
            url:details?.url,
          }
         })
         router.push('/create-trip/select-traveler');
       }}

       fetchDetails={true}
       enablePoweredByContainer={false}
       minLength={2}
       query={{
         key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
         language: 'tr',
       }}
       styles={{
        textInputContainer: {
          borderWidth: 1,
          borderRadius: 5,
          marginTop:25
        }
       }}
    />
    
    </View>
  )
}