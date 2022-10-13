import NavBar from "../components/NavBar"
import {Outlet} from "react-router-dom"
const HomePage = () => {
    return (
        <main className="h-screen w-full banner">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </main>
    )
}

export default HomePage