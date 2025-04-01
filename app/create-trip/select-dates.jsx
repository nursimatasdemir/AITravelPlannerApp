import { View, Text, TouchableOpacity} from 'react-native'
import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigation, useRouter} from 'expo-router'
import { Colors } from './../../constants/Colors'
import CalendarPicker from "react-native-calendar-picker";
import moment from 'moment';
import {CreateTripContext} from './../../context/CreateTripContext';


export default function SelectDates() {

    const navigation = useNavigation();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const {tripData, setTripData} = useContext(CreateTripContext);
    const router = useRouter();
    
    useEffect(()=>{
        navigation.setOptions({
            headerShown:true,
            headerTransparent : true,
            headerTitle: ''
        })
    },[]);

    const onDateChange = (date, type) => {
        console.log(date, type);
        if(type=='START_DATE'){
            setStartDate(moment(date));
        } else {
            setEndDate(moment(date));
        }
    };

    const onDateSelectionContinue=()=>{
        if(startDate==null&&endDate==null){
            alert('Lütfen tarih seçimi yapınız');
            return;
        }
        const totalNoOfDays = endDate.diff(startDate + 1, 'days');
        const totalNoOfNights = endDate.diff(startDate, 'days');
        console.log('Total Days:', totalNoOfDays+1);
        console.log('Total Nights:', totalNoOfNights);
        setTripData({
            ...tripData,
            startDate:startDate,
            endDate:endDate,
            totalNoOfDays:totalNoOfDays+1,
            totalNoOfNights:totalNoOfDays
        });
        console.log('totalNoOfDays', tripData?.totalNoOfDays);
        console.log('totalNoOfNights', tripData?.totalNoOfNights);
        router.push('/create-trip/select-budget');
    };

  return (
    <View
    style={{
        padding:25,
        paddingTop:75,
        backgroundColor:Colors.WHITE,
        height:'100%'
    }}>
        <Text
            style={{
                fontFamily:'roboto-bold',
                fontSize:35,
                marginTop:20
            }}>Tarih Seçin</Text>
        <View style={{marginTop:30}}>
            <CalendarPicker 
            onDateChange={onDateChange} 
            allowRangeSelection={true}
            selectedRangeStyle={{
                backgroundColor:Colors.PRIMARY
            }} 
            selectedDayTextStyle={{
                color:Colors.WHITE,
            }}/>
        </View>
        <TouchableOpacity onPress={onDateSelectionContinue} style={{padding:15, backgroundColor:Colors.PRIMARY, borderRadius:15, marginTop:20}}>
            <Link href={'/create-trip/select-budget'} style={{width:'100%', textAlign:'center'}}>
            <Text style={{fontFamily:'roboto-medium',fontSize:17, color:Colors.WHITE, textAlign:'center'}}>Devam Et</Text>
            </Link>
        </TouchableOpacity>
    </View>
  )
}