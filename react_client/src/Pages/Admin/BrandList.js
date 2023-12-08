import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosClient from "../Component/axiosClient";
const BrandList = () => {
  const [brand, setBrand] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://localhost:7217/api/Brands").then(
      (response) => response.json()
    );
    setBrand(response);
  };
  const handleDelete = (id) => {
    const shouldDelete = window.confirm(
      "Bạn có chắc chắn muốn xóa tài khoản này?"
    );
    if (shouldDelete) {
      axiosClient
        .delete(`https://localhost:7217/api/Brands/${id}`)
        .then(() => {
          setBrand(brand.filter((item) => item.id !== id));
        })
        .catch((error) => {
          console.error("Lỗi xóa: ", error);
        });
    }
  };
  return (
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
            <h1 className="mt-4">Brand</h1>
            <ol className="breadcrumb mb-4">
              <Link className="breadcrumb-item" to="/Admin">
                Trang chủ
              </Link>
              <li className="breadcrumb-item active">Danh sách Brand</li>
            </ol>
            <div className="card mb-4"></div>
            <div className="card mb-4">
              <Link to="/Admin/Brand/Add" className="btn btn-success">
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
                      <th>Status</th>
                      <th>Function</th>
                    </tr>
                  </thead>
                  <tbody>
                    {brand.map((item) => {
                      return (
                        <tr>
                          <td>{item.id}</td>
                          <td>
                            <img
                              src={`https://localhost:7217/image/Brand/${item.image}`}
                              alt=""
                              style={{ width: 150 }}
                            />
                          </td>
                          <td>{item.name}</td>
                          <td>
                            {item.Status === 0
                              ? "Không hoạt động"
                              : "Hoạt động"}
                          </td>
                          <td>
                            {
                              <>
                                <Link
                                  to={`Edit/${item.id}`}
                                  className="btn btn-warning"
                                >
                                  Sửa
                                </Link>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => handleDelete(item.id)}
                                >
                                  Xóa
                                </button>
                              </>
                            }
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright © Your Website 2023</div>
                <div></div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};
export default BrandList;
