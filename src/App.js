import React from "react";
import propTypes from "prop-types";

const fruits = [
  {
    id: "1",
    name: "apple",
    image: "https://i5.walmartimages.ca/images/Large/094/514/6000200094514.jpg",
    rating: 4.9,
  },
  {
    id: "2",
    name: "orange",
    image:
      "https://lh3.googleusercontent.com/proxy/zOnSl6yCs65sIUCrNTnu8O6QosdJS_0NAgXHJgbHZm6C-N5drMP_Cgp62txi6OuCaqXdiALkl44ehUA",
    rating: 4.8,
  },
  {
    id: "3",
    name: "grape",
    image: "https://mukuzani.ge/modules/grapes/uploads/1.png",
    rating: 4.7,
  },
  {
    id: "4",
    name: "banana",
    image: "https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG.jpg",
    rating: 4.3,
  },
  {
    id: "5",
    name: "watermelon",
    image:
      "https://solidstarts.com/wp-content/uploads/when-can-babies-eat-watermelon-480x320.jpg",
    rating: 4.1,
  },
];

function OhmyFruits({ name, image, rating }) {
  // 옆의 이것은 ES6의 기술로, 가인수를 사용해도 되지만, 이미 밑에서 보내진 속성은 오브젝트이기 때문에 {}를 사용하여 내부의 속성만 표시해 주면 된다

  console.log(name, image);
  return (
    <div>
      <h1>I Love {name}</h1>
      <h3>{rating}/5.0</h3>
      <img src={image} alt={name}></img>
    </div>
  ); // 옆에 보이듯이, HTML태그 안에 인수를 사용할때는 대괄호를 사용해 준다.
}

// propTypes 는 OhmyFruits 가 받는 인수의 타당성을 검증한다.
// 예를 들어 타입이 문자열인데 숫자가 들어온다면 에러를 발생시킨다.
OhmyFruits.propTypes = {
  name: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

// 밑에서 볼수 있듯이 name 을 통해서 빠져나간 인자들은 다시 위의 OhmyFruits함수에 인자로서 들어가게 되고, 그 안의 HTML에 사용되어 다시 리턴된다.
function App() {
  return (
    <div>
      {fruits.map((arg) => (
        <OhmyFruits
          key={arg.id}
          name={arg.name}
          image={arg.image}
          rating={arg.rating}
        />
      ))}
      {yest.map((arg) => {
        return (
          <YestTest
            key={arg.id}
            age={arg.age}
            name={arg.name}
            sex={arg.sex}
            married={arg.married ? "O" : "X"}
          />
        );
      })}
    </div>
  );
}

const yest = [
  { name: "baekigun", age: 37, sex: "male", married: false, id: 0 },
];

const YestTest = ({ name, age, sex, married }) => (
  <div>
    <h1>Bae Kigun</h1>
    <h4>name : {name}</h4>
    <h4>age : {age}</h4>
    <h4>sex : {sex}</h4>
    <h4>married : {married}</h4>
  </div>
);

YestTest.propTypes = {
  name: propTypes.string.isRequired,
  age: propTypes.number.isRequired,
  sex: propTypes.string.isRequired,
  married: propTypes.bool.isRequired,
};
export default App;
