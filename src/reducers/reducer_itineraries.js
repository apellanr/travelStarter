import drafts from '../draftdata';
import saved from '../saved_data';

const DEFAULT_STATE = {
    list: [
        {  place: "Los Angeles",
            name:"LA TRIP",
            locations:['Venice Beach', 'LACMA','Rose Café'],
            image: "http://es.discoverlosangeles.com/sites/default/files/styles/article_section/public/media/Activities/venice-beach-sign-es.jpg?itok=BzdOFdTU"
        },
        {  place: "Madrid",
            name:  "Tapas All Day",
            locations:['Mercado San Miguel', 'Retiro Park','Royal Palace of Madrid (Palacio Real)'],
            image: "https://i2.wp.com/farm6.staticflickr.com/5686/22238573266_32e6fc7c68_o.jpg?resize=728%2C485&ssl=1"
        },
        {  place: "Florence",
            name: "Find the best gelato spot",
            locations:['Duomo', 'Piazzale Michelangelo','Gelateria Dei Neri'],
            image: "http://media.cntraveler.com/photos/57719b2a4a3399cb31f9da7a/master/pass/florence-01-duomo-GettyImages-504655313.jpg"
        }
    ],
    active: null
};
export default function(state = DEFAULT_STATE, action) {
    switch(action.type){
        case 'ITINERARY_SELECTED':
            return {...state, active: action.payload};
        case 'CLOSE_ITINERARY':
            return {...state, active: null};
        case 'GET_DRAFTS':
            return { ...state, list: drafts.list};
        case 'SAVED_DRAFTS':
            return {...state, list: saved.list};
        default:
            return state;
    }
}