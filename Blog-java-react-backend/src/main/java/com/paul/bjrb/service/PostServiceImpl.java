package com.paul.bjrb.service;

import com.paul.bjrb.entity.PostEntity;
import com.paul.bjrb.model.Post;
import com.paul.bjrb.repository.PostRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {
    private final PostRepository postRepository;
    @Autowired
    public PostServiceImpl(PostRepository postRepository) {
        this.postRepository = postRepository;
    }

    @Override
    public Post addPost(Post post) {
        PostEntity postEntity = new PostEntity();
        BeanUtils.copyProperties(post,postEntity);
        postRepository.save(postEntity);
        return post;
    }

    @Override
    public List<Post> getAllPosts() {
        List<PostEntity> postEntities = postRepository.findAll();
       List<Post> posts = postEntities
               .stream()
               .map(post -> new Post(
                       post.getId(),
                       post.getTitle(),
                       post.getBody()
               )).collect(Collectors.toList());
       return posts;
    }

    @Override
    public Post updatePost(Long id, Post post) {
        PostEntity postEntity = postRepository.findById(id).get();
        postEntity.setTitle(post.getTitle());
        postEntity.setBody(post.getBody());
        postRepository.save(postEntity);
        return post;

    }

    @Override
    public boolean deletePostById(Long id) {
        PostEntity postEntity = postRepository.findById(id).get();
        postRepository.delete(postEntity);
        return true;
    }

    @Override
    public Post getPostById(Long id) {
        PostEntity postEntity = postRepository.findById(id).get();
        Post post = new Post();
        BeanUtils.copyProperties(postEntity,post);
        return post;
    }
}
