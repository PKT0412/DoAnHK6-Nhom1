import { Link } from "react-router-dom";
import Footer from "../Component/Footer/Footer";
import Header from "../Component/Header/Header";
import React, { useState, useEffect } from "react";
import { Container, Modal, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
const Pay = () => {
  const [pay, setPay] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://localhost:7217/api/Carts").then(
      (response) => response.json()
    );
    setPay(response);
  };

  return (
    <>
      <Header />

      <h5 style={{ display: "inline", marginLeft: "15px" }}>
        <Link to={"/"} style={{ color: "#515154", textDecoration: "none" }}>
          Trang chủ
        </Link>
      </h5>
      <Container>
        <h1>Thông Tin Thanh Toán</h1>

        <div
          style={{
            borderRadius: "12px",
            border: "1px",
            overflow: "hidden",
          }}
        >
          <p style={{ marginLeft: "10px", float: "left" }}>
            Đăng nhập ngay để nhận được “điểm thưởng” hấp dẫn khi mua hàng thành
            công <br></br>các sản phẩm tại ShopDunk
          </p>
          <Link to={"/Login"}>
            <Button
              style={{
                float: "right",
                marginRight: "405px",
                marginTop: "7px",
              }}
            >
              Đăng nhập ngay
            </Button>
          </Link>
        </div>

        <div
          className="pay-method"
          style={{
            border: " 2px solid #ccc",
            borderRadius: "8px",
            marginBottom: "25px",
            padding: "16px 20px",
          }}
        >
          <InputGroup className="mb-3" style={{ marginTop: "15px" }}>
            <Form.Control
              placeholder="Tên"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Số điện thoại"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Email"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <h2>Hình thức nhận hàng</h2>
          <label style={{ marginRight: "15px" }}>
            <input type="radio" />
            Nhận tại cửa hàng
          </label>
          <label>
            <input type="radio" />
            Giao tận nơi
          </label>
          <Form.Select size="lg">
            <option>Chọn tỉnh thành phố</option>
          </Form.Select>
          <br />
          <Form.Select>
            <option>Quận</option>
          </Form.Select>
          <br />
          <Form.Select size="sm">
            <option>Huyện</option>
          </Form.Select>
          <div>
            <label style={{ marginTop: "25px" }}>
              <input
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              Xuất hóa đơn công ty
            </label>

            {isChecked && (
              <div>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Tên công ty"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Địa chỉ công ty"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Mã số thuế"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </div>
            )}
          </div>
        </div>

        <div
          style={{
            padding: "16px 20px",
            borderRadius: "8px",
            border: " 2px solid #ccc",
          }}
        >
          <h5>Thông tin thanh toán</h5>
          <p>Quý khách vui lòng lựa chọn các thanh toán dưới đây:</p>
          <div
            className="method-list"
            id="payment-method-block"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
            }}
          >
            <li style={{ listStyleType: "none", display: "block" }}>
              <label
                style={{
                  border: " 2px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "300px",
                }}
              >
                <input type="radio" style={{ marginRight: "10px" }} />
                {
                  <img
                    src="https://shopdunk.com/Plugins/Payments.Kredivo/logo.jpg"
                    width={30}
                    height={30}
                    alt="Thanh toán Kredivo"
                    style={{ marginRight: "5px" }}
                  />
                }
                <b>Thanh toán Kredivo</b>
              </label>
            </li>

            <li
              style={{
                listStyleType: "none",
                display: "block",
                marginTop: "10px",
              }}
            >
              <label
                style={{
                  border: " 2px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "300px",
                }}
              >
                <input type="radio" style={{ marginRight: "10px" }} />
                {
                  <img
                    src="https://shopdunk.com/Plugins/Payments.Payoo/logo.jpg"
                    width={30}
                    height={30}
                    alt="Thanh toán Kredivo"
                    style={{ marginRight: "5px" }}
                  />
                }
                <b>Thanh toán Payoo</b>
              </label>
            </li>
            <li
              style={{
                listStyleType: "none",
                display: "block",
                marginTop: "10px",
              }}
            >
              <label
                style={{
                  border: " 2px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "300px",
                }}
              >
                <input type="radio" style={{ marginRight: "10px" }} />
                {
                  <img
                    src="https://shopdunk.com/Plugins/Payments.Onepay/logo.jpg"
                    width={30}
                    height={30}
                    alt="Thanh toán Kredivo"
                    style={{ marginRight: "5px" }}
                  />
                }
                <b>Thanh toán Onepay</b>
              </label>
            </li>
            <li
              style={{
                listStyleType: "none",
                display: "block",
                marginTop: "10px",
              }}
            >
              <label
                style={{
                  border: " 2px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "300px",
                }}
              >
                <input type="radio" style={{ marginRight: "10px" }} />
                {
                  <img
                    src="https://shopdunk.com/Plugins/Payments.VietQr/logo.jpg"
                    width={30}
                    height={30}
                    alt="Thanh toán Kredivo"
                    style={{ marginRight: "5px" }}
                  />
                }
                <b>Chuyển khoản ngân hàng</b>
              </label>
            </li>
            <li
              style={{
                listStyleType: "none",
                display: "block",
                marginTop: "10px",
              }}
            >
              <label
                style={{
                  border: " 2px solid #ccc",
                  borderRadius: "8px",
                  padding: "20px",
                  width: "300px",
                }}
              >
                <input type="radio" style={{ marginRight: "10px" }} />
                {
                  <img
                    src="https://shopdunk.com/Plugins/Payments.VNPay/logo.jpg"
                    width={30}
                    height={30}
                    alt="Thanh toán Kredivo"
                    style={{ marginRight: "5px" }}
                  />
                }
                <b>Thanh toán VnPay</b>
              </label>
            </li>
          </div>
        </div>
        <div style={{ marginTop: "15px" }}>
          <h3>Đăng ký nhận tin từ ShopDunk</h3>
          <p style={{ marginLeft: "450px" }}>
            Thông tin sản phẩm mới nhất và chương trình khuyến mãi
          </p>
          <InputGroup
            className="mb-3"
            style={{ width: "450px", marginLeft: "440px" }}
          >
            <Form.Control
              placeholder="Email của bạn"
              aria-label="Voucher"
              aria-describedby="basic-addon2"
            />
            <Link to={"/Register"}>
              <Button
                variant="primary"
                id="basic-addon2"
                style={{ borderRadius: "8px" }}
              >
                Đăng ký
              </Button>
            </Link>
          </InputGroup>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default Pay;
