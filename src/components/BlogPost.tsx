import {
    Box,
    Heading,
    Image,
    Text,
    HStack,
    Tag,
    useColorModeValue,
    Link,
    Button,
} from '@chakra-ui/react'

interface Props {
    marginTop?: number
    tags: any[]
}

const BlogTags = (props: Props) => {
    const { marginTop = 0, tags } = props

    return (
        <HStack spacing={2} marginTop={marginTop}>
            {tags.map((tag) => {
                return (
                    <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
                        {tag}
                    </Tag>
                )
            })}
        </HStack>
    )
}

interface BlogAuthorProps {
    date: string
    name: string
}

const BlogAuthor = (props: BlogAuthorProps) => {
    return (
        <HStack marginTop="2" marginBottom="2" spacing="2" display="flex" alignItems="center">
            <Image
                borderRadius="full"
                boxSize="40px"
                src="https://avatars.githubusercontent.com/u/115918416?s=400&u=5ebbee5cc9d6bcb08e4bd68c0dc5d19a880fd637&v=4"
                alt={`Avatar of ${props.name}`}
            />
            <Text fontWeight="medium">{props.name}</Text>
            <Text>—</Text>
            <Text>{props.date}</Text>
        </HStack>
    )
}

interface PostProps {
    date: string
    name: string
    tags: any[]
    postTitle: string
    postContent: string
    postImage: string
    postUrl: string
}

export const BlogPost = (props: PostProps) => {
    return (
        <Box
            marginTop={{ base: '1', sm: '5' }}
            display="flex"
            flexDirection={{ base: 'column', sm: 'row' }}
            justifyContent="space-between">
            <Box
                display="flex"
                flex="1"
                marginRight="3"
                position="relative"
                alignItems="center">
                <Box
                    width={{ base: '100%', sm: '85%' }}
                    zIndex="2"
                    marginLeft={{ base: '0', sm: '5%' }}
                    marginTop="5%">
                    <Box textDecoration="none" _hover={{ textDecoration: 'none' }}>
                        <Image
                            borderRadius="lg"
                            src={props.postImage}
                            alt="some good alt text"
                            objectFit="contain"
                            zIndex="-1"
                        />
                    </Box>
                </Box>
                <Box zIndex="1" width="100%" position="absolute" height="100%">
                    <Box
                        bgGradient={useColorModeValue(
                            'radial(orange.600 1px, transparent 1px)',
                            'radial(orange.300 1px, transparent 1px)',
                        )}
                        backgroundSize="20px 20px"
                        opacity="0.4"
                        height="100%"
                    />
                </Box>
            </Box>
            <Box
                display="flex"
                flex="1"
                flexDirection="column"
                justifyContent="center"
                marginTop={{ base: '3', sm: '0' }}
                marginBottom={{ base: '3', sm: '0' }}>
                <BlogTags tags={props.tags} />
                <Heading marginTop="1">
                    <Link href={props.postUrl}>
                        <Text textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            {props.postTitle}
                        </Text>
                    </Link>
                </Heading>
                <Text
                    as="p"
                    marginTop="2"
                    color={useColorModeValue('gray.700', 'gray.200')}
                    fontSize="lg"
                    whiteSpace="pre-line">
                    {props.postContent}
                </Text>
                <BlogAuthor name={props.name} date={props.date} />
                <Link href={props.postUrl}>
                    <Button colorScheme='teal' variant='outline' width="100%">
                        More
                    </Button>
                </Link>
            </Box>
        </Box>
    )
}

