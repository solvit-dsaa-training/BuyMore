import EventRoutes from "./routes"
import { BrowserRouter } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <EventRoutes />
    </BrowserRouter>
  )
}

export default App
