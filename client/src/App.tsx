import React, { useState } from "react";
import styled from "styled-components";
import {
  Button,
  Modal,
  ListGroup,
  Container,
  Row,
  Col,
  Form,
  Toast,
  ToastContainer,
} from "react-bootstrap";

const Wrapper = styled.div`
  padding-top: 5%;
`;

const App = () => {
  const [modalShow, setModalShow] = useState(false);
  const [toastShow, setToastShow] = useState(false);

  return (
    <>
      <ToastContainer position="top-end" className="p-3">
        <Toast
          onClose={() => setToastShow(false)}
          show={toastShow}
          delay={2000}
          autohide
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </ToastContainer>
      <Wrapper>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1>Todo App</h1>
            </Col>
          </Row>
          <Row>
            <Col md={12} lg={8}>
              <ListGroup>
                <ListGroup.Item action onClick={() => setModalShow(true)}>
                  Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6} lg={4}>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupTask">
                  <Form.Label>Task Name:</Form.Label>
                  <Form.Control />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDesc">
                  <Form.Label>Description:</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Form>
              <Button
                variant="primary"
                onClick={() => {
                  setModalShow(false);
                  setToastShow(true);
                }}
              >
                Add Task
              </Button>
              <Modal show={modalShow} onHide={() => setModalShow(false)}>
                <Modal.Header>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Woohoo, you're reading this text in a modal!
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="danger" onClick={() => {}}>
                    Delete
                  </Button>
                  <Button variant="primary" onClick={() => {}}>
                    Edit
                  </Button>
                  <Button variant="success" onClick={() => {}}>
                    Mark as done
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
