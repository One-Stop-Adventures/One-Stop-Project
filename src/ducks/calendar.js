// import axios from 'axios'

// const initialState = {
//   fromDate: null,
//   toDate: null,
//   dates: []
// };

// const EDIT_DATE = "calendar/EDIT_DATE";
// const FETCH_DATE = 'calendar/FETCH_MEAL'

// export function editDate(date, id) {
//   axios.put(`/api/dashboard/${id}/calendar`, {
//     date: date
//   });
//   return {
//     type: EDIT_DATE,
//     payload: date
//   };
// }

// export function fetchDate(id){
//     const datePromise = axios.get(`/api/dashboard/${id}/meal`)
//     return {
//         type: FETCH_DATE,
//         payload: datePromise
//     }
// }

// export default function calendarReducer(state = initialState, action) {
//   switch (action.type) {
//     case EDIT_DATE:
//       return Object.assign({}, state, {
//         dates: [...state.calendar, action.payload]
//       });
//     default:
//       return state;
//   }
// }
