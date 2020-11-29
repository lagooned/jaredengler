
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders linkedin link', () => {
  render(<App />);
  const linkedInLinkElement = screen.getByText(/linkedin/i);
  expect(linkedInLinkElement).toBeInTheDocument();
});

test('renders jared.engler text', () => {
  render(<App />);
  const jaredEnglerText = screen.getByText(/jared.engler/i);
  expect(jaredEnglerText).toBeInTheDocument();
});
