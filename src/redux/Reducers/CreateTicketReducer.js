import * as type from "../Actions/ActionTypes/type"

const initialState = {
  ticket: {
    message: null,
    laoding: false,
    error: null,
    success: false,
  },
}

const CreateTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE__TICKET__START:
      return {
        ...state,
        ticket: {
          message: null,
          laoding: true,
          error: null,
          success: false,
        },
      }
    case type.CREATE__TICKET__SUCCESS:
      return {
        ...state,
        ticket: {
          message: action.type,
          laoding: false,
          error: null,
          success: true,
        },
      }
    case type.CREATE__TICKET__FAILURE:
      return {
        ...state,
        ticket: {
          message: null,
          laoding: false,
          error: action.payload,
          success: false,
        },
      }
    default:
      return state
  }
}

export default CreateTicketReducer
