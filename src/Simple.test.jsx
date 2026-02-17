// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/vitest';

const SimpleTestComponent = () => {
  return <div>Sequence Check</div>;
};

describe('Simple Sequence Test', () => {
  it('renders correctly', () => {
    render(<SimpleTestComponent />);
    expect(screen.getByText('Sequence Check')).toBeInTheDocument();
  });
});