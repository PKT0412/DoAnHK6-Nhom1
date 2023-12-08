import { useState } from "react";
import { useNavigate } from "react-router";
import axiosClient from "../Component/axiosClient";
import { Button, Form } from "react-bootstrap";
const BrandAdd = () => {
  const [brand, setBrand] = useState({
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
  const handleSubnmit = (e) => {
    e.preventDefault();
    axiosClient.post('/Brands',brand).then(() => {
      navigate("/Admin/Brand");
    });
  };
  return (
    <>
      <div style={{ padding: "32px" }}>
        <Form className="col-md-4" onSubmit={handleSubnmit}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" name="name" onChange={handleChange} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" name="image" />
          </Form.Group>
          <Form.Group>
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
    </>
  );
};

export default BrandAdd;
