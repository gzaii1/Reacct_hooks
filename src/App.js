import React, {
  Component,
  lazy
} from 'react';
import logo from './logo.svg';
import './App.css';
// lazy的返回值 就是一个react组件
const About = lazy(() =>
  import ('./About'));

class App extends Component {
  render() {
    return (
      <div>
            <About></About>
          </div>
    );
  }
}
export default App;