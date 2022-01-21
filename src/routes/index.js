import { Routes, Route } from "react-router-dom"
import Home from "../Components/Home/Home"
import About from "../Components/About/About"
import Contact from "../Components/ContactUs/Contact"
import EVentDetails from "../Components/EventDetails/EVentDetails"
import AdminDashboard from "../Components/Dashboard/AdminDashboard/dashboard"
import UserDashboard from "../Components/Dashboard/userDashboard/dashboard"
import ClientDashboard from "../Components/Dashboard/ClientDashboard/ClientDashboard"

/**
 *All app routings
 *
 * @return {*}
 */

const EventRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/event/details" element={<EVentDetails />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/client/dashboard" element={<ClientDashboard />} />
    </Routes>
  )
}
export default EventRoutes
