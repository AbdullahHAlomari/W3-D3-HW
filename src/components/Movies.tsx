import React from 'react'

interface Movie {
    name: string;
    img: string;
    date: string;
    rating: number;
    availableNow: boolean;
  }
  
  const movies: Movie[] = [
    {
      name: "The Shawshank Redemption",
      img: "https://avatarfiles.alphacoders.com/223/thumb-223666.jpg",
      date: "1994-09-23",
      rating: 9.2,
      availableNow: true
    },
    {
      name: "The Godfather",
      img: "https://avatarfiles.alphacoders.com/155/thumb-155310.jpg",
      date: "1972-03-24",
      rating: 9.2,
      availableNow: false
    },
    
    {
        name: "The Intouchables",
        img: "https://cdn.movietalkies.com/wp-content/uploads/media/images/hollywood/reviews/2012/theintouchables-1.jpg",
        date: "2011-11-02",
        rating: 8.5,
        availableNow: true
    },
    {
        name: "Léon: The Professional",
        img: "https://avatarfiles.alphacoders.com/199/199187.png",
        date: "1994-09-14",
        rating: 8.5,
        availableNow: false
    },
    {
        name: "Who Am I",
        img: "https://static1.personality-database.com/profile_images/5b6719aa1ca9459fa7d6eaa32c5e383c.png",
        date: "2015-09-25",
        rating: 7.8,
        availableNow: true
    },
  ];

function Movies() {
  return (
    <div>
      {movies.map((movie) => {
        if (movie.availableNow === false) {
          return <div key={movie.name}>
            
            <h3>{movie.name} </h3>
            <img src={movie.img} alt={movie.name} />
            <p>Released on: {movie.date}</p>
            <p>Rating: {movie.rating}</p>
            <p>will be available soon</p>
          
          
          </div>;
        }
        return (
          <div key={movie.name}>
            <h3>{movie.name}</h3>
            <img src={movie.img} alt={movie.name} />
            <p>Released on: {movie.date}</p>
            <p>Rating: {movie.rating}</p>
            <p>Available now</p>
          </div>
        );
      })}
    </div>
  )
}


export default Movies
