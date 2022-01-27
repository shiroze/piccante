import React, { useState } from 'react'
import { ToggleButton } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const history = useNavigate();

    const [menu, setMenu] = useState(false)
    const [pengaturan, setPengaturan] = useState(false)
    const [transasksi, setTransaksi] = useState(false)

    const toggleMenu = () => {
        setMenu(!menu)
    }

    const togglePengaturan = () => {
        setPengaturan(!pengaturan)
    }

    const handleLogout = (e) => {
      e.preventDefault();

      localStorage.removeItem('authenticated');

      history('/login');
    }

    return (
        <div className="col-md-3" style={{ backgroundColor: "#ffffff" }}>
            <div className="sidebar">
                <ul className="sidebar-nav list-group">
                    <div className="sidebar-header d-flex align-item-center">
                        <img src={"img/admin.png"} width="80" height="80" className="rounded-circle mt-3" alt='logo' />
                        <div className="title ml-3">
                            <h5 className="mt-4" style={{ color: "#003048fa" }}>BlazingAural</h5>
                            <i className="bi bi-circle-fill text-success"></i><span className="ml-2" style={{ color: "#003048fa" }}>Online</span>
                        </div>
                    </div>
                </ul>
                <hr />
                <ul className="main-menu px-0 pb-0">
                    <a href="#" className="list-group-item list-group-action text-decoration-none font-weight-bold" style={{ color: "#003048fa" }}>
                        <i className="bi bi-speedometer2 mt-2 mr-2"></i> Dashboard
                    </a>

                    <a href="#" className="list-group-item list-group-action text-decoration-none font-weight-bold" onClick={toggleMenu} style={{ color: "#003048fa" }}>
                        <i className="bi bi-list-check mt-2 mr-2"></i> Menu
                        <i className="bi bi-caret-down-fill float-right"></i>
                    </a>
                    {menu ?
                        <div id="Menu">
                            <a href="/daftarMenu" className="list-group-item text-decoration-none" style={{ color: "#003048fa" }}> Daftar Menu</a>
                        </div> : null
                    }

                    <a href="#" className="list-group-item list-group-action text-decoration-none font-weight-bold" onClick={togglePengaturan} style={{ color: "#003048fa" }}>
                        <i className="bi bi-gear-fill mt-2 mr-2"></i> Pengaturan
                        <i className="bi bi-caret-down-fill float-right"></i>
                    </a>
                    {pengaturan ?
                        <div id="Pengaturan">
                            <input type={'button'} onClick={handleLogout} className="list-group-item text-decoration-none" style={{ color: "#000000" }}> Logout</input>
                        </div> : null
                    }

                </ul>

            </div>

        </div>
    )
}

export default Sidebar