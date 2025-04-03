import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';

const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const router = useRouter();
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar-custom');
            if (navbar) {
                if (window.scrollY > 0) {
                    navbar.classList.add('is-sticky');
                } else {
                    navbar.classList.remove('is-sticky');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check and cleanup...
    }, []);
    const navItems = [
        { id: 'home', label: 'HOME', path: '/' },
        {
            id: 'services',
            label: 'SERVICES',
            path: '/services',
            dropdown: [
                {
                    "category": "Shop Fronts",
                    "items": [
                        { "label": "ALUMINIUM SHOP FRONTS", "path": "/service/shop-fronts-aluminium" },
                        { "label": "GLASS SHOP FRONTS", "path": "/service/shop-fronts-glass" },
                        { "label": "TIMBER SHOP FRONTS", "path": "/service/shop-fronts-timber" },
                        { "label": "AUTOMATIC DOORS", "path": "/service/shop-fronts-automatic-doors" }
                    ]
                },
                {
                    "category": "Shutters",
                    "items": [
                        { "label": "PERFORATED ROLLER SHUTTERS", "path": "/service/shutters-perforated" },
                        { "label": "PUNCHED ROLLER SHUTTERS", "path": "/service/shutters-punched" },
                        { "label": "GRILLE ROLLER SHUTTERS", "path": "/service/shutters-grille" }
                    ]
                },
                {
                    "category": "Other Services",
                    "items": [
                        { "label": "CURTAIN WALL SYSTEM", "path": "/service/curtain-wall" },
                        { "label": "WINDOWS & DOORS", "path": "/service/windows-doors" },
                        { "label": "PROTECTION SCREEN", "path": "/service/protection-screen" }
                    ]
                }
            ]
        },
        { id: 'repair', label: 'REPAIR SERVICE', path: '/repair' },
        {
            id: 'area',
            label: 'SERVICE AREAS',
            path: '/area',
            dropdown: [
                {
                    category: 'Regions',
                    items: [
                        { label: 'Hitchin', path: '/area/hitchin' },
                        { label: 'Ickleford', path: '/area/ickleford' },
                        { label: 'Pirton', path: '/area/pirton' },
                        { label: 'Letchworth', path: '/area/letchworth' },
                        { label: 'Baldock', path: '/area/baldock' },
                        { label: 'Stotfold', path: '/area/stotfold' },
                        { label: 'Arlesey', path: '/area/arlesey' },
                        { label: 'Shefford', path: '/area/shefford' },
                        { label: 'Stevenage', path: '/area/stevenage' },
                        { label: 'Welwyn Garden City', path: '/area/welwyn_garden_city' },
                        { label: 'Luton', path: '/area/luton' },
                        { label: 'Harpenden', path: '/area/harpenden' },
                        { label: 'Royston', path: '/area/royston' },
                        { label: 'Cambridge', path: '/area/cambridge' },
                        { label: 'Saffron Walden', path: '/area/saffron_walden' },
                        { label: 'Milton Keynes', path: '/area/milton_keynes' },
                        { label: 'Bedford', path: '/area/bedford' },
                        { label: 'Eaton Socon', path: '/area/eaton_socon' },
                        { label: 'Huntingdon', path: '/area/huntingdon' },
                        { label: 'St Albans', path: '/area/st_albans' }
                    ]
                }


            ]
        },
        { id: 'category', label: 'CATEGORY', path: '/category' },
        { id: 'about', label: 'ABOUT', path: '/about' },
        { id: 'blog', label: 'BLOG', path: '/blog' },
        { id: 'contact', label: 'CONTACT', path: '/contact' }
    ];


    // Check if current path is in a dropdown
    const isPathInDropdown = (path) => {
        for (const item of navItems) {
            if (item.dropdown) {
                for (const category of item.dropdown) {
                    for (const dropItem of category.items) {
                        if (dropItem.path === path) {
                            return item.id;
                        }
                    }
                }
            }
        }
        return null;
    };

    // Check if the path is active
    const isActive = (path) => {
        if (path === '/') {
            return router.pathname === '/';
        }
        return router.pathname === path || router.pathname.startsWith(path + '/');
    };

    const handleNavClick = () => {
        setIsExpanded(false);
    };

    return (
        <Navbar
            expand="lg"
            variant="dark"
            expanded={isExpanded}
            onToggle={(expanded) => setIsExpanded(expanded)}
            className="py-0 navbar-custom"
            sticky="top"
        >
            <Container>
                <Navbar.Brand className="d-lg-none">
                    {/* You can add your mobile logo here if needed */}
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        {navItems.map((item) => (
                            item.dropdown ? (
                                <NavDropdown
                                    key={item.id}
                                    title={
                                        <span>
                                            {item.label} <span className="dropdown-arrow">▾</span>
                                        </span>
                                    }
                                    id={`nav-dropdown-${item.id}`}
                                    className={`nav-dropdown ${isPathInDropdown(router.pathname) === item.id || isActive(item.path) ? 'active' : ''}`}
                                >
                                    {item.dropdown.map((category, idx) => (
                                        <div key={idx} className="dropdown-category">
                                            <div className="dropdown-category-title">{category.category}</div>
                                            {category.items.map((dropItem, index) => (
                                                <Link
                                                    key={index}
                                                    href={dropItem.path}
                                                    passHref
                                                    legacyBehavior
                                                >
                                                    <NavDropdown.Item
                                                        onClick={() => handleNavClick()}
                                                        className={`dropdown-item-custom ${isActive(dropItem.path) ? 'active' : ''}`}
                                                    >
                                                        {dropItem.label}
                                                    </NavDropdown.Item>
                                                </Link>
                                            ))}
                                            {idx < item.dropdown.length - 1 && <NavDropdown.Divider />}
                                        </div>
                                    ))}
                                </NavDropdown>
                            ) : (
                                <Link
                                    key={item.id}
                                    href={item.path}
                                    passHref
                                    legacyBehavior
                                >
                                    <Nav.Link
                                        className={`nav-link-custom ${isActive(item.path) ? 'active' : ''}`}
                                        onClick={() => handleNavClick()}
                                    >
                                        {item.label}
                                    </Nav.Link>
                                </Link>
                            )
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Container>

            <style jsx global>{`
                .navbar-custom {
                    background-color: #000000;
                    position: sticky;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1030;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                    opacity: 1;
                    padding: 0;
                }

                .nav-link-custom {
                    color: white !important;
                    transition: all 0.3s ease;
                    padding: 1rem 1.2rem;
                    font-size: 14px;
                    font-weight: 500;
                    position: relative;
                }

                .nav-link-custom:hover,
                .nav-link-custom.active {
                    color: white !important;
                    background-color: #b14c1a;
                }

                .nav-dropdown .dropdown-toggle {
                    position: relative;
                    color: white !important;
                    transition: all 0.3s ease;
                    padding: 1rem 1.2rem;
                    font-size: 14px;
                    font-weight: 500;
                }

                .dropdown-arrow {
                    font-size: 10px;
                    margin-left: 4px;
                }

                .nav-dropdown:hover .dropdown-toggle,
                .nav-dropdown.active .dropdown-toggle {
                    color: white !important;
                    background-color: #b14c1a;
                }

                .nav-dropdown .dropdown-toggle::after {
                    display: none;
                }

                .nav-dropdown .dropdown-menu {
                    background-color: #222;
                    border: none;
                    border-radius: 0;
                    padding: 0.25rem 0;
                    margin-top: 0;
                    min-width: 280px;
                    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
                    animation: fadeIn 0.3s ease;
                    height: 300px ;
                    overflow: auto
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .dropdown-category {
                    padding: 0.25rem 0;
                }

                .dropdown-category-title {
                    color: #ff6c22;
                    padding: 0.5rem 1.5rem;
                    font-weight: 600;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                }

                .dropdown-item-custom {
                    color: #e0e0e0 !important;
                    padding: 0.5rem 1.5rem 0.5rem 2rem;
                    transition: all 0.3s ease;
                    background-color: transparent;
                    font-size: 14px;
                }

                .dropdown-item-custom:hover,
                .dropdown-item-custom.active {
                    background-color: #3a4145 !important;
                    color: #ff6c22 !important;
                    border-left: 3px solid #ff6c22;
                    padding-left: calc(2rem - 3px);
                }

                .dropdown-divider {
                    border-top: 1px solid #3a4145;
                    margin: 0.5rem 1rem;
                    opacity: 0.5;
                }

                .navbar-toggler {
                    border-color: rgba(255,255,255,0.3);
                    padding: 0.375rem 0.5rem;
                }

                .navbar-toggler:focus {
                    box-shadow: 0 0 0 3px rgba(22, 185, 67, 0.25);
                    outline: none;
                }

                @media (max-width: 991px) {
                    .navbar-custom {
                        padding: 0.5rem 0;
                    }
                    
                    .navbar-collapse {
                        background-color: #000000;
                        padding: 1rem;
                        margin: 0 -1rem;
                        max-height: calc(100vh - 70px);
                        overflow-y: auto;
                        border-top: 1px solid #3a4145;
                    }

                    .navbar-brand {
                        margin-right: auto;
                    }
                    
                    .navbar-toggler {
                        margin-left: auto;
                    }

                    .nav-link-custom {
                        padding: 0.75rem 1rem;
                        margin: 0.25rem 0;
                        border-radius: 4px;
                        text-align: center;
                    }

                    .nav-link-custom:hover,
                    .nav-link-custom.active {
                        background-color: #2c3539;
                        padding-left: 1rem;
                        border-left: none;
                    }

                    .nav-dropdown .dropdown-toggle {
                        padding: 0.75rem 1rem;
                        margin: 0.25rem 0;
                        border-radius: 4px;
                        text-align: center;
                    }

                    .nav-dropdown.active .dropdown-toggle {
                        background-color: #2c3539;
                        padding-left: 1rem;
                        border-left: none;
                    }

                    .nav-dropdown .dropdown-menu {
                        background-color: #2c3539 !important;
                        border: none !important;
                        box-shadow: none;
                        padding: 0 !important;
                        margin: 0.5rem auto !important;
                        animation: none;
                        width: 90%;
                    }

                    .dropdown-category {
                        background-color: #2c3539;
                        margin: 0.5rem 0;
                        border-radius: 4px;
                        padding: 0.5rem 0;
                    }

                    .dropdown-item-custom {
                        padding: 0.5rem 1rem 0.5rem 1.5rem;
                        text-align: center;
                    }

                    .dropdown-item-custom:hover,
                    .dropdown-item-custom.active {
                        background-color: #3a4145 !important;
                        border-left: none;
                        padding-left: 1.5rem;
                    }

                    .dropdown-category-title {
                        padding: 0.5rem 1rem;
                        font-size: 13px;
                        text-align: center;
                    }
                }
            `}</style>
        </Navbar>
    );
};

export default Header;