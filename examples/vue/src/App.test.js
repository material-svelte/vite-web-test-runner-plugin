import { render } from '@testing-library/vue';
import { expect } from 'chai';
import App from './App.vue';

describe('<App>', () => {
  it('renders vue documentation link', () => {
    const { getByText } = render(App);
    const linkElement = getByText(/Vue 3 Documentation/i);
    expect(document.body.contains(linkElement));
  });
});
