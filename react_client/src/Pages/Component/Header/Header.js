import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Navbar,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faSearch,
  faShoppingBag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      setUsername(localStorage.getItem("username"));
    }
  }, []);

  const handleLogout = (e) => {
    // Cập nhật trạng thái đăng nhập
    setIsLoggedIn(false);

    // Xóa token khỏi localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setUsername(null);

    // Reload lại trang web
    navigate("/");

    toast.success("Log out success!");
  };

  return (
    <>
      <div className="header">
        <Container>
          <Row className="justify-content-center">
            <Navbar className="Navbar" expand="lg">
              <Col xs lg="4">
                <Navbar.Brand href="/">
                  <img
                    src={`https://localhost:7217/Image/Logo/LogoDEMO.png`}
                    alt="Logo"
                    className="logo-image"
                  ></img>
                </Navbar.Brand>
              </Col>
              <Col xs lg="3">
                <Form className="d-flex">
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                  />
                  <Button type="submit" variant="secondary">
                    <FontAwesomeIcon icon={faSearch} />
                  </Button>
                </Form>
              </Col>
              <Col xs lg="2" className="d-flex justify-content-center">
                <Link to="/Cart" className="LinkHeader">
                  <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                </Link>
              </Col>
              <Col xs lg="1" className="d-flex justify-content-center">
                <Link to="/Wishlist" className="LinkHeader">
                  <FontAwesomeIcon icon={faHeart} className="icon" />
                </Link>
              </Col>
              <Col xs lg="2" className="d-flex justify-content-end">
                {username && (
                  <span style={{ color: "white", margin: "10px" }}>
                    Welcome {username}
                  </span>
                )}
                {isLoggedIn ? (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={<FontAwesomeIcon icon={faUser} />}
                  >
                    <Dropdown.Item onClick={handleLogout}>
                      Đăng xuất
                    </Dropdown.Item>
                  </DropdownButton>
                ) : (
                  <DropdownButton
                    id="dropdown-basic-button"
                    title={<FontAwesomeIcon icon={faUser} />}
                  >
                    <Dropdown.Item href="/login">Đăng nhập</Dropdown.Item>
                    {!localStorage.getItem("token") && (
                      <Dropdown.Item href="/register">Đăng ký</Dropdown.Item>
                    )}
                  </DropdownButton>
                )}
              </Col>
            </Navbar>
          </Row>
        </Container>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Header;
