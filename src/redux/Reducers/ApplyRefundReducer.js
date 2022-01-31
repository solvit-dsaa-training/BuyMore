import * as type from "../Actions/ActionTypes/type"

const initialState = {
  refund: {
    message: null,
    loading: false,
    error: null,
    success: false,
  },
}

const ApplyRefundReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.APPLY__REFUND__START:
      return {
        ...state,
        refund: {
          message: null,
          loading: true,
          error: null,
          success: false,
        },
      }
    case type.APPLY__REFUND__SUCCESS:
      return {
        ...state,
        refund: {
          message: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      }
    case type.APPLY__REFUND__FAILURE:
      return {
        ...state,
        refund: {
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

export default ApplyRefundReducer
