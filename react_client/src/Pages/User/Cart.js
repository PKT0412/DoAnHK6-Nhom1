import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Col, Form, FormControl, FormGroup, Row, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./css/Cart.css";


const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:7217/api/Carts`)
      .then((res) => setCart(res.data));
  }, []);

  const [phone, setPhone] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:7217/api/Phones`)
      .then((res) => setPhone(res.data));
  }, []);

  const [isUpdating, setIsUpdating] = useState(false);

  const updateCart = () => {
    setIsUpdating(true);

    // Cập nhật giỏ hàng

    setTimeout(() => {
      setIsUpdating(false);
      window.location.reload();
    }, 1000);
  };

  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectToHomePage = () => {
    setIsRedirecting(true);

    setTimeout(() => {
      setIsRedirecting(false);
      window.location.href = '/';
    }, 1000);
  };

  // const increaseQuantity = (id) => {
  //   // Cập nhật số lượng sản phẩm
  //   const updatedItems = cart.map((item) => {
  //     if (item.id === id) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     }
  //     return item;
  //   });

  //   setCart(updatedItems);
  // };

  // const decreaseQuantity = (id) => {
  //   // Cập nhật số lượng sản phẩm
  //   const updatedItems = cart.map((item) => {
  //     if (item.id === id && item.quantity > 1) {
  //       return { ...item, quantity: item.quantity - 1 };
  //     }
  //     return item;
  //   });

  //   setCart(updatedItems);
  // };

  // const removeItem = (id) => {
  //   // Xoá sản phẩm khỏi giỏ hàng
  //   const updatedItems = cart.filter((item) => item.id !== id);
  //   setCart(updatedItems);
  // };

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm này không?"
    );
    if (shouldDelete) {
      axios
        .delete(`https://localhost:7217/api/Carts/${id}`)
        .then(() => {
          setCart(cart.filter((item) => item.id !== id));
        })
        .catch((error) => {
          console.error("Lỗi xóa: ", error);
        });
    }
  };

  return (
    <>
      <Header />
      {/* Phần điều hướng về trang sản phẩm */}

      <div className="breadcrumb" style={{ display: "flex", flexDirection: "column", justifyContent: "center" , paddingLeft:"8cm"}}>
                <ul style={{  fontSize: "14px" }}>
          <li style={{ display: "inline", marginLeft: "15px" }}>
            <Link to={"/"} style={{ color: "#515154" }}>
              Trang chủ
            </Link>
          </li>
          <span style={{ margin: "0 5px" }}>›</span>
          <li style={{ display: "inline" }}>
            <Link to={"/Cart"} style={{ color: "#515154" }}>
              Giỏ hàng
            </Link>
          </li>
        </ul>
      </div>
      <div className="page-body">
        <Row className="row-body">
          <Col sm={8}>
          <Form style={{ backgroundColor: "white", padding: "10px" , marginTop:".5cm", marginLeft:"8cm"}}>
  <div className="table-container" style={{ border: "5px solid gray" }}>
                <Table className="small-table"> {/* Đặt lớp CSS cho bảng */}
                  <thead>
                    <tr>
                      <th>Hình Ảnh</th>
                      <th>Tên Sản Phẩm</th>
                      <th>Số Lượng</th>
                      <th>Giá Bán</th>
                      <th>Thao Tác</th>
                    </tr>
                  </thead>
                  <tbody >
                    {cart.map((item, index) => (
                      <tr key={item.id} className={index === cart.length - 1 ? 'no-border-bottom' : ''}>                      {/* Đặt lớp CSS cho dòng không có gạch đầu */}                    <td>
                        <img
                          src={`https://localhost:7217/Image/PhoneModel/${item.phone.phoneModel.name}/${item.phone.image}`}
                          alt=""
                          style={{ width: 150 }}
                        />
                      </td>
                        <td>{item.phone.name}</td>
                        <td>{item.quantity}</td>
                        <td>{item.phone.price.toLocaleString()} VNĐ</td>
                        <td>
                          <Button
                            className="btn btn-danger"
                            onClick={() => handleDelete(item.id)}
                          >
                            Xóa
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>

                </Table>
                <div>
                  <Button
                    style={{ float: "right", marginRight: "5px" }}
                    className="btn btn-outline-primary"
                    variant="outline-primary"
                    onClick={redirectToHomePage}
                    disabled={isRedirecting}
                  >
                    {isRedirecting ? "Đang chuyển trang..." : "Tiếp tục mua sắm"}
                  </Button>
                  <Button
                    style={{ float: "right", marginRight: "5px" }}
                    className="btn btn-outline-primary"
                    variant="outline-primary"
                    onClick={updateCart}
                    disabled={isUpdating}
                  >
                    {isUpdating ? "Đang cập nhật..." : "Cập nhật giỏ hàng"}
                  </Button>
                </div>
              </div>
            </Form>



          </Col>
          <Col sm={4}>
            <Form>
              <FormGroup>
                Tổng cộng
              </FormGroup>
              <FormGroup>

              </FormGroup>
            </Form>
          </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
