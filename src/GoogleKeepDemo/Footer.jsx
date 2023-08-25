import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <>
            <div className='footter'>
                <footer>
                    <p> CopyRight © {year}</p>
                </footer>
            </div>
        </>
    )
}

export default Footer;
