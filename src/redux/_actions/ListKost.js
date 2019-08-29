import axios from 'axios'
import varGlobal from '../../enviroment/VarGlobal'

//listKost
export const ambilKost = () => {
    return {
        type: 'GET_HOUSE',
        payload: axios.get(`${varGlobal.host}/houses`)
    }
}

// export const sortKost = (sortBy,typeSort) => {
//     return {
//         type: 'GET_HOUSE_SORT',
//         payload: axios.get(`${VarGlobal.host}/houses/sort/${sortBy}/${typeSort}`)
//     }
// } 
