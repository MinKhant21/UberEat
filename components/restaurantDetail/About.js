import { View, Text ,Image} from 'react-native'
import React from 'react'
const imageUri = "https://t3.ftcdn.net/jpg/03/24/73/92/360_F_324739203_keeq8udvv0P2h1MLYJ0GLSlTBagoXS48.jpg"
const title = "Farmhouse Kitchen Thai Cuisine"
const description = "Thai * Comfort Food * $$"
export default function About() {
  return (
    <View>
          <RestaurantDetailIamge imageUri={imageUri}/> 
          <RestaurantDetailTitle title={title} />
          <RestaurantDetailDescription description={description} />
    </View>
  )
}

const RestaurantDetailIamge = (props) => {
     return (
          <Image
               style={{
                    width:"100%",
                    height:200
               }}
               source={{uri:props.imageUri}}
          />
     )
}
const RestaurantDetailTitle = (props) => {
     return (
          <Text
               style={{
                    fontSize:28,
                    fontWeight:900,
               }}
          >
               {props.title}
          </Text>
     )
}

const RestaurantDetailDescription = (props) => {
     return (
          <Text
                style={{
                    fontSize:15,
                    fontWeight:500,
                    marginTop:5

                }}
          >
               {props.description}
          </Text>
     )
}