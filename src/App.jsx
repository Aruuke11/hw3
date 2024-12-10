import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import AboutPage from './pages/AboutPage/AboutPage';
import TodosPage from './pages/TodosPage/TodosPage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/todos" element={<TodosPage />} />
            </Routes>
        </Router>
    );
};

export default App;