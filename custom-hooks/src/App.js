import React from 'react';
import useFavouriteCount from './useFavouriteCount';
import './App.css';
function App() {
  const {favouriteCount, increaseFavouriteCount, decreaseFavouriteCount} = useFavouriteCount();
  return (
      <div>
        <h1>count:{favouriteCount.count}</h1>
        <button type='button' onClick=
                {increaseFavouriteCount}>Increment</button>

          <button type='button' onClick=
                  {decreaseFavouriteCount}>Decrement</button>
      </div>
  );
}
export default App;