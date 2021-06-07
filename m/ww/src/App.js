/* App.js 파일은 index.html파일의 <div id="root"><div>로 들어간다
   이 역활은 index.js가 진행한다.
   react특성으로 인해 브라우저에서 페이지의 소스를 확인할 수 없고
   root를 id로 가지는 div만 확인할 수 있다.
*/  
import React from 'react';

function App() {
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;

