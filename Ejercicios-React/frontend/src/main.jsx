import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import './styles/index.css'
import App from './App.jsx'
import Login from './Login.jsx'
import Activities from './Activities.jsx'

const root = document.getElementById("");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="./Activities.jsx" element={<Activities />} />
    </Routes>
  </BrowserRouter>,
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
  </StrictMode>,
)
