import { render } from "@testing-library/react";
import BookingPage, {initializeTimes, updateTimes}  from '../BookingPage.js';



describe ('InitializeTimes', () => {
test('return initial array', () => {
    render(<BookingPage />);
    const expectedTimes = [
        'Select',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
    expect(initializeTimes()).toEqual(expectedTimes);
});
});

test('updateTimes return the same value from state', () => {
    render(<BookingPage />);
    const initialTimes = [
        'Select',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
      ];
      const action = {type: 'update_times'};
    expect(updateTimes(initialTimes, action)).toEqual(initialTimes)
})