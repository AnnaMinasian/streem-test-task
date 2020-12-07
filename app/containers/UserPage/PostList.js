import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostList = styled(Link)`
  display: flex;
  width: 50%;
  padding: 5px 10px 5px 10px;
  text-decoration: none;
  color: black;

  :hover {
    background-color: rgba(191, 191, 191, 0.2);
  }

  img {
    margin-right: 20px;
  }
`;

export default PostList;
