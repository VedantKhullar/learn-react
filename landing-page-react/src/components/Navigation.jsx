const Navigation = () => {
    return (
        <>
            <nav className='nav-container'>
                <div className='logo-container'>
                    <img src="/images/brand_logo.png" alt="logo" />
                </div>
                <div>
                    <ul className='header-list'>
                        <li>MENU</li>
                        <li>LOCATION</li>
                        <li>ABOUT</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div className='login'>
                    <button className='primary-btn'>Login</button>
                </div>
            </nav>
        </>
    );
}

export default Navigation;