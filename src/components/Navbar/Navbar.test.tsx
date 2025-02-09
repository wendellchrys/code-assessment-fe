import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './';
import '@testing-library/jest-dom';

describe('Navbar', () => {
    test('renders home link', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const homeLink = screen.getByText(/home/i);
        expect(homeLink).toBeInTheDocument();
    });

    test('renders about link', () => {
        render(
            <BrowserRouter>
                <Navbar />
            </BrowserRouter>
        );
        const aboutLink = screen.getByText(/sobre/i);
        expect(aboutLink).toBeInTheDocument();
    });
});
