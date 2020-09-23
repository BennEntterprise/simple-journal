import { CREATE_JOURNAL } from '../actionTypes/journal'
import { v4 as uuidv4 } from 'uuid'

export const addNewJournal = (nj: any) => {
    nj._id = uuidv4()
    console.log(nj)
    return {
        type: CREATE_JOURNAL,
        payload: nj
    }
}