package com.example.todoDemo.entity;

import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Todo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = true)
    private String title;

    @Column(name="task_desc", nullable = true)
    private String desc_ription;

    @Column(name="is_done", nullable = true)
    @Type(type = "org.hibernate.type.NumericBooleanType")
    private boolean is_done;

    @Column(updatable = false)
    private Date created_at;

    @Column(name="updated_at", nullable = true)
    private Date updatedAt;

    @PrePersist
    protected void onCreate() { this.created_at = new Date() ; }

    @PreUpdate
    protected void onUpdate() { this.updatedAt = new Date() ; }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDesc_ription() {
        return desc_ription;
    }

    public void setDesc_ription(String desc_ription) {
        this.desc_ription = desc_ription;
    }

    public boolean isIs_done() {
        return is_done;
    }

    public void setIs_done(boolean is_done) {
        this.is_done = is_done;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}
