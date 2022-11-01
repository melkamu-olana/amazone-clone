import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './Login';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';
import { auth } from './firebase';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Orders from './Orders';

const promise = loadStripe(
  'pk_test_51LaszSKTiwsj0og8xgxEZV5w10qbdYxAEfH7hCbVT73rXsJJnX9hvSP1sFYMWEqQt3SNwImbo6A2URXF3qESeWPn00iE7WejxJ'
);
function App() {

  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
      
       
        <Routes>
          <Route path="/login" element={<Login />}/>          
          <Route path="/"
            element={<>
            <Header />
            <Home />
            
            </>} />     
            <Route path="/payment"
            element={
              <>
                <Header />
                <Elements stripe={promise}>
                  <Payment />
                </Elements>
              </>
            }
          />    
          <Route path="/Checkout" element={<><Header />
          <Checkout/>
          </>}/>
          <Route path="/orders" element={<><Header />
          <Orders/>
          </>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
