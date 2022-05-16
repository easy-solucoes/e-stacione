export const parkingSpaces = [
     new CreateNewParkingSpace('Centro', 'Inatel', -22.256707970525966, -45.69516828189166),
     new CreateNewParkingSpace('Centro', 'Inatel', -22.256699166070494, -45.695144255589405),
     new CreateNewParkingSpace('Centro', 'Inatel', -22.25691140891416, -45.69540979428176),
]


function CreateNewParkingSpace(bairro, instituicao, latitude, longitude){
     this.bairro = bairro;
     this.instituicao = instituicao;
     this.latitude = latitude;
     this.longitude = longitude;
}