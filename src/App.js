import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ['좌절감으로 배움을 늦추지 마라.', '삶이 있는 한 희망은 있다.', '산다는 것 그것은 치열한 전투이다.', '언제나 현재에 집중할 수 있다면 행복할 것이다.', '진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야한다.', ' 직업에서 행복을 찾아라, 아니면 행복이 무엇인지 절대 모를 것이다.']
  
  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> 파일을 고치고 저장하면 새로운 명언을 볼 수 있습니다.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
