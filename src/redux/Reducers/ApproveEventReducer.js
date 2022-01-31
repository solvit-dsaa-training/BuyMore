import * as type from "../Actions/ActionTypes/type"

const initialState = {
  ApproveEvent: {
    message: null,
    laoding: false,
    error: null,
    success: false,
  },
}

const ApproveEventReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.APPROVE__EVENT__START:
      return {
        ...state,
        ApproveEvent: {
          message: null,
          laoding: true,
          error: null,
          success: false,
        },
      }
    case type.APPROVE__EVENT__SUCCESS:
      return {
        ...state,
        ApproveEvent: {
          message: action.payload,
          laoding: false,
          error: null,
          success: true,
        },
      }
    case type.APPROVE__EVENT__FAILURE:
      return {
        ...state,
        ApproveEvent: {
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

export default ApproveEventReducer
