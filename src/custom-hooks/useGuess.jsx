import { useEffect, useState } from 'react';
import { HIGH, LOW, MATCH, MODERATE } from '../utils/constant';

const useGuess = () => {
  const parsedNumber = JSON.parse(window.localStorage.getItem('guess')) || {};
  const [randomNumber, setRandomNumber] = useState(
    parsedNumber.randomNumber || ''
  );
  const [guessedNumber, setGuessedNumber] = useState(
    parsedNumber.guessedNumber || ''
  );
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');

  useEffect(() => {
    if (message) {
      try {
        window.localStorage.setItem(
          'guess',
          JSON.stringify({
            randomNumber,
            guessedNumber,
          })
        );
      } catch (error) {
        console.log(error);
      }
    }
  }, [message]);

  const handleChange = (event) => {
    const number = event.target.value;
    setGuessedNumber(number);
    if (number.trim() === '') {
      setMessage('');
    }
  };

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 10) + 1);
  };

  const checkGuess = (event) => {
    event.preventDefault();
    const parsedGuessedNumber = parseInt(guessedNumber, 10);
    let message = '',
      messageClass = '';
    if (randomNumber === parsedGuessedNumber) {
      message = MATCH;
      messageClass = 'match';
    } else if (parsedGuessedNumber < randomNumber) {
      if (parsedGuessedNumber < 5) {
        message = LOW;
        messageClass = 'low';
      } else {
        message = MODERATE;
        messageClass = 'moderate';
      }
    } else if (parsedGuessedNumber > randomNumber) {
      message = HIGH;
      messageClass = 'high';
    }
    setMessage(message);
    setMessageClass(messageClass);
  };

  return {
    guessedNumber,
    randomNumber,
    handleChange,
    checkGuess,
    generateRandomNumber,
    message,
    messageClass,
  };
};

export default useGuess;
