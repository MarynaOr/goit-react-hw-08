
// import { isLoggedIn } from '../../redux/auth/selectors';
import AuthNav from '../AuthNav/AuthNav';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
// import UserMenu from '../UserMenu/UserMenu';
import s from './AppBar.module.css'
import { isLoggedIn } from '../../redux/auth/selectors';
import UserMenu from '../UserMenu/UserMenu';
import LoginForm from '../LoginForm/LoginForm';


const AppBar = () => {
 const login = useSelector(isLoggedIn)
  return (
    <>
      <header className={s.header}>
        
        <Navigation/>
       {login ? <UserMenu/> : <p>dsc</p> }
        {/* <AuthNav/> */}
      </header>
    </>
  );
};

export default AppBar;


