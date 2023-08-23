import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

// * Suite test
describe('App', () => {
  // * Test case
  it('Renders hello world', () => {
    // Arrange
    render(<App />);
    // Act N/A
    // Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
