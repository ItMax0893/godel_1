import { render, screen } from '@testing-library/react';
import Text from './index'

describe('Text', () => {
    it('render elements', () => {
        render(<Text text="hello world" searchText=""/>)
        expect(screen.getByText('Text: hello world')).toBeInTheDocument()
        screen.debug()
    })
    it('render elements with wrong search str', () => {
        render(<Text text="hello world" searchText="asd"/>)
        expect(screen.getByText('Text: hello world')).toBeInTheDocument()
        screen.debug()
    })
    it('render elements with right search str', () => {
        render(<Text text="hello world" searchText="world"/>)
        const wordWithClass = screen.getByText('world')
        expect(screen.getByText('world')).toBeInTheDocument()
        expect(wordWithClass).toHaveClass('search')
        screen.debug()
    })
   
})