
import { test, expect } from '@jest/globals';
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

test('renders image of me', () => {
  render(<App />);
  const jaredEnglerImage = screen.getByAltText('logo');
  expect(jaredEnglerImage).toBeInTheDocument();
});

test('renders gihub link', () => {
  render(<App />);
  const githubLinkElement = screen.getByText(/github/i);
  expect(githubLinkElement).toBeInTheDocument();
});

test('renders email link', () => {
  render(<App />);
  const emailLinkElement = screen.getByText(/email/i);
  expect(emailLinkElement).toBeInTheDocument();
});
