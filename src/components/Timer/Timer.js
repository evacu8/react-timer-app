import { useState } from 'react';
import Button from '../Button/Button';
import styles from './Timer.module.scss';
import Display from '../Display/Display';

const Timer = props => {
  const [time, setTime] = useState([0]); 

  return (
    <div className={styles.timer}>
      <Display />
      <Button>Start</Button>
      <Button>Stop</Button>
      <Button>Reset</Button>
    </div>
  );
};

export default Timer;