import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  z-index: 1;
  height: 100%;
  background-image: url('/image.png');
  backgroun-colot: rgba(255, 255, 255, 0.1);
  background-repeat: no-repeat;
  text-align: center;
  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    margin-bottom: 60px;
  }
`;

export default Wrapper;
