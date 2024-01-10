// PostList.js
import React, { useMemo, useState } from 'react';
import Post from '..Component/Post';
import PostForm from '../Component/PostForm';

const postListData = [
  { id: 1, content: 'Excited to join this text-only platform!', author: 'User1' },
  { id: 2, content: 'Text is the future!', author: 'User2' },
  // Add more post data as needed
];

const PostList = () => {
  const [posts, setPosts] = useState(postListData);

  const handlePostSubmit = (content) => {
    const newPost = {
      id: posts.length + 1,
      content,
      author: 'Current User', // In a real app, you might get the user from authentication.
    };
    setPosts([newPost, ...posts]);
  };

  const sortedPosts = useMemo(() => {
    return posts.sort((a, b) => b.id - a.id);
  }, [posts]);

  return (
    <div>
      <PostForm onSubmit={handlePostSubmit} />
      {sortedPosts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;