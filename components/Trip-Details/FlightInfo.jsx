import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function FlightInfo({flightData}) {
  return (
    <View style={{marginTop:20, borderWidth:1, borderColor:Colors.LIGHTGRAY, padding:10, borderRadius:15}}>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
        <Text style={{fontFamily:'roboto-bold', fontSize:20}} numberOfLines={1}>✈️ Uçuşlar</Text>

        <TouchableOpacity style={{
            backgroundColor:Colors.PRIMARY,
            padding:5,
            width:100,
            borderRadius:7,
            marginTop:7
        }} numberOfLines={1}>
            <Text style={{textAlign:'center', color:Colors.WHITE, fontFamily:'roboto'}}>Bilet Al</Text>
        </TouchableOpacity>
      </View>
      {flightData?.length ? (
              flightData.map((fligth, index) => (
                <Text key={index} style={{ fontSize: 16, fontFamily: 'roboto' }}>
                  {`Fiyat: ${fligth?.price}, Havayolu: ${fligth?.airline}`}
                </Text>
              ))
            ) : (
              <Text>Uçuş bilgisi bulunamadı.</Text>
        )}
      {/* <Text style={{fontFamily:'roboto', fontSize:17, marginTop:7}}>Havalimanı: Delta</Text>

      <Text style={{fontFamily:'roboto', fontSize:17}}>Fiyat: {flightData?.price}</Text>   */}
    </View>
  )
}