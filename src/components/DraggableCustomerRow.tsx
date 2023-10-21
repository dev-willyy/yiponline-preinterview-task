import { Fragment, ReactComponentElement, useState } from 'react';
import { CustomerPropTypes } from './CustomersRecords';
import { useDrag } from 'react-dnd';

function DraggableCustomerRow({ customer, index }: CustomerPropTypes): ReactComponentElement<any> {
  console.log(customer);

  const [customerObj, setCustomerObj] = useState<any>(customer);
  const [{ isDragging }, drag] = useDrag(() => {
    return {
      type: 'customerRow',
      item: {
        customer,
        id: customer.CustomerID,
      },
      collect: (monitor) => {
        return {
          isDragging: !!monitor.isDragging(),
        };
      },
    };
  });

  const removeCustomerRow = () => {
    if (customer.CustomerID) {
      setCustomerObj({});
    }
  };

  return (
    <div
      ref={drag}
      onDrag={() => removeCustomerRow()}
      className={` cursor-pointer text-dark bg-dim ${
        isDragging ? 'hidden border-4 border-red-500' : 'flex border-2 border-purple'
      } ${Object.keys(customerObj).length === 0 ? 'hidden' : 'rounded-lg mt-1 mx-1'}`}
    >
      {customerObj && (
        <Fragment>
          <div className="basis-1 shrink grow p-3 flex items-center justify-center border-l-0 border border-purple">
            {customerObj.CustomerName}
          </div>
          <div className="basis-1 shrink grow p-3 flex items-center justify-center border border-purple">
            {customerObj.CustomerID}
          </div>
          <ul className="basis-1 shrink grow p-3 border border-purple">
            {customerObj.DeliveryItems &&
              customerObj.DeliveryItems.map((item: string, index: number) => <li key={index}>{item}</li>)}
          </ul>
          <div className="basis-1 shrink grow p-3 flex items-center justify-center border border-purple">
            {customerObj.PickUpLocation}
          </div>
          <div className="basis-1 shrink grow p-3 flex items-center justify-center border-r-0 border border-purple">
            {customerObj.DropOffLocation}
          </div>
        </Fragment>
      )}
    </div>
  );
}

export default DraggableCustomerRow;
