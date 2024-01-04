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
import { faHand, faHeart } from "@fortawesome/free-solid-svg-icons";
import Header from "../Component/Header/Header.js";
import axiosClient from "../Component/axiosClient";
import Footer from "../Component/Footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Home = () => {
  // Lấy ra userID
  // const [userId, setUserId] = useState(null);
  // const navigate = useNavigate();

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
  // // Viết logic để trích xuất userId từ chuỗi sang cookie
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

  // Add to Wishlist
  // const [exWishList, setExWishList] = useState([]);
  // useEffect(() => {
  //   axiosClient
  //     .get(`https://localhost:7217/api/WishLists/GetWishListByuUser/${userId}`)
  //     .then((res) => setExWishList(res.data));
  // }, [userId]);
  // const handleWishList = (id, e) => {
  //   e.prventDefault();
  //   const exitstingItem = exWishList.find((item) => item.phoneId === id);
  //   console.log(`exitstingItem`, exitstingItem);
  //   if (userId) {
  //     const newWishList = {
  //       userId: userId,
  //       phoneId: id,
  //       quantity: 1,
  //     };
  //     axiosClient
  //       .post(`https://localhost:7217/api/WishLists`, newWishList)
  //       .then(() => {
  //         navigate("/Wishlist");
  //       });
  //   } else {
  //     navigate("/Login");
  //   }
  // };
  // Add to favorite
  // const addToWishList = async (phoneModelId) => {
  //   if (userId) {
  //     try {
  //       await axiosClient.post(`https://localhost:7217/api/WishLists`, {
  //         userId: userId,
  //         phoneModelId: phoneModelId,
  //       });
  //       alert("Sản phẩm đã được yêu thích");
  //     } catch (error) {
  //       console.error("Lỗi khi yêu thích sản phẩm", error);
  //     }
  //   } else {
  //     alert("Bạn cần đăng nhập để chọn sản phẩm yêu thích");
  //     window.location.href = "/Login";
  //   }
  // };

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
                          // onClick={handleWishList}
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
