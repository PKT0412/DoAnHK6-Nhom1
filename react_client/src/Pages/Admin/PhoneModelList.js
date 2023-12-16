import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../Component/axiosClient";
import { Button, Col, Modal, Table, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faInfo, faTrash } from "@fortawesome/free-solid-svg-icons";
import TopNav from "./Component/TopNav";
import Nav from "./Component/Nav";

const PhoneModelList = () => {
  const [product, setProduct] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({ brand: {} });
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setSelectedProduct(product.find((a) => a.id === id));
    setShow(true);
  };
  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa tài khoản này?"
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
    <div>
      <TopNav />

      <div id="layoutSidenav">
        <Nav />

        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Quản lý dòng điện thoại</h1>

              <ol className="breadcrumb mb-4">
                <Link className="breadcrumb-item" to="/Admin">
                  Trang chủ
                </Link>
                <li className="breadcrumb-item active">PhoneModel</li>
              </ol>

              <Link to="/Admin/PhoneModel/Add" className="btn btn-success mb-2">
                <i className="fas fa-plus" /> Thêm
              </Link>

              <div className="card mb-4">
                <div className="card-header">
                  <i className="fas fa-table me-1" />
                  Danh sách dòng điện thoại
                </div>
                <div className="card mb-8">
                  <table className="table table-light text-center">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Hãng</th>
                        <th>Status</th>
                        <th>Function</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.map((item) => (
                        <tr>
                          <td>{item.id}</td>
                          <td>
                            <img
                              src={`https://localhost:7217/Image/PhoneModel/${item.name}/${item.image}`}
                              alt=""
                              style={{ width: 150 }}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>{item.brand.name}</td>
                          <td>
                            {item.status === 0
                              ? "Không hoạt động"
                              : "Hoạt động"}
                          </td>
                          <td>
                            <div>
                              <Button onClick={() => handleShow(item.id)} style={{ marginRight: "5px" }}>
                                <FontAwesomeIcon
                                  icon={faInfo}
                                ></FontAwesomeIcon>
                              </Button>
                              <Link
                                to={`/Admin/PhoneModel/Edit/${item.id}`}
                                className="btn btn-warning"
                                style={{ marginRight: "5px" }}
                              >
                                <FontAwesomeIcon
                                  icon={faEdit}
                                ></FontAwesomeIcon>
                              </Link>
                              <button
                                className="btn btn-danger"
                                onClick={() => handleDelete(item.id)}
                                style={{ marginRight: "5px" }}
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
                  </table>
                  <Table>
                    <Modal show={show} onHide={handleClose} size="xl">
                      <Modal.Header closeButton>
                        <Modal.Title>Thông tin sản phẩm</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <Row>
                          <Col md={4}>
                            <dd>
                              <img
                                src={`https://localhost:7217/Image/PhoneModel/${selectedProduct.name}/${selectedProduct.image}`}
                                alt=""
                                style={{ width: "100%" }}
                              />
                            </dd>
                          </Col>
                          <Col md={4}>
                            <dl>
                              <dt>Name: </dt>
                              <dd>{selectedProduct.name}</dd>
                              <dt>Screen: </dt>
                              <dd>{selectedProduct.screen}</dd>
                              <dt>OperatingSystem: </dt>
                              <dd>{selectedProduct.operatingSystem}</dd>
                              <dt>RearCamera: </dt>
                              <dd>{selectedProduct.rearCamera}</dd>
                              <dt>FrontCamera: </dt>
                              <dd>{selectedProduct.frontCamera}</dd>
                              <dt>Chip: </dt>
                              <dd>{selectedProduct.chip}</dd>
                            </dl>
                          </Col>
                          <Col md={4}>
                            <dl>
                              <dt>Sim: </dt>
                              <dd>{selectedProduct.sim}</dd>
                              <dt>BatteryAndCharger: </dt>
                              <dd>{selectedProduct.batteryAndCharger}</dd>
                              <dt>PhoneModelType: </dt>
                              <dd>{selectedProduct.phoneModelType}</dd>
                              <dt>OldPrice: </dt>
                              <dd>{selectedProduct.oldPrice}</dd>
                              <dt>PromotionalPrice: </dt>
                              <dd>{selectedProduct.promotionalPrice}</dd>
                              <dt>BrandId: </dt>
                              <dd>{selectedProduct.brand.name}</dd>
                              <dt>Status: </dt>
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
                </div>
              </div>
            </div>
          </main>

          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright © Your Website 2021</div>
                <div></div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default PhoneModelList;
