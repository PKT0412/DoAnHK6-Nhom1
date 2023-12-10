import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={4}>
            <h3 className="footer-heading">MTD Store</h3>
            <p className="footer-text">Địa chỉ: 65 Huỳnh Thúc Kháng, phường Bến Nghé, Quận 1, Thành Phố HCM</p>
            <p className="footer-text">Email: mtdstore@gmail.com</p>
            <p className="footer-text">SĐT: 0123456789</p>
          </Col>
          <Col md={4}>
            <h3 className="footer-heading">Danh mục</h3>
            <ul className="footer-list">
              <li className="footer-item"><a href="/">Trang chủ</a></li>
              <li className="footer-item"><a href="/products">Sản phẩm</a></li>
              <li className="footer-item"><a href="/services">Dịch vụ</a></li>
              <li className="footer-item"><a href="/about">Về chúng tôi</a></li>
              <li className="footer-item"><a href="/contact">Liên hệ</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h3 className="footer-heading">Kết nối với chúng tôi</h3>
            <ul className="footer-social-icons">
              <li className="footer-social-icon"><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></li>
              <li className="footer-social-icon"><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></li>
              <li className="footer-social-icon"><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></li>
              <li className="footer-social-icon"><a href="https://linkedin.com"><i className="fab fa-linkedin-in"></i></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="footer-bottom">
        <Container>
          <p className="footer-text">&copy; 2023 MTDStore. Bảo lưu mọi quyền.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;