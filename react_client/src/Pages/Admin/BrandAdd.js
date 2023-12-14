import { useState } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../Component/axiosClient";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
const BrandAdd = () => {
  const [brand, setBrand] = useState({
    ImageFile: null,
    status: true,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setBrand((prev) => ({ ...prev, [name]: value }));
  };
  const handleCheck = (e) => {
    let name = e.target.name;
    let value = e.target.checked;
    setBrand((prev) => ({ ...prev, [name]: value }));
  };
  const handleImageChange = (e) => {
    setBrand((prev) => ({ ...prev, ImageFile: e.target.files[0] }));
  }
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    Object.entries(brand).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios.post(`https://localhost:7217/api/Brands`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    }).then(() => {
      navigate("/admin/brand");
    });
  }

  return (
    <>
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

                  <div className="sb-sidenav-menu-heading">
                    Hệ thống quản trị
                  </div>
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
              <h1 className="mt-4">Thêm hãng điện thoại</h1>

              <ol className="breadcrumb mb-4">
                <Link className="breadcrumb-item" to="/Admin/Brand">
                  Brand
                </Link>
                <li className="breadcrumb-item active">Add</li>
              </ol>

              <Form
                className="col-md-3"
                style={{ marginLeft: "50px" }}
              >
                <Form.Group className="mb-3">
                  <Form.Label>Ảnh</Form.Label>
                  <Form.Control type="file" name="ImageFile" onChange={handleImageChange}/>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="name"
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="switch"
                    name="status"
                    label="Còn hoạt động"
                    onChange={handleCheck}
                    checked
                  />
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                  <FontAwesomeIcon icon={faPlus} /> Thêm
                </Button>
              </Form>
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

export default BrandAdd;
