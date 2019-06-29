import React, {
  Component,
  lazy,
  Suspense,
  memo
} from 'react';
import logo from './logo.svg';

function App2() {
  // React.useEffect(() => {
  //   console.log('App2')
  // })
  // return (
  //   <div>
  //     <App></App>
  //   </div>
  // );
}

function App(props) {
  const [count, setCount] = React.useState(0);
  const [size, setSize] = React.useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  });

  const onResize = () => {
    setSize({
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
    });
  };

  React.useEffect(() => {
    document.title = count;
  });

  React.useEffect(() => {
    window.addEventListener('resize', onResize, false);
    return () => {
      window.removeEventListener('resize', onResize, false);
    };
  }, []);

  React.useEffect(() => {
    console.log('count：' + count);
  }, [count]);

  return (
    <button onClick= {()=>setCount(count+1)}>Click {size.width}x{size.height}</button>
  );
}

export default App;