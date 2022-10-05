import { Routes, Route } from 'react-router-dom';

// pages
import MainPage from '../page/MainPage';

export default function MainRouter() {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    );
}
