import styled from 'styled-components';

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 20px;
  flex-direction: ${({layout} :any) => layout };

  img {
    width: 80%;
  }

  h2 {
    text-decoration: underline;
    margin-bottom: 10px;
  }

  p {
    margin-bottom: 10px;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${(props: any) => props.theme.mobile}) {
    flex-direction: column;
  }
`;
