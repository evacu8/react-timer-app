import styles from './Display.module.scss';

const Display = props => {

  let milliseconds = String(props.time).slice(-3).padStart(3, "0");
  let seconds = String(Math.floor(props.time / 1000)).padStart(2, "0");
  let minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  let hours = String(Math.floor(minutes / 60)).padStart(2, "0");

  return (
    <div className={styles.display}>
      <div>{hours}:{minutes}:{seconds}.{milliseconds}</div>
    </div>
  );
};

export default Display;