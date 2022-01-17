import { Routes, Route } from "react-router-dom"
import Landing from "../Components/Home/Home"
import About from "../Components/About/About"
import Contact from "../Components/ContactUs/Contact"
import EVentDetails from "../Components/EventDetails/EVentDetails"
import AdminDashboard from "../Components/Dashboard/AdminDashboard/dashboard"
import UserDashboard from "../Components/Dashboard/userDashboard/dashboard"

/**
 *All app routings
 *
 * @return {*}
 */

const EventRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/event/details" element={<EVentDetails />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
    </Routes>
  )
}
export default EventRoutes
