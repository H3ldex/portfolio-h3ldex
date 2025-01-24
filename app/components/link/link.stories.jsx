import { Link } from '~/components/link';
import { StoryContainer } from '../../../.storybook/story-container';

export default {
  title: 'Link',
};

export const Default = () => (
  <StoryContainer style={{ fontSize: 18 }}>
    <Link href="https://h3ldex.dev">Primary link</Link>
    <Link secondary href="https://h3ldex.dev">
      Secondary link
    </Link>
  </StoryContainer>
);
