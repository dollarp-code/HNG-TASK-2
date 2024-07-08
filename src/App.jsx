import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Cart, Checkout, Product, HomeLayout } from './pages/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/cart',
    element: <Cart />,
  },
  {
    path: '/product',
    element: <Product />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
