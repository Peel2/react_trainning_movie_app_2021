import React from 'react';

function Food({ name, picture }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: 'Kimchi',
    image:
      'https://cdn.crowdpic.net/detail-thumb/thumb_d_65390B023BB5FA177242F48877F1D44B.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image: 'http://www.mindgil.com/news/photo/202103/70839_7148_1250.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
      'https://t1.daumcdn.net/liveboard/SNUH/fed8c48df21b43ada043b4cdda7dfe57.JPG',
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Doncasu',
    image:
      'https://kr.savorjapan.com/contents/kr/feature/img/019/feat03_ph01.jpg',
    rating: 3.8,
  },
  {
    id: 5,
    name: 'Kimbap',
    image:
      'https://static.wtable.co.kr/image-resize/production/service/recipe/689/4x3/edd1e01f-4502-453b-8b61-688941aefb76.jpg',
    rating: 4.2,
  },
];

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food key={dish.id} name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

/*
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
*/

// const renderFood = (dish) => <Food name={dish.name} picture={dish.image} />;

export default App;
