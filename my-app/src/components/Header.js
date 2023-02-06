import React from 'react';


const page = ["Aboutme", "Portfolio", "Contactme", "Resume"];

const Header = ({ currentPage, setCurrentPage }) => {
    return (
        <div className="header">
            <h1 className="title">My Portfolio</h1>
            <div className="nav">
                {page.map((page) => (
                    <div
                        className={currentPage === page ? "navActive" : "nav"}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Header