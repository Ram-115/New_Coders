import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LogInPage from './Layout/LogIn/LogIn';
import Home from './Layout/HomePage';
import PostCard from './Components/Feeds';
import Networks from './Components/Networks';
import RegistrationForm from './Components/ChildEnrollment';
import WelcomePage from './Components/WelcomePage';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogInPage />} />
                <Route path="/home" element={<Home />}>
                    <Route path="welcome" element={<WelcomePage/>} />
                    <Route path="child-enrollment" element={<RegistrationForm />} />
                    <Route path="nutrition-health" element={<Networks />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes;