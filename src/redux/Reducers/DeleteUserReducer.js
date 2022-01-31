import * as type from "../Actions/ActionTypes/type"

const initialState = {
  deleteUser: {
    message: null,
    laoding: false,
    error: null,
    success: false,
  },
}

const DeleteUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.DELETE__USER__START:
      return {
        ...state,
        deleteUser: {
          message: null,
          laoding: true,
          error: null,
          success: false,
        },
      }
    case type.DELETE__USER__SUCCESS:
      return {
        ...state,
        deleteUser: {
          message: action.payload,
          laoding: false,
          error: null,
          success: true,
        },
      }
    case type.DELETE__USER__FAILURE:
      return {
        ...state,
        deleteUser: {
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

export default DeleteUserReducer
