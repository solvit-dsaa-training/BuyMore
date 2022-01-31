import * as type from "../Actions/ActionTypes/type"

const initialState = {
  google: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const GoogleAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GOOGLE__USER__START:
      return {
        ...state,
        google: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.GOOGLE__USER__SUCCESS:
      return {
        ...state,
        google: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.GOOGLE__USER__FAILURE:
      return {
        ...state,
        google: {
          message: null,
          loading: true,
          error: action.payload,
          success: false,
        },
      }
    default:
      return state
  }
}

export default GoogleAuthReducer
