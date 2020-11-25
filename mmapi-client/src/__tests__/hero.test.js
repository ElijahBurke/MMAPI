import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from '../components/Banner/banner'
import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const banner = renderer.create(<Banner />).toJSON();
  expect(banner).toMatchSnapshot();
})
