import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Register from './pages/Register/Register';
import Splash from './pages/Splash';
import Agenda from './pages/Agenda';
import { ThankYou } from './pages/ThankYou/ThankYou';
import { AppProvider } from './contexts/AppProvider';

export default function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Splash />} />
            <Route
              path="register"
              element={<Register />}
            />
            <Route
              path="thank-you"
              element={<ThankYou />}
            />
            <Route
              path="agenda"
              element={<Agenda />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )

}