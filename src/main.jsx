
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Root from './Components/Root/Root';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import PagesToRead from './Components/PagesToRead/PagesToRead';
import BookDetails from './Components/BookDetails/BookDetails';
import Error from './Components/Error/Error';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import { Toaster } from 'react-hot-toast';
import ReadBooks from './Components/ReadBooks/ReadBooks';
import WishlistBooks from './Components/WishlistBooks/WishlistBooks';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/bookdetails/:bookId",
        element: <BookDetails/>,
        loader: () => fetch(`/book.json`),
       
      },
      {
        path: "/listbooks",
        element: <PrivateRoute><ListedBooks/></PrivateRoute>, 
        children: [
          {
           
            index: true,
             element: <ReadBooks/>,
           },
           {
             path: "wishlists",
             element: <WishlistBooks/>,
           },
       
        ]
      },
      {
        path: "/pagesread",
        element: <PagesToRead/>
      },
    
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/login",
        element: <Login/>
      },
      {
        path: "/register",
        element: <Register/>
      },
     
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='container mx-auto'>
    <AuthProvider>
    <RouterProvider router={router}>
      
    </RouterProvider>
    </AuthProvider>
    <Toaster/>
  </div>,
)
