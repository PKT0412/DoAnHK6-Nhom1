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
import { jwtDecode as jwt_decode } from "jwt-decode";

const Home = () => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState();
  const [isTokenDecoded, setTokenDecoded] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [wishlist, setWishList] = useState([]);

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

  useEffect(() => {
    if (userId) {
      axiosClient
        .get(`https://localhost:7217/api/WishLists/GetWishListByUser/${userId}`)
        .then((res) => setWishList(res.data))
        .catch((error) => {
          console.error("Failed to fetch wishlist:", error);
        });
    }
  }, [userId]);

  //check token
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      const decoded = jwt_decode(token);
      setUserId(
        decoded[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ]
      );
      setTokenDecoded(true);
      setIsAuthenticated(true);
    } else {
      setTokenDecoded(false);
    }
    console.log("check uerid", userId);
  }, [userId]);

  // useEffect(() => {
  //   addToWishList();
  // }, []);

  // AddtoWishList
  const addToWishList = (id) => {
    const newWishListItem = {
      status: true,
      userId: userId,
      phoneModelId: id,
    };

    axiosClient
      .post(`/WishLists`, newWishListItem)
      .then(() => {
        navigate(`/WishList`);
      })
      .catch((error) => {
        console.error("Failed to add item to wishlist:", error);
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
