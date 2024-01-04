import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import { Container, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faHistory,
  faSearch,
  faGift,
  faMedal,
  faUser,
  faHeadset,
  faNoteSticky,
  faArrowAltCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Wishlist = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col
            md={3}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              marginBottom: "20px",
              height: "400px",
              fontSize: "25px",
            }}
          >
            <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
              <li>
                {" "}
                <FontAwesomeIcon
                  icon={faHouse}
                  style={{ marginRight: "15px" }}
                />
                Trang Chủ
              </li>
            </Link>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faHistory}
                style={{ marginRight: "15px" }}
              />
              Lịch sử mua hàng
            </li>
            <li>
              {" "}
              <FontAwesomeIcon
                icon={faSearch}
                style={{ marginRight: "15px" }}
              />
              Trang cứu bảo hành
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faGift} style={{ marginRight: "15px" }} />
              Ưu đãi của bạn
            </li>
            <li>
              {" "}
              <FontAwesomeIcon icon={faMedal} style={{ marginRight: "15px" }} />
              Hạng thành viên
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} style={{ marginRight: "15px" }} />
              Tài khoản của bạn
            </li>
            <li>
              <FontAwesomeIcon
                icon={faHeadset}
                style={{ marginRight: "15px" }}
              />
              Hỗ trợ
            </li>
            <li>
              <FontAwesomeIcon
                icon={faNoteSticky}
                style={{ marginRight: "15px" }}
              />
              Góp ý - Phản hồi
            </li>
            <li>
              <FontAwesomeIcon
                icon={faArrowAltCircleLeft}
                style={{ marginRight: "15px" }}
              />
              Thoát tài khoản
            </li>
          </Col>
          <Col
            md={8}
            style={{
              border: "1px solid #ccc",
              borderRadius: "12px",
              padding: "20px",
              marginTop: "20px",
              marginBottom: "20px",
              height: "400px",
              marginLeft: "10px",
            }}
          ></Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Wishlist;
