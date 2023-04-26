import { createBrowserRouter } from 'react-router-dom';
import About from '../../About/About';
import Appointment from '../../Appointment/Appointment/Appointment';
import Contact from '../../Contact/Contact';
import Home from '../../Home/Home/Home';
import Main from '../../Layout/Main';
import Login from '../../Login/Login';
import Reviews from '../../Reviews/Reviews';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/appointment',
                element: <Appointment/>,
            },
            {
                path: '/about',
                element: <About />,

            },
            {
                path: '/reviews',
                element: <Reviews />,

            },
            {
                path: '/contact',
                element: <Contact />,

            },
            {
                path: '/login',
                element: <Login />
            },


        ]
    }
])