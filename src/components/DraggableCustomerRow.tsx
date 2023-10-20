import { ReactComponentElement } from 'react';
import { CustomerPropTypes } from './CustomersRecords';
import { useDrag } from 'react-dnd';

function DraggableCustomerRow({ customer, index }: CustomerPropTypes): ReactComponentElement<any> {

	
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: 'customerRow',
      item: {
        id: index,
      },
      collect: (monitor) => {
        return { isDragging: !!monitor.isDragging() };
      },
    };
  }, []);

  return (
    <div
      ref={drag}
      className={`flex cursor-pointer text-dark bg-dim ${
        isDragging ? 'border-4 border-red-500' : 'border-2 border-purple'
      } rounded-lg mt-1 mx-1`}
    >
      <div className="basis-1 shrink grow p-3 flex items-center justify-center border-l-0 border border-purple">
        {customer.CustomerName}
      </div>
      <div className="basis-1 shrink grow p-3 flex items-center justify-center border border-purple">
        {customer.CustomerID}
      </div>
      <ul className="basis-1 shrink grow p-3 border border-purple">
        {customer.DeliveryItems.map((item: string, index: number) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="basis-1 shrink grow p-3 flex items-center justify-center border border-purple">
        {customer.PickUpLocation}
      </div>
      <div className="basis-1 shrink grow p-3 flex items-center justify-center border-r-0 border border-purple">
        {customer.DropOffLocation}
      </div>
    </div>
  );
}

export default DraggableCustomerRow;
