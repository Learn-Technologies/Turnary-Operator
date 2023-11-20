// import React from "react";

// function App() {
//   return (
//     <div>
//       <h1>Hello, React!</h1>
//       <p>This is a simple React app.</p>
//     </div>
//   );
// }

// export default App;

import React from "react";
import LastImg from "./LastImg";
import FirstImg from "./FirstImg";

function App() {
  // using turnary operator to flip an image or text
  // now
  const [isImgRightSide, setIsImgRightSide] = React.useState(false);
  return (
    <div>
      {isImgRightSide ? <FirstImg /> : <LastImg />}
      <button onClick={() => setIsImgRightSide(!isImgRightSide)}>
        Change Direction
      </button>
    </div>
  );
}

export default App;
