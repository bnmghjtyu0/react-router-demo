## 安裝
### react
```sh=
npx create-react-app my-app
cd my-app
npm start
```
### react-router
```sh=
npm install --save react-router react-router-dom
```

## Basic
### src/index.js
```javascript=
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'));
```
### src/app.js
```javascript=
import { Route, Link } from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <Link to="/" className="App-link">Home</Link>
      <Link to="/sandwiches" className="App-link">sandwiches</Link>
      <Route exact path="/" component={Home} />
      <Route path="/sandwiches" component={Sandwiches} />
    )
  }
}
```
