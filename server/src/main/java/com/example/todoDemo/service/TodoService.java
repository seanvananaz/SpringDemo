package com.example.todoDemo.service;

import com.example.todoDemo.entity.Todo;
import com.example.todoDemo.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TodoService {
    @Autowired
    private TodoRepository repository;

    public Todo addTodo(Todo todo) {
        return repository.save(todo);
    }

    public List<Todo> getTodos() {
        return repository.findAll();
    }

    public Todo getTodoById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Todo getTodoByTitle(String title) {
        return repository.findByTitle(title);
    }

    public String deleteTodo(int id) {
        repository.deleteById(id);
        return "product removed! " + id;
    }

    public Todo updateTodo(Todo todo) {
        Todo existingTodo = repository.findById(todo.getId()).orElse(null);
        existingTodo.setTitle(todo.getTitle());
        return repository.save(existingTodo);
    }
}
