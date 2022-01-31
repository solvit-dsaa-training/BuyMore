import * as type from "../Actions/ActionTypes/type"

const initialState = {
  rejectEvent: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const RejectEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.REJECT__EVENT__START:
      return {
        ...state,
        rejectEvent: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.REJECT__EVENT__SUCCESS:
      return {
        ...state,
        rejectEvent: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.REJECT__EVENT__FAILURE:
      return {
        ...state,
        rejectEvent: {
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

export default RejectEventReducer
