import { GET_ALL_JOURNALS, CREATE_JOURNAL } from '../actionTypes/journal'


import { Journals } from '../../data/starter-data'
const initialState = {
    journalList: [...Journals]
}

export default (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ALL_JOURNALS:
            return {
                ...state,
                journalList: Journals
            }
        case CREATE_JOURNAL:
            return {
                ...state,
                journalList: [...state.journalList, action.payload]
            }
        default:
            return {
                ...state
            }
    }
}