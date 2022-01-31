import { combineReducers } from "redux"
import SignupReducer from "./SiginupReducer"
import SignInReducer from "./SigninReducer"
import CreateEventReducer from "./CreateEventReducer"
import UpdateEventReucer from "./UpdateEventReducer"
import DeleteEventReducer from "./DeleteEventReducer"
import CreateTicketReducer from "./CreateTicketReducer"
import UpdateTicketReducer from "./UpdateTicketReducer"
import DeleteTicketReducer from "./DeleteTicketReducer"
import CreateUserReducer from "./CreateUserReducer"
import UpdateUserReducer from "./UpdateUserReducer"
import DeleteUserReducer from "./DeleteUserReducer"
import ApproveEventReducer from "./ApproveEventReducer"
import RejectEventReducer from "./RejectEventReducer"
import AllTicketReducer from "./AllTicketsReducer"
import ApplyRefundReducer from "./ApplyRefundReducer"

export default combineReducers({
  SignupReducer,
  SignInReducer,
  CreateEventReducer,
  UpdateEventReucer,
  DeleteEventReducer,
  CreateTicketReducer,
  UpdateTicketReducer,
  DeleteTicketReducer,
  CreateUserReducer,
  UpdateUserReducer,
  DeleteUserReducer,
  ApproveEventReducer,
  RejectEventReducer,
  AllTicketReducer,
  ApplyRefundReducer,
})
