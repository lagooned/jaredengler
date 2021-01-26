
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
  const jaredEnglerText = screen.getByText(/jared\.engler/i);
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

test('renders blog link', () => {
  render(<App />);
  const blogLinkElement = screen.getByText(/blog/i);
  expect(blogLinkElement).toBeInTheDocument();
});

test('renders separator', () => {
  render(<App />);
  const hr = screen.getByRole("separator");
  expect(hr).toBeInTheDocument();
});

test('renders copyright', () => {
  render(<App />);
  const copy = screen.getByText(/jared.*engler.*202.*/i);
  expect(copy).toBeInTheDocument();
});

test('renders resume link', () => {
  render(<App />);
  const resumeLinkElement = screen.getByText(/resume/i);
  expect(resumeLinkElement).toBeInTheDocument();
});
