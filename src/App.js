import React, { useState } from 'react';
import './App.css';

function App() {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [operator, setOperator] = useState('+');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    // Переведемо введені значення у числовий формат
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    // Перевіримо, чи введені значення є числами
    if (isNaN(num1) || isNaN(num2)) {
      setResult('Введіть коректні числові значення');
      return;
    }

    // Виконаємо обчислення в залежності від вибраного оператора
    switch (operator) {
      case '+':
        setResult(num1 + num2);
        break;
      case '-':
        setResult(num1 - num2);
        break;
      case '*':
        setResult(num1 * num2);
        break;
      case '/':
        // Перевіримо, чи не відбувається ділення на нуль
        if (num2 === 0) {
          setResult('Ділення на нуль неможливе');
        } else {
          setResult(num1 / num2);
        }
        break;
      default:
        setResult('Невідомий оператор');
    }
  };

  return (
      <div className="App">
        <input
            type="number"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
        />



        <select className="select-css" value={operator} onChange={(e) => setOperator(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>




        <input
            type="number"
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
        />
        <button className="submit" onClick={handleCalculate}>=</button>
        <div>Результат: {result}</div>
      </div>
  );
}

export default App;