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
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        {/* Navbar Brand*/}
        <a className="navbar-brand ps-3" href="index.html">
          Quản lý MTD Store
        </a>
        {/* Sidebar Toggle*/}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="/Admin"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Navbar Search*/}
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <input
              className="form-control"
              type="text"
              placeholder="Search for..."
              aria-label="Search for..."
              aria-describedby="btnNavbarSearch"
            />
            <button
              className="btn btn-primary"
              id="btnNavbarSearch"
              type="button"
            >
              <i className="fas fa-search" />
            </button>
          </div>
        </form>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
          >
            <div className="sb-sidenav-menu">
              <div className="nav">
                <div className="sb-sidenav-menu-heading">Hệ thống</div>
                <a className="nav-link" href="/Admin">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-home" />
                  </div>
                  Trang chủ
                </a>

                <div className="sb-sidenav-menu-heading">Hệ thống quản trị</div>
                <a className="nav-link" href="/Admin/Brand">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-table" />
                  </div>
                  Hãng điện thoại
                </a>
                <a className="nav-link" href="/Admin/Product">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-table" />
                  </div>
                  Sản Phẩm
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
              MTD Store
            </div>
          </nav>
        </div>

        <div id="layoutSidenav_content">
          <div className="container-fluid px-4">
            <h1 className="mt-4">Quản lý hãng điện thoại</h1>

            <ol className="breadcrumb mb-4">
              <Link className="breadcrumb-item" to="/Admin">
                Trang chủ
              </Link>
              <li className="breadcrumb-item active">Brand</li>
            </ol>

            <Link to="/Admin/Brand/Add" className="btn btn-success mb-2">
              <i className="fas fa-plus" /> Thêm
            </Link>
            <div className="card mb-4">
              <div className="card-header">
                <i className="fas fa-table me-1" />
                Danh sách hãng điện thoại
              </div>
              <div className="card mb-8">
                <table className="table table-light text-center">
                  <thead>
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
                                  style={{ marginRight: "5px" }}
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
