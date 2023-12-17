import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { LoginProvider } from './contexts/loginContext.jsx'
import Users from './pages/Users.jsx'
import Profile from './pages/Profile.jsx'
import Proposal from './pages/Proposal.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Notifications from './pages/Notifications.jsx'
import Payments from './pages/Payments.jsx'
import Withdrawals from './pages/Withdrawals.jsx'
import ProposalCreate from './pages/ProposalCreate.jsx'
import Accepted from './pages/Accepted.jsx'
import MyProposal from './pages/MyProposal.jsx'
import Checkout from './pages/Checkout.jsx'
import Thanks from './pages/Thanks.jsx'
import PayConfirmation from './pages/PayConfirmation.jsx'
import RedefinePassword from './pages/RedefinePassword.jsx'
import GlobalStyle from './styles/GlobalStyle.jsx'
import ProfileUser from './pages/ProfileUser.jsx'
import ProfileBank from './pages/ProfileBank.jsx'


const router = createBrowserRouter([
    {
        path: '/', element: <App />,
        children:[
            {
                path: '/', element: <Home />
            },
            {
                path: '/user', element: <Users />
            },
            {
                path: '/user/profile/:id', element: <UserProfile />
            },
            {
                path: '/profile', element: <Profile />
            },
            {
                path: '/profile/user', element: <ProfileUser />
            },
            {
                path: '/profile/bank-account', element: <ProfileBank />
            },
            {
                path: '/proposal/:id', element: <Proposal />
            },
            {
                path: '/notifications', element: <Notifications />
            },
            {
                path: '/payments', element: <Payments />
            },
            {
                path: '/withdrawals', element: <Withdrawals />
            },
            {
                path: '/create/proposal', element: <ProposalCreate />
            },
            {
                path: '/accepted', element: <Accepted />
            },
            {
                path: '/proposal', element: <MyProposal />
            },
            {
                path: '/checkout/:id', element: <Checkout />
            },
            {
                path: '/thanks/:id', element: <Thanks />
            },
            {
                path: '/payment/confirmation', element: <PayConfirmation />
            },
        ]
    },
    {
        path: '/register', element: <Register />
    },
    {
        path: '/login', element: <Login />
    },
    {
        path: '/redefinepassword', element: <RedefinePassword />
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LoginProvider>
            <GlobalStyle />
            <RouterProvider router={router} />
        </LoginProvider>
    </React.StrictMode>,
)
