import { Fragment, ReactComponentElement } from 'react';
import LogisticQueue from '../components/LogisticQueue.tsx';
import Planner from '../components/Planner.tsx';

function Home(): ReactComponentElement<any> {
  return (
    <Fragment>
      <header className="font-fira-extrabold text-5xl text-center pt-10 text-purple underline">
        <h1>Transportation Queue Application</h1>
      </header>
      <main className="flex gap-4 my-12">
        <LogisticQueue />
        <Planner />
      </main>
    </Fragment>
  );
}

export default Home;
