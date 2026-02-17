import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import React from 'react';

// Mock canvas for ParticleBackground since jsdom doesn't support it fully
HTMLCanvasElement.prototype.getContext = () => {
  return {
    clearRect: () => {},
    beginPath: () => {},
    arc: () => {},
    fill: () => {},
    moveTo: () => {},
    lineTo: () => {},
    stroke: () => {}
  };
};

describe('Portfolio App', () => {
  it('renders the main hero heading', () => {
    render(<App />);
    const heading = screen.getByText(/MD Abdul Haseeb Sagri/i);
    expect(heading).toBeDefined();
  });

  it('renders the "Available for new projects" button', () => {
    render(<App />);
    const button = screen.getByText(/Available for new projects/i);
    expect(button).toBeDefined();
  });

  it('renders the Projects section', () => {
    render(<App />);
    const projectsTitle = screen.getByText(/My Projects/i);
    expect(projectsTitle).toBeDefined();
  });
});