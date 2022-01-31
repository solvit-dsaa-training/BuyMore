import * as type from "../Actions/ActionTypes/type"

const initialState = {
  updateUser: {
    message: null,
    laoding: false,
    error: null,
    success: false,
  },
}

const UpdateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.UPDATE__USER__START:
      return {
        ...state,
        updateUser: {
          message: null,
          laoding: true,
          error: null,
          success: false,
        },
      }
    case type.UPDATE__USER__SUCCESS:
      return {
        ...state,
        updateUser: {
          message: action.payload,
          laoding: false,
          error: null,
          success: true,
        },
      }
    case type.UPDATE__USER__FAILURE:
      return {
        ...state,
        updateUser: {
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

export default UpdateUserReducer
