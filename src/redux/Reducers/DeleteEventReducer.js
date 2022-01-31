import * as type from "../Actions/ActionTypes/type"

const initialState = {
  deleteEvent: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const DeleteEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE__EVENT__START:
      return {
        ...state,
        deleteEvent: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.DELETE__EVENT__SUCCESS:
      return {
        ...state,
        deleteEvent: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.DELETE__EVENT__FAILURE:
      return {
        ...state,
        deleteEvent: {
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

export default DeleteEventReducer
