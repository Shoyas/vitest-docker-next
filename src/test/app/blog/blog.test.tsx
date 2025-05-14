import BlogContainer from '@/components/blog/BlogContainer';
import { DummyPosts } from '@/components/blog/DummyPosts';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';

it('Blog Component testing', () => {
  render(<BlogContainer />);

  expect(screen.getByRole('heading', { level: 1, name: 'Blog Page' })).toBeDefined();
  expect(screen.getByText('This is the blog page.')).toBeDefined();

  DummyPosts.forEach((post) => {
    const postTitle = screen.getByRole('heading', { level: 2, name: post.title });
    const postContainer = postTitle.closest('div');

    if (!postContainer) {
      throw new Error(`Post container not found for title: ${post.title}`);
    }

    expect(within(postContainer).getByText(post.title)).toBeDefined();
    expect(within(postContainer).getByText(post.author)).toBeDefined();

    const tagsElement = within(postContainer).getByText(post.tags.join(', '));

    post.tags.forEach((tag) => {
      expect(tagsElement).toHaveTextContent(tag);
    });
  });
});
