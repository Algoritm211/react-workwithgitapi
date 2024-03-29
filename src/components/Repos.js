import React from "react";

const Repos = ({ repos }) => {
  return (
    <React.Fragment>
      {repos.map((repo) => {
        return (
          <div className="card mb-3" key={repo.id}>
            <div className="card-body">
              <h5>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </h5>
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default Repos;
