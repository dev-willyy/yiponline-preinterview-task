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
    DeliveryItems: ['Books', 'Laptop'],
    CustomerName: 'Laura Green',
    PickUpLocation: '999 Cedar Drive',
    DropOffLocation: '888 Maple Lane'
  },
  {
    CustomerID: 2,
    DeliveryItems: ['Clothes', 'Shoes'],
    CustomerName: 'Michael Johnson',
    PickUpLocation: '777 Pine Avenue',
    DropOffLocation: '666 Oak Road'
  },
  {
    CustomerID: 3,
    DeliveryItems: ['Electronics', 'Smartphone'],
    CustomerName: 'Olivia White',
    PickUpLocation: '555 Willow Court',
    DropOffLocation: '444 Birch Lane'
  },
  {
    CustomerID: 4,
    DeliveryItems: ['Furniture', 'Painting'],
    CustomerName: 'Robert Brown',
    PickUpLocation: '333 Main Street',
    DropOffLocation: '222 Elm Street'
  },
  {
    CustomerID: 5,
    DeliveryItems: ['Groceries', 'Appliances'],
    CustomerName: 'Sophia Davis',
    PickUpLocation: '111 Oak Avenue',
    DropOffLocation: '999 Pine Road'
  },
  {
    CustomerID: 6,
    DeliveryItems: ['Jewelry', 'Watch'],
    CustomerName: 'Thomas Black',
    PickUpLocation: '888 Cedar Drive',
    DropOffLocation: '777 Maple Lane'
  },
  {
    CustomerID: 7,
    DeliveryItems: ['Musical Instruments', 'Guitar'],
    CustomerName: 'Emma Red',
    PickUpLocation: '666 Willow Court',
    DropOffLocation: '555 Birch Lane'
  },
  {
    CustomerID: 8,
    DeliveryItems: ['Office Supplies', 'Printer'],
    CustomerName: 'Daniel Grey',
    PickUpLocation: '444 Pine Avenue',
    DropOffLocation: '333 Oak Road'
  },
  {
    CustomerID: 9,
    DeliveryItems: ['Sporting Goods', 'Bicycle'],
    CustomerName: 'Ava Smith',
    PickUpLocation: '222 Main Street',
    DropOffLocation: '111 Elm Street'
  },
  {
    CustomerID: 10,
    DeliveryItems: ['Tools', 'Drill'],
    CustomerName: 'Liam Doe',
    PickUpLocation: '999 Cedar Drive',
    DropOffLocation: '888 Maple Lane'
  },
  {
    CustomerID: 11,
    DeliveryItems: ['Toys', 'Video Games'],
    CustomerName: 'Sophie Johnson',
    PickUpLocation: '777 Pine Avenue',
    DropOffLocation: '666 Oak Road'
  },
  {
    CustomerID: 12,
    DeliveryItems: ['Art Supplies', 'Canvas'],
    CustomerName: 'Lucas White',
    PickUpLocation: '555 Willow Court',
    DropOffLocation: '444 Birch Lane'
  },
  {
    CustomerID: 13,
    DeliveryItems: ['Home Decor', 'Lamp'],
    CustomerName: 'Ella Brown',
    PickUpLocation: '333 Main Street',
    DropOffLocation: '222 Elm Street'
  },
  {
    CustomerID: 14,
    DeliveryItems: ['Fitness Equipment', 'Yoga Mat'],
    CustomerName: 'Noah Davis',
    PickUpLocation: '111 Oak Avenue',
    DropOffLocation: '999 Pine Road'
  },
  {
    CustomerID: 15,
    DeliveryItems: ['Pet Supplies', 'Dog Food'],
    CustomerName: 'Grace Black',
    PickUpLocation: '888 Cedar Drive',
    DropOffLocation: '777 Maple Lane'
  },
  {
    CustomerID: 16,
    DeliveryItems: ['Baby Products', 'Stroller'],
    CustomerName: 'Mason Red',
    PickUpLocation: '666 Willow Court',
    DropOffLocation: '555 Birch Lane'
  },
  {
    CustomerID: 17,
    DeliveryItems: ['Kitchenware', 'Blender'],
    CustomerName: 'Aiden Grey',
    PickUpLocation: '444 Pine Avenue',
    DropOffLocation: '333 Oak Road'
  },
  {
    CustomerID: 18,
    DeliveryItems: ['Outdoor Gear', 'Tent'],
    CustomerName: 'Zoe Smith',
    PickUpLocation: '222 Main Street',
    DropOffLocation: '111 Elm Street'
  },
  {
    CustomerID: 19,
    DeliveryItems: ['Computer Accessories', 'Mouse'],
    CustomerName: 'Ethan Doe',
    PickUpLocation: '999 Cedar Drive',
    DropOffLocation: '888 Maple Lane'
  },
  {
    CustomerID: 20,
    DeliveryItems: ['Gardening Tools', 'Shovel'],
    CustomerName: 'Aria Johnson',
    PickUpLocation: '777 Pine Avenue',
    DropOffLocation: '666 Oak Road'
  }
];


export default customers;
