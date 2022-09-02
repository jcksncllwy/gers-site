import './index.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import RegisterAttendee from './pages/RegisterAttendee/RegisterAttendee';
import Splash from './pages/Splash/Splash';
import { ThankYou } from './pages/ThankYou/ThankYou';
import { AppProvider } from './contexts/AppProvider';
import { RegistrationType } from './pages/RegistrationType/RegistrationType';
import { Speakers } from './pages/Speakers/Speakers';
import { Collaborators } from './pages/Collaborators/Collaborators';
import { Sponsors } from './pages/Sponsors/Sponsors';
import { Agenda } from './pages/Agenda/Agenda';

export default function App() {

  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Splash />} />
            <Route
              path="register-type"
              element={<RegistrationType />}
            />
            <Route
              path="register"
              element={<RegisterAttendee />}
            />
            <Route
              path="speakers"
              element={<Speakers />}
            />
            <Route
              path="collaborators"
              element={<Collaborators />}
            />
            <Route
              path="agenda"
              element={<Agenda />}
            />
            <Route
              path="sponsors"
              element={<Sponsors />}
            />
            <Route
              path="thank-you"
              element={<ThankYou />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  )

}