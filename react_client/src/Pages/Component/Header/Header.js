import React, { useState, useEffect } from 'react';
import { Button, Form, Navbar, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faSearch, faShoppingBag, faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { useCookies } from 'react-cookie';

const Header = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);

  const navigate = useNavigate();

  useEffect(() => {
    const token = cookies.token;
    if (token) {
      setIsLoggedIn(true);
      setUsername(username);
    }
  }, [cookies]);

  const handleLogout = (e) => {
    // Cập nhật trạng thái đăng nhập
    setIsLoggedIn(false);

    // Xóa token khỏi cookie
    removeCookie('token');

    // Điều hướng người dùng đến trang đăng nhập
    navigate('/');
  };

  return (
    <>
    <div className="header">
    <Container>
        <Row className="justify-content-center">
          <Navbar className='Navbar' expand="lg">
            <Col xs lg="4">
              <Navbar.Brand href="/">
               <img src={`https://localhost:7217/Image/Logo/LogoDEMO.png`} alt="Logo" className="logo-image" ></img>
              </Navbar.Brand>
            </Col>
            <Col xs lg="3">
              <Form className="d-flex">
                <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                <Button type="submit" variant='secondary'>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </Col>
            <Col xs lg="2" className="d-flex justify-content-center">
              <Link to="/shopping-bag" className='LinkHeader'>
                <FontAwesomeIcon icon={faShoppingBag} className="shopping-icon" />
              </Link>
            </Col>
            <Col xs lg="1" className="d-flex justify-content-center">
              <Link to="/favorites" className='LinkHeader'>
                <FontAwesomeIcon icon={faHeart} className="favorite-icon" />
              </Link>
            </Col>
            <Col xs lg="2" className="d-flex justify-content-end">

              {isLoggedIn ? (
                <DropdownButton id="dropdown-basic-button" title={<FontAwesomeIcon icon={faUser} />}>
                  <Dropdown.Item onClick={handleLogout}>Đăng xuất</Dropdown.Item>
                </DropdownButton>
              ) : (
                <DropdownButton id="dropdown-basic-button" title={<FontAwesomeIcon icon={faUser} />}>
                  <Dropdown.Item href="/login">Đăng nhập</Dropdown.Item>
                  {!cookies.token && <Dropdown.Item href="/register">Đăng ký</Dropdown.Item>}
                </DropdownButton>
              )}
            </Col>
          </Navbar>
        </Row>
        </Container>
        </div>
    </>
  );
};

export default Header;