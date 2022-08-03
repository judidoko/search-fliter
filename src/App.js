import React, { useState } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "bootstrap/dist/css/bootstrap.min.css";
import { people_data } from "./data.js";
import BackToTopButton from "./Componets/BackToTopButton.jsx";

function App() {
  const [search, setSearch] = useState("");

  const keys = ["first_name", "last_name", "email", "gender", "phone_number"];

  return (
    <div>
      <Container>
        <h1 className="text-center mt-4">Sales Contact</h1>
        <Form>
          <InputGroup className="my-3">
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search contacts"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S/N</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {people_data
              .filter((value) => {
                return keys.some((key) =>
                  value[key].toLowerCase().includes(search)
                );
              })
              .map((value, index) => (
                <tr key={index}>
                  <td>{value.id}</td>
                  <td>{value.first_name}</td>
                  <td>{value.last_name}</td>
                  <td>{value.email}</td>
                  <td>{value.gender}</td>
                  <td>{value.phone_number}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        <BackToTopButton />
      </Container>
    </div>
  );
}

export default App;
