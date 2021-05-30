/* eslint-disable */
import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';

function App() {
  

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState(0);
  let [남자, 남자변경] = useState(0);
  let posts = '강남 고기 맛집';

  function 제목바꾸기() {
    var newArray = [...글제목]; /* 대괄호에 점3개를 넣어야 완전 별개의 Array로 적용된다 (State변경방법!) */
    newArray[0] = '여자 코드 추천';
    글제목변경( newArray );
  }

  return (
    <div className="App">   
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={ 제목바꾸기 }>버튼</button>
       
      <Modal/>

      <div className="list">
        <h2> { 글제목[0] } <span onClick={ ()=>{ 따봉변경(따봉 + 1) } }>👍🏻</span> {따봉}</h2>
        <h3> { posts } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h2> { 글제목[1] }</h2>
        <h3> { posts } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h2> { 글제목[2] }</h2>
        <h3> { posts } </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      

      
      
    </div>

  );
}

/* Component  div를 함수로 정의해서 좀더 깔끔게 HTML을 작성할 수 있다 */
/* 단점: State를 사용하게 되면 상당히 복잡해져서 장점이 사라진다 */
function Modal() {    
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}

export default App;
