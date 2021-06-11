/* 유저가 버튼을 누르면 알람을 제공해주는 기능이다 */

const useNotification = (title, options) => {
    if (!("Notification" in window)) {
      return;
    }
    const fireNotif = () => {
      if (Notification.permission !== "granted") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            new Notification(title, options);
          } else {
            return;
          }
        });
      } else {
        new Notification(title, options);
      }
      return fireNotif;
    };
  };
  
  const App = () => {
    const triggerNotif = useNotification("Can i steel your kimchi?", {
      body: "I love kimchi don't you"
    });
    return (
      <div className="App" style={{ height: "1000vh" }}>
        <button onClick={triggerNotif}>Hi</button>
      </div>
    );
  };