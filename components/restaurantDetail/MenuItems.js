import { View, Text ,Image, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'

const menuItems =[
  {
    'title' : 'Burger',
    'description' : "a dish  or sometimes another savoury ingredient,  toppings.",
    'price' : "50$",
    'imageUri' : "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg"
  },
  {
    'title' : 'Pizze',
    'description' : "a dish consisting of a flat round cake of minced beef",
    'price' : "150$",
    'imageUri' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-vyuNaOdSYfUplmINoUVTjBI5I9hHuGBr7A&usqp=CAU"
  },
  {
    'title' : 'Sandwich',
    'description' : "a dish consisting of a flat round cake of minced beef",
    'price' : "20$",
    'imageUri' : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-FXP0wlVv_IWY5GvFErkkAOIBsZd9q3PPpA&usqp=CAU"
  },{
    'title' : 'Coffee',
    'description' : "a dish consisting of a flat round cake of minced beef",
    'price' : "10$",
    'imageUri' : "https://www.allrecipes.com/thmb/gk1cHP21-syS3M_dz1cr6DWxhfE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1165807395-2000-28ea3eaf72f34ddaa97d9a54ca0c6025.jpg"
  }
]
export default function MenuItems() {
  return (
    <>
      {
        menuItems.map((menu)=>(
            <TouchableOpacity style={{ borderBottomColor:"#eee",borderBottomWidth:2}}>
            <View style={{
            flexDirection:"row",
            justifyContent:"space-between",
            padding:10,
            marginTop:20,
          }}>
            <FoodInfo title={menu.title} description={menu.description} price={menu.price} imageUri={menu.imageUri}/>
            <FoodImage imageUri={menu.imageUri}/>
          </View>
          </TouchableOpacity>
        ))
      }
    </>
  )
}

const FoodInfo = (props) => {
  return (
    <View style={{
      width:240,
      justifyContent:"space-evenly",
    }}>
      <Text style={{fontSize:15,fontWeight:700}}>{props.title}</Text>
      <Text>{props.description}</Text>
      <Text>{props.price}</Text>
    </View>
  )
}

const FoodImage = (props) => {
  return (
    <View>
      <Image
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: 0,
      }}
      source= {{uri:props.imageUri}}
      />
    </View>
  )
}