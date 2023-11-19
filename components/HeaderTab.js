import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function HeaderTab() {
  return (
    <View style={{
     flexDirection:"row",
     alignSelf:"center"
    }}>
      <HeaderButton text="Delevity" bgcolor="black" textcolor="white"/>
      <HeaderButton text="PickUp" bgcolor="white" textcolor="black"/>
    </View>
  )
}

const HeaderButton = (props) => {
     return(
          <TouchableOpacity style={{
               backgroundColor:props.bgcolor,
               paddingVertical:6,
               paddingHorizontal:19,
               borderRadius:30
          }}>
               <Text style={{
                    color:props.textcolor,
                    fontSize:12,
                    fontWeight:900
               }}>
                    {props.text}
               </Text>
          </TouchableOpacity>
     )
}