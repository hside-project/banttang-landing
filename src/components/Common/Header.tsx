import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import MainNavigation from '../LandingComponents/MainNavigation';
import TermNavigation from '../TermsComponents/TermNavigation';

export default function Header({ children }: { children: ReactNode }) {
    const locatate = useLocation();

    if (['/', '/contact'].includes(locatate.pathname)) {
        return <MainNavigation>{children}</MainNavigation>;
    }

    if (
        ['/terms/service', '/terms/privacy', '/terms/location'].includes(
            locatate.pathname,
        )
    ) {
        return <TermNavigation>{children}</TermNavigation>;
    }

    return <>{children}</>;
}
