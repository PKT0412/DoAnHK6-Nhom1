import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get(`https://localhost:7217/api/Carts`).
      then(res => setCart(res.data));
  }, []);

  const increaseQuantity = (id) => {
    // Cập nhật số lượng sản phẩm
    const updatedItems = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCart(updatedItems);
  };

  const decreaseQuantity = (id) => {
    // Cập nhật số lượng sản phẩm
    const updatedItems = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });

    setCart(updatedItems);
  };

  const removeItem = (id) => {
    // Xoá sản phẩm khỏi giỏ hàng
    const updatedItems = cart.filter((item) => item.id !== id);
    setCart(updatedItems);
  };

  return (
    <>
      <Header />
      {/* Phần điều hướng về trang sản phẩm */}
      <div className="breadcrumb"> 
      <ul >
        <li style={{ display: "inline", marginLeft: "15px" }}>
          <Link to={"/"} style={{ color: "#515154" }}>
            Trang chủ
          </Link>
        </li>
        <span>›</span>
        <li style={{ display: "inline" }}>
          <Link to={"/Cart"} style={{ color: "#515154" }}>
            Giỏ hàng
          </Link>
        </li>
      </ul>
      </div>
      <Table>
              <thead className="table-light">
                <tr>
                  <th>Hình Ảnh</th>
                  <th>Tên Sản Phẩm</th>
                  <th>Giá Bán</th>
                  <th>Số Lượng</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id}>
                    <td>
                      {
                        <img
                          src={`https://localhost:7217/Image/PhoneModel/${item.name}/${item.image}`}
                          alt=""
                          style={{ width: 150 }}
                        />
                      }
                    </td>
                    <td>
                      <div>{item.name}</div>
                    </td>
                    <td>{item.oldPrice} VNĐ</td>

                    <td>
                      <Button
                        className="btn btn-danger"
                      >
                        <FontAwesomeIcon icon={faTrash}> </FontAwesomeIcon>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
      <Footer />
    </>
  );
};

export default Cart;
