import styled from 'styled-components';

export const Flex = styled.div`
  display: flex;
  align-items: center;

  & > div,
  & ul {
    flex: 1;

    & > h1, p {
      margin-bottom: 10px;
    }
  }

  @media (max-width: ${(props: any) => props.theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;
