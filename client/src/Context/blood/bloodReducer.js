import {
  CLEAR_BLOODS_REQUESTS, CLEAR_TOP_DONORS, ERROR, GET_BLOOD_REQUESTS, GET_DONORS, REQUEST_BLOOD
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_BLOOD_REQUESTS:
      return {
        ...state,
        bloodRequests: action.payload,
        loading:false
      }
    case GET_DONORS:
      return {
        ...state,
        donors: action.payload,
        loading:false
      }

    // case FILTER_CONTACTS:
    //   return {
    //     ...state,
    //     filtered: state.contacts.filter(contact => {
    //       const regex = new RegExp(`${action.payload}`, 'gi');
    //       return contact.name.match(regex) || contact.email.match(regex);
    //     })
    //   };
    case CLEAR_TOP_DONORS:
      return {
        ...state,
        donors:null
      }
    case CLEAR_BLOODS_REQUESTS:
      return {
        ...state,
        bloodRequests: null
      };
    case ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
