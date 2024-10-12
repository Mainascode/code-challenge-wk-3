// //Your code here
// let URL = ('http://localhost:3000/films')
//  const listHolder = document.getElementById('films') 
//  document.addEventListener('DOMContentLoaded', ()=>{ 
//      document.getElementsByClassName('film item')[0].remove() 
//      fetchOne(URL); 
//      fetchMovies(URL) 
//  }) 
  
//  //

//  function fetchOne(URL){ 
//      fetch(URL).then((response) => response.json()) 
//      .then(data => { 
//          setUpMovieDetails(data.films[0]); 
//      }) 
//  } 
  
  
//  //


//  function fetchMovies(URL){ 
//      fetch(URL) 
//      .then(resp => resp.json()) 
//      .then(movies => { 
//          movies.films.forEach(movie => { 
//              displayMovie(movie) 
//          }); 
//      }) 
//  } 
//  //


//  function displayMovie(movie){ 
//      const list = document.createElement('li') 
//      list.style.cursor="pointer" 
//      list.textContent= (movie.title).toUpperCase()
//      listHolder.appendChild(list) 
//      addClickEvent() 
//  } 

//  //
//  function addClickEvent(){ 
//      let children=listHolder.children 
//      for(let i=0; i<children.length; i++){ 
//          let child=children[i] 
//          // 

//          child.addEventListener('click',() => { 
//              fetch(`${URL}/${i+0}`) 
//              .then(res => res.json()) 
//              .then(movie => { 
//                  document.getElementById('buy-ticket').textContent = 'Buy Ticket' 
//                  setUpMovieDetails(movie) 
//              }) 
//          }) 
//      } 
//  } 
 

//  //

//  function setUpMovieDetails(childMovie){ 
//      const preview = document.getElementById('poster') 
//      preview.src = childMovie.poster;
//      const movieTitle = document.querySelector('#title'); 
//      movieTitle.textContent = childMovie.title; 
     
     


//      const movieTime = document.querySelector('#runtime'); 
//      movieTime.textContent = `${childMovie.runtime} minutes`; 
     


//      const movieDescription = document.querySelector('#film-info'); 
//      movieDescription.textContent = childMovie.description; 
     


//      const showTime = document.querySelector('#showtime') 
//      showTime.textContent = childMovie.showtime; 
     


//      const tickets  = document.querySelector('#ticket-num') 
//      tickets.textContent = childMovie.capacity -childMovie.tickets_sold; 
//  } 



 
//  const btn = document.getElementById('buy-ticket') 
//          btn.addEventListener('click', function(event){ 
//              let remainingTickets = document.querySelector('#ticket-number').textContent 
//              event.preventDefault() 
//              if(remainingTickets > 0){ 
//                  document.querySelector('#ticket-num').textContent 
//              } 
//              else if(parseInt(remTickets, 10)===0){ 
//                  btn.textContent = 'Sold Out' 
//              } 
 
            
// })             
