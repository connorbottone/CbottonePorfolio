import React, { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Home';
import Projects from './pages/Projects';
import AboutMe from './pages/About-me';


export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'About-me') {
            return <AboutMe />;
        }

    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}
        </div>
    );
}
