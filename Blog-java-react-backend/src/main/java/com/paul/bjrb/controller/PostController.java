package com.paul.bjrb.controller;

import com.paul.bjrb.model.Post;
import com.paul.bjrb.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class PostController {

    private PostService postService;
    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }
    @PostMapping("/posts")
    public ResponseEntity<Post> createPost(@RequestBody Post post){
        Post post1 = postService.addPost(post);
        return ResponseEntity.ok(post1);
    }
    @GetMapping("/posts")
    public List<Post> getAllPosts(){
        return postService.getAllPosts();
    }
    @GetMapping("/posts/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id){
        Post post =postService.getPostById(id);
        return ResponseEntity.ok(post);
    }
    @PutMapping("/posts/{id}")
    public ResponseEntity<Post> updatePost(@PathVariable Long id, @RequestBody Post post){
        Post post1 = postService.updatePost(id,post);
        return ResponseEntity.ok(post1);
    }
    @DeleteMapping("/posts/{id}")
    public ResponseEntity<Map<String, Boolean>> deletePost(@PathVariable Long id){
        boolean deleted = false;
        deleted = postService.deletePostById(id);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted",deleted);
        return ResponseEntity.ok(response);
    }
}
