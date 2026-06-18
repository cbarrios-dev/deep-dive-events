import logo from "./assets/images/logo.png";
import MainContent from "./components/MainContent";

// Another Comment?

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <h2>Learn & Master GitHub Actions</h2>
      </header>
      <MainContent />
    </>
  );
}

export default App;
