//process.env.NODE_ENV = dev
//process.env.NEW_USER_PASSWORD

//let MAX_RADIUS_TO_RENDER_PARKING_SPOTS = 12;
import MapView from "react-native-maps";
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { parkingSpaces } from "../../parkingSpaces";
import { styles } from "./styles";
import * as Location from 'expo-location';
 

export function Mapa(){
     const [currentUserLocation, setCurrentUserLocation] = useState(0);
     const [alreadyFetchedLocation, setAlreadyFetchedLocation] = useState(0);
     

     useEffect(() => {
          (
               async () => {
                    let status = await Location.requestForegroundPermissionsAsync();
                    console.log(status)
                    let location = await Location.getCurrentPositionAsync({});
                    setCurrentUserLocation(location);
                    setAlreadyFetchedLocation(1);
                    //lat = currentUserLocation.coords.latitude
                    //long = currentUserLocation.coords.longitude
                    

               }
          )()
     }, [])

     if(alreadyFetchedLocation == 0){
          return(
               <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size={"large"} color={"#1e81b0"} />
               </View> 
          )
     }else {
          return(
               <View>
                    <MapView
                    
                         style={styles.mapa}
                         initialRegion={{
                              latitude: currentUserLocation.coords.latitude,  
                              longitude: currentUserLocation.coords.longitude,
                              latitudeDelta: 0.0030733, //zoom
                              longitudeDelta: 0.0014033,
                         }}
                       showsPointsOfInterest={false}
                       showsUserLocation={true}
                       >
                    
          
                       {
                            parkingSpaces.map(place => (
                                 <MapView.Marker
                                   coordinate={{
                                        latitude: place.latitude,
                                        longitude: place.longitude
                                   }}/>
                            ))
                       }
                    </MapView>
               </View>
          )
     }

}