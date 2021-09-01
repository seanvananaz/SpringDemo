import React, { useEffect, useState } from "react";
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
import { useMutation, useQuery } from 'react-query';
import * as api from './hooks/todo/combined'
import { Todo, TodoParams } from "../common/domain/entities/todo";

const Wrapper = styled.div`
  padding-top: 5%;
`;

const App = () => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [toastShow, setToastShow] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState<string>('');
  const [desc_ription, setDescription] = useState<string>('');
  const [selectedId, setId] = useState<string>('')
  const [modalTitle, setModalTitle] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [selectedTodo, setSelectedTodo] = useState<Todo>();
  const [toastTitle, setToastTitle] = useState<string>('');
  const [toastBody, setToastBody] = useState<string>('');

  const { refetch } = useQuery(
    'todos',
    api.fetchTodos, {
    enabled: false,
    onSuccess: (data: Todo[]) => {
      setTodos(data);
      console.log("FETCHED: ", data);
    },
    onError: (error) => {
      console.log('Fetch todos error!', error);
    }
  });

  useEffect(() => {
    refetch();
  }, [refetch])

  const { mutate: addTodo } = useMutation((todo: TodoParams) => api.addTodo(todo), {
    onSuccess: (todo: Todo | null) => {
      if (todo) {
        setTodos((prevTodo) => [
          todo,
          ...prevTodo,
        ]);
      }
      setToastShow(true);
      setTitle('');
      setToastTitle('Added new task');
      setToastBody(`${todo?.title} is added...`);
    },
    onError: (error) => {
      console.log(error);
    },
  })

  const { mutate: updateTodo } = useMutation(({ id, todo }: { id: string, todo: TodoParams }) => api.updateTodo(id, todo), {
    onSuccess: (todo: Todo | null) => {
      const filteredTodo = todos.filter(todo => todo.id !== selectedId);
      if (todo) {
        setTodos([
          todo,
          ...filteredTodo,
        ]);
      }
      setToastShow(true);
      setIsEditing(false);
      setTitle('');
      setDescription('');
      setToastTitle('Task updated');
      setToastBody('Task is updated!');
    },
    onError: (error) => {
      console.log('Update todo ERR: ', error);
    }
  })

  const handleMarkAsDone = () => {
    updateTodo({ id: selectedId, todo: { is_done: !selectedTodo?.is_done } });
    setModalShow(false);
  }

  const { mutate: removeTodo } = useMutation((id: string) => api.removeTodo(id), {
    onSuccess: () => {
      const filterTodo = todos.filter(item => item.id !== selectedId);
      setTodos(filterTodo);
      setModalShow(false);
      setToastShow(true);
      setToastTitle('Task removed');
      setToastBody('Task deleted');
    },
    onError: (error) => {
      setToastShow(true);
      console.log('Remove todo ERR: ', error);
    }
  })

  const handleSelectedTodo = (id: string, title: string) => {
    setId(id);
    setModalShow(true);
    setModalTitle(title);
    setSelectedTodo(todos.find(todo => todo.id === id));
    // setSelectedTodo() 
    console.log('selected ID: ', id, selectedId);
  }

  const handleEditTodo = () => {
    setModalShow(false);
    setTitle(modalTitle);
    setIsEditing(true);
    setDescription(selectedTodo?.desc_ription || '');
  }

  const handleCancelEditTodo = () => {
    setIsEditing(false);
    setTitle('');
    setDescription('');
  }

  const onSubmit = (todo: TodoParams) => {
    if (todo.title && isEditing) {
      updateTodo({ id: selectedId, todo });
    } else if (todo.title) {
      addTodo(todo);
    }
  }

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
            <strong className="me-auto">{toastTitle}</strong>
            <small>succesfully!</small>
          </Toast.Header>
          <Toast.Body>{toastBody}</Toast.Body>
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
                {todos.map(todo =>
                  <ListGroup.Item action onClick={() => handleSelectedTodo(todo.id, todo.title || '')}>
                    {
                      todo.is_done ?
                        <h5><del>{todo.title}</del></h5> :
                        <h5>{todo.title}</h5>
                    }
                    {
                      todo.desc_ription && !todo.is_done &&
                      <h6> - {todo.desc_ription}</h6>
                    }
                  </ListGroup.Item>
                )}
              </ListGroup>
            </Col>
            <Col md={6} lg={4}>
              <Form>
                <Form.Group className="mb-3" controlId="formGroupTask">
                  <Form.Label>Task Name:</Form.Label>
                  <Form.Control
                    onChange={(event) => setTitle(event.target.value)}
                    value={title} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupDesc">
                  <Form.Label>Description:</Form.Label>
                  <Form.Control
                    onChange={(event) => setDescription(event?.target.value)}
                    value={desc_ription}
                  />
                </Form.Group>
              </Form>
              <Row xs="auto">
                <Col>
                  <Button
                    variant="primary"
                    onClick={() => onSubmit({ title, desc_ription })}
                  >
                    Save Task
                  </Button>
                </Col>
                {isEditing &&
                  <Col>
                    <Button
                      variant="secondary"
                      onClick={() => handleCancelEditTodo()}
                    >
                      Cancel Edit
                    </Button>
                  </Col>}
              </Row>
            </Col>
          </Row>
          <Modal show={modalShow} onHide={() => setModalShow(false)}>
            <Modal.Header>
              <Modal.Title>{modalTitle}</Modal.Title>
            </Modal.Header>
            {
              selectedTodo?.desc_ription &&
              <Modal.Body>
                {selectedTodo.desc_ription}
              </Modal.Body>
            }
            <Modal.Footer>
              <Button variant="danger" onClick={() => removeTodo(selectedId)}>
                Delete
              </Button>
              <Button variant="primary" onClick={() => handleEditTodo()}>
                Edit
              </Button>
              <Button variant={selectedTodo?.is_done ? "secondary" : "success"} onClick={() => handleMarkAsDone()}>
                Mark as {selectedTodo?.is_done ? 'Undone' : 'Done' }
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      </Wrapper>
    </>
  );
};

export default App;
