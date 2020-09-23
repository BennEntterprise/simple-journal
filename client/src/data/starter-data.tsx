import { IJournal } from '../types'

export const Journals: Array<IJournal> = [
    {
        _id: 1,
        date: new Date(2020, 9, 22),
        heading: 'First Entry',
        text: 'This my first journal wooo'
    },
    {
        _id: 2,
        date: new Date(2020, 9, 23),
        heading: 'Getting to 2',
        text: 'I\'m going to record all my thoughts.... '
    },
    {
        _id: 3,
        date: new Date(2020, 9, 24),
        heading: '3rd One',
        text: 'This might never get used but its a good demo for react!'
    },
    {
        _id: 4,
        date: new Date(2020, 9, 25),
        heading: 'Most Recent',
        text: 'What music should I listen to while coding?'
    },
]

export const Users = [
    {
        _id: 1,
        username: 'kyle',
        password: 'testtest',
        journals: []
    }
]