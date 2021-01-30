import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TextBlock from './index'

describe('Input', () => {
    it('render elements', () => {
        render(<TextBlock />)
        const textInput = screen.getByLabelText('set Text')
        userEvent.type(textInput, 'asd')
        expect(screen.getByText('Text: asd')).toBeInTheDocument()
        userEvent.type(textInput, '{backspace}{backspace}{backspace}xxx')
        expect(screen.queryByText('Text: asd')).toBeNull()
        expect(screen.getByText('Text: xxx')).toBeInTheDocument()
    })
  
})