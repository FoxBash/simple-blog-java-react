package com.paul.bjrb.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "Posts")
@Data
public class PostEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    @Column(columnDefinition = "TEXT")
    private String body;
}
