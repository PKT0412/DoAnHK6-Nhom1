import React, { useEffect, useMemo, useState } from "react";
import {
  Carousel,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Form,
  Image,
} from "react-bootstrap";
import "./css/HomeAndPhoneModelByBrand.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../Component/Header/Header.js";
import axiosClient from "../Component/axiosClient";
import Footer from "../Component/Footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
const Home = () => {
  // Lấy ra userID
  const [userId, setUserId] = useState(null);
  // const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["token"]);

  // const checkLoginStatus = () => {
  //   // Kiểm tra xem token đã tồn tại hay không
  //   if (cookies.token) {
  //     // Điều hướng đến trang chính
  //     navigate("WishList");
  //   }
  // };
  // useEffect(() => {
  //   const checkLoginStatus = async () => {
  //     try {
  //       axiosClient
  //         .post("https://localhost:7217/api/Users/login", {
  //           withCredentials: true,
  //         })
  //         .then((response) => {
  //           const token = response.data.token;
  //           // Lưu token vào cookie
  //           setCookie("token", token, { path: "/" });
  //           // Kiểm tra trạng thái đăng nhập sau khi đăng nhập thành công
  //           console.log(cookies.token);
  //           checkLoginStatus();
  //         });
  //     } catch (error) {
  //       console.log("Chưa đăng nhập yêu cầu đăng nhập", error);
  //     }
  //   };

  //   checkLoginStatus();
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axiosClient.get(
  //         `https://localhost:7217/api/Users/api/Users`
  //       );

  //       // Lấy userId từ cookies trong header response
  //       const cookies = response.headers["set-cookie"];
  //       const userIdCookie = cookies.find((cookie) =>
  //         cookie.includes("userId")
  //       );
  //       if (userIdCookie) {
  //         const userId = getUserIdFromCookie(userIdCookie);
  //         setUserId(userId);
  //       }
  //     } catch (error) {
  //       console.log("Error:", error);
  //     }
  //   };
  //   fetchData();
  // });
  // Viết logic để trích xuất userId từ chuỗi sang cookie
  // const getUserIdFromCookie = (cookie) => {
  //   const match = cookie.match(/userId=([^;]+)/);
  //   return match ? match[1] : null;
  // };

  const [slideshows, setSlideshows] = useState([]);
  useEffect(() => {
    axiosClient.get(`/SlideShows`).then((res) => setSlideshows(res.data));
  }, []);

  const [phoneModels, setPhoneModels] = useState([]);
  useEffect(() => {
    axiosClient.get(`/PhoneModels`).then((res) => setPhoneModels(res.data));
  }, []);

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axiosClient.get(`/Brands`).then((res) => setBrands(res.data));
  }, []);

  const addToWishList = (id) => {
    const newWishListItem = {
      status: true,
      userId: "b7f9820a-cc56-4d8a-ad3a-b309a7fda802",
      phoneModelId: id,
    };

    axiosClient
      .post("https://localhost:7217/api/WishLists", newWishListItem)
      .then(() => {
        navigate("/WishList");
      })
      .catch((error) => {
        // Handle error
        console.error("Failed to add item to cart:", error);
      });
    console.log(newWishListItem);
  };

  //Sắp xếp phonemodel theo giá
  const [selectedPrice, setSelectedPrice] = useState("decrease");
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  // Filter the phoneModels array based on selectedPrice
  const filteredPhoneModels = useMemo(() => {
    let filteredModels = [...phoneModels];

    if (selectedPrice === "decrease") {
      filteredModels.sort((a, b) => b.promotionalPrice - a.promotionalPrice);
    } else if (selectedPrice === "ascending") {
      filteredModels.sort((a, b) => a.promotionalPrice - b.promotionalPrice);
    }

    return filteredModels;
  }, [phoneModels, selectedPrice]);

  return (
    <>
      <Header />

      <section className="body-home">
        <Navbar expand="lg" className="menu">
          <Navbar.Brand className="home" href="/">
            Tất cả
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto ml-auto">
              <Row>
                {brands.map((brand) => (
                  <Col md={2}>
                    <Nav.Link
                      className="brand-link"
                      key={brand.id}
                      href={`/PhoneModelByBrand/${brand.id}`}
                    >
                      <Image
                        className="brand-img"
                        src={`https://localhost:7217/Image/Brand/${brand.image}`}
                        alt={brand.name}
                      />
                    </Nav.Link>
                  </Col>
                ))}
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Container>
          <Row className="slideshows">
            <Carousel interval={3000}>
              {slideshows.map((slideshow) => (
                <Carousel.Item
                  key={slideshow.id}
                  className="slideshow-container"
                >
                  <Image
                    className="slideshow-img"
                    src={`https://localhost:7217/Image/SlideShow/${slideshow.image}`}
                    alt={slideshow.id}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Row>

          <Row className="price-filter">
            <Col>
              <Form.Group controlId="priceFilter">
                <Form.Control
                  as="select"
                  value={selectedPrice}
                  onChange={handlePriceChange}
                  className="select-filter"
                >
                  <option value="decrease">Giá cao đến thấp</option>
                  <option value="ascending">Giá thấp đến cao</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="phonemodels">
            {filteredPhoneModels.map((item) => {
              return (
                <>
                  <Col sm={2} key={item.id}>
                    <Card className="phone-card">
                      <Link to={`/PhoneDetail/${item.id}`}>
                        <div className="card-img-container">
                          <Card.Img
                            variant="top"
                            src={`https://localhost:7217/Image/PhoneModel/${item.name}/${item.image}`}
                            className="card-img"
                          />
                        </div>
                      </Link>
                      <Card.Body>
                        <div className="card-content">
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>
                            <span className="old-price">
                              {item.oldPrice.toLocaleString()}đ
                            </span>
                            <br />
                            <span className="promational-price">
                              {" "}
                              {item.promotionalPrice.toLocaleString()}đ
                            </span>
                          </Card.Text>
                        </div>
                        <Link
                          to={""}
                          className="favorite-button"
                          onClick={() => addToWishList(item.id)}
                        >
                          <FontAwesomeIcon icon={faHeart} />
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
