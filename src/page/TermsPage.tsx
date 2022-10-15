import styled from 'styled-components';
import { Navigate, Routes, Route, useLocation } from 'react-router-dom';

// components
import ServiceTermsPage from '@components/TermsComponents/ServiceTerm';
import PrivacyPolicyPage from '@components/TermsComponents/PrivacyPolicy';
import LocationBasedTermsPage from '@/components/TermsComponents/LocataionBasedTerm';

// components
export default function TermsPage() {
    const locatate = useLocation();
    const dividePath = locatate.pathname === '/terms' ? '/terms' : '/app';
    return (
        <Layout>
            <Routes>
                <Route
                    path="/*"
                    element={<Navigate to={`${dividePath}/service`} />}
                />
                <Route path="service" element={<ServiceTermsPage />} />
                <Route path="privacy" element={<PrivacyPolicyPage />} />
                <Route path="location" element={<LocationBasedTermsPage />} />
            </Routes>
        </Layout>
    );
}

const Layout = styled.article`
    display: flex;
    flex: 1;
`;
