import "./App.css";

function App() {
  const name = "Ivan";
  const user = {
    firstName: "Luka",
    lastName: "Horvat",
  };

  const FormatUser = (user) => {
    const formattedUser = `${user.firstName} ${user.lastName}`;

    return formattedUser;
  };

  const CheckSurname = (user) => {
    if (user.lastName === "Horvat") {
      return "Hello, friend!!";
    } else {
      return "Hello, stranger.";
    }
  };

  return (
    <div>
      <p>Hello, {FormatUser(user)}</p>
      <p>{CheckSurname(user)}</p>
    </div>
  );
}

export default App;
