package com.paul.bjrb.service;

import com.paul.bjrb.model.Post;

import java.util.List;

public interface PostService {

    Post addPost(Post post);

    List<Post> getAllPosts();

    Post updatePost(Long id, Post post);

    boolean deletePostById(Long id);

    Post getPostById(Long id);
}
