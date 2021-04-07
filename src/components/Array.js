import React from "react";

function Array() {
  const images = [
    {
      url:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
      name: "The Falcon and the Winter Soldier",
    },
    {
      url:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
      name: "The Falcon and the Winter Soldier",
    },
    {
      url:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
      name: "The Falcon and the Winter Soldier",
    },
    {
      url:
        "https://www.themoviedb.org/t/p/w220_and_h330_face/6kbAMLteGO8yyewYau6bJ683sw7.jpg",
      name: "The Falcon and the Winter Soldier",
    },
  ];
  return (
    <div>
      {images.map((image) => (
        <div>
          <img src={image.url} />
          <a>{image.name}</a>
        </div>
      ))}
    </div>
  );
}

export default Array;
