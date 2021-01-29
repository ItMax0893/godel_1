import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('render elements', () => {
    render(<App />);
    expect(screen.getByText("set Text")).toBeInTheDocument()
    expect(screen.getByText("search Text")).toBeInTheDocument()
    expect(screen.getByText("Search Text:")).toBeInTheDocument()
    expect(screen.getByText("Text:")).toBeInTheDocument()
  });
  it('input in set Text', () => {
    render(<App />);
    const inputText = screen.getByLabelText(/set Text/)
    expect(screen.queryByText(/react/i)).toBeNull()
    userEvent.type(inputText, 'react')
    expect(screen.getByText(/react/i)).toBeInTheDocument()
    const searchInputText = screen.getByLabelText(/search Text/)
    expect(screen.queryByText('asd')).toBeNull()
    userEvent.type(searchInputText, 'asd')
    expect(screen.getByText(/asd/i)).toBeInTheDocument()
  })
  it('add class fined text', () => {
    render(<App />);
    const inputText = screen.getByLabelText(/set Text/)
    userEvent.type(inputText, 'asdasdasdasd')
    expect(screen.getByText('Text: asdasdasdasd')).toBeInTheDocument()
    const searchInputText = screen.getByLabelText(/search Text/)
    userEvent.type(searchInputText, 'as')
    const searchItems = screen.getAllByText('as')
    expect(searchItems).toHaveLength(4)
    expect(searchItems[0]).toHaveClass('search')
    userEvent.type(searchInputText, 'd')
    const newSearchItems = screen.getAllByText('asd')
    expect(newSearchItems).toHaveLength(4)
  })
});
