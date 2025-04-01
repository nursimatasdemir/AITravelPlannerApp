import { View, Text, Image } from 'react-native'
import React, { act, useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { GetPhotoRef } from '../../services/GooglePlaceApi'


export default function PlaceCard({activity, activityIndex}) {

    const [photoRef, setPhotoRef] = useState();

    useEffect(() => {
        getGooglePhotoRef();
    },[]);

    const getGooglePhotoRef = async()=>{
        const result = await GetPhotoRef(activity.place);
        setPhotoRef(result);
    }

  return (
    <View key={activityIndex} style={{ marginBottom: 15 }}>
              {/* Etkinlik görseli */}
              {activity.imageUrl && (
                <Image
                source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
                  style={{ width: '100%', height: 120, borderRadius: 15 }}
                />
              )}
              <View style={{ marginTop: 5 }}>
                {/* Yer adı */}
                <Text style={{ fontFamily: 'roboto-bold', fontSize: 20 }}>
                  {activity.name || 'Bilinmeyen Yer'}
                </Text>
                <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                <View>
                  {/* Etkinlik açıklaması */}
                  <Text style={{ fontFamily: 'roboto-medium', fontSize: 14, color: 'gray' }} numberOfLines={1}>
                    {activity.details || 'Açıklama bulunamadı.'}
                  </Text>
                  {/* Bilet fiyatı */}
                  <Text style={{ fontFamily: 'roboto-medium', fontSize: 17, color: 'gray', marginTop: 5 }} numberOfLines={1}>
                    🎟️Bilet Ücreti: <Text style={{fontFamily:'roboto-bold', color:Colors.PRIMARY}}>{activity.ticketPrice || 'Fiyat bilgisi bulunamadı.'}</Text>
                  </Text>
                </View>
                  <TouchableOpacity style={{backgroundColor:Colors.PRIMARY, padding:8, borderRadius:7}} numberOfLines={1}>
                    <Ionicons name="navigate" size={20} color="white"/>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
  )
}