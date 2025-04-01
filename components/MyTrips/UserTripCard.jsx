import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import moment from 'moment'
import { Colors } from '../../constants/Colors';




export default function UserTripCard({trip}) {

  const formatData=(data)=>{
    if(typeof data != 'string'){
      console.log('Data: ',data);
      return null;
    }
    return JSON.parse(data);
  }

  return (
    <View style={{
      marginTop:20,
      display:'flex',
      flexDirection:'row',
      gap:10,
      alignItems:'center'
    }}>
      <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(trip?.tripData)?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
        style={{
            width:100,
            height:100,
            borderRadius:15

        }}/>
        <View>
          <Text style={{
            fontFamily:'roboto-medium',
            fontSize:18
          }}>{trip?.tripPlan?.travelPlan?.location}</Text>
          <Text style={{
            fontFamily:'roboto',
            fontSize:14,
            color:Colors.GRAY
          }}>{moment(formatData(trip?.tripData)?.startDate).format('DD MMM yyyy')}</Text>
          <Text style={{
            fontFamily:'roboto',
            fontSize:14,
            color:Colors.GRAY}}
            >{formatData(trip?.tripData)?.traveler?.title}</Text>
        </View>
    </View>
  )
}