import * as type from "../Actions/ActionTypes/type"

const initialState = {
  updateTicket: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const UpdateTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE__TICKET__START:
      return {
        ...state,
        updateTicket: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.UPDATE__TICKET__SUCCESS:
      return {
        ...state,
        updateTicket: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.UPDATE__TICKET__FAILURE:
      return {
        ...state,
        updateTicket: {
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

export default UpdateTicketReducer
