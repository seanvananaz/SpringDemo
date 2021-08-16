package com.example.todoDemo.controller;

import com.example.todoDemo.entity.Todo;
import com.example.todoDemo.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TodoController {

    @Autowired
    private TodoService service;

    @PostMapping("/create")
    public Todo createTodo(@RequestBody Todo todo) {
        return service.addTodo(todo);
    }

    @GetMapping("/todos")
    public List<Todo> getTodos() {
        return service.getTodos();
    }

    @GetMapping("/todo/{id}")
    public Todo getTodoById(@PathVariable int id) {
        return service.getTodoById(id);
    }

    @GetMapping("/find/{title}")
    public Todo getTodoByTitle(@PathVariable String title) {
        return service.getTodoByTitle(title);
    }

    @PutMapping("/edit")
    public Todo updateTodo(@RequestBody Todo todo) {
        return service.updateTodo(todo);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteTodo(@PathVariable int id) {
        return service.deleteTodo(id);
    }
}
