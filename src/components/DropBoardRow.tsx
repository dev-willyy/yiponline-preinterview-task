import { useState } from 'react';
import { useDrop } from 'react-dnd';

function DropBoardRow({ slot, index }: any) {
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
    // const customerList: Array<any> = slot.filter((slotItem: any) => slotItem.id === id);
    // console.log(customerList);
    console.log(index);
  };

  return (
    <div ref={drop} className="border border-purple py-8">
      {slot.slotDescription}
    </div>
  );
}

export default DropBoardRow;
