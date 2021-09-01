import { useCallback } from "react";
import axios from "axios";
import config from "../../../config/config";
import { TodoParams } from "../../../../common/domain/entities/todo";

const api = axios.create({
  baseURL: 'http://localhost:8080',
})

export const fetchTodos = async () => {
  try {
    // const res = await fetch(`${config.apiUrl}/todos`);
    // const res = await fetch(`http://localhost:8080/todos`);
    // const todoList = await res.json();
    const todoList = api.get('/todos').then(res => res.data);
    console.log('todoList: ', todoList);
    return todoList;
  } catch (e) {
    console.log(e, 'HUHU');
  }
};

export const addTodo = async (todo: TodoParams) => {
  try {
    const res = await axios.post(`${config.apiUrl}/create`, todo);
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
};

export const removeTodo = async (id: string) => {
  try {
    await axios.delete(`${config.apiUrl}/delete/${id}`);
  } catch (e) {
    throw new Error(e);
  }
}

export const updateTodo = async (id: string, todo: TodoParams) => {
  try {
    const res = await axios.put(`${config.apiUrl}/edit/${id}`, todo);
    return res.data;
  } catch (e) {
    throw new Error(e);
  }
}
