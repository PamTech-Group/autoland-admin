"use client";
import {
  Box,
  Flex,
  Text,
  Grid,
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
import JobOrderTable from "../components/major/JobOrderTable";

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
      value: "₦90,000,000",
      change: "+12.5%",
      isIncrease: true,
      icon: FaWallet,
      color: "purple.500",
      bgGradient: "linear(to-r, purple.400, purple.600)",
    },
    {
      title: "Total Outflow",
      value: "₦2,000,000",
      change: "+8.2%",
      isIncrease: true,
      icon: FaClipboardList,
      color: "blue.500",
      bgGradient: "linear(to-r, blue.400, blue.600)",
    },
    {
      title: "Expenses",
      value: "₦12,000,000",
      change: "+5.1%",
      isIncrease: true,
      icon: FaCheckCircle,
      color: "green.500",
      bgGradient: "linear(to-r, green.400, green.600)",
    },
    {
      title: "Net Profit",
      value: "₦30,000,000",
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
            boxShadow="md"
            backdropFilter="blur(5px)"
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
                boxShadow="md"
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
          <JobOrderTable />
        </Box>
      </MainContent>
    </Flex>
  );
}