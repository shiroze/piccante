import React, { useContext, useState, useEffect, useLayoutEffect } from 'react';
import CardMenu from './CardMenu';
import { jenisMenu, daftarMenu } from '../data-menu';
import { withCookies, useCookies } from 'react-cookie';
import swal from 'sweetalert';
import { LoginContext } from './Context/LoginContext';
import axios from 'axios';

const FoodSection = (props) => {
  const [cookies, setCookies] = useCookies(['cart']);
  const [auth, setAuth] = useContext(LoginContext);

    const [jenis, setJenis] = useState({
        activeMenu: 0,
        objectMenu: jenisMenu
    });

    const [menu, setMenu] = useState([]);

    const [cart, setCart] = useState([]);

    const getAllMenus = async () => {
        const response = await axios.get('http://localhost:5000/api/menu');
        setMenu(response.data);
    }

    const toggleActive = (index) => {
        setJenis({ ...jenis, activeMenu: jenis.objectMenu[index].id })

        if (index === 0) {
            setMenu([...daftarMenu])
        } else {
            const filtered = daftarMenu.filter((item) => {
                return item.jenis === jenis.objectMenu[index].jenis
            })
            setMenu([...filtered])
        }
    };

    const toggleStyle = (index) => {
        if (index === jenis.activeMenu) {
            return "active"
        } else {
            return ""
        }
    };

    const addToCart = (item) => {
      let updIndex = (cookies.cart) ? cookies.cart.findIndex(element => element.nama == item.nama) : -1;
      let arr;
      const newObj = {'nama': item.nama, 'jenis': item.jenis, 'qty': 1, 'harga': item.harga, 'total': item.harga * 1};

      arr = [...cart, newObj];

      setCart(arr);

      setCookies('cart', arr, {path : '/'});

      // // Di Pakai kalau ada revisi permintaan dosen penguji
      // if (updIndex >= 0) {
      //   arr = cookies.cart.slice();

      //   console.log(updIndex, arr[updIndex].qty);

      //   arr[updIndex].qty = arr[updIndex].qty + 1;

      //   setCart(arr);

      //   setCookies('cart', arr, {path : '/'});
      // } else {
      //   arr = [...cart, newObj];

      //   setCart(arr);

      //   setCookies('cart', arr, {path : '/'});
      // }

      swal("Success!", item.nama + " Berhasil masuk keranjang", "success");
    };

    useEffect(() => {
        getAllMenus()
    }, []) // [] untuk agar dijalankan hanya saat unmounted

    useLayoutEffect(() => {
      if(cookies.cart) {
        let cartArr = cookies.cart;

        setCart(cartArr);
  
        // console.log(cartArr);
      }
    }, [cookies]);

    return (
        <div className="container mt-5">
            <section className="food-section layout-padding-bottom">
                <div className="container">
                    <div className="heading-container heading-center pt-2">
                        <h2>
                            Menu Makanan
                        </h2>
                    </div>

                    <ul className="filters-menu">
                        {jenis.objectMenu.map((item, index) => {
                            if (index === 0) {
                                return (
                                    <li className={toggleStyle(index)} onClick={() => { toggleActive(index) }} key={index}>{item.jenis}</li>
                                )
                            }
                            else {
                                return (
                                    <li className={toggleStyle(index)} onClick={() => { toggleActive(index) }} key={index}>{item.jenis}</li>
                                )
                            }

                        })}

                    </ul>

                    <div className="filters-content">
                        <div className="row grid">
                            {menu.map((item, index) => {
                                return (
                                    <CardMenu jenis={item.jenis} nama={item.nama} deskripsi={item.deskripsi} harga={item.harga} image={index + 1} onClick={() => addToCart(item)} key={index} auth={auth} />
                                )
                            })}
                        </div>
                    </div>

                    <div className="btn-box">
                        <a href="#">
                            Selanjutnya
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default withCookies(FoodSection);