import { ThemeProvider } from 'styled-components';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { Container } from './Components/Styles/Container.styled';
import GlobalStyles from './Components/Styles/Global';
import content from './content';
import { Card } from './Components/Card';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333'
  },
  mobile: '768px'
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
