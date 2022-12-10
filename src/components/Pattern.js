import { useState } from 'react';
import Row from './Row';


const pattern = [
  [
  { id: 0, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
  { id: 1, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
  { id: 2, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false},
  { id: 3, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
  { id: 4, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false },
  { id: 5, stitchType: 'Single Crochet', rowCount: 0, value: 0, complete: false},
    ],
    [
  { id: 0, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
  { id: 1, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
  { id: 2, stitchType: 'Increase', rowCount: 0, value: 1, complete: false},
  { id: 3, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
  { id: 4, stitchType: 'Increase', rowCount: 0, value: 1, complete: false },
  { id: 5, stitchType: 'Increase', rowCount: 0, value: 1, complete: false},
    ],
  
];

export default function Pattern() {
  const [firstRow, setFirstRow] = useState(pattern[0]);
  const [secondRow, setSecondRow] = useState(
    pattern[1]
  );

  function handleToggleFirstRow(stitchId, nextComplete) {
    setFirstRow(firstRow.map(stitch => {
      if (stitch.id === stitchId) {
        // Create a *new* object with changes
        return { ...stitch, complete: nextComplete, rowCount: nextComplete ? 1 : 0 };
      } else {
        // No changes
        return stitch;
      }
    }));

  }

  function handleToggleSecondRow(stitchId, nextComplete) {
    setSecondRow(secondRow.map(stitch => {
      if (stitch.id === stitchId) {
        // Create a *new* object with changes
        return { ...stitch, complete: nextComplete, rowCount: nextComplete ? 1 : 0  };
      } else {
        // No changes
        return stitch;
      }
    }));
  }

  return (
    <>
      <h1>Crochet Pattern</h1>
      <h2>First Row:</h2>
      <Row
        stitches={firstRow}
        onToggle={handleToggleFirstRow}
        />

      <h2>Second Row:</h2>
      <Row
        stitches={secondRow}
        onToggle={handleToggleSecondRow}
         />
    </>
  );
}

