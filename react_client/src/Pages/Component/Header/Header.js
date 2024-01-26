import React, { useState, useEffect } from "react";
import {
  Button,
  Form,
  Navbar,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Image,
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
import { jwtDecode } from "jwt-decode";
import axiosClient from "../axiosClient";

const Header = () => {
  const [username, setUsername] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSeachResuls] = useState([]);
  const [searchMessage, setSearchMessage] = useState("");
  // const searchInputRef = useRef(null);

  // Check token
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwtDecode(token);
      setRole(
        decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"]
      );
    }
    console.log("check role", role);
  }, [role]);

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
  
    // Hiển thị thông báo đăng xuất thành công
    toast.success("Log out success!");
  
    // Load lại trang web sau 0.5 giây và chuyển về trang chủ
    setTimeout(() => {
      window.location.href = "/";
    }, 500);
  };

  const handleAdmin = () => {
    navigate("/admin");
  };

  const handleOrder = () => {
    navigate("/Order");
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    // Kiểm tra giá trị tìm kiếm có rỗng hay không
    if (query === "") {
      setSeachResuls([]);
      setSearchMessage("");
    } else {
      // Gửi yêu cầu tìm kiếm khi người dùng gõ chữ
      searchProduct(query);
    }
  };
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    const encodedQuery = encodeURIComponent(searchQuery);
    window.location.href = `/search?query=${encodedQuery}`;
  };

  const searchProduct = (query) => {
    axiosClient
      .get(`https://localhost:7217/api/PhoneModels?search=${query}`)
      .then((res) => {
        const phonemodels = res.data;

        const filteredPhoneModels = phonemodels.filter((phonemodel) =>
          phonemodel.name.toLowerCase().includes(query.toLowerCase())
        );
        if (filteredPhoneModels.length > 0) {
          setSeachResuls(filteredPhoneModels);
          setSearchMessage("");
        } else {
          setSeachResuls([]);
          setSearchMessage("Không tìm thấy sản phẩm.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
                <Form className="d-flex" onSubmit={handleSearchSubmit}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    className="mr-sm-2"
                    id="search-inp"
                    value={searchQuery}
                    onChange={handleInputChange}
                  />
                  <Link to={`/search?query=${encodeURIComponent(searchQuery)}`}>
                    {" "}
                    <Button
                      type="submit"
                      variant="secondary"
                      id="button-addon2"
                      onSubmit={handleSearchSubmit}
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </Link>
                </Form>
              </Col>
              {searchMessage && (
                <p style={{ marginBottom: "10px", display: "flex" }}>
                  {searchMessage}
                </p>
              )}
              {searchResults.length > 0 && (
                <div className="search-result">
                  {searchResults.map((item) => (
                    <Link to={`/PhoneDetail/:id/${item.id}`}>
                      <Image
                        src={`https://localhost:7217/Image/PhoneModel/${item.image}`}
                        style={{ width: "100px" }}
                        alt="Hình"
                      />
                      <div className="info">
                        <div className="name">{item.name}</div>
                        <div className="price">{item.oldPrice}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
              <Col xs lg="2" className="d-flex justify-content-center">
                {isLoggedIn ? (
                  <Link to="/Cart" className="LinkHeader">
                    <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                  </Link>
                ) : (
                  <Link to="/login" className="LinkHeader">
                    <FontAwesomeIcon icon={faShoppingBag} className="icon" />
                  </Link>
                )}
              </Col>
              <Col xs lg="1" className="d-flex justify-content-center">
                {isLoggedIn ? (
                  <Link to="/Wishlist" className="LinkHeader">
                    <FontAwesomeIcon icon={faHeart} className="icon" />
                  </Link>
                ) : (
                  <Link to="/login" className="LinkHeader">
                    <FontAwesomeIcon icon={faHeart} className="icon" />
                  </Link>
                )}
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
                    {isLoggedIn && role === "Admin" && (
                      <Dropdown.Item onClick={handleAdmin}>
                        Trang quản lý
                      </Dropdown.Item>
                    )}
                    <Dropdown.Item onClick={handleOrder}>
                      Quản lý đơn hàng
                    </Dropdown.Item>
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
