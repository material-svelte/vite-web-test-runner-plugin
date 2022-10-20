import { render } from '@testing-library/svelte';
import { expect } from 'chai';
import App from './App.svelte';

describe('<App>', () => {
  it('renders svelte.dev link', () => {
    const {getByText} = render(App);
    const linkElement = getByText(/svelte\.dev/i);
    expect(document.body.contains(linkElement));
  });
});
