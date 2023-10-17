import customers from '../database/customers';
import { autoSwitchNameOfDay, currentDate, currentDay, currentTime } from '../database/dates';

const customerKeysArray: Array<any> = Object.keys(customers[0]);

/**
 * Use this HeaderComponent to export Header for dateTable conditionally
 */
interface propTypes {
  isQueue: boolean;
}

function HeaderComponent(props: propTypes) {
  return (
    <header className="flex font-fira-bold mx-3 text-lg">
      {props.isQueue ? (
        customerKeysArray.map((customerkey, index) => {
          return (
            <div className="basis-1 shrink grow border-2 border-purple py-2 text-center" key={index}>
              {customerkey}
            </div>
          );
        })
      ) : (
        <div className="basis-1 shrink grow border-2 border-purple py-2 text-center">
          <h2>
            Current date is: {autoSwitchNameOfDay(currentDay)}, {currentDate} | Current Time is: {currentTime()}
          </h2>
        </div>
      )}
    </header>
  );
}

export default HeaderComponent;
