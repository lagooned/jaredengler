
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders linkedin link', () => {
  render(<App />);
  const linkedInLinkElement = screen.getByText(/linkedin/i);
  expect(linkedInLinkElement).toBeInTheDocument();
});

test('renders jaredengler text', () => {
  render(<App />);
  const jaredEnglerText = screen.getByText(/jaredengler/i);
  expect(jaredEnglerText).toBeInTheDocument();
});
