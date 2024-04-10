import React from 'react';

export default function BtnGitHub({ link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn btn-outline">
      <svg width="38" height="38">
        <use
          href="../img/icons/sprite.svg#social-github"
          viewBox="0 0 38 23"></use>
      </svg>
      GitHub repo
    </a>
  );
}
