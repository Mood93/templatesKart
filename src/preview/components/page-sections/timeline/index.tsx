import { ReactNode } from 'react';
import {
  VStack,
  Heading,
  Box,
  Link,
  LinkProps,
  Container,
  SlideFade,
  useColorModeValue
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaTools } from 'react-icons/fa';
import TimelineItem from './timeline-item';
// Here we have used react-icons package for the icons
import { FiPackage, FiHome, FiUsers, FiBarChart2 } from 'react-icons/fi';

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ url, linkProps, text, ...props }) => {
  return (
    <NextLink href={url} passHref>
      <Link {...linkProps} {...props}>
        {text}
      </Link>
    </NextLink>
  );
};

interface Props {
  children: ReactNode;
}

export const PageSlideFade = ({ children }: Props) => {
  return <SlideFade in>{children}</SlideFade>;
};

const Index = () => {
  const linkColor = 'blue.400';
  const linkHoverColor = 'blue.600';

  return (
    <Container maxW="7xl" p="12">
      <PageSlideFade>
        <VStack textAlign="start" align="start" mb={5}>
          <Box zIndex={5}>
            <Heading fontSize="2xl" fontWeight="600" my={5}>
              2021
            </Heading>
            <Box>
              <TimelineItem icon={FaTools}>
                Learnt{' '}
                <ExternalLink
                  color={linkColor}
                  _hover={{ color: linkHoverColor }}
                  url="https://www.typescriptlang.org"
                  text="Typescript"
                  target="_blank"
                />{' '}
                and{' '}
                <ExternalLink
                  color={linkColor}
                  _hover={{ color: linkHoverColor }}
                  url="https://nextjs.org"
                  text="Next.js"
                  target="_blank"
                />
              </TimelineItem>
              <TimelineItem icon={FiUsers}>Became a dad ❤️</TimelineItem>
              <TimelineItem icon={FiPackage}>
                Published 3 posts on my portfolio website{' '}
                <ExternalLink
                  color={linkColor}
                  _hover={{ color: linkHoverColor }}
                  url="https://mahmad.me/blog"
                  text="Blog"
                  target="_blank"
                />
              </TimelineItem>
              <TimelineItem icon={FiPackage}>
                Published or contributed to{' '}
                <ExternalLink
                  color={linkColor}
                  _hover={{ color: linkHoverColor }}
                  url="https://mahmad.me/open-source"
                  text="20+ open-source repositories"
                  target="_blank"
                />
              </TimelineItem>
              <TimelineItem icon={FiBarChart2}>
                Collected 34k+ posts views and 1.5k+ total reactions on{' '}
                <ExternalLink
                  color={linkColor}
                  _hover={{ color: linkHoverColor }}
                  url="https://dev.to/m_ahmad"
                  text="Dev.to"
                  target="_blank"
                />
              </TimelineItem>
              <TimelineItem icon={FiHome} skipTrail>
                Rebuilt my portfolio website with React, ChakraUI and Framer-motion,{' '}
                <ExternalLink
                  color={linkColor}
                  _hover={{ color: linkHoverColor }}
                  url="https://github.com/MA-Ahmad/myPortfolio"
                  text="source on Github"
                  target="_blank"
                />
                .
              </TimelineItem>
            </Box>
          </Box>
        </VStack>
      </PageSlideFade>
    </Container>
  );
};

export default Index;
