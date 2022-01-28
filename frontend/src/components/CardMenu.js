import React from 'react'

const CardMenu = (props) => {
    // console.log(props);
    return (
        <div className={`col-sm-6 col-lg-4 all ${props.jenis}`}>
            <div className="box">
                <div>
                    <div className="img-box">
                        <img src={`http://localhost:5000/images/${props.image}`} alt={`${props.nama}`} />
                    </div>
                    <div className="detail-box">
                        <h5>{props.nama}</h5>
                        <p>{props.deskripsi}</p>
                        <div className="options">
                            <h6>{props.harga}</h6>
                            {!props.auth && <button onClick={props.onClick}><i className="bi bi-cart"></i></button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardMenu