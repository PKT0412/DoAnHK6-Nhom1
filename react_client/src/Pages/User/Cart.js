import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import { useEffect, useState } from "react";
import axiosClient from "../Component/axiosClient";
import { Link } from "react-router-dom";
import { Table, Button, Row, Col, InputGroup, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "react-bootstrap";

const Cart = () => {
  const [cart, setCart] = useState([]);

  // Xử lý tổng tiền cửa các sán phẩm
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchCartItemsFromAPI = () => {
    return axiosClient
      .get(`https://localhost:7217/api/PhoneModels`)
      .then((res) => {
        setCart(res.data);
      });
  };

  useEffect(() => {
    fetchCartItemsFromAPI().catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  const calculateTotalPrice = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.oldPrice;
    });
    setTotalPrice(sum);
  };

  // Xử lý gỡ sản phẩm khỏi giỏ hàng
  const handleDelete = (id) => {
    const Delete = window.confirm("Bạn muốn gỡ sản phẩm này khỏi giỏ hàng");
    if (Delete) {
      axiosClient
        .delete(`https://localhost:7217/api/PhoneModels/${id}`)
        .then(() => {
          setCart(cart.filter((item) => item.id !== id));
        })
        .catch((error) => {
          console.error("Lỗi xóa", error);
        });
    }
  };

  // Xử lý tăng giảm số lượng sản phẩm
  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const [quantity, setQuantity] = useState(0);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  useEffect(() => {
    axiosClient.get(`https://localhost:7217/api/PhoneModels`).then((res) => {
      setCart(res.data);
    });
  }, []);

  return (
    <>
      <Header />
      {/* Phần điều hướng về trang sản phẩm */}
      <li style={{ display: "inline", marginLeft: "15px" }}>
        <Link to={"/"} style={{ color: "#515154" }}>
          Trang chủ
        </Link>
      </li>
      <span>|</span>
      <li style={{ display: "inline" }}>
        <Link to={"/Cart"} style={{ color: "#515154" }}>
          Giỏ hàng
        </Link>
      </li>
      {/*  Thêm sản phẩm vào giỏ hàng */}
      <Modal.Body>
        <Row>
          <Col
            md="7"
            style={{
              borderRadius: "12px",
              border: "1px solid",
              marginBottom: "10px",
            }}
          >
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
                    <td>{item.name}</td>
                    <td>{item.oldPrice}</td>
                    <td>
                      <div
                        className="quantity"
                        style={{
                          border: "1px ",
                          borderRadius: "12px",
                          background: "#F5F5F7",
                          padding: "6px 10px",
                          alignItems: "center",
                          display: "inline-flex",
                          justifyContent: "center",
                        }}
                      >
                        <button
                          onClick={decreaseQuantity}
                          style={{
                            border: "none",
                            padding: "1px",
                            marginRight: "20px",
                            backgroundColor: "transparent",
                            color: "#0099FF",
                            fontSize: "30px",
                          }}
                        >
                          -
                        </button>

                        {quantity}
                        <button
                          onClick={increaseQuantity}
                          style={{
                            border: "none",
                            padding: "1px",
                            marginLeft: "35px",
                            backgroundColor: "transparent",
                            color: "#0099FF",
                            fontSize: "20px",
                          }}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        <FontAwesomeIcon icon={faTrash}> </FontAwesomeIcon>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Link to="/Cart">
              <Button
                className="btn btn-primary"
                style={{
                  marginLeft: "15px",
                  marginBottom: "5px",
                  backgroundColor: "transparent",
                  color: "blue",
                }}
              >
                Cập nhật giỏ hàng
              </Button>
            </Link>
            <Link to="/">
              <Button
                className="btn btn-primary"
                style={{
                  marginBottom: "5px",
                  backgroundColor: "transparent",
                  color: "blue",
                  marginLeft: "20px",
                }}
              >
                Tiếp tục mua sắm
              </Button>
            </Link>
          </Col>
          <Col
            md={4}
            style={{
              borderRadius: "12px",
              border: "1px solid",
              marginBottom: "10px",
              marginLeft: "10px",
              height: "300px",
            }}
          >
            <div className="coupon-code" style={{ padding: "10px" }}>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Mã giảm giá"
                  aria-label="Voucher"
                  aria-describedby="basic-addon2"
                />
                <Button variant="secondary" id="basic-addon2">
                  Áp mã
                </Button>
              </InputGroup>
            </div>
            {/* Tỉnh tổng tiền sản phẩm */}
            <div>
              <ul>
                {cart.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <p>Tổng tiền: {totalPrice}</p>
            </div>
            <Link to={"/pay"}>
              <Button variant="primary" style={{ marginLeft: "150px" }}>
                Tiến hành đặt hàng
              </Button>
            </Link>
          </Col>
        </Row>
      </Modal.Body>
      <Footer />
    </>
  );
};

export default Cart;
