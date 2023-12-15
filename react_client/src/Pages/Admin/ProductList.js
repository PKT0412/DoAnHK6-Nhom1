import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../Component/axiosClient";
import { Button, Col, Modal, Table, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
const ProductList = () => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ product: "" });
  const handleClose = () => setShow(false);
  var i = 1;
  const handleShow = (id) => {
    setSelectedProduct(product.find((a) => a.id === id));
    setShow(true);
  };
  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa sản phẩm này?"
    );
    if (shouldDelete) {
      axiosClient.delete(
        `https://localhost:7217/api/PhoneModels/${id}`
          .then(() => {
            setProduct(product.filter((item) => item.id !== id));
          })
          .catch((error) => {
            console.error("Lỗi xóa :", error);
          })
      );
    }
  };
  useEffect(() => {
    axiosClient
      .get("https://localhost:7217/api/PhoneModels")
      .then((res) => setProduct(res.data));
  });
  return (
    <>
      <div>
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <nav
              className="sb-sidenav accordion sb-sidenav-dark"
              id="sidenavAccordion"
            >
              <div className="sb-sidenav-menu">
                <div className="nav">
                  <div className="sb-sidenav-menu-heading">Hệ thống</div>
                  <Link className="nav-link" to="/Admin">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-tachometer-alt" />
                    </div>
                    Trang chủ
                  </Link>
                  <div className="sb-sidenav-menu-heading">Hệ thống</div>
                  <div
                    className="collapse"
                    id="collapsePages"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#sidenavAccordion"
                  >
                    <nav
                      className="sb-sidenav-menu-nested nav accordion"
                      id="sidenavAccordionPages"
                    >
                      <div
                        className="collapse"
                        id="pagesCollapseAuth"
                        aria-labelledby="headingOne"
                        data-bs-parent="#sidenavAccordionPages"
                      >
                        <nav className="sb-sidenav-menu-nested nav">
                          <a className="nav-link" href="login.html">
                            Login
                          </a>
                          <a className="nav-link" href="register.html">
                            Register
                          </a>
                          <a className="nav-link" href="password.html">
                            Forgot Password
                          </a>
                        </nav>
                      </div>
                    </nav>
                  </div>
                  <div className="sb-sidenav-menu-heading">Danh mục</div>
                  <a className="nav-link" href="/Admin/Product">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-chart-area" />
                    </div>
                    Sản Phẩm
                  </a>
                  <a className="nav-link" href="/Admin/Brand">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Brand
                  </a>
                  <a className="nav-link" href="tables.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Đơn hàng
                  </a>
                  <a className="nav-link" href="tables.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Khách hàng
                  </a>
                  <a className="nav-link" href="tables.html">
                    <div className="sb-nav-link-icon">
                      <i className="fas fa-table" />
                    </div>
                    Khuyến mãi
                  </a>
                </div>
              </div>
              <div className="sb-sidenav-footer">
                <div className="small">Logged in as:</div>
                Start Bootstrap
              </div>
            </nav>
          </div>
          <div id="layoutSidenav_content">
            <div className="container-fluid px-4">
              <h1 className="mt-4">Sản Phẩm</h1>
              <ol className="breadcrumb mb-4">
                <Link className="breadcrumb-item" to="/Admin">
                  Trang chủ
                </Link>
                <li className="breadcrumb-item active">Danh sách sản phẩm</li>
              </ol>
              <div className="card mb-4"></div>
              <div className="card mb-4">
                <Link to="/Admin/Product/Add" className="btn btn-success">
                  Thêm
                </Link>
                <div className="card-header">
                  <i className="fas fa-table me-1" />
                  DataTable Example
                </div>
                <div className="card-body">
                  <table className="table table-light">
                    <thead className="table-dark">
                      <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Color</th>
                        <th>Storage</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Status</th>
                        <th>PhoneModelId</th>
                        <th>Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.map((item) => (
                        <tr>
                          <td>{i++}</td>
                          <td>
                            <img
                              src={`https://localhost:7217/Image/PhoneModel/${item.name}/${item.image}`}
                              alt=""
                              style={{ width: 150 }}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.screen}</td>
                          <td>{item.operatingSystem}</td>
                          <td>{item.rearCamera}</td>
                          <td>{item.frontCamera}</td>
                          <td>
                            {item.status === 0
                              ? "Không hoạt động"
                              : "Hoạt động"}
                          </td>
                          <td>{item.phoneModelType}</td>
                          <td>
                            <div>
                              <Button onClick={() => handleShow(item.id)}>
                                <FontAwesomeIcon icon={faAdd}></FontAwesomeIcon>
                              </Button>
                              <Link
                                to={`/Admin/Product/Edit/${item.id}`}
                                className="btn btn-warning"
                              >
                                <FontAwesomeIcon
                                  icon={faEdit}
                                ></FontAwesomeIcon>
                              </Link>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(item.id)}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                ></FontAwesomeIcon>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <Table>
                      <Modal show={show} onHide={handleClose} size="lg">
                        <Modal.Header closeButton>
                          <Modal.Title>Thông tin sản phẩm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Row>
                            <Col md={6}>
                              <dd>
                                <img
                                  src={`https://localhost:7217/Image/PhoneModel/${selectedProduct.name}/${selectedProduct.image}`}
                                  alt=""
                                  style={{ width: 300 }}
                                />
                              </dd>
                            </Col>
                            <Col md={6}>
                              <dl>
                                <dt>Name :</dt>
                                <dd>{selectedProduct.name}</dd>
                                <dt>Screen:</dt>
                                <dd>{selectedProduct.screen}</dd>
                                <dt>OperatingSystem:</dt>
                                <dd>{selectedProduct.operatingSystem}</dd>
                                <dt>RearCamera :</dt>
                                <dd>{selectedProduct.rearCamera}</dd>
                                <dt>FrontCamera</dt>
                                <dd>{selectedProduct.frontCamera}</dd>
                                <dt>Chip</dt>
                                <dd>{selectedProduct.chip}</dd>
                                <dt>Ram</dt>
                                <dd>{selectedProduct.ram}</dd>
                                <dt>Sim</dt>
                                <dd>{selectedProduct.sim}</dd>
                                <dt>BatteryAndCharger</dt>
                                <dd>{selectedProduct.batteryAndCharger}</dd>
                                <dt>PhoneModelType</dt>
                                <dd>{selectedProduct.phoneModelType}</dd>
                                <dt>OldPrice</dt>
                                <dd>{selectedProduct.oldPrice}</dd>
                                <dt>PromotionalPrice</dt>
                                <dd>{selectedProduct.promotionalPrice}</dd>
                                <dt>BrandId</dt>
                                <dd>{selectedProduct.brandId}</dd>
                                <dt>Status</dt>
                                <dd>
                                  {selectedProduct.status === 0
                                    ? " Không hoạt động"
                                    : "Hoạt động"}
                                </dd>
                              </dl>
                            </Col>
                          </Row>
                        </Modal.Body>
                      </Modal>
                    </Table>
                  </table>
                </div>
              </div>
            </div>
            <footer className="py-4 bg-light mt-auto">
              <div className="container-fluid px-4">
                <div className="d-flex align-items-center justify-content-between small">
                  <div className="text-muted">
                    Copyright © Your Website 2023
                  </div>
                  <div></div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductList;
