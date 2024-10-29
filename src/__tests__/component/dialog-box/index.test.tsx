// __tests__/DialogComponent.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import DialogComponent from '@/components/DialogComponent';

describe('DialogComponent', () => {
  const mockOnClose = jest.fn();

  test('renders null when isOpen is false', () => {
    render(
      <DialogComponent isOpen={false} onClose={mockOnClose}>
                Test Content
      </DialogComponent>
    );

    // The dialog should not be in the document
    const dialogElement = screen.queryByRole('dialog');
    expect(dialogElement).not.toBeInTheDocument();
  });

  test('renders children when isOpen is true', () => {
    render(
      <DialogComponent isOpen={true} onClose={mockOnClose}>
                Test Content
      </DialogComponent>
    );

    // The dialog should be in the document
    const dialogElement = screen.getByText(/Test Content/i);
    expect(dialogElement).toBeInTheDocument();
  });
});
