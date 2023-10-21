import CustomersRecords from './CustomersRecords';
import HeaderComponent from './HeaderComponent';
import TableHeader from './TableHeader';

export interface Header {
  text: string;
}

function LogisticQueue({ customers }: any) {
  return (
    <main className="flex-1 grow shrink">
      <TableHeader text="Logistic Queue" />
      <HeaderComponent isQueue />
      <CustomersRecords />
    </main>
  );
}

export default LogisticQueue;
