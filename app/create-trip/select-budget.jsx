import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import {Colors} from './../../constants/Colors'
// import { FlatList } from 'react-native-gesture-handler';
import {SelectBudgetList} from './../../constants/Options'
import OptionCard from '../../components/CreateTrip/OptionCard'
import {CreateTripContext} from './../../context/CreateTripContext';


export default function SelectBudget() {

    const navigation = useNavigation();
    const [selectedOption, setSelectedOption] = useState();
    const {tripData, setTripData} = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent:true,
            headerTitle: ''
        })
    },[]);
    useEffect(()=>{
        selectedOption&&setTripData({
            ...tripData,
            budget:selectedOption?.title
        })
    },[selectedOption]);

    const onClickContinue = ()=>{
        if(!selectedOption){
            alert('Lütfen bir bütçe seçiniz.');
            return;
        }
        router.push('/create-trip/review-trip');
    }

    return (
        <View style={{
                padding:25,
                paddingTop:75,
                backgroundColor:Colors.WHITE,
                height:'100%'
            }}>
            <Text style={{
                fontFamily:'roboto-bold',
                fontSize:35,
                marginTop:20,
                }}>Bütçe</Text>
            <View style={{marginTop:20}}>
                <Text style={{fontFamily:'roboto-bold',fontSize:20,color:Colors.GRAY}}>Size en uygun bütçeyi seçin.</Text>
                <FlatList
                    data={SelectBudgetList}
                    renderItem={({item, index})=>(
                    <TouchableOpacity onPress={()=>setSelectedOption(item)} style={{marginVertical: 20}}>
                        <OptionCard option={item} selectedOption={selectedOption}/>
                    </TouchableOpacity>
                    )}
                />
            </View>
            <TouchableOpacity 
            onPress={()=>onClickContinue()} 
            style={{
                    padding:15,
                    backgroundColor:Colors.PRIMARY,
                    borderRadius:15,
                    marginTop:20
                  }}>
                    <Text style={{textAlign:'center', color:Colors.WHITE, fontFamily:'roboto-medium', fontSize:17}}> Devam Et</Text>
                  </TouchableOpacity>
        </View>
    )
}