import {
  BlogCard,
  Container,
  Section,
  Heading,
  Statistics,
  ForbesList,
  CryptoHistory,
} from 'components';

import blogData from '../../data/article.json';
import data from '../../data/data.json';
import forbes from '../../data/forbes.json';
import crypto from '../../data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Heading marginBottom="50px" textAlign="center">
          Task 1
        </Heading>
        <BlogCard
          id={blogData._id}
          name={blogData.name}
          postedAt={blogData.postedAt}
          poster={blogData.poster}
          tag={blogData.tag}
          title={blogData.title}
          description={blogData.description}
          avatar={blogData.avatar}
        />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 2
        </Heading>
        <Statistics title="Main Statistics" stats={data} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 3
        </Heading>
        <ForbesList list={forbes} />

        <Heading marginTop="50px" marginBottom="50px" textAlign="center">
          Task 4
        </Heading>
        <CryptoHistory items={ crypto} />
      </Container>
    </Section>
  );
};
