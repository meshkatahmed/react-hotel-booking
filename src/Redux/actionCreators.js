import * as actionTypes from './actionTypes';

export const discardRoom = () => {
    return {
        type: actionTypes.DISCARD_ROOM
    }
}
export const discardEconomyRoom = () => {
    return {
        type: actionTypes.DISCARD_ECONOMY_ROOM
    }
} 
export const discardBusinessRoom = () => {
    return {
        type: actionTypes.DISCARD_BUSINESS_ROOM
    }
} 
export const discardActivitySlot = () => {
    return {
        type: actionTypes.DISCARD_ACTIVITY_SLOT
    }
} 
export const discardBilliardSlot = () => {
    return {
        type: actionTypes.DISCARD_BILLIARD_SLOT
    }
} 
export const discardSwimmingSlot = () => {
    return {
        type: actionTypes.DISCARD_SWIMMING_SLOT
    }
} 

