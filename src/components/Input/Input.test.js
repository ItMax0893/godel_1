import { render, screen } from '@testing-library/react';
import Input from './index'

describe('Input', () => {
    it('render elements', () => {
        render(<Input />)
        const input = screen.getByRole('textbox')
        expect(input).toBeInTheDocument()
    })
    it('test value', () => {
        render(
        <Input label="set Text" 
            placeholder="set Text" 
            id="text" 
            value=''
            />)
        const input = screen.getByDisplayValue('')
        expect(input).toBeInTheDocument()
    });
})