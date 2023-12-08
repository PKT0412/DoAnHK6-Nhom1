import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Button, Form } from "react-bootstrap";
import axiosClient from "../Component/axiosClient";

const BrandEdit = () => {
  const { id } = useParams();
  const [brand, setBrand] = useState({
    id: "",
    name: "",
    image: "",
    status: true,
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setBrand((prev) => ({ ...prev, [name]: value }));
  };
  const handleSunmit = (e) => {
    e.preventDefault();
    axiosClient
      .put(`https://localhost:7217/api/Brands/${id}`, brand)
      .then(() => {
        navigate("/Admin/Brand");
      });
  };
  useEffect(() => {
    axios
      .get(`https://localhost:7217/api/Brands/${id}`)
      .then((res) => setBrand(res.data));
  }, [id]);
  return (
    <>
      <div style={{ padding: "32px" }}>
        <Form className="col-md-4" onSubmit={handleSunmit}>
          <Form.Control
            type="hidden"
            name="id"
            onChange={handleChange}
            value={brand.id}
          />
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              onChange={handleChange}
              value={brand.name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="text" name="image" value={brand.image} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Status:</Form.Label>
            <Form.Control type="text" name="status" value={brand.status} />
          </Form.Group>
          <div className="mt-2">
            <Button type="submit" variant="success">
              Edit
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default BrandEdit;
