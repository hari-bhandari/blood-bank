import {
   CLEAR_BLOODS_REQUESTS, CLEAR_TOP_DONORS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    // case GET_CONTACTS:
    //   return {
    //     ...state,
    //     contacts: action.payload,
    //     loading: false
    //   };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(contact =>
          contact._id === action.payload._id ? action.payload : contact
        ),
        loading: false
      };
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
        topDonors:null
      }
    case CLEAR_BLOODS_REQUESTS:
      return {
        ...state,
        bloodRequests: null
      };
    // case CONTACT_ERROR:
    //   return {
    //     ...state,
    //     error: action.payload
    //   };
    default:
      return state;
  }
};
