// PostForm.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  margin: 16px 0;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 8px;
`;

const Button = styled.button`
  background-color: #4CAF50;
  color: #fff;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const PostForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(content);
    setContent('');
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <TextArea
          placeholder="What's on your mind?"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button type="submit">Post</Button>
      </Form>
    </FormContainer>
  );
};

export default PostForm;