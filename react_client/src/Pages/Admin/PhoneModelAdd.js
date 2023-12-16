import { useState } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../Component/axiosClient";
import { Form, Button } from "react-bootstrap";
import TopNav from "./Component/TopNav";
import Nav from "./Component/Nav";
import { Link } from "react-router-dom";

const PhoneModelAdd = () => {
  const [product, setProduct] = useState({
    product: "",
    status: true,
    starAverage: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setProduct((prev) => ({ ...prev, [name]: value }));
    setSelectedValue(e.target.value);
  };
  const handleCheck = (e) => {
    let name = e.target.name;
    let value = e.target.checked;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient
      .post(`https://localhost:7217/api/PhoneModels`, product)
      .then(() => {
        navigate("/products");
      });
  };
  const [selectedValue, setSelectedValue] = useState("");

  return (
    <div>
      <TopNav />

      <div id="layoutSidenav">
        <Nav />

        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Thêm dòng điện thoại</h1>

              <ol className="breadcrumb mb-4">
                <Link className="breadcrumb-item" to="/Admin/PhoneModel">
                  PhoneModel
                </Link>
                <li className="breadcrumb-item active">Add</li>
              </ol>

              <Form className="col-md-4" onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Screen:</Form.Label>
                  <Form.Control
                    type="text"
                    name="screen"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>OperatingSystem:</Form.Label>
                  <Form.Control
                    type="text"
                    name="operatingSystem"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Price:</Form.Label>
                  <Form.Control
                    type="text"
                    name="price"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>RearCamera:</Form.Label>
                  <Form.Control
                    type="text"
                    name="rearCamera"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>FrontCamera:</Form.Label>
                  <Form.Control
                    type="text"
                    name="frontCamera"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Chip:</Form.Label>
                  <Form.Control
                    type="text"
                    name="chip"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Ram:</Form.Label>
                  <Form.Control
                    type="text"
                    name="ram"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Sim:</Form.Label>
                  <Form.Control
                    type="text"
                    name="sim"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>BatteryAndCharger:</Form.Label>
                  <Form.Control
                    type="text"
                    name="batteryAndCharger"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>PhoneModelType:</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneModelType"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>PhoneModelType:</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneModelType"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>OldPrice:</Form.Label>
                  <Form.Control
                    type="number"
                    name="oldPrice"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>OldPrice:</Form.Label>
                  <Form.Control
                    type="number"
                    name="oldPrice"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>PromotionalPrice:</Form.Label>
                  <Form.Control
                    type="number"
                    name="promotionalPrice"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image:</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Image:</Form.Label>
                  <Form.Control
                    type="text"
                    name="image"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <p>Chọn Brand: {selectedValue}</p>
                  <select value={selectedValue} onChange={handleChange}>
                    <option value="IPhone">1</option>
                    <option value="SamSung">2</option>
                    <option value="brandId">3</option>
                  </select>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Status:</Form.Label>
                  <Form.Check
                    type="switch"
                    name="status"
                    label="Còn hoạt động"
                    onChange={handleCheck}
                  />
                </Form.Group>
                <div className="mt-2">
                  <Button type="submit" variant="success">
                    Thêm
                  </Button>
                </div>
              </Form>
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
export default PhoneModelAdd;
