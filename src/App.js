import React from 'react'
import './App.css';
import { ListOfGift } from './components/ListOfGift';

function App() {

  return (
    <div className="App">
		 <section className="App-content">
			{
				<ListOfGift keyword="yes" />
			}
      	</section>
    </div>
  );
}

export default App;
