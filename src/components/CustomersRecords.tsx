import customers, { Customer } from '../database/customers';
import DraggableCustomerRow from './DraggableCustomerRow';

export interface CustomerPropTypes {
  customer: Customer;
  index: number;
}

function CustomersRecords() {
  return (
    <section className="border-2 border-purple font-fira-md mx-3">
      <main className="flex flex-col gap-2 py-2">
        {customers.map((customer: Customer, index) => {
          return (
            <div key={index}>
              <DraggableCustomerRow customer={customer} index={index} />
            </div>
          );
        })}
      </main>
    </section>
  );
}

export default CustomersRecords;
