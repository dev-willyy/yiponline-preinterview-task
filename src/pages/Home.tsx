import { ReactComponentElement } from 'react';
import LogisticQueue from '../components/LogisticQueue.tsx';
import Planner from '../components/Planner.tsx';

function Home(): ReactComponentElement<any> {
  return (
    <main className="flex gap-4 my-12">
      <LogisticQueue />
      <Planner />
    </main>
  );
}

export default Home;
