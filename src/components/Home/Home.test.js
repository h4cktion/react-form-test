import { render, screen } from "@testing-library/react";
import Home from 'components/Home';

test.skip('render example react form hook app', () => {
    render(<Home />);
    const title = screen.getByLabelText('Welcome to my react-hook-form App.')
    expect(title).toBeInTheDocument();
});