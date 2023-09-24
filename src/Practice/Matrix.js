import React, { useState } from 'react';

let colorList = [];
const Matrix = () => {


  const [matrix, setMatrix] = useState([
    ['white', 'white', 'white'],
    ['white', 'white', 'white'],
    ['white', 'white', 'white'],
  ]);
  const [count, setCount] = useState(0);

  const handleClick = (row, col) => {
    console.log(colorList);
    const newMatrix = [...matrix];
    setCount(count + 1);

    if (count < 8) {
      colorList.push([row, col]);
      newMatrix[row][col] = 'green';
      setMatrix(newMatrix);
    } else {
      colorList.forEach((cords) => {
        setTimeout(() => {
          newMatrix[cords[0]][cords[1]] = 'orange';
          setMatrix(newMatrix)
        }, 100);

      });

      // const newMatrix = matrix.map((row, i) =>
      // row.map((col, j) => {
      //   if (col === 'green') {
      //     return 'orange';
      //   }
      //   return col;
      // })


      // setCount(0);
    }
  };

  return (
    <div>
      {matrix.map((row, i) => (
        <div key={i} style={{ display: 'flex' }}>
          {row.map((col, j) => (
            <div
              key={j}
              style={{
                width: '100px',
                height: '100px',
                backgroundColor: col,
                margin: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
              }}
              onClick={() => handleClick(i, j)}
            >
              {col}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Matrix;