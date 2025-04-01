import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { Colors } from '../../constants/Colors';
import moment from 'moment';
import FlightInfo from '../../components/Trip-Details/FlightInfo';
import HotelList from '../../components/Trip-Details/HotelList';
import PlannedTrip from '../../components/Trip-Details/PlannedTrip';

export default function TripDetails() {
  const navigation = useNavigation();
  const { trip } = useLocalSearchParams(); // URL'den gelen "trip" parametresi
  const [tripDetails, setTripDetails] = useState(null);

  // Veri formatlama ve JSON parse işlemi
  const parseTripData = (data) => {
    try {
      const parsedTrip = JSON.parse(data);

      // `tripData` JSON string'ini parse et
      const parsedTripData = JSON.parse(parsedTrip.tripData);

      // `tripPlan.tripPlan`'ı kontrol et ve içeriğini düzenle
      const parsedTripPlan = {
        ...parsedTrip.tripPlan,
        tripPlan: {
          ...parsedTrip.tripPlan.tripPlan,
          flights: parsedTrip.tripPlan.tripPlan.flights || [],
          hotels: parsedTrip.tripPlan.tripPlan.hotels || [],
          itinerary: parsedTrip.tripPlan.tripPlan.itinerary || [],
        },
      };

      // Yeni formatta birleştir
      return {
        ...parsedTrip,
        tripData: parsedTripData,
        tripPlan: parsedTripPlan,
      };
    } catch (error) {
      console.error('JSON Parse Error:', error);
      return null;
    }
    
  };

  const parseItinerary = (itinerary) => {
    console.log('Raw Itinerary:', itinerary); // Veriyi kontrol et
    if (Array.isArray(itinerary)) {
      itinerary.forEach((item, index) => {
        console.log(`Item ${index}:`, item); // Her öğeyi kontrol et
        if (item.activities) {
          item.activities.forEach((activity, activityIndex) => {
            console.log(`Activity ${activityIndex}:`, activity); // Her etkinliği kontrol et
          });
        }
      });
      return itinerary; // Dizi doğru formatta olduğu için olduğu gibi döndürüyoruz
    }
    return [];
  };
  

  // Component mount edildiğinde veriyi işleme
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    });

    const formattedTrip = parseTripData(trip);
    setTripDetails(formattedTrip);
  }, [trip]);

  // Eğer tripDetails null ise, yükleniyor mesajı göster
  if (!tripDetails) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 18, fontFamily: 'roboto-medium' }}>Yükleniyor...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      {/* Harita Görseli */}
      <Image
        source={{
          uri:
            'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
            tripDetails.tripData?.locationInfo?.photoRef +
            '&key=' +
            process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        }}
        style={{
          width: '100%',
          height: 300,
        }}
      />
      <View
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          height: '100%',
          marginTop: -30,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        {/* Genel Bilgiler */}
        <Text style={{ fontSize: 25, fontFamily: 'roboto-bold' }}>
          {tripDetails.tripPlan?.tripPlan?.destination || 'Bilinmiyor'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            flexShrink: 1,
            width: '100%',
            marginTop: 5,
          }}
        >
          <Text
            style={{
              fontFamily: 'roboto-medium',
              fontSize: 18,
              color: Colors.GRAY,
            }}
            numberOfLines={1}
          >
            {moment(tripDetails.tripData?.startDate).format('DD MMM yyyy')}
          </Text>
          <Text
            style={{
              fontFamily: 'roboto-medium',
              fontSize: 18,
              color: Colors.GRAY,
              marginLeft: 10,
            }}
            numberOfLines={1}
          >
            - {moment(tripDetails.tripData?.endDate).format('DD MMM yyyy')}
          </Text>
        </View>
        <Text
          style={{
            fontFamily: 'roboto',
            fontSize: 17,
            color: Colors.GRAY,
          }}
        >
          🚌 {tripDetails.tripData?.traveler?.title || 'Bilinmiyor'}
        </Text>

        {/* Uçuş Bilgileri */}
        <FlightInfo flightData={tripDetails.tripPlan?.tripPlan?.flights} />

        {/* Otel Listesi */}
        <HotelList hotelList={tripDetails.tripPlan?.tripPlan?.hotels} />


        {/* Plan Detayları */}
        <PlannedTrip details={parseItinerary(tripDetails.tripPlan?.tripPlan?.itinerary)} />
      </View>
    </ScrollView>
  );
}


