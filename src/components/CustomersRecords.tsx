import customers, { Customer } from '../database/customers';

function CustomersRecords() {
  return (
    <section className="border-2 border-purple font-fira-md mx-3">
      <main className="flex flex-col gap-2 py-2">
        {customers.map((customer: Customer, index) => {
          return (
            <div className="flex cursor-pointer text-center border-2 border-purple rounded-lg mt-1 mx-1" key={index}>
              <div className="basis-1 shrink grow p-3 flex items-center justify-center border-l-0 border border-purple">
                {customer.CustomerName}
              </div>
              <div className="basis-1 shrink grow p-3 flex items-center justify-center border border-purple">
                {customer.CustomerID}
              </div>
              <ul className="basis-1 shrink grow p-3 border border-purple">
                {customer.DeliveryItems.map((item) => (
                  <li>{item}</li>
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
        })}
      </main>
    </section>
  );
}

export default CustomersRecords;
