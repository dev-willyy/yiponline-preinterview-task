import { useState } from 'react';
import { useDrop } from 'react-dnd';

function DropBoardRow({ slot, index}: any) {
  const [board, setBoard] = useState<Array<any>>([]);
  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: 'customerRow',
      drop: (item: { id: number }) => {
        addItemToBoard(item.id);
      },
      collect: (monitor) => {
        return { isOver: !!monitor.isOver() };
      },
    };
  }, []);

  const addItemToBoard = (id: number) => {
    console.log(id);
  };

  return (
    <div ref={drop} className="border border-purple py-8">
      {slot.slotDescription}
    </div>
  );
}

export default DropBoardRow;
