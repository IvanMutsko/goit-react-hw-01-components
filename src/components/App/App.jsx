import user from '../../path/user.json';
import data from '../../path/data.json';
import friends from '../../path/friends.json';
import { Profile } from 'components/Profile/Profile';
import { Section } from 'components/Section/Section.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { Friends } from 'components/Friends/Friends';

export const App = () => {
  return (
    <>
      {/* <Section>
        <Profile userData={user} />
      </Section>
      <Section>
        <Statistics statisticsData={data} />
      </Section> */}
      <Section>
        <Friends friends={friends} />;
      </Section>
    </>
  );
};
