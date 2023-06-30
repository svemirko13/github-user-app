import React from "react";
import PropTypes from "prop-types";

function UserDetails({ avatarUrl, name, location, bio, repos, onReset }) {
  return (
    <div className="UserDetails">
      <img src={avatarUrl} alt="User Avatar" />
      <h2>NAME: {name}</h2>
      <h4>LOCATION: {location}</h4>
      <h4>BIO: {bio}</h4>
      <h4>REPOSITORIES: </h4>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id} class="popis">
            {repo.name}
          </li>
        ))}
      </ul>
      <button onClick={onReset} class="reset">
        Reset
      </button>
    </div>
  );
}

UserDetails.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  bio: PropTypes.string,
  repos: PropTypes.array.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default UserDetails;
