import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors'
import { Image } from 'react-native'
import { CreateTripContext } from './../../context/CreateTripContext'
import { AI_PROMPT } from '../../constants/Options'
import { useContext } from 'react'
import { chatSession } from './../../configs/aiModelConfig'
import { useRouter } from 'expo-router'
import {auth, db} from './../../configs/firebaseConfig'
import { setDoc, doc } from "firebase/firestore";

export default function GenerateTrip() {

  const {tripData, setTripData }= useContext(CreateTripContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  useEffect(()=>{
     tripData&&GenerateAiTrip()
  },[])

  const GenerateAiTrip = async () => {
    setLoading(true);
    let result;
    
    try {
      const FINAL_PROMPT = AI_PROMPT
        .replace('{location}', tripData?.locationInfo?.name)
        .replace('{totalDays}', tripData?.totalNoOfDays || '')
        .replace('{totalNights}', (tripData?.totalNoOfDays - 1) || '')
        .replace('{traveler}', tripData?.traveler?.person)
        .replace('{budget}', tripData?.budget)
        .replace('{totalDays}', tripData?.totalNoOfDays || '')
        .replace('{totalNights}', (tripData?.totalNoOfDays - 1) || '');
  
      console.log('PROMPT:', FINAL_PROMPT);
      console.log('{totalDays}', tripData?.totalNoOfDays);
      console.log('{totalNights}', (tripData?.totalNoOfDays - 1));
      
      result = await chatSession.sendMessage(FINAL_PROMPT);
      
      // AI yanıtını al ve temizle
      let responseText = result?.response?.text();
      if (!responseText) {
        throw new Error('AI response is empty or invalid');
      }
  
      // JSON string'ini temizle
      responseText = responseText
        .replace(/[\u0000-\u001F]+/g, '') // Kontrol karakterlerini temizle
        .replace(/\\n/g, '') // Yeni satırları kaldır
        .replace(/\\/g, '\\\\') // Ters eğik çizgileri escape et
        .replace(/[^\x20-\x7E]/g, '') // ASCII olmayan karakterleri temizle
        .trim();
  
      // String'i manuel olarak parse et
      let tripResp;
      try {
        // İlk yöntem: Doğrudan parse
        tripResp = JSON.parse(responseText);
      } catch (parseError) {
        try {
          // İkinci yöntem: eval kullanarak parse (güvenli bir şekilde)
          tripResp = JSON.parse(JSON.stringify(eval('(' + responseText + ')')));
        } catch (evalError) {
          // Üçüncü yöntem: String'i manuel düzelt
          responseText = responseText
            .replace(/"\s+"/g, '", "') // Fazla boşlukları temizle
            .replace(/}\s+{/g, '}, {') // Nesneler arasındaki boşlukları temizle
            .replace(/\]\s+\[/g, '], ['); // Diziler arasındaki boşlukları temizle
          tripResp = JSON.parse(responseText);
        }
      }
  
      const docId = Date.now().toString();
      
      // Firestore'a kaydet
      await setDoc(doc(db, "UserTrips", docId), {
        userEmail: user.email,
        tripPlan: tripResp, //AI Result
        tripData: JSON.stringify(tripData),
        docId: docId,
        // createdAt: new Date(),
        // startDate: tripData?.startDate,
        // endDate: tripData?.endDate,
        // totalDays: tripData?.totalNoOfDays,
        // totalNights: tripData?.totalNoOfNights,
        // location: tripData?.locationInfo?.name,
        // budget: tripData?.budget,
        // traveler: tripData?.traveler?.person
      });
  
      setLoading(false);
      router.push('(tabs)/myTrip');
      
    } catch (error) {
      console.error("Error in GenerateAiTrip:", error);
      // Detaylı hata logları
      if (error instanceof SyntaxError) {
        console.error("JSON Parse Error Details:", {
          message: error.message,
          originalResponse: result?.response?.text(),
          cleanedResponse: responseText
        });
      }
      setLoading(false);
      alert('Seyahat planı oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <View 
    style={{
      padding:25,
      paddingTop:75,
      backgroundColor:Colors.WHITE,
      heigth:'100%'
    }}>
      <Text style={{
        fontFamily:'roboto-bold',
        fontSize:35,
        textAlign:'center'
      }}>Lütfen Bekleyin...</Text>
      <Text style={{
        fontFamily:'roboto-medium',
        fontSize:20,
        textAlign:'center',
        margin:40
      }}>Seyahatinizi oluşturmak için çalışıyoruz</Text>

      <Image source={(require('./../../assets/images/ucak.gif'))}
      style={{
        width:'100%',
        heigth:150,
        objectFit:'contain'
      }}/>

      <Text style={{
        fontFamily:'roboto',
        color:Colors.GRAY,
        fontSize:20,
        textAlign:'center'
      }}> Geri Gitmeyin</Text>
    </View>
  )
}