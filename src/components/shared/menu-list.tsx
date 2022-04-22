import {
  Stack,
  Box,
  Popover,
  PopoverTrigger,
  Link,
  useColorModeValue,
  PopoverContent,
  Text,
  Icon,
  HStack,
  useDisclosure
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { FaChevronDown } from 'react-icons/fa';
import { useLinkColor } from 'components/theme';

type MenuData = {
  id: number;
  label: string;
  subLabel: string;
  href: string;
};

const menuData: MenuData[] = [
  {
    id: 1,
    label: 'ProjectsKart',
    subLabel: 'Explore responsive Projects',
    href: '/'
  },
  {
    id: 2,
    label: 'ComponentsKart',
    subLabel: 'Explore responsive Components',
    href: '/components'
  }
];

const DropDownMenu = () => {
  const linkColor = useLinkColor();
  const { onOpen, onClose, isOpen } = useDisclosure();

  return (
    <Stack direction="row" spacing={4}>
      <Popover trigger="hover" placement="bottom-start" onOpen={onOpen} onClose={onClose}>
        <PopoverTrigger>
          <HStack alignItems="center" cursor="pointer" role="group">
            <NextLink href="/" passHref={true}>
              <Link
                p={2}
                fontSize="lg"
                fontWeight="bold"
                color={useColorModeValue('gray.600', 'gray.200')}
                _groupHover={{
                  color: linkColor
                }}
              >
                Templates
              </Link>
            </NextLink>
            <Icon
              as={FaChevronDown}
              h={4}
              w={4}
              _groupHover={{
                color: linkColor
              }}
              transition="all .25s ease-in-out"
              transform={isOpen ? 'rotate(180deg)' : ''}
            />
          </HStack>
        </PopoverTrigger>

        <PopoverContent
          border={0}
          boxShadow={useColorModeValue(
            '2px 4px 6px rgba(160, 174, 192, 0.6)',
            '0 4px 6px rgba(9, 17, 28, 0.9)'
          )}
          bg={useColorModeValue('white', 'gray.800')}
          p={4}
          rounded="lg"
          minW="xs"
        >
          <Stack>
            {menuData.map((data) => (
              <DropDownItem key={data.id} {...data} />
            ))}
          </Stack>
        </PopoverContent>
      </Popover>
    </Stack>
  );
};

const DropDownItem = ({ label, href, subLabel }: MenuData) => {
  return (
    <NextLink href={href!} passHref>
      <Link
        display="block"
        p={2}
        rounded="md"
        _hover={{ bg: useColorModeValue('gray.100', 'gray.900') }}
      >
        <Stack direction="row" align="center">
          <Box>
            <Text fontWeight={500}>{label}</Text>
            <Text fontSize="sm">{subLabel}</Text>
          </Box>
        </Stack>
      </Link>
    </NextLink>
  );
};

export default DropDownMenu;
