import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.45em 1.5em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border: 0px;
  border-radius: 7px;
  padding: 10px 20px;
  font-weight: bold;
  outline: none;
  font-size: 1rem;
  color: white;
  background: rgba(0,0,0, 0.6);

  &:hover {
    background: rgba(0,0,0, 0.7);
  }
}
`;

export default Button;
