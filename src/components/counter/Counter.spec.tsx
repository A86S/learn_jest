import { fireEvent, logRoles, render, renderHook, screen } from '@testing-library/react'
import { Counter } from './Counter'
import user from '@testing-library/user-event'
import { shallow } from "enzyme";
import React from 'react';
import { count } from 'console';


describe('Counter', () => {

    it('renders correctly', () => {
        render(<Counter />)

        const countElement = screen.getByRole('heading');
        expect(countElement).toBeInTheDocument();

        const increamentButton = screen.getByRole('button', { name: 'Increment' });
        expect(increamentButton).toBeInTheDocument();

        const amountInput = screen.getByRole('spinbutton');
        expect(amountInput).toBeInTheDocument();
    })

    it('redner a count of 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    test('renders a count of 1 after clicking the increment button', async () => {
        user.setup()
        render(<Counter />)
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.click(incrementButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test('elements are focused in the right order', async () => {
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        const setButton = screen.getByRole('button', { name: 'Set' })
        const incrementButton = screen.getByRole('button', { name: 'Increment' })
        await user.tab()
        expect(incrementButton).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setButton).toHaveFocus()
    })

    test('should called setCount', async () => {
        const setCount = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation(() => [0, () => setCount(count)])
        render(<Counter />)
        const setButton = screen.getByRole('button', { name: 'Set' })
        await user.click(setButton)
        expect(setCount).toHaveBeenCalledTimes(1);
    })

    test('should called setAmount on input onChange', () => {
        const setAmount = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation(() => [0, () => setAmount(count)])
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        fireEvent.change(amountInput, { target: { value: '1' } })
        expect(setAmount).toHaveBeenCalledTimes(1);
    })
})