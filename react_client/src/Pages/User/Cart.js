import Header from "../Component/Header/Header";
import Footer from "../Component/Footer/Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button, Col, Form, FormControl, FormGroup, Row, Table } from "react-bootstrap";
import "./css/Cart.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";



const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:7217/api/Carts`)
      .then((res) => setCart(res.data));
  }, []);

  const [phone, setPhone] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:7217/api/Phones`)
      .then((res) => setPhone(res.data));
  }, []);

  const [isUpdating, setIsUpdating] = useState(false);

  const updateCart = () => {
    setIsUpdating(true);

    // Cập nhật giỏ hàng

    setTimeout(() => {
      setIsUpdating(false);
      window.location.reload();
    }, 1000);
  };

  const [isRedirecting, setIsRedirecting] = useState(false);

  const redirectToHomePage = () => {
    setIsRedirecting(true);

    setTimeout(() => {
      setIsRedirecting(false);
      window.location.href = '/';
    }, 1000);
  };



  const increaseQuantity = async (id, phone) => {

    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

    try {
      // Gửi yêu cầu lấy thông tin sản phẩm từ cơ sở dữ liệu
      const response = await axios.get(`https://localhost:7217/api/Carts/${id}`);
      const cartItem = response.data;

      // Tăng số lượng của sản phẩm lên 1
      cartItem.quantity += 1;

      // Gửi yêu cầu cập nhật số lượng sản phẩm lên máy chủ
      const updatedResponse = await axios.put(`https://localhost:7217/api/Carts/${id}`, cartItem);
      const updatedItem = updatedResponse.data;

      // Cập nhật giỏ hàng với số lượng đã cập nhật
      const updatedItems = cart.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: updatedItem.quantity };
        }
        return item;
      });

      setCart(updatedItems);

      // Delay 0.5 giây và reload lại trang
      setTimeout(() => {
        window.location.reload();
      }, 50);
    } catch (error) {
      console.error('Lỗi khi cập nhật số lượng sản phẩm:', error);
    }
  };

  const decreaseQuantity = async (id, phone) => {
    const token = localStorage.getItem('token');
    const decodedToken = jwtDecode(token);
    const userId = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  
    try {
      // Gửi yêu cầu lấy thông tin sản phẩm từ cơ sở dữ liệu
      const response = await axios.get(`https://localhost:7217/api/Carts/${id}`);
      const cartItem = response.data;
  
      // Giảm số lượng của sản phẩm đi 1
      cartItem.quantity -= 1;
  
      // Kiểm tra nếu số lượng sản phẩm đã giảm xuống 0 hoặc âm, thì xóa sản phẩm khỏi giỏ hàng
      if (cartItem.quantity <= 0) {
        // Gửi yêu cầu xóa sản phẩm khỏi giỏ hàng
        await axios.delete(`https://localhost:7217/api/Carts/${id}`);
  
        // Cập nhật giỏ hàng với sản phẩm đã xóa bằng cách lọc ra các sản phẩm khác với id đã xóa
        const updatedItems = cart.filter((item) => item.id !== id);
  
        setCart(updatedItems);
      } else {
        // Gửi yêu cầu cập nhật số lượng sản phẩm lên máy chủ
        const updatedResponse = await axios.put(`https://localhost:7217/api/Carts/${id}`, cartItem);
        const updatedItem = updatedResponse.data;
  
        // Cập nhật giỏ hàng với số lượng đã cập nhật
        const updatedItems = cart.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: updatedItem.quantity };
          }
          return item;
        });
  
        setCart(updatedItems);
      }
  
      // Reload lại trang sau khi cập nhật giỏ hàng
      window.location.reload();
    } catch (error) {
      console.error('Lỗi khi cập nhật số lượng sản phẩm:', error);
    }
  };

  // const removeItem = (id) => {
  //   // Xoá sản phẩm khỏi giỏ hàng
  //   const updatedItems = cart.filter((item) => item.id !== id);
  //   setCart(updatedItems);
  // };

  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm này không?"
    );
    if (shouldDelete) {
      axios
        .delete(`https://localhost:7217/api/Carts/${id}`)
        .then(() => {
          setCart(cart.filter((item) => item.id !== id));
        })
        .catch((error) => {
          console.error("Lỗi xóa: ", error);
        });
    }
  };

  const calculateTotalQuantity = (cart) => {
    let totalQuantity = 0;
  
    for (const item of cart) {
      totalQuantity += item.phone.price * item.quantity;
    }
  
    return totalQuantity;
  };
  
    const totalQuantity = calculateTotalQuantity(cart);

    const [isChecked, setIsChecked] = useState(false);

    const handleBuy = () => {
      if (isChecked) {
        // Xử lý khi checkbox được chọn
        // Gọi hàm handleBuy hoặc thực hiện các thao tác khác
        console.log('Đã đồng ý các điều khoản và điều kiện');
  
        // Gửi yêu cầu HTTP DELETE để xóa giỏ hàng
        axios
          .delete('https://localhost:7217/api/Carts')
          .then((response) => {
            // Xử lý phản hồi thành công
            console.log('Xóa giỏ hàng thành công');
  
            // Reload lại trang web sau một khoảng thời gian
            setTimeout(() => {
              window.location.reload(); // Reload lại trang web
            }, 500);
          })
          .catch((error) => {
            // Xử lý lỗi
            console.error('Lỗi xóa giỏ hàng:', error);
          });
      } else {
        alert('Tôi đã đồng ý các điều khoản và điều kiện');
      }
    };
  
    const handleCheck = () => {
      setIsChecked(!isChecked);
    };

  return (
    <>
      <Header />
      {/* Phần điều hướng về trang sản phẩm */}

      <div className="breadcrumb" style={{ display: "flex", flexDirection: "column", paddingLeft: "8cm", alignItems: "center" }}>
        <ul style={{ fontSize: "14px" }}>
          <li style={{ display: "inline", marginLeft: "15px" }}>
            <Link to={"/"} style={{ color: "#515154" }}>
              Trang chủ
            </Link>
          </li>
          <span style={{ margin: "0 5px" }}>›</span>
          <li style={{ display: "inline" }}>
            <Link to={"/Cart"} style={{ color: "#515154" }}>
              Giỏ hàng
            </Link>
          </li>
        </ul>
      </div>
      <div className="page-body">
        <Row className="row-body">
          <Col sm={8}>
            <Form style={{ backgroundColor: "white", padding: "10px", marginTop: ".5cm", marginLeft: "8cm", borderRadius: "20px", marginBottom: ".5cm" }}>
              <Table className="small-table"> {/* Đặt lớp CSS cho bảng */}
                <thead >
                  <tr>
                    <th>Hình Ảnh</th>
                    <th>Tên Sản Phẩm</th>
                    <th>Số Lượng</th>
                    <th>Giá Bán</th>
                    <th>Thao Tác</th>
                  </tr>
                </thead>
                <tbody >
                  {cart.map((item, index) => (
                    <tr key={item.id} className={index === cart.length - 1 ? 'no-border-bottom' : ''}>{/* Đặt lớp CSS cho dòng không có gạch đầu */}
                      <td>
                        <img
                          src={`https://localhost:7217/Image/PhoneModel/${item.phone.phoneModel.name}/${item.phone.image}`}
                          alt=""
                          style={{ width: 150 }}
                        />
                      </td>
                      <td>{item.phone.name}</td>
                      <td>
                        <div className="quantity-control">
                          <Button
                            className="btn btn-secondary"
                            onClick={() => decreaseQuantity(item.id, item.phone.id)}
                          >
                            -
                          </Button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            className="small-input"
                          />
                          <Button
                            className="btn btn-secondary"
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </Button>
                        </div>
                      </td>
                      <td>{item.phone.price.toLocaleString()} VNĐ</td>
                      <td>
                        <Button
                          className="btn"
                          variant="secondary"
                          onClick={() => handleDelete(item.cart.id)}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <div style={{ marginTop: "5px" }}>
                  <Button
                    style={{ float: "right", marginRight: "5px" }}
                    className="btn btn-outline-primary"
                    variant="outline-primary"
                    onClick={redirectToHomePage}
                    disabled={isRedirecting}
                  >
                    {isRedirecting ? "Đang chuyển trang..." : "Tiếp tục mua sắm"}
                  </Button>
                  <Button
                    style={{ float: "right", marginRight: "5px" }}
                    className="btn btn-outline-primary"
                    variant="outline-primary"
                    onClick={updateCart}
                    disabled={isUpdating}
                  >
                    {isUpdating ? "Đang cập nhật..." : "Cập nhật giỏ hàng"}
                  </Button>
                </div>
              </Table>

            </Form>
          </Col>
          <Col sm={2}>
          <Form style={{ backgroundColor: "white", padding: "50px", marginTop: ".5cm", borderRadius: "20px", marginBottom: ".5cm" }}>
        <p>Tổng phụ: {totalQuantity.toLocaleString()} VNĐ</p>
        <h6 style={{ borderBottom: "0.5px solid gray", paddingBottom: "50px", display: "block" }}>Tổng cộng: {totalQuantity.toLocaleString()} VNĐ</h6>
        <label>
          <input type="checkbox" checked={isChecked} onChange={handleCheck} />
          <span> Tôi đã đọc và đồng ý với</span>
          <a href="/chinh-sach-doi-tra" className="read" target="_blank"> điều khoản và điều kiện </a>
          <span className="rule-web">của website</span>
        </label>
        <Button onClick={handleBuy}>Tiến hành đặt hàng</Button>
      </Form>
    </Col>
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
