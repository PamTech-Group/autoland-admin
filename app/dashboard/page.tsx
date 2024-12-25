"use client";
import {
  Box,
  Flex,
  Text,
  Grid,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  VStack,
  Input,
  IconButton,
  Avatar,
  InputGroup,
  InputLeftElement,
  Badge,
  Tooltip,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  FaArrowRight,
  FaBell,
  FaEnvelope,
  FaSignOutAlt,
  FaSearch,
  FaWallet,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaCaretUp,
  FaCaretDown,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { keyframes } from "@emotion/react";
import Sidebar from "../components/major/Sidebar";
import MainContent from "../components/minor/MainContent";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px) }
  to { opacity: 1; transform: translateY(0) }
`;

export default function Dashboard() {
  const bgGradient = "linear(to-br, blue.50, purple.50, pink.50)";
  const cardBg = "white";
  const animation = `${fadeIn} 0.5s ease-out`;

  const metrics = [
    {
      title: "Total Income",
      value: "#90,000,000",
      change: "+12.5%",
      isIncrease: true,
      icon: FaWallet,
      color: "purple.500",
      bgGradient: "linear(to-r, purple.400, purple.600)",
    },
    {
      title: "Total Job Order",
      value: "200",
      change: "+8.2%",
      isIncrease: true,
      icon: FaClipboardList,
      color: "blue.500",
      bgGradient: "linear(to-r, blue.400, blue.600)",
    },
    {
      title: "Completed Job Order",
      value: "72",
      change: "+5.1%",
      isIncrease: true,
      icon: FaCheckCircle,
      color: "green.500",
      bgGradient: "linear(to-r, green.400, green.600)",
    },
    {
      title: "Ongoing Job Order",
      value: "128",
      change: "-2.3%",
      isIncrease: false,
      icon: FaClock,
      color: "orange.500",
      bgGradient: "linear(to-r, orange.400, orange.600)",
    },
  ];

  return (
    <Flex bgGradient={bgGradient} minH="100vh">
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>
      <MainContent>
        <Box flex="1" p={8}>
          {/* Header */}
          <Flex
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            justify="space-between"
            bg={cardBg}
            p={6}
            align="center"
            mb={8}
            borderRadius="2xl"
            boxShadow="xl"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="gray.100"
          >
            <VStack align="stretch" spacing={1}>
              <Text fontSize="2xl" fontWeight="bold">
                Hi, Manager! 👋
              </Text>
              <Text color="gray.500" fontSize="md">
                {`Let's check your garage today`}
              </Text>
            </VStack>

            <Flex align="center" gap={4}>
              {/* Enhanced Search Bar */}
              <InputGroup maxW="300px">
                <InputLeftElement pointerEvents="none">
                  <FaSearch color="gray.300" />
                </InputLeftElement>
                <Input
                  placeholder="Search..."
                  _placeholder={{ color: "gray.500" }}
                  bg="gray.50"
                  border="1px solid"
                  borderColor="gray.200"
                  _hover={{ borderColor: "gray.300" }}
                  _focus={{ borderColor: "blue.500", boxShadow: "none" }}
                  rounded="lg"
                />
              </InputGroup>

              {/* Notifications */}
              <Tooltip label="Messages">
                <IconButton
                  icon={<FaEnvelope />}
                  aria-label="Messages"
                  variant="ghost"
                  position="relative"
                  color="gray.600"
                  _hover={{ bg: "gray.100" }}
                >
                  <Badge
                    position="absolute"
                    top="-1"
                    right="-1"
                    colorScheme="red"
                    borderRadius="full"
                    size="sm"
                  >
                    3
                  </Badge>
                </IconButton>
              </Tooltip>

              <Tooltip label="Notifications">
                <IconButton
                  icon={<FaBell />}
                  aria-label="Notifications"
                  variant="ghost"
                  position="relative"
                  color="gray.600"
                  _hover={{ bg: "gray.100" }}
                >
                  <Badge
                    position="absolute"
                    top="-1"
                    right="-1"
                    colorScheme="red"
                    borderRadius="full"
                    size="sm"
                  >
                    5
                  </Badge>
                </IconButton>
              </Tooltip>

              {/* User Menu */}
              <Menu>
                <MenuButton>
                  <Flex align="center" cursor="pointer">
                    <Avatar
                      size="sm"
                      name="Manager"
                      src="path/to/avatar.jpg"
                      mr={2}
                    />
                    <Box display={{ base: "none", md: "block" }}>
                      <Text fontWeight="medium" fontSize="sm">
                        Manager
                      </Text>
                      <Text fontSize="xs" color="gray.500">
                        Admin
                      </Text>
                    </Box>
                  </Flex>
                </MenuButton>
                <MenuList bg="white">
                  <MenuItem
                    bgColor="gray.100"
                    color="gray.600"
                    icon={<FaSignOutAlt />}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>

          {/* Enhanced Metrics Grid */}
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={8}
            mb={8}
          >
            {metrics.map((metric, index) => (
              <Box
                key={index}
                as={motion.div}
                whileHover={{ scale: 1.02 }}
                // transition={{ duration: 0.2 }}
                p={6}
                borderRadius="2xl"
                bg={cardBg}
                boxShadow="lg"
                position="relative"
                overflow="hidden"
                animation={`${animation} ${index * 0.1 + 0.2}s`}
              >
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  bottom={0}
                  width="100%"
                  bgGradient={metric.bgGradient}
                  opacity={0.1}
                  borderRadius="2xl"
                />

                <Flex justify="space-between" align="center" mb={4}>
                  <Box
                    p={4}
                    borderRadius="xl"
                    bg={metric.bgGradient}
                    color="gray.600"
                    boxShadow="lg"
                  >
                    <metric.icon size={18} />
                  </Box>
                  <Badge
                    colorScheme={metric.isIncrease ? "green" : "red"}
                    borderRadius="full"
                    px={3}
                    py={1}
                    display="flex"
                    alignItems="center"
                    fontSize="sm"
                    fontWeight="bold"
                  >
                    {metric.isIncrease ? <FaCaretUp /> : <FaCaretDown />}
                    {metric.change}
                  </Badge>
                </Flex>

                <Text color="gray.500" fontSize="sm" mb={2}>
                  {metric.title}
                </Text>
                <Text color="gray.600" fontSize="lg" fontWeight="bold">
                  {metric.value}
                </Text>
              </Box>
            ))}
          </Grid>

          {/* Enhanced Recent Job Orders Table */}
          <Box
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            p={8}
            borderRadius="2xl"
            bg={cardBg}
            boxShadow="xl"
            backdropFilter="blur(10px)"
            border="1px solid"
            borderColor="gray.100"
          >
            <Flex justify="space-between" align="center" mb={6}>
              <Text fontSize="lg" fontWeight="semibold">
                Recent Job Orders
              </Text>
              <Flex
                align="center"
                color="blue.500"
                cursor="pointer"
                _hover={{ color: "blue.600" }}
              >
                <Text mr={2}>See More</Text>
                <FaArrowRight />
              </Flex>
            </Flex>

            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th borderBottom="2px" borderColor="gray.200">
                    Booking ID
                  </Th>
                  <Th borderBottom="2px" borderColor="gray.200">
                    Booking Date
                  </Th>
                  <Th borderBottom="2px" borderColor="gray.200">
                    Client Name
                  </Th>
                  <Th borderBottom="2px" borderColor="gray.200">
                    Client Email
                  </Th>
                  <Th borderBottom="2px" borderColor="gray.200">
                    Car Issue
                  </Th>
                  <Th borderBottom="2px" borderColor="gray.200">
                    Payment
                  </Th>
                  <Th borderBottom="2px" borderColor="gray.200">
                    Technician
                  </Th>
                  <Th borderBottom="2px" borderColor="gray.200">
                    Status
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr
                  _hover={{
                    bg: "gray.50",
                    transform: "scale(1.01)",
                    transition: "all 0.2s",
                  }}
                  cursor="pointer"
                >
                  <Td fontWeight="medium" py={4}>
                    BK-PA1001
                  </Td>
                  <Td>Jan 1, 2025</Td>
                  <Td>Danny Code</Td>
                  <Td>info@dannyco.com</Td>
                  <Td>Wheel Alignment</Td>
                  <Td color="green.500" fontWeight="medium">
                    #800,000 Paid
                  </Td>
                  <Td>
                    <Flex align="center">
                      <Text>Technician Name</Text>
                    </Flex>
                  </Td>
                  <Td>
                    <Badge
                      colorScheme="orange"
                      borderRadius="full"
                      px={3}
                      py={1}
                      fontSize="sm"
                      textTransform="none"
                    >
                      Ongoing
                    </Badge>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </MainContent>
    </Flex>
  );
}
