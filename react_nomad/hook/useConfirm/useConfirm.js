/* useConfirm를 사용해서 버튼을 눌렀을때 메세지가 뜨고 다음 동작을
  설정해서 원하는 결과물을 만들어 낼 수 있다 */

const useConfirm = (message, callback, rejectoin) => {
    if (typeof callback !== "function") {
      return;
    }
    const confirmAction = () => {
      if (confirm(message)) {
        callback();
      } else {
        rejectoin();
      }
    };
    return confirmAction;
  };
  
  const App = () => {
    const deleteWorld = () => console.log("Deleting the world...");
    const abort = () => console.log("Aborted");
    const confirmDelete = useConfirm("Are you sure", deleteWorld);
    return (
      <div className="App">
        <button onClick={confirmDelete}>Delete the world</button>
      </div>
    );
  };
  