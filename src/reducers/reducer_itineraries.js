
const DEFAULT_STATE = {
    list: [
        {  place: "Madrid",
            name:"Museo del Prado",
            locations:['restaurant1', 'museum1','park1'],
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/1920px-Museo_del_Prado_2016_%2825185969599%29.jpg"
        },
        {  place: "Spain",
            name:  "Palacio Real",
            locations:['restaurant2', 'museum2','park2'],
            image: "https://www.esmadrid.com/sites/default/files/styles/content_type_full/public/recursosturisticos/infoturistica/PalacioReal_1404213219.138.jpg?itok=RCXQXsxQ"
        },
        {  place: "Europe",
            name: "Museo Thyssen-Bornemisza",
            locations:['restaurant3', 'museum3','park3'],
            image: "https://afrodita-production.s3.amazonaws.com/images/thyssen-museo-madrid-290716.original.jpg"

        }
    ],
    active: null
};

export default function(state = DEFAULT_STATE, action) {
    switch(action.type){
        case 'ITINERARY_SELECTED':
            console.log('Selected Itinerary:', state);
            return {...state, active: action.payload};
        default:
            console.log('Default reducer option:', state);
            return state;
    }
}
