import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import moment from 'moment';
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import PlaceCard from './PlaceCard';

export default function PlannedTrip({ details = [] }) {
  // Eğer detaylar boşsa, bir bilgilendirme mesajı göster
  if (!details || details.length === 0) {
    return (
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, fontFamily: 'roboto-bold' }}>🏕️ Plan Detayları</Text>
        <Text style={{ fontSize: 16, fontFamily: 'roboto', color: 'gray', marginTop: 8 }}>
          Plan detayları bulunamadı.
        </Text>
      </View>
    );
  }

  return (
    <View style={{ marginTop: 20 }}>
      <Text style={{ fontSize: 20, fontFamily: 'roboto-bold' }}>🏕️ Plan Detayları</Text>
      {details.map((dayPlan, index) => (
        <View key={index} style={{ marginTop: 20, borderWidth:1, padding:10, borderRadius:15, borderColor:Colors.LIGHTGRAY, backgroundColor:Colors.LIGHTGRAY}}>
          {/* Gün Başlığı */}
          <Text style={{ fontFamily: 'roboto-bold', fontSize: 20, marginBottom: 10 }}>
            {`Gün ${index + 1} - ${moment(dayPlan.date).format('DD.MM.YYYY')}`}
          </Text>

          {/* Etkinlikler */}
          {dayPlan.activities?.map((activity, index) => (
            <PlaceCard activity={activity} activityIndex={index}/>
          ))}
        </View>
      ))}
    </View>
  );
}




// import { View, Text, Image } from 'react-native';
// import React from 'react';

// export default function PlannedTrip({ details = [] }) {
//   // Eğer detaylar boşsa, bir bilgilendirme mesajı göster
//   if (!details || details.length === 0) {
//     return (
//       <View style={{ marginTop: 20 }}>
//         <Text style={{ fontSize: 20, fontFamily: 'roboto-bold' }}>🏕️ Plan Detayları</Text>
//         <Text style={{ fontSize: 16, fontFamily: 'roboto', color: 'gray', marginTop: 8 }}>
//           Plan detayları bulunamadı.
//         </Text>
//       </View>
//     );
//   }

//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text style={{ fontSize: 20, fontFamily: 'roboto-bold' }}>🏕️ Plan Detayları</Text>
//       {details.map((dayPlan, index) => (
//         <View key={index} style={{ marginTop: 20 }}>
//           {/* Gün Başlığı */}
//           <Text style={{ fontFamily: 'roboto-medium', fontSize: 20, marginBottom: 10 }}>
//             {`Gün ${index + 1}`}
//           </Text>

//           {/* Yer Bilgileri */}
//           {dayPlan.places?.map((place, placeIndex) => (
//             <View key={placeIndex} style={{ marginBottom: 15 }}>
//               <Image
//                 source={{ uri: place.image || './../../assets/images/images.png' }}
//                 style={{ width: '100%', height: 120, borderRadius: 15 }}
//               />
//               <View style={{ marginTop: 5 }}>
//                 <Text style={{ fontFamily: 'roboto-medium', fontSize: 17 }}>
//                   {place.placeName || 'Bilinmeyen Yer'}
//                 </Text>
//                 <Text style={{ fontFamily: 'roboto', fontSize: 14, color: 'gray' }}>
//                   {place.description || 'Açıklama bulunamadı.'}
//                 </Text>
//               </View>
//             </View>
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// }



// import { View, Text } from 'react-native'
// import React from 'react'

// export default function PlannedTrip({ details = {} }) {
//   if (!details || typeof details !== 'object') {
//     return <Text>Plan verisi bulunamadı.</Text>;
//   }

//   return (
//     <View style={{ marginTop: 20 }}>
//       <Text style={{ fontSize: 20, fontFamily: 'roboto-bold' }}>🏕️ Plan Detayları</Text>
//       {Object.entries(details).map(([key, value]) => {
//         const tripPlan = value?.tripPlan?.tripPlan;
//         const tripData = value?.tripData ? JSON.parse(value.tripData) : null;

//         if (!tripPlan || !tripData) {
//           return <Text key={key}>Geçersiz veri: {key}</Text>;
//         }

//         return (
//           <View key={key}>
//             <Text style={{ fontFamily: 'roboto-medium', fontSize: 20, marginTop: 20 }}>
//               {tripPlan.destination}
//             </Text>
//             {tripPlan.itinerary?.map((dayPlan, index) => (
//               <View key={index}>
//                 <Image
//                   source={require('./../../assets/images/images.png')}
//                   style={{ width: '100%', height: 120, borderRadius: 15 }}
//                 />
//                 <View style={{ marginTop: 5 }}>
//                   <Text style={{ fontFamily: 'roboto-medium' }}>
//                     {dayPlan?.placeName || 'Belirtilmemiş yer'}
//                   </Text>
//                 </View>
//               </View>
//             ))}
//           </View>
//         );
//       })}
//     </View>
//   );
// }


// // export default function PlannedTrip({details}) {
// //   console.log(tripDetails?.tripPlan?.travelPlan?.plan);

// //   return (
// //     <View style={{marginTop:20}}>
// //       <Text style={{
// //         fontSize:20,
// //         fontFamily:'roboto-bold'
// //       }}>🏕️ Plan Detayları</Text>

// //       {Object.entries(details).map(([day, details])=>(
// //         <View>
// //           <Text style={{
// //               fontFamily:'roboto-medium',
// //               fontSize:20,
// //               marginTop:20
// //           }}>{day.charAt(0).toUpperCase()+day.slice(1)}</Text>
// //           {details.plan.map((place, index)=>(
// //             <View>
// //               <Image source={require('./../../assets/images/images.png')} 
// //               style={{width:'100%', height:120, borderRadius:15}}/>
// //               <View style={{marginTop:5}}>
// //                 <Text style={{fontFamily:'roboto-medium'}}>{place?.placeName}</Text>
// //               </View>
// //             </View>
// //           ))}
// //         </View>
// //       ))}

// //     </View>
// //   )
// // }

// // import { View, Text, Image } from 'react-native';
// // import React from 'react';

// // export default function PlannedTrip({ details }) {


// //   // Planı günlere göre grupla
// //   const tripPlan = details?.tripPlan?.plan;

// //   return (
// //     <View style={{ marginTop: 20 }}>
// //       <Text style={{ fontSize: 20, fontFamily: 'roboto-bold' }}>
// //         🏕️ Plan Detayları
// //       </Text>

// //       {tripPlan.map((place, index) => (
// //         <View key={index}>
// //           <Text
// //             style={{
// //               fontFamily: 'roboto-medium',
// //               fontSize: 20,
// //               marginTop: 20,
// //             }}
// //           >
// //             {`Gün ${index + 1}`}
// //           </Text>
// //           <View>
// //             <Image
// //               source={require('./../../assets/images/images.png')}
// //               style={{ width: '100%', height: 120, borderRadius: 15 }}
// //             />
// //             <View style={{ marginTop: 5 }}>
// //               <Text style={{ fontFamily: 'roboto-medium' }}>
// //                 {place?.placeName}
// //               </Text>
// //             </View>
// //           </View>
// //         </View>
// //       ))}
// //     </View>
// //   );
// // }