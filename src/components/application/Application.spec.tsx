import { render, screen} from '@testing-library/react'
import { Application } from './Application'

describe('Application', () => { 
    
    it('render successfully', () => {
        
        render(<Application />);

        const nameElement = screen.getByRole("textbox", {name: 'Name'});
        expect(nameElement).toBeInTheDocument();

        const nameElement2 = screen.getByLabelText("Name");
        expect(nameElement2).toBeInTheDocument();

        const bioElement = screen.getByRole("textbox", {name: 'Bio'});
        expect(bioElement).toBeInTheDocument();

        const bioElement2 = screen.getByLabelText("Bio", {selector: 'textarea'});
        expect(bioElement2).toBeInTheDocument();

        const jobLocationElement = screen.getByRole("combobox");
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        const buttonElement = screen.getByRole("button");
        expect(buttonElement).toBeInTheDocument();

        const testIdElement = screen.getByTestId("custom-element");
        expect(testIdElement).toBeInTheDocument();

    });

    

 });