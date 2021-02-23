// Styling
import { AuthButtonStyled, Logo, NavItem, ThemeButton } from "../styles";
import { FiLogOut } from "react-icons/fi";
import { signout } from "../store/actions/authActions";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NavBar = ({ currentTheme, toggleTheme }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.user);
  return (
    <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <h3>Treasure Hunt</h3>
      </Logo>
      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <p>Hala Wallah, {user.username}!</p>
            <Link to="/">
              <AuthButtonStyled onClick={() => dispatch(signout())}>Sign out</AuthButtonStyled>
            </Link>
          </>
        ) : (
          <>
            <Link to="/signup">
              <AuthButtonStyled>Sign up</AuthButtonStyled>
            </Link>
            <Link to="/signin">
              <AuthButtonStyled>Sign in</AuthButtonStyled>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
