import { Navigate } from "react-router-dom"

const ProtectedRoute = (props) => {
    const access_token = localStorage.access_token

    if(!access_token){
        return <Navigate to="/login" replace/>
    }

    return props.children
}
export default ProtectedRoute