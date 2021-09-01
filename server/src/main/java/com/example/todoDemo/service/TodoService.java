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
//        return repository.findAll();
        return repository.findAllByOrderByUpdatedAtDesc();
    }

    public Todo getTodoById(int id) {
        return repository.findById(id).orElse(null);
    }

    public Todo getTodoByTitle(String title) {
        return repository.findByTitle(title);
    }

    public String deleteTodo(int id) {
        repository.deleteById(id);
        return "Removed successfully! " + id;
    }

    public Todo updateTodo(int id, Todo todo) {
        Todo existingTodo = repository.findById(id).orElse(null);
        if(todo.getTitle() != null) {
            existingTodo.setTitle(todo.getTitle());
        }
        if(todo.getDesc_ription() != null) {
            existingTodo.setDesc_ription(todo.getDesc_ription());
        }
        if(todo.isIs_done() != existingTodo.isIs_done()) {
            existingTodo.setIs_done(todo.isIs_done());
        }
        return repository.save(existingTodo);
    }
}
