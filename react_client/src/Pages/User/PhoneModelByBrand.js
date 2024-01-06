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
import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import axiosClient from "../Component/axiosClient";
import { Link, useParams } from "react-router-dom";

const PhoneModelByBrand = () => {
  const { BrandId } = useParams();

  const [slideshows, setSlideshows] = useState([]);
  useEffect(() => {
    axiosClient.get(`/SlideShows`).then((res) => setSlideshows(res.data));
  }, []);

  const [phoneModelsByBrand, setPhoneModelsByBrand] = useState([]);
  useEffect(() => {
    axiosClient
      .get(`/PhoneModels/GetPhoneModelsByBrand?BrandId=${BrandId}`)
      .then((res) => setPhoneModelsByBrand(res.data));
  }, [BrandId]);

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axiosClient.get(`/Brands`).then((res) => setBrands(res.data));
  }, []);

  //Sắp xếp phonemodel theo giá
  const [selectedPrice, setSelectedPrice] = useState("decrease");
  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  // Filter the phoneModels array based on selectedPrice
  const filteredPhoneModelsByBrand = useMemo(() => {
    let filteredModels = [...phoneModelsByBrand];

    if (selectedPrice === "decrease") {
      filteredModels.sort((a, b) => b.promotionalPrice - a.promotionalPrice);
    } else if (selectedPrice === "ascending") {
      filteredModels.sort((a, b) => a.promotionalPrice - b.promotionalPrice);
    }

    return filteredModels;
  }, [phoneModelsByBrand, selectedPrice]);
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
            {filteredPhoneModelsByBrand.map((item) => {
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
                        <Link to={"/WishList/"} className="favorite-button">
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

export default PhoneModelByBrand;
