import {
  Button,
  ButtonGroup,
  Container,
  Divider,
  IconButton,
  Input,
  Stack,
  Text,
  useColorModeValue as mode,
  Box,
  Flex,
  Icon,
  useToast,
} from "@chakra-ui/react";
import { FaGithub, FaMedium, FaFacebook } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";
import { GiWorld } from "react-icons/gi";
import { Link as ReactLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Footer = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const { userInfo } = user;

  const logoutHandeler = () => {
    dispatch(logout());
    toast({ description: "You have been logged out.", status: "success", isClosable: true });
  };

  return (
    <Box w="100%" bg={mode("blue.200", "blue.900")}>
      <Container as="footer" role="contentinfo" maxW="7xl">
        <Stack
          spacing="8"
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          py={{ base: "12", md: "16" }}
        >
          <Stack spacing={{ base: "6", md: "8" }} align="start">
            <Flex alignItems="center">
              <Icon as={GiWorld} mr="2" h="10" w="10" />
              <Text fontSize="2xl" fontWeight="extrabold">
                TravelLenzo
              </Text>
            </Flex>
          </Stack>
          <Stack direction={{ base: "column-reverse", md: "column", lg: "row" }} spacing={{ base: "12", md: "8" }}>
            <Stack direction="row" spacing="8">
              <Stack spacing="4" minW="36" flex="1">
                <Text fontSize="sm" fontWeight="semibold">
                  Legal
                </Text>
                <Stack spacing="3" shouldWrapChildren>
                  <Button variant="link">Privacy</Button>
                  <Button variant="link">Terms</Button>
                  <Button variant="link">License</Button>
                </Stack>
              </Stack>
            </Stack>
            <Stack spacing="4">
              <Text fontSize="sm" fontWeight="semibold" color="subtle">
                Stay up to date
              </Text>
              <Stack spacing="4" direction={{ base: "column", sm: "row" }} maxW={{ lg: "360px" }}>
                <Input placeholder="Enter your email." type="email" required />
                <Button variant="primary" type="submit" flexShrink={0}>
                  Suscribe
                </Button>
              </Stack>
              {userInfo ? (
                <Button variant="link" onClick={logoutHandeler} alignSelf="flex-start">
                  Logout
                </Button>
              ) : (
                <Button variant="link" as={ReactLink} to="/login" alignSelf="flex-start">
                  Admin
                </Button>
              )}
            </Stack>
          </Stack>
        </Stack>
        <Divider />
        <Stack pt="8" pb="12" justify="space-between" direction={{ base: "column-reverse", md: "row" }} align="center">
          <Text fontSize="sm" color="subtle">
            &copy; {new Date().getFullYear()} TravelLenzo, Inc. All rights reserved.
          </Text>
          <ButtonGroup variant="ghost">
            <IconButton as="a" href="https://github.com/lan-yin" icon={<FaGithub />} />
            <IconButton as="a" href="https://www.facebook.com/LanYinLu?mibextid=LQQJ4d" icon={<FaFacebook />} />
            <IconButton as="a" href="https://lanyinmade.medium.com/" icon={<FaMedium />} />
            <IconButton as="a" href="https://lenzolu.netlify.app/" icon={<SiNetlify />} />
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
