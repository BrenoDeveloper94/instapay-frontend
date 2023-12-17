import { Outlet } from "react-router-dom"
import PrivateRouter from "./routes/PrivateRoutes"
import Header from "./components/Header"
import Nav from "./styles/Nav"
import Sidebar from "./styles/Sidebar"
import Page from "./styles/Page"
import Main from "./styles/Main"
import NavBar from "./components/NavBar"
import NavFooter from "./components/NavFooter"
import useFunctions from "./hooks/useFunctions"


const App = () =>{

const {actionmenu, activemenu} = useFunctions()

return(
    <>
        <PrivateRouter>
            <Nav>
                <Header activemenu={actionmenu} />
            </Nav>
            <Sidebar activestylemenu={activemenu == false ? 'false' : 'true'}>
                <NavBar />
            </Sidebar>
            <Page>
                <Main>
                    <Outlet />
                </Main>  
            </Page>
            <NavFooter />
        </PrivateRouter>
    </>
    )
}

export default App