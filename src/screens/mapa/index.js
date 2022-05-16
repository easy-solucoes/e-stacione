//process.env.NODE_ENV = dev
//process.env.NEW_USER_PASSWORD

//let MAX_RADIUS_TO_RENDER_PARKING_SPOTS = 12;
import MapView from "react-native-maps";
import React from 'react';
import { View, Text, } from 'react-native';
import { parkingSpaces } from "../../parkingSpaces";
import { styles } from "./styles";
 

export function Mapa(){
return(
     <View>
          <MapView
          
               style={styles.mapa}
               initialRegion={{
                    latitude: -22.256707970525966,  
                    longitude: -45.69516828189166,
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