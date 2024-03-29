//process.env.NODE_ENV = dev
//process.env.NEW_USER_PASSWORD

//let MAX_RADIUS_TO_RENDER_PARKING_SPOTS = 12;

// Spot = Vaga
/*
* Sugestões para futuro: 
Linkar as vagas locais com a vaga da database, para fazer um fetch das vagas
*/
import MapView from "react-native-maps";
import React, { useEffect, useState } from 'react';
import { View,
      Text, 
      ActivityIndicator, 
      ScrollView,
     StatusBar } from 'react-native';
import { parkingSpaces } from "../../parkingSpaces";
import { styles } from "./styles";
import * as Location from 'expo-location';
import firebase from '../../firebaseConnection' //TODO: Versão do firebase está downgrade

import { BigButton } from '../../components/bigButton'

//let parkingSpaces = [];
let sortedDistancesParkingSpacesFromUser;
let sortedParkingSpacesCoords = [];
let fetchedParkingSpaces;
 

export function Mapa(){
     const [currentUserLocation, setCurrentUserLocation] = useState(0);
     const [alreadyFetchedLocation, setAlreadyFetchedLocation] = useState(0);
     const [alreadyFetchedParkingSpaces, setAlreadyFetchedParkingSpaces] = useState(0);

     function CreateNewParkingSpace(bairro, instituicao, latitude, longitude){
          this.bairro = bairro;
          this.instituicao = instituicao;
          this.latitude = latitude;
          this.longitude = longitude;
     }

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

     function sortCoordsParkingSpaces(sortedDistances){
          for(let i = 0; i < parkingSpaces.length; i++){
               for(let j = 0; j < parkingSpaces.length; j++){
                    if(calculateDistance(
                         currentUserLocation.coords.latitude,
                         currentUserLocation.coords.longitude,
                         parkingSpaces[j].latitude,
                         parkingSpaces[j].longitude).toFixed(5) == sortedDistances[i].toFixed(5)){
                              sortedParkingSpacesCoords[i] = parkingSpaces[j];
                              sortedParkingSpacesCoords[i] = parkingSpaces[j];
                              
                         }
               }
          }
          //console.log(sortedParkingSpacesCoords)
     }

     useEffect(() => {
          (
               async () => {
                    let status = await Location.requestForegroundPermissionsAsync();
                    //console.log(status)
                    let location = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.Highest, maximumAge: 10000});
                    setCurrentUserLocation(location);
                    setAlreadyFetchedLocation(1);
                    //console.log(location)
               }
          )()
     }, [])

     useEffect(() => {
          (
               async () => {
                    await firebase.database().ref('Vagas Especiais').on('value', (snapshot) => {
                         fetchedParkingSpaces = snapshot.val();

                         let teste = []


                         let idosoParkingSpaces = fetchedParkingSpaces.Idoso.Vagas
                         let PCDParkingSpacese = fetchedParkingSpaces.PCD.Vagas
 
                         let numberOfIdosoParkingSpaces = idosoParkingSpaces.length
                         let numberOfPCDParkingSpaces = PCDParkingSpacese.length

                         console.log(idosoParkingSpaces[0].Bairro); //TODO: Este é só um teste do firebase
                         
                         for(let i = 0; i < numberOfIdosoParkingSpaces; i++){
                              parkingSpaces[i] = new CreateNewParkingSpace(idosoParkingSpaces[i].Bairro, idosoParkingSpaces[i].Rua, idosoParkingSpaces[i].Latitude, idosoParkingSpaces[i].Longitude)
                              

                         }

                         console.log("teste >>")
                         console.log(parkingSpaces)
                         setAlreadyFetchedParkingSpaces(1);
                    })
               }
          )()
     }, [])
     

     if(alreadyFetchedLocation){
          let numberOfParkingSpaces = parkingSpaces.length;
          let distancesParkingSpacesFromUser = []; //Distancias NAO ordenadas
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
          

          sortedDistancesParkingSpacesFromUser = distancesParkingSpacesFromUser.sort(function(a,b){
               return a - b;
          });
          //console.log('sorted',sortedDistancesParkingSpacesFromUser)
          sortCoordsParkingSpaces(sortedDistancesParkingSpacesFromUser)
          

     }

     

     if(sortedDistancesParkingSpacesFromUser == undefined || !alreadyFetchedParkingSpaces){
          return(
               <View style={{flex: 1, justifyContent: 'center'}}>
                    <ActivityIndicator size={"large"} color={"#1e81b0"} />
               </View> 
          )
     }else {
          return(
               <View style={styles.container}>

                    <StatusBar hidden={true} />
                    <MapView
                    
                         style={styles.mapa}
                         initialRegion={{
                              latitude: -22.256707970525966, // TODO: mudar para currentUserLocation.coords.latitude,   
                              longitude: -45.69516828189166,// TODO: mudar para currentUserLocation.coords.longitude,
                              latitudeDelta: 0.00013033, //zoom
                              longitudeDelta: 0.00013033,
                         }}
                       showsPointsOfInterest={false}
                       showsUserLocation={true}
                       >
                    
          
                       {
                            parkingSpaces.map(place => {
                              //console.log(place)
                              return (
                                 <MapView.Marker
                                   coordinate={{
                                        latitude: place.latitude,
                                        longitude: place.longitude
                                   }}/>
                            )})
                       }
                    </MapView>

                    <ScrollView
                         style={styles.placesContainer}
                         horizontal
                         pagingEnabled
                         >
                              {
                                   (

                                        sortedDistancesParkingSpacesFromUser.map((i) => (
                                             <View style={styles.place}> 
                                                  <View style={{flexDirection: "column"}}>
                                                       <Text style={styles.parkingSpotTitle}>
                                                            Vaga {sortedDistancesParkingSpacesFromUser.indexOf(i) + 1}
                                                       </Text>
                                                       <View style={styles.infoRowContainer}>
                                                            <Text style={styles.infoTitleText}>
                                                                 Bairro:
                                                            </Text> 
                                                            <Text style={styles.infoText}>
                                                           
                                                           { 
                                                           parkingSpaces[sortedDistancesParkingSpacesFromUser.indexOf(i)].bairro
                                                           } 
                                                       </Text> 
                                                       </View>
                                                       <View style={styles.infoRowContainer}>
                                                            <Text style={styles.infoTitleText}>
                                                                 Instituicao:
                                                            </Text> 
                                                            <Text style={styles.infoText}>
                                                           
                                                           { 
                                                           parkingSpaces[sortedDistancesParkingSpacesFromUser.indexOf(i)].instituicao
                                                           } 
                                                       </Text> 
                                                       </View>
                                                       <View style={styles.placeButton}>
                                                            <BigButton title={'teste'}/>
                                                       </View>
                                                       
                                                       
                                                  </View>
                                                  
                                             </View>
                                        ))
                                   )
                              }

                    </ScrollView>
               </View>
          )
     }

}