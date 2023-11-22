import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function SearchBar() {
  return (
    <View style={{
     marginTop:15,
     flexDirection:'row',
    }}>
          <GooglePlacesAutocomplete
               query={{key:"AIzaSyBuLwQgaUz6bYCNPfd_PA6uIVedoUqpKKc",
                language:"en"
               }}
               placeholder='Search'
               styles={{
                    textInput:{
                         backgroundColor:"#eee",
                         borderRadius:50,
                         fontWeight:"700",
                         marginTop:7,
                    },
                    textInputContainer:{
                         backgroundColor:"#eee",
                         borderRadius:50,
                         flexDirection:'row',
                         alignItems:"center"
                    }
               }}
               renderLeftButton={()=>(
                   <Ionicons name="location-sharp" size={20} style={{
                    marginLeft:10,
                   }}/>
               )}
               renderRightButton={()=>(
                    <View style={{
                         backgroundColor:"white",
                         flexDirection:'row',
                         padding:9,
                         alignItems:'center',
                         marginRight:20,
                         borderRadius:10
                    }}>
                         <AntDesign name="clockcircle" size={11} style={{marginRight:10}}/>
                         <Text>
                              Search
                         </Text>
                    </View>
               )}
          />
    </View>
  )
}