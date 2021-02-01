import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Text from './index'

describe('Text', () => {
    it('render elements', () => {
        render(<Text text='asdasdasd' searchText=''/>)
        screen.debug()
        expect(screen.getByText('asdasdasd')).toBeInTheDocument()
        
    })
})