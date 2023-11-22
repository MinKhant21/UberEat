import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTab() {
     const [activetab,setActivetab] = useState("Delivery")
  return (
    <View style={{
     flexDirection:"row",
     alignSelf:"center"
    }}>
      <HeaderButton 
          text="Delivery" bgcolor="black" textcolor="white" 
          activetab={activetab} 
          setActivetab={setActivetab} />
      <HeaderButton 
          text="PickUp" bgcolor="white" textcolor="black"  
          activetab={activetab} 
          setActivetab={setActivetab}/>
    </View>
  )
}

const HeaderButton = (props) => {
     return(
          <TouchableOpacity style={{
               backgroundColor:props.activetab === props.text ? "black" : "white",
               paddingVertical:6,
               paddingHorizontal:19,
               borderRadius:30,
          }}
               onPress={()=>props.setActivetab(props.text)}
          >
               <Text style={{
                    color:props.activetab === props.text ? "white" : "black",
                    fontSize:12,
                    fontWeight:900
               }}>
                    {props.text}
               </Text>
          </TouchableOpacity>
     )
}