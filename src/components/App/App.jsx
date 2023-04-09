import user from '../../path/user.json';
import { Profile } from 'components/Profile/Profile';
import { Section } from 'components/Section/Section';

const { username, tag, location, avatar, stats } = user;

export const App = () => {
  return (
    <Section>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </Section>
  );
};
