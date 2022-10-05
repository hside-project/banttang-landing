import styled from 'styled-components';
import { useParams, Navigate, Routes, Route } from 'react-router-dom';

// components
import ServiceTermsPage from '@components/TermsComponents/ServiceTerm';
import PrivacyPolicyPage from '@components/TermsComponents/PrivacyPolicy';
import Navigation from '@/components/TermsComponents/Navigation';
import LocationBasedTermsPage from '@/components/TermsComponents/LocataionBasedTerm';

// components
export default function TermsPage() {
    return (
        <Layout>
            <Navigation />
            <Routes>
                <Route path="/*" element={<></>} />
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
