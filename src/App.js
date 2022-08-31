import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';

function App() {
  return (
    <div className="container border border-primary rounded mt-5"
    style={{
      width:"40%",
      backgroundImage: `url(https://www.freecodecamp.org/news/content/images/2021/06/w-qjCHPZbeXCQ-unsplash.jpg)`,
      backgoundSize: 'cover',

    }}>
      <Todo/>

    </div>
  );
}

export default App;
