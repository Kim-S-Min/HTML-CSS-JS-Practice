/* 해당 버튼을 누르면 페이지를 나갈때 메세지가 on,off로 나오게 되어서 이용자가 빠지는걸 막을 수 있다. 
    useConfirm, usePrevent는 Hook이지만 useEffeck, useState를 사용하지 않는다*/

const usePreventLeave = () => {
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = ""; //  구글 크롬에서 이 명령어가 없으면 이해를 이벤트를 이해하지 않기때문에 넣어줘야 한다
    };
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () =>
      window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
  };
  
  const App = () => {
    const { enablePrevent, disablePrevent } = usePreventLeave();
    return (
      <div className="App">
        <button onClick={enablePrevent}>Protect</button>
        <button onClick={disablePrevent}>Unportect</button>
      </div>
    );
  };
  