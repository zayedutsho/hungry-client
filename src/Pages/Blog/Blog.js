import React from "react";
import Table from "react-bootstrap/Table";
import { MDBTypography } from "mdb-react-ui-kit";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <div>
      <MDBTypography
        tag="h3"
        className="text-center mb-4 pb-2 text-primary fw-bold"
      >
        Blog
      </MDBTypography>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Question</th>
            <th>Answer</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Difference between SQL and NoSQL</td>
            <td>
              SQL is the programming language used to interface with relational
              databases. (Relational databases model data as records in rows and
              tables with logical links between them). NoSQL is a class of DBMs
              that are non-relational and generally do not use SQL.
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>What is JWT, and how does it work?</td>
            <td>
              JSON Web Token (JWT) is an open standard (RFC 7519) for securely
              transmitting information between parties as JSON object. It is
              compact, readable and digitally signed using a private key/ or a
              public key pair by the Identity Provider(IdP).
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>What is the difference between javascript and NodeJS?</td>
            <td>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>How does NodeJS handle multiple requests at the same time?</td>
            <td>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Blog;
