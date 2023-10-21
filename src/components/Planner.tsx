import DateTable from './DateTable';
import HeaderComponent from './HeaderComponent';
import TableHeader from './TableHeader';

function Planner() {
  return (
    <div className="flex-1 grow shrink mb-3">
      <TableHeader text="Time Planner" />
      <HeaderComponent isQueue={false} />
			<DateTable />
    </div>
  );
}

export default Planner;
