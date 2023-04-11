import user from '../../path/user.json';
import { Profile } from 'components/Profile/Profile';
import { Section } from 'components/Section/Section.styled';

export const App = () => {
  return (
    <Section>
      <Profile userData={user} />
    </Section>
  );
};
