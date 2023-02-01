import React from 'react'

interface TvShows {
    name: string;
    img: string;
    date: string;
    rating: number;
    availableNow: boolean;
  }
  
  const tvs: TvShows[] = [
    {
        name: "Mr. Robot",
        img: "https://avatarfiles.alphacoders.com/243/thumb-243096.jpg",
        date: "2015-06-24",
        rating: 8.5,
        availableNow: false
    },
    {
        name: "Game of Thrones",
        img: "https://avatarfiles.alphacoders.com/167/thumb-167463.jpg",
        date: "2011-04-17",
        rating: 9.3,
        availableNow: true
    },
    {
        name: "Breaking Bad",
        img: "https://avatarfiles.alphacoders.com/295/thumb-295425.jpg",
        date: "2008-01-20",
        rating: 9.5,
        availableNow: false
    },
    {
        name: "Friends",
        img: "https://avatarfiles.alphacoders.com/199/thumb-199389.png",
        date: "1994-09-22",
        rating: 8.9,
        availableNow: true
    },
    {
        name: "Dark",
        img: "https://avatarfiles.alphacoders.com/273/thumb-273264.jpg",
        date: "2017-12-01",
        rating: 8.7,
        availableNow: false
      }
  ];

function TvShow() {
    return (
        <div>
          {tvs.map((tv) => {
            if (tv.availableNow === false) {
              return <div key={tv.name}>
                
                <h3>{tv.name} </h3>
                <img src={tv.img} alt={tv.name} />
                <p>Released on: {tv.date}</p>
                <p>Rating: {tv.rating}</p>
                <p>will be available soon</p>
              
              
              </div>;
            }
            return (
              <div key={tv.name}>
                <h3>{tv.name}</h3>
                <img src={tv.img} alt={tv.name} />
                <p>Released on: {tv.date}</p>
                <p>Rating: {tv.rating}</p>
                <p>Available now</p>
              </div>
            );
          })}
        </div>
      )
    }
    

export default TvShow
