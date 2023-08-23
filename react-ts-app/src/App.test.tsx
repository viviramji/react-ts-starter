import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { WrappedApp, App } from './App';

// * Suite test
describe('App', () => {
  // * Test case hello world
  it('Renders hello world', () => {
    // Arrange
    render(<WrappedApp />);
    // Act N/A
    // Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
  it('Renders not found invalid route', () => {
    const badRoute = '/some/bad/route';

    render(
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('No found page.');
  });
});
