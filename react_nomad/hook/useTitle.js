const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
      const htmlTitle = document.querySelector("title");
      htmlTitle.innerTitle = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
  };
  
  const App = () => {
    const titleUpdater = useTitle("Loading...");
    // setTimeout(() => titleUpdater("Home"), 3000);
    return (
      <div className="App">
        <div>Hello useTitle!</div>
      </div>
    );
  };