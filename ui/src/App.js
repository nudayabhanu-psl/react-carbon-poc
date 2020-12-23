import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Home } from './pages/home/home'
import { CompanyDetailsPage } from './pages/CompanyDetails/CompanyDetails'
import { HeaderComponent } from './components/Header/Header'
import { FooterComponent } from './components/footer/footer'


function AppRouter() {

  const defaultStyle = {
    paddingTop: '50px'
  }

  return (
    <Router>
      <div>
        <HeaderComponent />
        <div style={defaultStyle}>
          <Route path="/" exact component={Home} />
          <Route path="/:companyName/details" exact component={CompanyDetailsPage} />
        </div>
        <FooterComponent />
      </div>
    </Router>


  );
}

export default AppRouter;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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
