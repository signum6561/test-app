import BlogPost from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import Login from '@/pages/Login';
import MainPage from '@/pages/MainPage';
import Recovery from '@/pages/Recovery';
import Register from '@/pages/Register';
import UserPage from '@/pages/UserPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/users',
    element: <UserPage />,
  },
  {
    path: '/blogpost',
    element: <BlogPost />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/recovery',
    element: <Recovery />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
]);
