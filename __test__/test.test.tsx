import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

test('Renders main element', () => {
    render(<div>test</div>);
    const mainElement = screen.getByText('test');
    expect(mainElement).toBeInTheDocument();
});
