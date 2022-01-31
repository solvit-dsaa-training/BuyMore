import * as type from "../Actions/ActionTypes/type"

const initialState = {
  allTickets: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const AllTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.TICKETS__SHOW__START:
      return {
        ...state,
        allTickets: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.TICKETS__SHOW__SUCCESS:
      return {
        ...state,
        allTickets: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.TICKETS__SHOW__FAILURE:
      return {
        ...state,
        allTickets: {
          message: null,
          loading: false,
          error: action.payload,
          success: false,
        },
      }
    default:
      return state
  }
}

export default AllTicketReducer
