import { render, screen } from "@testing-library/react";
import BookingForm from '../BookingForm.js';

test ('Renders the BookingForm header', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText('Little Lemon');
    expect(headingElement).toBeInTheDocument();
});