// import { View, Text, Image, ScrollView } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { useLocalSearchParams, useNavigation } from 'expo-router'
// import { Colors } from '../../constants/Colors';
// import moment from 'moment';
// import FlightInfo from '../../components/Trip-Details/FlightInfo';
// import HotelList from '../../components/Trip-Details/HotelList';
// import PlannedTrip from '../../components/Trip-Details/PlannedTrip';

// export default function TripDetails() {

//     const navigation = useNavigation();
//     const {trip} = useLocalSearchParams();
//     const [tripDetails, setTripDetails] = useState([]);

//     const formatData=(data)=>{
//       if(typeof data != 'string'){
//         console.log('Data: ',data);
//         return null;
//       }
//       return JSON.parse(data);
//     }

//     useEffect(()=>{
//       navigation.setOptions({
//         headerShown:true,
//         headerTransparent:true,
//         headerTitle:''
//       });
//       try {
//         const parsedTrip = JSON.parse(trip);
//         console.log('Parsed Trip:', parsedTrip);
//         setTripDetails(parsedTrip);
//       } catch (error) {
//         console.error('JSON Parse Error:', error);
//       }
//       // setTripDetails(JSON.parse(trip));
//     },[])

//   return tripDetails&&(
//     <ScrollView>
//         <Image source={{uri:'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference='+formatData(tripDetails?.tripData)?.locationInfo?.photoRef+'&key='+process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY}}
//         style={{
//             width:'100%',
//             height:300
//         }}/>
//         <View style={{
//           padding:20,
//           backgroundColor:Colors.WHITE,
//           height:'100%',
//           marginTop:-30,
//           borderTopLeftRadius:30,
//           borderTopRightRadius:30
//         }}>
//           <Text style={{
//             fontSize:25,
//             fontFamily:'roboto-bold',
//           }}>{tripDetails?.tripPlan?.tripPlan?.destination}</Text>

//           <View style={{flexDirection: 'row', alignItems: 'center', flexShrink: 1, width: '100%', marginTop:5}}>
//             <Text style={{
//                       fontFamily:'roboto-medium',
//                       fontSize:18,
//                       color:Colors.GRAY
//                   }} numberOfLines={1}>{moment(formatData(tripDetails?.tripData)?.startDate).format('DD MMM yyyy')}</Text>
//             <Text style={{
//                       fontFamily:'roboto-medium',
//                       fontSize:18,
//                       color:Colors.GRAY,
//                       marginLeft: 10
//                   }} numberOfLines={1}>-  {moment(formatData(tripDetails?.tripData)?.endDate).format('DD MMM yyyy')}</Text>
//           </View>
//             <Text style={{
//                     fontFamily:'roboto',
//                     fontSize:17,
//                     color:Colors.GRAY
//                 }}>🚌 {formatData(tripDetails?.tripData)?.traveler.title}</Text>

//             {/* FlightInfo */}
//             <FlightInfo flightData={tripDetails?.tripPlan?.tripPlan?.fligths}/>
//             {/* Hotels List */}
//             <HotelList hotelList={tripDetails?.tripPlan?.tripPlan?.hotels}/>
//             {/* Trip Day Planner Info */}
//             <PlannedTrip details={tripDetails?.tripPlan?.tripPlan?.itinerary}/>

//         </View> 

//     </ScrollView>
//   )
  
// }
