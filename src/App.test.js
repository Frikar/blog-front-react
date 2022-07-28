import {render, screen, waitFor} from '@testing-library/react';
import App from './App';
import {ContextProvider} from "./context/ContexProvider";

test('renders navbar', () => {
	render(<App/>, {wrapper: ContextProvider})
	const navbarElement = screen.getByRole('navigation');
	expect(navbarElement).toBeInTheDocument()
})

test('renders footer', () => {
	render(<App/>, {wrapper: ContextProvider})
	const footerElement = screen.getByTestId('Footer');
	expect(footerElement).toBeInTheDocument()
})

