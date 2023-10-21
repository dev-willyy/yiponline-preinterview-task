import { ReactComponentElement } from 'react';
import { Header } from './LogisticQueue';

function TableHeader({ text }: Header): ReactComponentElement<any> {
  return (
    <header className="border-2 border-purple mt-3 mx-3">
      <h1 className="font-fira-extrabold text-3xl text-center p-3">{text}</h1>
    </header>
  );
}

export default TableHeader;
