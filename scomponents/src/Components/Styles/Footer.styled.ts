import styled from 'styled-components';


export const StyledFooter = styled.footer`
  background-color: ${(props: any) => props.theme.colors.footer};
  color: #fff;
  padding: 100px 0 60px;
  ul {
    list-style-type: none;
  }
  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }
  @media (max-width: ${(props: any) => props.theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
    }
  }
`;
