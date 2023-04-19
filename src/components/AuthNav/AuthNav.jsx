import { NavLinkStyled } from './AuthNav.styled';

//відображається лише коли користувач не увійшов
export const AuthNav = () => {
  return (
    <div>
      <NavLinkStyled to="/register">Register</NavLinkStyled>
      <NavLinkStyled to="/login">Log In</NavLinkStyled>
    </div>
  );
};