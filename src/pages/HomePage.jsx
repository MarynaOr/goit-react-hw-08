import s from './HomePage.module.css'

const HomePage = () => {
  return (
    <>
<section className={s.section}>
  <h1 className={s.title} >Ласкаво просимо до додатку Контактна книга 📱</h1>
      <p className={s.subtitle}>
        Цей додаток дозволяє зручно зберігати, фільтрувати та керувати вашими контактами.
      </p>
      <p className={s.author}>Зроблено з 💙</p>

<img src='../../public/cat-animation.gif' alt="cat" className={s.cat} />
      
</section>


      </>
  );
};

export default HomePage;