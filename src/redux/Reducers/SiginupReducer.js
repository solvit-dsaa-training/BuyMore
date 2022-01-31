import * as type from "../Actions/ActionTypes/type"

const initialState = {
  signup: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.SIGNUP__USER__START:
      return {
        ...state,
        signup: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.SIGNUP__USER__SUCCESS:
      return {
        ...state,
        signup: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.SIGNUP__USER__FAILURE:
      return {
        ...state,
        signup: {
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

export default signupReducer
