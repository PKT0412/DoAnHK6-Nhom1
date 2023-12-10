import React from 'react';
import { Button, Form, Navbar, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import "./Header.css";

const Header = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-md-center">
          <Navbar bg="light" expand="lg">
            <Col xs lg="4">
              <Navbar.Brand href="/">MTD STORE</Navbar.Brand>
            </Col>
            <Col xs lg="3">
              <Form className="d-flex">
                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                <Button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </Col>
            <Col xs lg="2" className="d-flex justify-content-center">
              <Link>
                <FontAwesomeIcon icon={faShoppingBag} className="shopping-icon" />
              </Link>
              <Link>
                <FontAwesomeIcon icon={faHeart} className="favorite-icon" />
              </Link>
            </Col>
            <Col xs lg="3" className="d-flex justify-content-end">
              <DropdownButton id="dropdown-basic-button" title={<FontAwesomeIcon icon={faUser} />}>
                <Dropdown.Item href="/Login">Đăng nhập</Dropdown.Item>
                <Dropdown.Item href="/Register">Đăng ký</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Navbar>
        </Row>
      </Container>
    </>
  );
};

export default Header;