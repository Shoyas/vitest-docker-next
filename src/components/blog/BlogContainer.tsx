import React from 'react';
import { DummyPosts } from './DummyPosts';

type PostProps = {
  id: number;
  title: string;
  description: string;
  author: string;
  published: boolean;
  tags: string[];
};

const Post = (post: PostProps) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b-2 border-gray-300" key={post.id}>
      <h2 className="text-2xl">{post.title}</h2>
      <p>{post.description}</p>
      <p>{post.author}</p>
      <p>{post.tags.join(', ')}</p>
    </div>
  );
};

const BlogContainer = () => {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>This is the blog page.</p>
      {
        DummyPosts.map((post) => {
          return <Post key={post.id} {...post} />;
        })
      }
    </div>
  );
};

export default BlogContainer;
