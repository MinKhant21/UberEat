import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const localRestaurants = [
     {
       name: "Beachside Bar",
       image_url:
         "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
       categories: ["Cafe", "Bar"],
       price: "$$",
       reviews: 1244,
       rating: 4.5,
     },
     {
       name: "Benihana",
       image_url:
         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
       categories: ["Cafe", "Bar"],
       price: "$$",
       reviews: 1244,
       rating: 3.7,
     },
     {
       name: "India's Grill",
       image_url:
         "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
       categories: ["Indian", "Bar"],
       price: "$$",
       reviews: 700,
       rating: 4.9,
     },
   ];

export default function RestaurantItems(props) {
  return (
     <>
          {
               props.restaurantData.map((restaurant,index)=>(
                    <TouchableOpacity activeOpacity={0.5} key={index}>
                         <View   style={{padding:10,backgroundColor:"#fff",marginTop:10,marginBottom:10}}>
                              <RestaurantImage/>
                              <RestaurantInfo/>
                         </View>
                    </TouchableOpacity>

                    )
               )
          }
     </>
          
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