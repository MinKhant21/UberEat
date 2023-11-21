import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export default function RestaurantItem() {
  return (
    <TouchableOpacity activeOpacity={0.5}>
          <View style={{padding:10,backgroundColor:"#fff",marginTop:10,marginBottom:10}}>
               <RestaurantImage/>
               <RestaurantInfo/>
          </View>
    </TouchableOpacity>
  )
}

const RestaurantImage = () => {
     return (
          <View>
               <Image
                    source={{uri:"https://www.shutterstock.com/image-photo/restaurant-chilling-out-classy-lifestyle-260nw-507639565.jpg"}}
                    style={{
                         width:"100%",
                         height:180,
                    }}
               />
               <TouchableOpacity style={{position:"absolute",right: 20, top: 20 }}>
                    <MaterialCommunityIcons name='heart-outline' size={25} color={"white"}/>
               </TouchableOpacity>
          </View>
     )
}

const RestaurantInfo = () => {
     return (
          <>
               <View style={{
                    flexDirection:'row',
                    justifyContent:"space-between",
                    marginTop:10
               }}>
                    <View >
                         <Text style={{ fontSize: 15, fontWeight: "bold" }}>Food For Lunch</Text>
                         <Text style={{ fontSize: 13, color: "gray" }}>30-45 • min</Text>
                    </View>
                    <Text>4.5</Text>
               </View>
          </>
     )
}