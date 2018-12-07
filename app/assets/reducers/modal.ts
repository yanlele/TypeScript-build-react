// Import action

import {ActionType} from '../types/redux';

const INIT_STATE = {
    loading: false, // Fetch data loading
    loadingForm: false, // Form submit loading
    loadingPage: false, // Page change loading
    loadingTable: false, // Loading table
    pageWarn: '' // page warn
};

export default function(state = INIT_STATE, action) {
    switch (action.type) {
    case ActionType.UPDATE_MODAL:
        return {
            ...state,
            ...action.data
        };
    default:
        return state;
    }
}
