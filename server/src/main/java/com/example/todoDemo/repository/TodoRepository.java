package com.example.todoDemo.repository;

import com.example.todoDemo.entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {
    // Query Methods
    Todo findByTitle(String title);
    List<Todo> findAllByOrderByUpdatedAtDesc();
}
