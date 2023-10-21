import { useState } from 'react';
import { useDrop } from 'react-dnd';
import { Customer } from '../database/customers';

function DropBoardRow({ slot, index }: any) {
  const [updatedDropBoard, setUpdatedDropBoard] = useState<Array<any>>([]);
  const [{ isOver }, drop] = useDrop(() => {
    return {
      accept: 'customerRow',
      drop: (item: { customer: Customer }) => {
        addItemToBoard(item.customer);
      },
      collect: (monitor) => {
        return { isOver: !!monitor.isOver() };
      },
    };
  });

  const addItemToBoard = (customer: Customer) => {
    setUpdatedDropBoard((updatedDropBoard) => [...updatedDropBoard, [...[customer]]]);
  };

  return (
    <div ref={drop} className="border border-purple">
      <div className={`py-4 }`}>{slot.slotDescription}</div>
      {!isOver
        ? updatedDropBoard[0] &&
          updatedDropBoard[0].map((updatedDrop: any, index: number) => (
            <main className="bg-dim text-dark flex gap-3 items-center justify-evenly py-4" key={index}>
              <div>{updatedDrop.CustomerID}</div>
              <div>{updatedDrop.CustomerName}</div>
              <ul className="flex flex-col">
                {updatedDrop.DeliveryItems &&
                  updatedDrop.DeliveryItems.map((item: any, index: number) => <li key={index}>{item}</li>)}
              </ul>
              <ul className="flex flex-col">
                <li>{updatedDrop.PickUpLocation}</li>
                <li>{updatedDrop.DropOffLocation}</li>
              </ul>
            </main>
          ))
        : ''}
    </div>
  );
}

export default DropBoardRow;
