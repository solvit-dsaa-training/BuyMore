import * as type from "../Actions/ActionTypes/type"

const initialState = {
  login: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const SignInReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN__USER__START:
      return {
        ...state,
        login: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.LOGIN__USER__SUCCESS:
      return {
        ...state,
        login: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.LOGIN__USER__FAILURE:
      return {
        ...state,
        login: {
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

export default SignInReducer
