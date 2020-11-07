import {GET_ITEMS_QUERY} from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_ITEMS_QUERY:
            switch (action.payload[0]){
                case 'apple':
                    return {
                        ...state,
                        apple: action.payload[1]
                    }
                case 'samsung':
                    return {
                        ...state,
                        samsung: action.payload[1]
                    }
                case 'watch':
                    return {
                        ...state,
                        watch:action.payload[1]

                    }


            }
        default:
            return state;
    }
};