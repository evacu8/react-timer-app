import { useState } from 'react';
import { useEffect } from 'react';
import Button from '../Button/Button';
import styles from './Timer.module.scss';
import Display from '../Display/Display';

const Timer = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, [timer]);

  const start = () => {
    if(!timer){
      setTimer(setInterval(() => {
        setTime(prevValue => prevValue + 1);
      }, 1))
    }
  };

  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  }

  const reset = () => {
    stop();
    setTime(0);
    setTimer(null);
  }

  return (
    <div className={styles.timer}>
      <div className={styles.row}>
        <Display time = {time}/>
      </div>
      <div className={styles.row}>
        <Button onClick={start}>Start</Button>
        <Button onClick = {stop}>Stop</Button>
        <Button onClick = {reset}>Reset</Button> 
      </div>
    </div>
  );
};

export default Timer;