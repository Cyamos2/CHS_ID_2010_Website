import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
    expect(container.querySelector('.min-h-screen')).toBeTruthy();
  });

  it('renders navigation bar', () => {
    render(<App />);
    // Check if navbar exists by looking for navigation links
    const homeLink = screen.queryByText(/home/i);
    expect(homeLink).toBeTruthy();
  });
});
