import React, { PropTypes } from 'react';
import { Link, IndexLink} from 'react-router';
import Loading from './Loading';

const Header = () => {
  return (
    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      <Loading interval={100} dots={20} />
    </nav>
  );
};

export default Header;
