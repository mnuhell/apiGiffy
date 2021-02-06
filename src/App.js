import React, { useState , useEffect } from 'react'
import './App.css';
import { getGifs } from './services/getGifs';

function App() {

	const [gifs, setGifs] = useState([]);

	useEffect(() => {
		getGifs().then(gifs => setGifs(gifs));

	}, [])


  return (
    <div className="App">
		 <section className="App-content">
			{
				gifs.map(singleGif => {
					return <div key={singleGif.id} >
						<h4>{singleGif.title}</h4>
						<small>{ singleGif.id }</small>
						<img key={singleGif.id} alt={singleGif.title} src={singleGif.url} />
					</div>

				})
			}
      	</section>
    </div>
  );
}

export default App;
