import DateTable from './DateTable';
import HeaderComponent from './HeaderComponent';

function Planner() {
  return (
    <div className="flex-1 grow shrink mb-3">
      <header className="border-2 border-purple mt-3 mx-3">
        <h1 className="font-fira-extrabold text-3xl text-center p-3">Time Planner</h1>
      </header>
      <HeaderComponent isQueue={false} />
			<DateTable />
    </div>
  );
}

export default Planner;
