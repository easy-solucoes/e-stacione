//process.env.NODE_ENV = dev
//process.env.NEW_USER_PASSWORD

//let MAX_RADIUS_TO_RENDER_PARKING_SPOTS = 12;

// Spot = Vaga
import MapView from "react-native-maps";
import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { parkingSpaces } from "../../parkingSpaces";
import { styles } from "./styles";
import * as Location from 'expo-location';


function calculateDistance(LATITUDE_1, LONGITUDE_1, LATITUDE_2, LONGITUDE_2){
     let coords = [ LATITUDE_1, LONGITUDE_1, LATITUDE_2, LONGITUDE_2];

     let radianCoords = []; 
     let radianCoordsSin = []; //Sin of each lat and long
     let radianCoordsCos = []; //Cos of each lat and long
     
     let partialSum1 = 1, partialSum2 = 1, partialSum3 = 1;
     
     let partialSumGeneral, arcCosin, resultDistance;

     for(let i = 0; i < 4; i++){
          radianCoords[i] = (coords[i] * Math.PI) / 180
     }
     
     for(let j = 0; j < 4; j++){
          radianCoordsSin[j] = Math.sin(radianCoords[j]);
          radianCoordsCos[j] = Math.cos(radianCoords[j]);
     }

     

     for(let k = 0; k < 4; k++){
          partialSum1 = partialSum1 * radianCoordsCos[k];
     }
     
     partialSum2 = radianCoordsCos[0] * radianCoordsCos[2] * radianCoordsSin[1] * radianCoordsSin[3];
     partialSum3 = radianCoordsSin[0] * radianCoordsSin[2];
     partialSumGeneral = partialSum1 + partialSum2 + partialSum3;
     arcCosin = Math.acos(partialSumGeneral);
     resultDistance = arcCosin * 6371 * 1.15;

     return resultDistance
}
 

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
                    
                    
               }
          )()
     }, [])

     if(alreadyFetchedLocation){
          let numberOfParkingSpaces = parkingSpaces.length;
          let distancesParkingSpacesFromUser = [];
          let currentDistance;
                    
          for(let i = 0; i < numberOfParkingSpaces; i++){
                         
               currentDistance = calculateDistance(
                    currentUserLocation.coords.latitude,
                    currentUserLocation.coords.longitude,
                    parkingSpaces[i].latitude,
                    parkingSpaces[i].longitude
               );
               distancesParkingSpacesFromUser[i] = currentDistance;
               
          }
          console.log(distancesParkingSpacesFromUser)
     }

     

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
                              latitude: -22.256707970525966, // currentUserLocation.coords.latitude,  
                              longitude: -45.69516828189166,// currentUserLocation.coords.longitude,
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