import React, {
  Component,
  lazy,
  Suspense,
  memo
} from 'react';
import logo from './logo.svg';
import './App.css';
// lazy的返回值 就是一个react组件,lazy组件一定要配合Suspense使用,否则无效
// const About = lazy(() =>
//   import ('./About'));

// class Foo extends React.PureComponent {

//   // 这种判断可以监听传入参数的改变
//   // shouldComponentUpdate(nextProps, nextState) {
//   //   if (nextProps.person === this.props.person) {
//   //     console.log(nextProps.name)
//   //     return false;
//   //   }
//   //   return true;
//   // }

//   render() {
//     console.log('Foo render')
//     return <div>{this.props.person.age}</div>
//   }
// }
const Foo = memo(function(props) {
  function handleClickTest() {
    props.handleClick("okkk")
  }
  const [test] = React.useState('ok')
  return (
    <div>
      {props.person.age}
      {test}
  <button onClick={handleClickTest()}>aaaaaa</button>

    </div>)
})


class App extends Component {
  state = {
    count: 0,
    arrr: null,
    person: {
      age: 1,
    },

  }

  handleClick = value => {
    this.setState({
      arrr: value
    });
  }

  render() {
    const {
      count,
      person,
    } = this.state;
    return (
      <div>
        <div>
        <button onClick={()=>this.setState((prevProp)=>({count:prevProp.count+1}))}>点击按钮</button>
        
          <Foo person = {person} count={count} handleClick={this.handleClick}></Foo>
        <button onClick={()=>{console.log(this.state.arrr)}}>Test</button>
        </div>
      </div>
    )
  }
}
export default App;