import React from 'react';

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <h2>Good morning!</h2>
      <div className="controls">
        <div>
          Language: <button className="link-btn">Eng</button>
          <button className="link-btn">Hun</button>
        </div>

        <div>
          <p>
            Dark mode: Auto <input type="checkbox" /> Manual
          </p>
          <div>
            <button className="primary-btn">Dark</button>{' '}
            <button className="primary-btn">Light</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
