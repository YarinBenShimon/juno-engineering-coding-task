import { render, screen, } from '@testing-library/react';
import { fetchImageUrls } from '../api';
import ImageCarousel from './ImageCarousel';

test('component rendered', () => {
  render(<ImageCarousel />);
  expect(screen.getByTestId('ImageCarousel')).toBeInTheDocument();
});

test('fetchImageUrls', async () => {
  const imageUrl = await fetchImageUrls();
  expect(imageUrl).toBeTruthy();
});
