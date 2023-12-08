import React, { useEffect, useRef, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { useParams } from "react-router";
import axiosClient from "../Component/axiosClient";
import "./css/PhoneDetail.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PhoneDetailPage = () => {
  const SettingsSlider = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);
  const [hoveredImage, setHoveredImage] = useState("");
  const [largeImage, setLargeImage] = useState();
  const handleThumbnailClick = (imagePath, index) => {
    setHoveredImage(imagePath);
    setLargeImage(imagePath);
    sliderRef.current.slickGoTo(index);
  };

  const { id } = useParams();

  //const navigate = useNavigate();

  const [phoneModel, setPhoneModel] = useState({ brand: {} });
  useEffect(() => {
    axiosClient
      .get(`/PhoneModels/${id}`)
      .then((res) => setPhoneModel(res.data));
  }, [id]);

  // const [phones, setPhones] = useState([]);
  // useEffect(() => {
  //   axiosClient.get(`/Phones`).then((res) => setPhones(res.data));
  // }, []);

  const [colorPhones, setColorPhones] = useState([]);
  useEffect(() => {
    axiosClient
      .get(`/Phones/GetColors/${id}`)
      .then((res) => setColorPhones(res.data));
  }, [id]);

  const [storagePhones, setStoragePhones] = useState([]);
  useEffect(() => {
    axiosClient
      .get(`/Phones/GetStorages/${id}`)
      .then((res) => setStoragePhones(res.data));
  }, [id]);

  const [phoneByColorAndStorage, setPhoneByColorAndStorage] = useState({
    image: "",
  });

  //Ưu tiên hiển thị lại hình của phone
  useEffect(() => {
    if (handleThumbnailClick) {
      setLargeImage(phoneByColorAndStorage.image);
    }
  }, [phoneByColorAndStorage.image]);

  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  useEffect(() => {
    if (colorPhones.length > 0) {
      setSelectedColor(colorPhones[0]);
    }
  }, [colorPhones]);
  useEffect(() => {
    if (storagePhones.length > 0) {
      setSelectedStorage(storagePhones[0]);
    }
  }, [storagePhones]);

  const fetchPhoneByColorAndStorage = async () => {
    try {
      const response = await axiosClient.get(
        "/Phones/GetPhoneByColorAndStorage",
        {
          params: {
            id: id,
            color: selectedColor,
            storage: selectedStorage,
          },
        }
      );
      setPhoneByColorAndStorage(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // Gọi API khi selectedId, selectedColor, hoặc selectedStorage thay đổi
    if (selectedColor && selectedStorage) {
      fetchPhoneByColorAndStorage();
    }
  }, [selectedColor, selectedStorage]);

  const [phoneModelImages, setPhoneModelImages] = useState([]);
  useEffect(() => {
    const fetchPhoneModelImages = async () => {
      try {
        const response = await axiosClient.get(
          `/PhoneModelImages/GetPhoneModelImagesByPhoneModelId?id=${phoneModel.id}`
        );
        setPhoneModelImages(response.data);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      }
    };
    fetchPhoneModelImages();
  }, [phoneModel.id]);

  const [quantity, setQuantity] = useState(1);

  const reviewData = [
    { user: "Nguyen Van A", rating: 4, comment: "Sản phẩm tuyệt vời!" },
    {
      user: "Tran Thi B",
      rating: 5,
      comment: "Rất hài lòng với sản phẩm này.",
    },
  ];

  return (
    <>
      <Header />

      <Container>
        <Row>
          <Col md={7}>
            {/* Hình lớn */}
            <Image
              src={`https://localhost:7217/Image/PhoneModel/${
                phoneModel.name
              }/${hoveredImage || largeImage}`}
              fluid
              className="large-image"
            />

            {/* Hình nhỏ */}
            <Row className="mt-5">
              <Col md={12}>
                <div className="slider-container">
                  <Slider {...SettingsSlider} ref={sliderRef}>
                    {phoneModelImages.map((image, index) => (
                      <div key={image.id} className="slider-item">
                        <Image
                          src={`https://localhost:7217/Image/PhoneModel/${phoneModel.name}/${image.path}`}
                          alt="Hình nhỏ"
                          className="slider-image"
                          thumbnail
                          onClick={() =>
                            handleThumbnailClick(image.path, index)
                          }
                          onMouseEnter={() => setHoveredImage(image.path)}
                          onMouseLeave={() => setHoveredImage("")}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </Col>
            </Row>
          </Col>

          <Col md={5} className="phone-info">
            {/* Thông tin sản phẩm */}
            <h2>{phoneByColorAndStorage.name}</h2>
            <p>{phoneByColorAndStorage.price}đ</p>

            {/* Chọn dung lượng */}
            <h4>Chọn dung lượng:</h4>
            {storagePhones.map((item) => {
              return (
                <>
                  <Button
                    key={item}
                    style={{ marginRight: "5px" }}
                    variant={
                      selectedStorage === item ? "primary" : "outline-primary"
                    }
                    onClick={() => setSelectedStorage(item)}
                  >
                    {item}
                  </Button>
                </>
              );
            })}

            {/* Chọn màu */}
            <h4>Chọn màu:</h4>
            {colorPhones.map((item) => {
              return (
                <>
                  <Button
                    key={item}
                    style={{ marginRight: "5px" }}
                    variant={
                      selectedColor === item ? "primary" : "outline-primary"
                    }
                    onClick={() => setSelectedColor(item)}
                  >
                    {item}
                  </Button>
                </>
              );
            })}

            {/* Nút thêm vào giỏ hàng */}
            <Form.Group as={Row} controlId="quantity" className="mt-2">
              <Form.Label column sm={2}>
                Số lượng:
              </Form.Label>
              <Col sm={10} className="d-flex align-items-center">
                <Form.Control
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  size="sm"
                  style={{ width: "70px" }}
                />
              </Col>
            </Form.Group>

            {/* Nút thêm vào giỏ hàng */}
            <Button variant="danger" className="mt-3 d-block">
              Thêm vào giỏ hàng
            </Button>

            <Card className="DetailedConfiguration">
              <h3>Chi tiết cấu hình:</h3>
              <Card.Body>
                <Card.Text>Màn hình: {phoneModel.screen}</Card.Text>
                <Card.Text>
                  Hệ điều hành: {phoneModel.operatingSystem}
                </Card.Text>
                <Card.Text>Camera sau: {phoneModel.rearCamera}</Card.Text>
                <Card.Text>Camera trước: {phoneModel.frontCamera}</Card.Text>
                <Card.Text>Chip: {phoneModel.chip}</Card.Text>
                <Card.Text>RAM: {phoneModel.ram}</Card.Text>
                <Card.Text>
                  Dung lượng lưu trữ: {phoneByColorAndStorage.storage}
                </Card.Text>
                <Card.Text>Màu: {phoneByColorAndStorage.color}</Card.Text>
                <Card.Text>SIM: {phoneModel.sim}</Card.Text>
                <Card.Text>Pin, Sạc: {phoneModel.batteryAndCharger}</Card.Text>
                <Card.Text>Hãng: {phoneModel.brand.name}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md={12}>
            <h3>Đánh giá:</h3>
            {reviewData.map((review, index) => (
              <Card key={index} className="mb-3">
                <Card.Body>
                  <Card.Text>Người dùng: {review.user}</Card.Text>
                  <Card.Text>Đánh giá: {review.rating}/5</Card.Text>
                  <Card.Text>Bình luận: {review.comment}</Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default PhoneDetailPage;
