import { currentDay, generateWeekDaysArray } from '../database/dates';
import DropBoardRow from './DropBoardRow';

interface Slot {
  slotDescription: String;
}

const slotInfo: Array<Slot> = [
  { slotDescription: 'Slot 1 (09:00am)' },
  { slotDescription: 'Slot 2 (11:00am)' },
  { slotDescription: 'Slot 3 (01:00pm)' },
  { slotDescription: 'Slot 4 (03:00pm)' },
];

function DateTable() {
  const weekDays = generateWeekDaysArray(currentDay);

  return (
    <section className="border-2 border-purple font-fira-md mx-3">
      <main className="flex flex-col gap-2 py-2">
        {weekDays.map((day, index) => {
          return (
            <div className="flex cursor-pointer text-center border-2 border-purple rounded-lg mt-1 mx-1" key={index}>
              <div className="basis-1/4 text-dark bg-dim shrink grow flex items-center justify-center border-2 border-purple">
                <div className="font-semibold">{day}</div>
              </div>
              <div className="basis-3/4 shrink grow border-2 border-purple">
                {slotInfo.map((slot, index) => (
                  <div key={index}>
                    <DropBoardRow slot={slot} index={index} />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
}

export default DateTable;
