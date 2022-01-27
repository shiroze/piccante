import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { withCookies, useCookies } from 'react-cookie';
import { LoginContext } from './Context/LoginContext';

const Navbar = (props) => {
    const history = useNavigate();
    const [auth, setAuth] = useContext(LoginContext);
    const [show, setShow] = useState(false);
    const [cookies, setCookies] = useCookies(['cart']);
    const [count, setCount] = useState(0);
    const showHandler = () => {
        setShow(!show)
    }

    const handleLogout = () => {
      localStorage.removeItem('authenticated');

      window.location.reload();
    }

    React.useLayoutEffect(() => {
      if(cookies.cart) {
        let cartCount = cookies.cart;
        
        setCount(cartCount.length);
      }

      // console.log(auth);
    }, [cookies, count, auth]);

    return (
        <>
            <nav className="navbar navbar-main navbar-expand-md" style={{ backgroundColor: "#580e0dff" }}>
                <div className="container">
                    <a className="navbar-brand" href="index.html">
                        <img src={"img/Logo.png"} width="170" height="150" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" onClick={showHandler}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="main_nav" style={show ? { display: "block" } : { display: 'none' }}>
                        <ul className="navbar-nav me-auto mt-3 ml-2">
                          {
                            !auth &&
                            <>
                              <li className="nav-item mr-4">
                                <Link className="nav-link" to="/" style={{ fontSize: "17px", textDecoration: "none" }}>Home</Link>
                              </li>
                              <li className="nav-item mr-4">
                                <Link className="nav-link" to="/daftarmenu" style={{ fontSize: "17px", textDecoration: "none" }}>Menu</Link>
                              </li>
                              <li className="nav-item mr-4">
                                <Link className="nav-link" to="/about" style={{ fontSize: "17px", textDecoration: "none" }}>Tentang</Link>
                              </li>
                              <li className="nav-item mr-4">
                                <Link className="nav-link" to="/booking" style={{ fontSize: "17px", textDecoration: "none" }}>Book Table</Link>
                              </li>
                            </>
                          }
                        </ul>
                        <div className="user-option mt-3">
                            {
                              auth ? 
                                <>
                                  <Link className="cart-link" to="/admin">
                                    <i className="bi bi-cart-fill"></i>
                                  </Link>
                                  <Link className="cart-link" to="/listBooking">
                                    <i className="bi bi-calendar-event"></i>
                                  </Link>
                                  <button className="user-link" style={{ backgroundColor: 'transparent', borderColor: 'transparent', color: 'white' }} onClick={handleLogout}>
                                      Logout <i className="bi bi-box-arrow-right"></i>
                                  </button>
                                </>
                              :
                              <>
                                <Link className="user-link" to="/login">
                                  Login Admin <i className="bi bi-key"></i>
                                </Link>
                                <Link className="order-online" to="/cart">
                                  Order Online ( {count} )
                                </Link>
                              </>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default withCookies(Navbar)