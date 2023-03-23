import * as actionTypes from './actionTypes';

const initState = {
    roomsLeft: 10,
    economyRoomsLeft: 5,
    businessRoomsLeft: 5,
    activitySlotsLeft: 10,
    billiardSlotsLeft: 5,
    swimmingSlotsLeft: 5
}

const Reducer = (state=initState,action) => {
    switch (action.type) {
        case actionTypes.DISCARD_ROOM:
            return {
                ...state,
                roomsLeft: state.roomsLeft-1
            }
            
        case actionTypes.DISCARD_ECONOMY_ROOM:
            return {
                ...state,
                economyRoomsLeft: state.economyRoomsLeft-1
            }
        case actionTypes.DISCARD_BUSINESS_ROOM:
            return {
                ...state,
                businessRoomsLeft: state.businessRoomsLeft-1
            } 
        case actionTypes.DISCARD_ACTIVITY_SLOT:
            return {
                ...state,
                activitySlotsLeft: state.activitySlotsLeft-1
            }  
        case actionTypes.DISCARD_BILLIARD_SLOT:
            return {
                ...state,
                billiardSlotsLeft: state.billiardSlotsLeft-1
            }
        case actionTypes.DISCARD_SWIMMING_SLOT:
            return {
                ...state,
                swimmingSlotsLeft: state.swimmingSlotsLeft-1
            }
        default:
            return state
    }      
}

export default Reducer;