import React, { useEffect, useState } from "react";
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
import Header from "../Component/Header";
import axiosClient from "../Component/axiosClient";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [phoneModels, setPhoneModels] = useState([]);
  useEffect(() => {
    axiosClient.get(`/PhoneModels`).then((res) => setPhoneModels(res.data));
  }, []);

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    axiosClient.get(`/Brands`).then((res) => setBrands(res.data));
  }, []);

  const [selectedPrice, setSelectedPrice] = useState("");

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };
  return (
    <>
      <Header />

      <Container>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Tất cả</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {brands.map((brand) => (
                <Nav.Link className="brand-link"
                  key={brand.id}
                  href={`/PhoneModelByBrand/${brand.id}`}
                >
                  <Image
                    src={`https://localhost:7217/Image/Brand/${brand.image}`}
                    alt={brand.name}
                    className="brand-img"
                  />
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjn1mddDlY0lLSkaQ3aQ1yyy9rj0zagcXIHg&usqp=CAU"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjn1mddDlY0lLSkaQ3aQ1yyy9rj0zagcXIHg&usqp=CAU"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjn1mddDlY0lLSkaQ3aQ1yyy9rj0zagcXIHg&usqp=CAU"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        <Row>
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
        <Row>
          {phoneModels.map((item) => {
            return (
              <>
                <Col sm={3}>
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
                        <Card.Text>{item.promotionalPrice}đ</Card.Text>
                      </div>
                      <Link to={"/WishList"} className="favorite-button">
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

      <Footer />
    </>
  );
};

export default Home;
