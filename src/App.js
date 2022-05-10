import './styles/normalize.scss';
import './styles/global.scss';
import Container from './components/Container/Container';
import Timer from './components/Timer/Timer';

const App = () => {
  return (
    <div className="App">
      <Container>
        <Timer />
      </Container>
    </div>
  );
}

export default App;
