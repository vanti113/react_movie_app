import React from "react";

const Element = () => {
  return (
    <div>
      {<FormatName firstName={user.firstName} lastName={user.lastName} />}
      {/* {FormatName((firstName = "bae"))} 위의 방식대로 props를 사용하는 것이 훨씬 유용하다.*/}
    </div>
  );
};

const FormatName = ({ firstName, lastName }) => {
  return firstName + " " + lastName;
};

const user = {
  firstName: "bae",
  lastName: "Kigun",
};

export default Element;
