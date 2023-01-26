import { ColorRing } from 'react-loader-spinner';
import css from '../Spinner/Spinner.module.css';
const Spinner = () => {
  return (
    <div className={css.centered}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e5b7c4', '#205795', '#207c9c', '#23a5a6', '#e2a8e4']}
      />
    </div>
  );
};
export default Spinner;
