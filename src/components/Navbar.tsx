import React from 'react';
import Greeting from './Greeting';

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <Greeting />
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
