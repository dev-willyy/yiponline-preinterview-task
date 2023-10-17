import CustomersRecords from './CustomersRecords';
import HeaderComponent from './HeaderComponent';

function LogisticQueue() {
  return (
    <main className="flex-1 grow shrink">
      <header className="border-2 border-purple mt-3 mx-3">
        <h1 className="font-fira-extrabold text-3xl text-center p-3">Logistic Queue</h1>
      </header>
      <HeaderComponent isQueue />
      <CustomersRecords />
    </main>
  );
}

export default LogisticQueue;
