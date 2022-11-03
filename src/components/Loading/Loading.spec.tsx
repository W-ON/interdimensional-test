import { render, screen } from '@testing-library/react';
import { Loading } from '.';

describe('Loading renders correctly', () => {
  it('render the loading', () => {
    render(<Loading />);

    expect(screen.getByText('Loading')).toBeInTheDocument();
  });
});
