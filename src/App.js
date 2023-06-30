import "./App.css";
import React, { useState } from "react";
import UserForm from "./components/UserForm";
import UserDetails from "./components/UserDetails";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSubmit = async (username) => {
    try {
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      const userData = await userResponse.json();
      setUser(userData);

      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      const reposData = await reposResponse.json();
      if (reposData.length) {
        setRepos(reposData);
      } else {
        setRepos([]);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleReset = () => {
    setUsername("");
    setUser(null);
    setRepos([]);
  };

  return (
    <div className="App">
      <h1>Algebra parcijalni react app</h1>
      <p>GitHub username:</p>
      <UserForm
        onSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
      />
      {user && (
        <UserDetails
          avatarUrl={user.avatar_url}
          name={user.name}
          location={user.location}
          bio={user.bio}
          repos={repos}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;
