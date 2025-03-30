import QuizLogo from "./idea.png"; // Import the image
function Header() {
  return (
    <header className="app-header">
      <img src={QuizLogo} alt="Reactlogo" />
      <h1>Quiz App</h1>
    </header>
  );
}

export default Header;
