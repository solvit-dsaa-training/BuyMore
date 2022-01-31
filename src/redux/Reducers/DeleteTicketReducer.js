import * as type from "../Actions/ActionTypes/type"

const initialState = {
  deleteTicket: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const DeleteTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE__TICKET__START:
      return {
        ...state,
        deleteTicket: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.DELETE__TICKET__SUCCESS:
      return {
        ...state,
        deleteTicket: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.DELETE__TICKET__FAILURE:
      return {
        ...state,
        deleteTicket: {
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

export default DeleteTicketReducer
