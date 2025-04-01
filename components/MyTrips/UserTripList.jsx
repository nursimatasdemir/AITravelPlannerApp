import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import moment from 'moment/moment'
import { Colors } from '../../constants/Colors'
import UserTripCard from './UserTripCard'
import { useRouter } from 'expo-router'

export default function UserTripList({ userTrips }) {
    const [expandedTripIndex, setExpandedTripIndex] = useState(null);
    const router = useRouter();

    const handleTripToggle = (index) => {
        setExpandedTripIndex(expandedTripIndex === index ? null : index);
    };

    return userTrips && userTrips.length > 0 ? (
        <View>
            <ScrollView contentContainerStyle={{ padding: 20 }}>
                {userTrips.map((trip, index) => {
                    let LatestTrip;
                    try {
                        LatestTrip = typeof trip.tripData === 'string'
                            ? JSON.parse(trip.tripData)
                            : trip.tripData;
                    } catch (error) {
                        console.error('JSON Parse Error:', error);
                        console.log('Raw tripData:', trip.tripData);
                        return (
                            <View key={index} style={{ padding: 20 }}>
                                <Text>Veri yüklenirken bir hata oluştu.</Text>
                            </View>
                        );
                    }

                    return (
                        <View key={index} style={{ marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => handleTripToggle(index)}>
                            {expandedTripIndex === index && (
                                <View style={{ marginTop: 10 }}>
                                    <TouchableOpacity
                                        onPress={() =>
                                            router.push({
                                                pathname: '/trip-details',
                                                params: {
                                                    trip: JSON.stringify(trip),
                                                },
                                            })
                                        }
                                        style={{
                                            backgroundColor: Colors.PRIMARY,
                                            padding: 15,
                                            borderRadius: 15,
                                            marginTop: 10,
                                        }}
                                    >
                                        <Text
                                            style={{
                                                color: Colors.WHITE,
                                                textAlign: 'center',
                                                fontFamily: 'roboto-medium',
                                                fontSize: 15,
                                            }}
                                        >
                                            Planınızı görüntüleyin
                                        </Text>
                                    </TouchableOpacity>

                                    {/* Seyahat Kartı Detayları */}
                                    {/* <UserTripCard trip={trip} /> */}
                                </View>
                            )}
                                <View>
                                    {LatestTrip?.locationInfo?.photoRef ? (
                                        <Image
                                            source={{
                                                uri:
                                                    'https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photo_reference=' +
                                                    LatestTrip?.locationInfo?.photoRef +
                                                    '&key=' +
                                                    process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                                            }}
                                            style={{
                                                width: '100%',
                                                height: 200,
                                                objectFit: 'cover',
                                                borderRadius: 15,
                                            }}
                                        />
                                    ) : (
                                        <Image
                                            source={require('./../../assets/images/plane.gif')}
                                            style={{
                                                width: '100%',
                                                height: 50,
                                                objectFit: 'cover',
                                                borderRadius: 15,
                                            }}
                                        />
                                    )}

                                    <View style={{ marginTop: 10 }}>
                                        <Text
                                            style={{
                                                fontFamily: 'roboto-medium',
                                                fontSize: 20,
                                                color: Colors.PRIMARY,
                                            }}
                                        >
                                            {trip?.tripPlan?.tripPlan?.destination}
                                        </Text>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                marginTop: 5,
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontFamily: 'roboto-medium',
                                                    fontSize: 17,
                                                    color: Colors.GRAY,
                                                }}
                                            >
                                                {moment(LatestTrip.startDate).format('DD MMM yyyy')}
                                            </Text>
                                            <Text
                                                style={{
                                                    fontFamily: 'roboto',
                                                    fontSize: 17,
                                                    color: Colors.GRAY,
                                                }}
                                            >
                                                🚌 {LatestTrip?.traveler?.title}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            {/* Eğer tıklanan trip açık ise detayları göster */}
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    ) : (
        <View style={{ padding: 20 }}>
            <Text>Henüz bir seyahatiniz bulunmamaktadır.</Text>
        </View>
    );
}


// {expandedTripIndex === index && (
//     <View style={{ marginTop: 10 }}>
//         {/* <TouchableOpacity
//             onPress={() =>
//                 router.push({
//                     pathname: '/trip-details',
//                     params: {
//                         trip: JSON.stringify(trip),
//                     },
//                 })
//             }
//             style={{
//                 backgroundColor: Colors.PRIMARY,
//                 padding: 15,
//                 borderRadius: 15,
//                 marginTop: 10,
//             }}
//         >
//             <Text
//                 style={{
//                     color: Colors.WHITE,
//                     textAlign: 'center',
//                     fontFamily: 'roboto-medium',
//                     fontSize: 15,
//                 }}
//             >
//                 Planınızı görüntüleyin
//             </Text>
//         </TouchableOpacity> */}

//         {/* Seyahat Kartı Detayları */}
//         <UserTripCard trip={trip} />
//     </View>
// )}




