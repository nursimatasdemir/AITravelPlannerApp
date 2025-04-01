import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option, selectedOption}) {
  return (
    <View 
    style={[{
        padding:20, 
        marginTop:10, 
        display:'flex', 
        flexDirection:'row',
        justifyContent:'space-between', 
        backgroundColor:Colors.LIGHTGRAY, 
        borderRadius:20
        },selectedOption?.id==option.id&&{borderWidth:3}]}>
      <View>
        <Text style={{fontSize:20, fontFamily:'roboto-medium'}}>{option?.title}</Text>
        <Text style={{fontSize:15, fontFamily:'roboto', color:Colors.GRAY}}>{option?.desc}</Text>
      </View>
      <Text style={{fontSize:35}}>{option?.icon}</Text>
    </View>
  )
}