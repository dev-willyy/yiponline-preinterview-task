export interface Customer {
  CustomerID: number;
  DeliveryItems: Array<string>;
  CustomerName: String;
  PickUpLocation: String;
  DropOffLocation: String;
}

interface Customers extends Array<Customer> { }

const customers: Customers = [
  {
    CustomerName: 'John Doe',
    CustomerID: 1,
    DeliveryItems: ['Package A', 'Package H'],
    PickUpLocation: '123 Main Street',
    DropOffLocation: '456 Elm Street',
  },
  {
    CustomerName: 'Jane Smith',
    CustomerID: 2,
    DeliveryItems: ['Package B', 'Package I'],
    PickUpLocation: '789 Oak Avenue',
    DropOffLocation: '101 Pine Road',
  },
  {
    CustomerName: 'Bob Johnson',
    CustomerID: 3,
    DeliveryItems: ['Package C', 'Package J'],
    PickUpLocation: '202 Maple Drive',
    DropOffLocation: '303 Cedar Lane',
  },
  {
    CustomerName: 'Alice Brown',
    CustomerID: 4,
    DeliveryItems: ['Package D', 'Package K'],
    PickUpLocation: '404 Birch Court',
    DropOffLocation: '505 Willow Lane',
  },
  {
    CustomerName: 'Eve Green',
    CustomerID: 5,
    DeliveryItems: ['Package E', 'Package L'],
    PickUpLocation: '606 Pine Avenue',
    DropOffLocation: '707 Oak Road',
  },
  {
    CustomerName: 'Charlie Davis',
    CustomerID: 6,
    DeliveryItems: ['Package F', 'Package M'],
    PickUpLocation: '808 Cedar Drive',
    DropOffLocation: '909 Maple Lane',
  },
  {
    CustomerName: 'Grace White',
    CustomerID: 7,
    DeliveryItems: ['Package G', 'Package N'],
    PickUpLocation: '111 Willow Court',
    DropOffLocation: '222 Birch Lane',
  },
  {
    CustomerName: 'David Black',
    CustomerID: 8,
    DeliveryItems: ['Package H', 'Package B'],
    PickUpLocation: '333 Oak Avenue',
    DropOffLocation: '444 Pine Road',
  },
  {
    CustomerName: 'Fiona Grey',
    CustomerID: 9,
    DeliveryItems: ['Package I', 'Package O'],
    PickUpLocation: '555 Maple Drive',
    DropOffLocation: '666 Cedar Lane',
  },
  {
    CustomerName: 'George Red',
    CustomerID: 10,
    DeliveryItems: ['Package J', 'Package P'],
    PickUpLocation: '777 Birch Court',
    DropOffLocation: '888 Willow Land',
  },
];

export default customers;
