import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Logo = styled.img`
  height: 150px;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Wrapper = styled.div`
  text-align: center;
`;

const AppLink = styled.a`
  color: #09d3ac;
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <Header>
        <Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </Header>
    </Wrapper>
  );
}

export default App;


// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import styled from 'styled-components';

// const Logo = styled.img`
//   height: 40vmin;
// `;

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
