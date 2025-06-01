import react from 'react'
import router from './router/routes'
import { RouterProvider } from 'react-router-dom'

import './App.css'

function App(): react.JSX.Element {
 
  return (
    <RouterProvider router={router} />
  );
}

export default App
