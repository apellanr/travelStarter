//API Key: AIzaSyBlkx51nA8l_I0msmC8VvFSjEbRAtcelME

var service;
var location;

// function ItineraryObj () {
//     this.timeCreated = new Date();
//     this.tags = [];
//     this.listItems = [
//          idNumber;
// ];
// }

function CityObj (){
    this.name = null;
    this.images = [];
    this.metadata = {
        'latlong': [],
        'locality': [],
        'entityType': ['city']
    };
    this.recommendations = []
}

// function PoiObj () {
//     this.idNumber = null;
//     this.name = null;
//     this.rating = null;
//     this.address = null;
//     this.description = null;
//     this.images = [];
//     this.metadata = {
//         'latlong': [],
//         'locality': [],
//         'entityType': ['pointOfInterest'],
//     }
// }

//madrid


function storeCityData() {
    var madrid = new CityObj;
    var placeIdObj = {
        placeId: 'ChIJgTwKgJcpQg0RaSKMYcHeNsQ'
    };
    service = new google.maps.places.PlacesService($('#nada').get(0));
    service.getDetails(placeIdObj, callback);
    function callback(place, status){
        if(status === 'OK'){
            generatePois();
            console.log(place);

            var imageURL = null;
            madrid.name = 'Madrid';
            for (var i = 0; i < place.photos.length; i++) {
                imageURL = "" + place.photos[i].getUrl({'maxWidth': 500, 'maxHeight': 500});
                madrid.images.push(imageURL);
            }
        }
    }


    function generatePois(){
        $.ajax({
            url: 'https://www.triposo.com/api/v2/poi.json?location_id=Madrid',
            method: 'get',
            dataType: 'json',
            data: {
                'account': 'Z3R6JX1X',
                'token': 'w8haxij8ysa6iv2jocnijnnk21wr9gwt'
            },
            success: function (result) {
                madrid.metadata.locality = 'Spain';
                for(var i = 0; i < result.results.length; i++) {
                    madrid.recommendations.push(result.results[i])
                }
                console.log(JSON.stringify(madrid))
            }
        });
    }
}