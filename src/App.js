import React from "react";

function Apple({ name }) {
  // 옆의 이것은 ES6의 기술로, 이미 밑에서 보내진 속성은 오브젝트이기 때문에 {}를 사용하여 내부의 속성만 표시해 주면 된다
  console.log(name);
  return <h1>I Love {name}</h1>; // 옆에 보이듯이, HTML태그 안에 인수를 사용할때는 대괄호를 사용해 준다.
}
// 밑에서 볼수 있듯이 name 을 통해서 빠져나간 인자들은 다시 위의 Apple함수에 인자로서 들어가게 되고, 그 안의 HTML에 사용되어 다시 리턴된다.
function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Apple name="애플" />
      <Apple name="삼성" />
      <Apple name="엘지" />
      <Apple name="현대" />
      <Apple name="한화" />
    </div>
  );
}

export default App;
