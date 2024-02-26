import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { Login,AuthLayout} from './component/index.js'
import ForInvestors from './pages/ForInvestors.jsx'
import NGOSupport from './pages/NGOSupport.jsx'
import AddPost from "./pages/AddPost";
import SignUp from './pages/Signup';
import EditPost from "./pages/EditPost";
import UserGuide from './pages/UserGuide.jsx'
import Post from "./pages/Post";
import ForFarmers from './pages/ForFarmers.jsx'
import AllPosts from "./pages/AllPosts";
import AllServices from './pages/AllServices.jsx'
const router= createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "/all-services",
            element: (
                <AuthLayout authentication={false}>
                    <AllServices />
                </AuthLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <AuthLayout authentication={false}>
                    <SignUp />
                </AuthLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AllPosts />
                </AuthLayout>
            ),
        },
        {
            path: "/for-farmers",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <ForFarmers />
                </AuthLayout>
            ),
        },
        {
            path: "/user-guide",
            element: (
                <AuthLayout authentication>
                    {" "}
                <UserGuide />
                </AuthLayout>
            ),
        },
        {
            path: "/ngo-support",
            element: (
                <AuthLayout authentication>
                    {" "}
                <NGOSupport />
                </AuthLayout>
            ),
        },
        {
            path: "/for-investors",
            element: (
                <AuthLayout authentication>
                    {" "}
                <ForInvestors />
                </AuthLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)