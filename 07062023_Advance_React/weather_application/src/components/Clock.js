import {useState, useEffect} from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, [date]);

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;

