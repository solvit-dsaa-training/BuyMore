import * as type from "../Actions/ActionTypes/type"

const initialState = {
  update: {
    message: null,
    laoding: false,
    error: null,
    success: false,
  },
}

const UpdateEventReucer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE__EVENT__START:
      return {
        ...state,
        update: {
          message: null,
          laoding: true,
          error: null,
          success: false,
        },
      }
    case type.UPDATE__EVENT__SUCCESS:
      return {
        ...state,
        update: {
          message: action.payload,
          laoding: false,
          error: null,
          success: true,
        },
      }
    case type.UPDATE__EVENT__FAILURE:
      return {
        ...state,
        update: {
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
export default UpdateEventReucer
