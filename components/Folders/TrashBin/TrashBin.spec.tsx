import { shallow } from 'enzyme';
import React from 'react';
import TrashBin from './TrashBin';
import DesktopButton from '../../DesktopButton/DesktopButton';

/**
 * Setup function for the component
 * @returns {JSX.Element} ShallowWrapper
 */
const setup = () => {
  return shallow(<TrashBin />);
};

describe('TrashBin', () => {
  const wrap = setup();

  it('should render without throwing an error', () => {
    expect(wrap);
    expect(wrap.length).toBe(1);
  });

  it('should render correct trash bin content === angular', () => {
    const binContent = wrap.find(DesktopButton);
    expect(binContent.length).toBe(1);
  });
});
