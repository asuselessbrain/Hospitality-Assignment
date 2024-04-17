import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ContactUs from './pages/ContactUs.jsx'
import UpdateProfile from './pages/UpdateProfile.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
import AuthProvider from './pages/AuthProvider.jsx'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Estate from './components/Estate.jsx'
import PrivateRoute from './routers/PrivateRoute.jsx'
import NotFound from './pages/NotFound.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

AOS.init();

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: '/estate/:id',
        element: <PrivateRoute>
          <Estate />
        </PrivateRoute>,
        loader: () => fetch('/fakeData.json')
      },
      {
        path: '/update-profile',
        element: <PrivateRoute>
           <UpdateProfile />
        </PrivateRoute>
      },
      {
        path: '/contact-us',
        element: <ContactUs />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/sign-up',
        element: <SignUp />
      },
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </>,
)
