import './App.css'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeScreen from './Screents/HomeScreen'
import ProductScreen from './Screents/ProductScreen'
import CartScreen from './Screents/CartScreen'
import SigninScreen from './Screents/SigninScreen'

function App() {
  
  const openMenu = () => {
    document.querySelector('.sidebar').classList.add('open')
  }

  const closeMenu = () => {
    document.querySelector('.sidebar').classList.remove('open')
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>
              &#9776;
            </button>
            <Link to="/">Amazona</Link>
          </div>
          <div className="header-links">
            <Link to="/signin">Sign in</Link>
            <Link to="/cart">Cart</Link>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Categories</h3>
          <button className="sidebar-close-button" onClick={closeMenu}>x</button>
          <ul>
            <li>
              <a href="">Pants</a>
            </li>
            <li>
              <a href="">Sharts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/signin/" component={SigninScreen} />
            <Route path="/products/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
          </div>
        </main>
        <footer className="footer">
          All right reseved.
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;