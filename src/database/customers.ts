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
    CustomerID: 1,
    CustomerName: 'Laura Green',
    DeliveryItems: ['Books', 'Laptop'],
    PickUpLocation: '999 Cedar Drive',
    DropOffLocation: '888 Maple Lane'
  },
  {
    CustomerID: 2,
    CustomerName: 'Mike Woods',
    DeliveryItems: ['Clothes', 'Shoes'],
    PickUpLocation: '777 Pine Avenue',
    DropOffLocation: '666 Oak Road'
  },
  {
    CustomerID: 3,
    CustomerName: 'Olivia White',
    DeliveryItems: ['Electronics', 'Smartphone'],
    PickUpLocation: '555 Willow Court',
    DropOffLocation: '444 Birch Lane'
  },
  {
    CustomerID: 4,
    CustomerName: 'Robert Brown',
    DeliveryItems: ['Furniture', 'Painting'],
    PickUpLocation: '333 Main Street',
    DropOffLocation: '222 Elm Street'
  },
  {
    CustomerID: 5,
    CustomerName: 'Sophia Davis',
    DeliveryItems: ['Groceries', 'Appliances'],
    PickUpLocation: '111 Oak Avenue',
    DropOffLocation: '999 Pine Road'
  },
  {
    CustomerID: 6,
    CustomerName: 'Thomas Black',
    DeliveryItems: ['Jewelry', 'Watch'],
    PickUpLocation: '888 Cedar Drive',
    DropOffLocation: '777 Maple Lane'
  },
  {
    CustomerID: 7,
    CustomerName: 'Emma Red',
    DeliveryItems: ['Musical Instruments', 'Guitar'],
    PickUpLocation: '666 Willow Court',
    DropOffLocation: '555 Birch Lane'
  },
  {
    CustomerID: 8,
    CustomerName: 'Daniel Grey',
    DeliveryItems: ['Office Supplies', 'Printer'],
    PickUpLocation: '444 Pine Avenue',
    DropOffLocation: '333 Oak Road'
  },
  {
    CustomerID: 9,
    CustomerName: 'Ava Smith',
    DeliveryItems: ['Sporting Goods', 'Bicycle'],
    PickUpLocation: '222 Main Street',
    DropOffLocation: '111 Elm Street'
  },
  {
    CustomerID: 10,
    CustomerName: 'Liam Doe',
    DeliveryItems: ['Tools', 'Drill'],
    PickUpLocation: '999 Cedar Drive',
    DropOffLocation: '888 Maple Lane'
  },
  {
    CustomerID: 11,
    CustomerName: 'Eddy Kirk',
    DeliveryItems: ['Toys', 'Video Games'],
    PickUpLocation: '777 Pine Avenue',
    DropOffLocation: '666 Oak Road'
  },
  {
    CustomerID: 12,
    CustomerName: 'Lucas White',
    DeliveryItems: ['Art Supplies', 'Canvas'],
    PickUpLocation: '555 Willow Court',
    DropOffLocation: '444 Birch Lane'
  },
  {
    CustomerID: 13,
    CustomerName: 'Ella Brown',
    DeliveryItems: ['Home Decor', 'Lamp'],
    PickUpLocation: '333 Main Street',
    DropOffLocation: '222 Elm Street'
  },
  {
    CustomerID: 14,
    CustomerName: 'Noah Davis',
    DeliveryItems: ['Fitness Equipment', 'Yoga Mat'],
    PickUpLocation: '111 Oak Avenue',
    DropOffLocation: '999 Pine Road'
  },
  {
    CustomerID: 15,
    CustomerName: 'Grace Black',
    DeliveryItems: ['Pet Supplies', 'Dog Food'],
    PickUpLocation: '888 Cedar Drive',
    DropOffLocation: '777 Maple Lane'
  },
  {
    CustomerID: 16,
    CustomerName: 'Mason Red',
    DeliveryItems: ['Baby Products', 'Stroller'],
    PickUpLocation: '666 Willow Court',
    DropOffLocation: '555 Birch Lane'
  },
  {
    CustomerID: 17,
    CustomerName: 'Aiden Grey',
    DeliveryItems: ['Kitchenware', 'Blender'],
    PickUpLocation: '444 Pine Avenue',
    DropOffLocation: '333 Oak Road'
  },
  {
    CustomerID: 18,
    CustomerName: 'Zoe Smith',
    DeliveryItems: ['Outdoor Gear', 'Tent'],
    PickUpLocation: '222 Main Street',
    DropOffLocation: '111 Elm Street'
  },
  {
    CustomerID: 19,
    CustomerName: 'Ethan Doe',
    DeliveryItems: ['Computer Accessories', 'Mouse'],
    PickUpLocation: '999 Cedar Drive',
    DropOffLocation: '888 Maple Lane'
  },
  {
    CustomerID: 20,
    CustomerName: 'Aria Johnson',
    DeliveryItems: ['Gardening Tools', 'Shovel'],
    PickUpLocation: '777 Pine Avenue',
    DropOffLocation: '666 Oak Road'
  }
];


export default customers;
