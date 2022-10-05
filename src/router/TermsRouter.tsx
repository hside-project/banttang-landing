import { Routes, Route } from 'react-router-dom';

// pages
import TermsPage from '../page/TermsPage';

export default function TermsRouter() {
    return (
        <>
            <Routes>
                <Route path="/terms/*" element={<TermsPage />} />
            </Routes>
        </>
    );
}
