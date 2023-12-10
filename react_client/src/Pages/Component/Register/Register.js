import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Header from '../Header/Header';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [birthDay, setBirthDay] = useState('');


  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`https://localhost:7217/api/Users/register`,
      username,
      password,
      fullname,
      email,
      address,
      phone,
      gender,
      birthDay).then(() => {
        navigate("/Register");
      });
  };

  return (
    <>
      <Header></Header>
      <Container className="d-flex justify-content-center align-items-center">
        <Form onSubmit={handleSubmit} className="w-50 p-4 rounded bg-light">
          <h3 className="mb-4 text-center">Đăng ký</h3>

          <Form.Group controlId="formBasicUsername">
            <Form.Label>Tài khoản</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập tài khoản"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicFullname">
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              type="fullname"
              placeholder="Nhập Họ tên"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Địa chỉ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập địa chỉ"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPhone">
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              placeholder="Nhập số điện thoại"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicBirthDay">
            <Form.Label>Ngày sinh</Form.Label>
            <Form.Control
              type="date"
              placeholder="Chọn ngày sinh"
              value={birthDay}
              onChange={(e) => setBirthDay(e.target.value)}
            />
          </Form.Group>

          <div className="my-4">
            <Form.Group controlId="formBasicGender">
              <Form.Label>Giới tính</Form.Label>
              <Row>
                <Col>
                  <Form.Check
                    type="radio"
                    label="Nam"
                    name="gender"
                    value="male"
                    checked={gender === 'male'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </Col>

                <Col>
                  <Form.Check
                    type="radio"
                    label="Nữ"
                    name="gender"
                    value="female"
                    checked={gender === 'female'}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </Col>
              </Row>
            </Form.Group>
          </div>

          <Button variant="primary" type="submit" className="w-100 mt-3">
            Đăng ký
          </Button>

          <Col className="d-flex justify-content-center">
            <p className="text-center">
              Đã có tài khoản?{' '}
              <a href="/Signin" className="text-decoration-none color-black" style={{ color: 'gray' }}>
                Đăng nhập
              </a>
            </p>
          </Col>
        </Form>
      </Container>
    </>
  );
};

export default Register;