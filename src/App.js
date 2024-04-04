import "./App.css";

const arr = JSON.parse(
  window.localStorage.getItem("props") || `["hello","world"]`
); // do not change

const Join = () => {
  return <div id="join"></div>;
};

const App = () => {
  return (
    <div id="main">
      <Join />
    </div>
  );
};

export default App;
