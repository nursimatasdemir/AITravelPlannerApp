import { View, Text, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { GetPhotoRef } from '../../services/GooglePlaceApi';



export default function HotelCard({item}) {

    const [photoRef, setPhotoRef] = useState();

    useEffect(() => {
        getGooglePhotoRef();
    },[]);

    const getGooglePhotoRef = async()=>{
        const result = await GetPhotoRef(item.hotelName);
        setPhotoRef(result);
    }


  return (
    <View style={{ marginRight: 20, width: 180, borderWidth:1, borderRadius:15, borderColor:Colors.LIGHTGRAY, backgroundColor:Colors.WHITE}}>
            {/* Otel Görseli */}
            <Image
              source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
              style={{ width: 180, height: 100, borderRadius: 15 }}
            />
            <View style={{ padding: 5 }}>
              {/* Otel İsmi */}
              <Text style={{ fontFamily: 'roboto-medium', fontSize: 17, flex: 1 }}>
                {item?.hotelName || 'Bilinmeyen Otel'}
              </Text>
              {/* Puan ve Fiyat */}
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}
              >
                <Text style={{ fontFamily: 'roboto' }}>⭐️ {item.rating || 'N/A'}</Text>
                <Text style={{ fontFamily: 'roboto' }}>💰 {item.price || 'Bilinmiyor'}</Text>
              </View>
            </View>
          </View>
  )
}