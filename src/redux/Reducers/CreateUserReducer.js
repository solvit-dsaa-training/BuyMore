import * as type from "../Actions/ActionTypes/type"

const initialState = {
  createUser: {
    message: null,
    laoding: false,
    error: null,
    success: false,
  },
}

const CreateUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.CREATE__USER__START:
      return {
        ...state,
        createUser: {
          message: null,
          laoding: true,
          error: null,
          success: false,
        },
      }
    case type.CREATE__USER__SUCCESS:
      return {
        ...state,
        createUser: {
          message: action.payload,
          laoding: false,
          error: null,
          success: true,
        },
      }
    case type.CREATE__USER__FAILURE:
      return {
        ...state,
        createUser: {
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

export default CreateUserReducer
