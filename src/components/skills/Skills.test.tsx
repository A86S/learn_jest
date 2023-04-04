import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { Skills } from './Skills'
import React from 'react';

describe('Skills', () => {

    const skills = ['HTML', 'JS', 'TypeScript'];
    test('render successfully', () => {

        const {container} = render(<Skills skills={skills} />)

        const listElement = screen.getByRole('list');
        expect(listElement).toBeInTheDocument();

        const elementLength = screen.getAllByRole('listitem');
        expect(elementLength).toHaveLength(skills.length);

        const button = screen.queryByText('Start learning');
        expect(button).not.toBeInTheDocument()

        expect(container.querySelector('div')).toBeInTheDocument();
        
        //screen.debug();
        //logRoles(container);
    });

    test('chagne login state called', async () => {
        const setIsLoggedIn = jest.fn();
        const useStateSpy = jest.spyOn(React, "useState");
        useStateSpy.mockImplementation(() => [false, () => setIsLoggedIn(true)])
        render(<Skills skills={skills} />)
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(setIsLoggedIn).toHaveBeenCalledTimes(1)
        await waitFor(() => {
            // const button = screen.queryByRole('button');
            // expect(button).toHaveTextContent("Start learning")
        })
    });
});