
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import s from './AppBar.module.css'


const AppBar = () => {
  return (
    <>
      <header className={s.header}>
        
        <Navigation/>
        <AuthNav/>
      </header>
    </>
  );
};

export default AppBar;