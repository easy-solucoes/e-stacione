export const parkingSpaces = [
     new CreateNewParkingSpace('Centro', 'Inatel', -22.256707970525966, -45.69516828189166),
     new CreateNewParkingSpace('Centro', 'Inatel', -22.256699166070494, -45.695144255589405),
     new CreateNewParkingSpace('Centro', 'Inatel', -22.25691140891416, -45.69540979428176),
     new CreateNewParkingSpace('Casa do Julio', 'Jd das palmeiras', -22.241319453116596, -45.71393399700916),
     new CreateNewParkingSpace('JFL', 'Jd das palmeiras', -22.241557494599803, -45.71564908928338)
]


export function CreateNewParkingSpace(bairro, instituicao, latitude, longitude){
     this.bairro = bairro;
     this.instituicao = instituicao;
     this.latitude = latitude;
     this.longitude = longitude;
}