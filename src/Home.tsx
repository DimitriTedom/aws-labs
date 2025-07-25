import { useNavigate } from "react-router-dom"
import FormTitle from "./components/FormTitle"
import { Button } from "./components/ui/button"

const Home = () => {
    const Navigate = useNavigate()
  return (
        <div className="flex-center flex-col w-svw h-svh justify-center bg-[url(/grid.svg)]">
        <img src="/worketyamo.png" alt="Worketyamo" />
        <FormTitle title="Welcome To Home" comment="click on the login button to see the project"/>
        <Button className="bg-worketblue hover:bg-blue-900" onClick={()=>Navigate("/auth/login")}>Login</Button>
    </div>
  )
}

export default Home