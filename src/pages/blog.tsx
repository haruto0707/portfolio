import { Header } from '../components/Header';
import {
  Container,
  Heading,
} from '@chakra-ui/react'
import { BlogPost } from '../components/BlogPost';

export const BlogPage = () => {
  return (
    <>
      <Header />
      <Container maxW={'7xl'} p="12" marginTop="7">
        <Heading as="h1">BLOG</Heading>
        <BlogPost name="HARU"
          date="2023/09/05"
          postTitle="はじめてのハッカソン"
          tags={["Hackathon", "Zenn"]}
          postContent=
          {`あいうえお
          かきくけこ`}
          postUrl='https://github.com/haruto0707'
          postImage='https://drive.google.com/uc?id=1aNAaNyK-bNTLJ2RNT9nznwcXiO6c4qe8&.JPG' />
        <BlogPost name="HARU"
          date="2023/09/05"
          postTitle="Hello World"
          tags={["React", "TypeScript"]}
          postContent='あいうえお'
          postUrl='https://github.com/haruto0707'
          postImage='https://www.freecodecamp.org/news/content/images/2022/10/typescript-cover.jpg' />
        <BlogPost name="HARU"
          date="2023/09/05"
          postTitle="Hello World"
          tags={["React", "TypeScript"]}
          postContent='あいうえお'
          postUrl='https://github.com/haruto0707'
          postImage='https://www.freecodecamp.org/news/content/images/2022/10/typescript-cover.jpg' />
        <BlogPost name="HARU"
          date="2023/09/05"
          postTitle="Hello World"
          tags={["React", "TypeScript"]}
          postContent='あいうえお'
          postUrl='https://github.com/haruto0707'
          postImage='https://www.freecodecamp.org/news/content/images/2022/10/typescript-cover.jpg' />
        <BlogPost name="HARU"
          date="2023/09/05"
          postTitle="Hello World"
          tags={["React", "TypeScript"]}
          postContent='あいうえお'
          postUrl='https://github.com/haruto0707'
          postImage='https://www.freecodecamp.org/news/content/images/2022/10/typescript-cover.jpg' />
        <BlogPost name="HARU"
          date="2023/09/05"
          postTitle="Hello World"
          tags={["React", "TypeScript"]}
          postContent='あいうえお'
          postUrl='https://github.com/haruto0707'
          postImage='https://www.freecodecamp.org/news/content/images/2022/10/typescript-cover.jpg' />
      </Container>
    </>
  )
}

