import { render, screen } from '@testing-library/react';

import App from '../App';

describe('App', () => {
  test('should home page by default', () => {
    render(<App />);

    const headerText = screen.getAllByText(
      /nx electron node react boilerplate/i
    );

    expect(headerText[0]).toBeInTheDocument();
  });
});
