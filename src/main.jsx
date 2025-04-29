import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import { HomePage } from './routes/HomePage.jsx';
import { PostListPage } from './routes/PostListPage.jsx';
import { LoginPage } from './routes/LoginPage.jsx';
import { RegisterPage } from './routes/RegisterPage.jsx';
import { Write } from './routes/Write.jsx';
import { SinglePostPage } from './routes/SinglePostPage.jsx';
import { MainLayout } from './layouts/MainLayout.jsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/posts",
        element: <PostListPage />,
      },
      {
        path: "/:slug",
        element: <SinglePostPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/write",
        element: <Write />,
      },
    ],
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
