import NextLink from 'next/link'
import { 
        Container,
        Box,
        Button,
        Heading,
        Image,
        Link,
        useColorModeValue
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                Hello, I&apos;m a computer science student at the University of Minnesota!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        John Anselmo
                    </Heading>
                    <p>Student ( Developer / Photographer / Runner )</p>
                </Box>

                <Box flexShrink={0} mt={{base:4, md:0}} ml={{md:6}} align="center">
                    <Image
                        borderColor={useColorModeValue("blackAlpha.800", "whiteAlpha.800")}
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/john2.png" 
                        alt="Profile Image"
                    />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h2" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I study computer science and data science at the University of Minnesota looking for machine learning
                    applications in neuroscience and finance. I love working on random ideas that pop into my head like one
                    of my current projects: {' '}
                    <NextLink href="/works/tassign">
                        <Link>TAssign</Link>
                    </NextLink>.
                </Paragraph>

                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>

                <BioYear>2001</BioYear>
                <Box>
                    Born in Fairfax, Virginia.
                    <br/>
                    <br/>
                </Box>

                <BioYear>2020</BioYear>
                <Box>
                    Graduated with a 4.5 GPA from Battlefield High School's I.T. Program.
                    <br/>
                    <br/>
                </Box>

                <BioYear>2020 to present</BioYear>
                <Box>
                    Studying computer and data science at the University of Minnesota. Looking for
                    internships that apply machine learning and automation concepts as well as a growth
                    and feedback based environment.
                    <br/>
                    <br/>
                </Box>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Interests
                </Heading>
                <Paragraph>
                    {' '}
                    <Link href="/works/photography" target="_blank">
                        Photography
                    </Link>
                    , Music, Reading, Writing, Trail Running, Machine Learning
                </Paragraph>
            </Section>
        </Container>
    )
}

export default Page
