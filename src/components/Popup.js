import React from 'react'

function Popup({ selected, closePopup }) {
	return (
		<section className="popup">
			<div className="container">
				<h2>{ selected.Title } <span>({ selected.Year })</span></h2>
				<p className="rating">Rating: {selected.imdbRating}</p>
				<div class="row">
              <div class="col poster"><img src={selected.Poster} />
			     <br></br>
			  </div>
               <div class="col">
			   <p><b>Plot:</b>{selected.Plot}</p>
					<p><b>Actors:</b>{selected.Actors}</p>
					<p><b>Director:</b>{selected.Director}</p>
				</div>	
					<div class="col">	
					<p><b>Rated:</b>{selected.Rated}</p>
					<p><b>Country:</b>{selected.Country}</p>
					<p><b>Genre:</b>{selected.Genre}</p>
					<p><b>Language:</b>{selected.Language}</p>
			   </div>
              <br></br>
           </div>
		      <div className="myButton">
			  <button className="btn btn-primary" onClick={closePopup}>Close</button> 
			  </div>
			
			</div>
		</section>
	)
}

export default Popup
