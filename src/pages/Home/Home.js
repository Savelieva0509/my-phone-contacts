import css from './Home.module.css'; 
import  Globe  from 'components/DinamicBackground';

export default function Home() {
  return (
    <>
      <Globe className={css.Birds} />
      <div className={css.homePage} id="#homePage">
      <div className={css.homePageContainer}>
        <h1 className={css.homeTitle}>
        Hello, this is your PhoneBook. It is designed to help your brain not
        remember numbers, but write them down. Create your own unique account
        and get the opportunity to record your contacts.
      </h1>
        </div>
      </div>
    </>
   
    
    
  );
}