import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${(props: any) => props.theme.colors.header};
  padding: 40px 0;
  transition: all 0.3s ease-in-out;
`;

// background-color: ${(props: IHeader) => props.bg};
// background-color: ${(props: ITheme) => props.colors.header};

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${(props: any) => props.theme.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${(props: any) => props.theme.mobile}) {
    margin-bottom: 40px;
  }
  `;
  
  export const Image = styled.img`
  width: 375px;
  margin-left: 40px;


  @media (max-width: ${(props: any) => props.theme.mobile}) {
    margin: 40px 0 30px;
  }
`;
