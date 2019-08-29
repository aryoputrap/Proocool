initialState = {
    isListKost: false,
    onLogin: false,
    thisToken: 'Ini Token Nya Broo',
    noPage: 0,
    dataItem: '',
    isModalVisible: false,
    isLoading: false,
    isRejectAdd:false,
    isDoneAdd:false
}

const ListKost = (state = initialState, action) => {
    switch (action.type){

        //fetch data awal
        case 'GET_HOUSE':
            return{
                ...state,
                isLoading: true,
            }

        case 'GET_HOUSE_PENDING':
            return{
                ...state,
                dataItem: null,
                isLoading: true,
            }

        case 'GET_HOUSE_FULFILLED':
            return{
                ...state,
                dataItem: action.payload.data,
                isLoading: false,
            }

        case 'GET_HOUSE_REJECTED':
            return{
                ...state,
                isListKost: false,
                error: payload.message
            }

        default:
            return state;
    }
}

export default ListKost