import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <DndProvider backend={HTML5Backend}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </DndProvider>
    </BrowserRouter>
  );
}

export default App;
