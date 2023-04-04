import { render, screen} from '@testing-library/react'
import {Greet} from './Greet'


describe('Greet', () => {
    it('render greet', () => {
        render(<Greet />);
        const textElement = screen.getByText(/hello/i);
        expect(textElement).toBeInTheDocument(); 
    })
    
    test('render greet with name', () => {
        render(<Greet name="Ajay" />);
        const nameElement = screen.getByText(/Ajay/i);
        expect(nameElement).toBeInTheDocument();
    })
})
