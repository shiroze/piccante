import React from 'react'

const Navbar = () => {
    return (
        <div className="row">
            <div className="div col-12">
                <nav className="navbar navbar-expand-lg navbar-light pt-3 pb-3 fixed-top" style={{ backgroundColor: "#580e0dff" }}>
                    <a className="navbar-brand" href="index.html">
                        <img src={"img/Logo.png"} width="90" height="62" style={{ marginTop: "10px" }} alt='logo-piccante' />
                    </a>
                </nav>
            </div>
        </div>
    )
}

export default Navbar