import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import {Divider} from 'react-native-elements'
import React, { useEffect, useState } from 'react'
import HeaderTab from '../components/home/HeaderTab'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems'
import ButtomTab from '../components/home/ButtomTab'

const YELP_API_KEY ="AZNoCvIgxD4bPfdAUqJCAq2UBSC4pULTUNSpVEU00BEXpDoVLZhglXLPqsR0WVe_cRYGKnDGlq1yBBAaFi5ongvVb6VyvEQjiRlDuyF7wEcXc4iUZoCOfo3RopFdZXYx";

export default function Home() {
  let [restaurantData,setRestaurantData] = useState(localRestaurants)
  const getResturantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurant"`
    await fetch(yelpUrl, {
      headers:{
        Authorization: `Bearer ${YELP_API_KEY}`,
        ContentType:" application/json",
        ContentLength: 26,
        RateLimitDailyLimit: 500,
        RateLimitRemaining: 499,
        RateLimitResetTime:"2018-03-28T00:00:00+00:00"
      }
    })
    .then(res=>{
      return res.json()
    })
    .then(data=>{
    console.log('hit')

      if(data){
        console.log(data)
        // setRestaurantData(data.businesses)
      }
      setRestaurantData(localRestaurants)
    })
    .catch(e=>{
      console.log(e)
    })
  }

  useEffect(()=>{
    // getResturantsFromYelp()
  },[getResturantsFromYelp])

  return (
    <SafeAreaView style={{
     backgroundColor:"#eee",
     flex:1
    }}>
      <View style={{
            backgroundColor:"white",
            padding:10
      }}>
            <HeaderTab/>
            <SearchBar/>
      </View>
      <ScrollView>
        <Categories/>
        <RestaurantItems restaurantData={restaurantData}/>
      </ScrollView>
      <Divider width={1}/>
      <ButtomTab/>
    </SafeAreaView>
  )
} 