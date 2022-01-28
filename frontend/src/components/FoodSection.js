import React, { useContext, useState, useRef, useEffect, useLayoutEffect } from 'react';
import CardMenu from './CardMenu';
import { jenisMenu, daftarMenu } from '../data-menu';
import { withCookies, useCookies } from 'react-cookie';
import swal from 'sweetalert';
import { LoginContext } from './Context/LoginContext';
import axios from 'axios';
import Isotope from 'isotope-layout';

const FoodSection = (props) => {
  // const isotope = React.useRef(Isotope);
  const isoRef = useRef(Isotope);
  const [isotope, setIsotope] = useState(null);
  
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = React.useState('*');

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
        console.log(response.data)
    }

    const toggleActive = (index) => {
        setJenis({ ...jenis, activeMenu: jenis.objectMenu[index].id })
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
      getAllMenus();

      console.log(isotope);
      
      if (isotope === null) {
        setIsotope(isoRef.current);
      }

      // if (isotope) {
      //   console.log(isotope.current);
      //   isotope.reloadItems();
      // }
      // else{
      //   setIsotope(new Isotope(isoRef.current));
      // }
    }, [isotope]);

    useLayoutEffect(() => {
      if(cookies.cart) {
        let cartArr = cookies.cart;

        setCart(cartArr);
  
        // console.log(cartArr);
      }
    }, [cookies]);

    const handleFilterKeyChange = key => () => {
      if (isotope.current === undefined) {
        isotope.current = new Isotope('.grid', {
          itemSelector: '.all',
          layoutMode: 'fitRows',
        });
      }

      let jenisIndex = jenisMenu.find(element => element.jenis === key);

      toggleActive(jenisIndex.id);

      if(key === 'All') {
        isotope.current.arrange({filter: `*`})
      } else {
        isotope.current.arrange({filter: `.${key}`})
      }
    };

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
                          return (
                            <li className={toggleStyle(index)} onClick={handleFilterKeyChange(`${item.jenis}`)} key={index}>{item.jenis}</li>
                          )
                        })}
                    </ul>

                    <div className="filters-content">
                      <div className="row grid" ref={isoRef}>
                          {menu.map((item, index) => {
                              return (
                                <CardMenu jenis={jenis.objectMenu[item.jenis].jenis} nama={item.nama} deskripsi={item.deskripsi} harga={item.harga} image={item.gambar} onClick={() => addToCart(item)} key={index} auth={auth} />
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

// $(window).on('load', function () {
//   $('.filters-menu li').click(function () {
//     $('.filters-menu li').removeClass('active');
//     $(this).addClass('active');

//     var data = $(this).attr('data-filter');
//     $grid.isotope({
//       filter: data
//     })
//   });

//   var $grid = $(".grid").isotope({
//     itemSelector: ".all",
//     percentPosition: false,
//     masonry: {
//       columnWidth: ".all"
//     }
//   })
// });

export default withCookies(FoodSection);