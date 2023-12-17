import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../Component/axiosClient";
import { Form, Button } from "react-bootstrap";
import TopNav from "./Component/TopNav";
import Nav from "./Component/Nav";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PhoneModelAdd = () => {
  const [phoneModel, setPhoneModel] = useState({
    starAverage: 0,
    status: true,
  });

  const [brands, setBrands] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await fetch("https://localhost:7217/api/Brands").then(
      (response) => response.json()
    );
    setBrands(response);
  };

  const navigate = useNavigate();

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setPhoneModel((prev) => ({ ...prev, [name]: value }));
  };
  const handleCheck = (e) => {
    let name = e.target.name;
    let value = e.target.checked;
    setPhoneModel((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient
      .post(`https://localhost:7217/api/PhoneModels`, phoneModel)
      .then(() => {
        navigate("/admin/phonemodel");
      });
  };
  console.log(phoneModel)

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

              <Form className="col-md-4">
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
                  <Form.Label>Operating System:</Form.Label>
                  <Form.Control
                    type="text"
                    name="operatingSystem"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Rear Camera:</Form.Label>
                  <Form.Control
                    type="text"
                    name="rearCamera"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Front Camera:</Form.Label>
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
                  <Form.Label>Battery And Charger:</Form.Label>
                  <Form.Control
                    type="text"
                    name="batteryAndCharger"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>PhoneModel Type:</Form.Label>
                  <Form.Control
                    type="text"
                    name="phoneModelType"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Old Price:</Form.Label>
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
                  <Form.Group>
                    <Form.Label>Hãng:</Form.Label>
                    <Form.Select name="brandId" custom onChange={handleChange}>
                      {brands.map((item) => {
                        return <option value={item.id}>{item.name}</option>;
                      })}
                    </Form.Select>
                  </Form.Group>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Status:</Form.Label>
                  <Form.Check
                    type="switch"
                    name="status"
                    label="Còn hoạt động"
                    onChange={handleCheck}
                    checked
                  />
                </Form.Group>
                <Button
                  className="mt-3 mb-3"
                  type="submit"
                  variant="success"
                  onClick={handleSubmit}
                >
                  <FontAwesomeIcon icon={faPlus} /> Thêm
                </Button>
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
