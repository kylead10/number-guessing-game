import { Button, Form } from 'react-bootstrap';
import Confetti from 'react-confetti';
import Header from './components/Header';
import useGuess from './custom-hooks/useGuess';

const App = () => {
  const {
    guessedNumber,
    randomNumber,
    handleChange,
    checkGuess,
    generateRandomNumber,
    message,
    messageClass,
  } = useGuess();

  return (
    <div className='main-content'>
      <Header />
      <Button onClick={generateRandomNumber}>Generate Random Number</Button>
      <Form className='mt-3' onSubmit={checkGuess}>
        <Form.Control
          type='text'
          placeholder='Enter a number to guess'
          value={guessedNumber}
          onChange={handleChange}
        />
        <Button
          variant='primary'
          type='submit'
          className='mt-3 mb-3'
          disabled={!guessedNumber.trim() || !randomNumber}
        >
          Check Guess!
        </Button>
      </Form>
      {message && (
        <>
          <p className={`message ${messageClass}`}>{message}</p>
          {messageClass === 'match' && (
            <Confetti width={screen.width} height={screen.height} />
          )}
        </>
      )}
    </div>
  );
};

export default App;
