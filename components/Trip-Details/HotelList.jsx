import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect } from 'react';
import { Colors } from '../../constants/Colors';
import { GetPhotoRef } from '../../services/GooglePlaceApi';
import HotelCard from './HotelCard';

export default function HotelList({ hotelList = [] }) {

  // Eğer otel listesi boşsa kullanıcıya bir mesaj göster
  if (!hotelList || hotelList.length === 0) {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: 'roboto-bold', fontSize: 20 }}>🏨 Otel Önerileri</Text>
        <Text style={{ fontFamily: 'roboto', fontSize: 16, marginTop: 8, color: 'gray' }}>
          Otel önerisi bulunamadı.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 20}}>
      <Text style={{ fontFamily: 'roboto-bold', fontSize: 20 }}>🏨 Otel Önerileri</Text>
      <FlatList
        data={hotelList}
        style={{ marginTop: 8 }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item, index) => index.toString()} // Benzersiz bir anahtar sağla
        renderItem={({ item }) => (
          <HotelCard item={item}/>
        )}
      />
    </View>
  );
}



// import { View, Text, FlatList, Image } from 'react-native'
// import React from 'react'

// export default function HotelList(hotelList) {
//   return (
//     <View style={{marginTop:20}}>
//       <Text style={{fontFamily:'roboto-bold', fontSize:20}}>🏨 Otel Önerileri</Text>
//       <FlatList 
//         data={hotelList}
//         style={{marginTop:8}}
//         showsHorizontalScrollIndicator={false}
//         horizontal={true}
//         renderItem={({item, index})=>(
//             <View style={{marginRight:20, width:180}}>
//                 <Image source={require('./../../assets/images/images.png')} style={{width:180, height:100, borderRadius:15}}/>
//                 <View style={{padding:5}}>
//                     <Text style={{fontFamily:'roboto-medium', fontSize:17, flex:1}}>{item?.hotelName}</Text>
//                     <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
//                         <Text style={{fontFamily:'roboto'}}>⭐️ {item.rating}</Text>
//                         <Text style={{fontFamily:'roboto'}}>💰 {item.price}</Text>
//                     </View>
//                 </View>
//             </View>
//         )}/>
//     </View>
//   )
// }