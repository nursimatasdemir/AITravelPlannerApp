import { View, Text, FlatList, TouchableOpacity} from 'react-native'
import React, { useEffect, useState, useContext} from 'react'
import { useNavigation, Link } from 'expo-router'
import {Colors} from './../../constants/Colors'
import {SelectTravellerList} from './../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import {CreateTripContext} from './../../context/CreateTripContext';

export default function SelectTraveller() {

  const navigation = useNavigation();
  const [selectedTraveller, setSelectedTraveller] = useState();
  const {tripData, setTripData} = useContext(CreateTripContext);
  

  useEffect(()=>{
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: '',
    })
  },[]);

  useEffect(()=>{
    setTripData({...tripData,traveler:selectedTraveller
    })
  },[selectedTraveller]);

  useEffect(()=>{
    console.log(tripData);
  },[tripData])


  return (
    <View 
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor:Colors.WHITE,
        height: '100%'
      }}
    >
      <Text style={{fontFamily:'roboto-bold', fontSize:30, marginTop:20}}>Kimler yolculuğa çıkıyor</Text>

      <View style={{marginTop: 20}}>
        <Text style={{fontFamily:'roboto-bold', fontSize: 20, textAlign:'center'}}>Size kimler eşlik edecek?</Text>
        <FlatList 
          data={SelectTravellerList}
          renderItem={({item, index})=>(
            <TouchableOpacity onPress={()=>setSelectedTraveller(item)} style={{marginVertical:10}}>
              <OptionCard option={item} selectedOption={selectedTraveller}/>
            </TouchableOpacity>
          )}
        />
      </View>

      <TouchableOpacity  style={{
        padding:15,
        backgroundColor:Colors.PRIMARY,
        borderRadius:15,
        marginTop:20
      }}>
        <Link href={'/create-trip/select-dates'}>
        <Text style={{textAlign:'center', color:Colors.WHITE, fontFamily:'roboto-medium', fontSize:17}}> Devam Et</Text>
        </Link>
      </TouchableOpacity>
    </View>
  )
}