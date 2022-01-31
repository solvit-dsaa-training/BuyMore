import * as type from "../Actions/ActionTypes/type"

const initialState = {
  event: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const CreateEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE__EVENT__START:
      return {
        ...state,
        event: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.CREATE__EVENT__SUCCESS:
      return {
        ...state,
        event: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.CREATE__EVENT__FAILURE:
      return {
        ...state,
        event: {
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

export default CreateEventReducer
