import css from './Home.module.css'; 

export default function Home() {
  return (
    <div className={css.wrapperHomePage}>
      <h1 className={css.homeTitle}>
        Hello, this is your PhoneBook. It is designed to help your brain not
        remember numbers, but write them down. Create your own unique account
        and get the opportunity to record your contacts.
      </h1>
    </div>
  );
}