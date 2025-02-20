import { EventsUser } from "../components/Profile/EventsUser"
import { Profile } from "../components/Profile/Profile"
import { useAuth0 } from "@auth0/auth0-react"
export const ProfilePage = () => {
    const { user } = useAuth0();
  return (
    <div className="min-h-screen w-full bg-black text-white p-5 flex flex-col">
         <Profile user= {user}/>
         <EventsUser/>
    </div>
   
  )
}
