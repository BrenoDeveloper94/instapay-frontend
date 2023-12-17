import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { LoginContext } from "../contexts/loginContext"

const PrivateRouter = ({children}) => {

    const {logged} = useContext(LoginContext)

    return logged ? children : <Navigate to={'/login'} />
}

export default PrivateRouter