import React, { useEffect, useState } from 'react'

const SumCalculator = () => {

    const [inputValue, setInputValue] = useState('');
    const [sum, setSum] = useState(0);
    const [numbers, setNumbers] = useState([]);

    useEffect(() => {
        let isCancelled = false;

    const calculateSum = async () => {
      await new Promise(resolve => setTimeout(resolve, 100));

      if (!isCancelled) {
        const total = numbers.reduce((acc, num) => acc + num, 0);
        setSum(total);
      }
    };

    calculateSum();

    return () => {
      isCancelled = true; // prevent memory leaks
    };
    }, [numbers])


  return (
    <div>
        <h1>Sum Calculator</h1>
        <input value={inputValue} onChange={(e) => {
            setInputValue(e.target.value);
             const num = parseInt(inputValue);
            if (!isNaN(num)) {
            setNumbers(prev => [...prev, num]); // add number to the list
            setInputValue(''); // clear input
            }
        }} style={{width: '300px', height: '30px'}} placeholder='Enter Any Number' type="number" id='number' />
        <p>Sum: {sum}</p>
    </div>
  )
}

export default SumCalculator
