"use client";
import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
  // Drawer,
  // DrawerBody,
  // DrawerHeader,
  // DrawerOverlay,
  // DrawerContent,
  // DrawerCloseButton,
  // VStack,
  Text,
  Badge,
  Select,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Stack,
  RadioGroup,
  Radio,
  HStack,
} from "@chakra-ui/react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";
import Sidebar from "@/app/components/major/Sidebar";
import MainContent from "@/app/components/minor/MainContent";
import Header from "@/app/components/minor/Header";
import styled from "@emotion/styled";

const StyledTable = styled(Table)`
  th {
    background: #f7fafc;
    text-transform: uppercase;
    font-size: 0.75rem;
    letter-spacing: 0.05em;
    color: gray.600;
  }

  tr {
    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: #edf2f7;
      transform: translateY(-2px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
  }

  td {
    font-size: 0.875rem;
  }
`;

const StyledModal = styled(ModalContent)`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.95),
    rgba(249, 250, 251, 0.95)
  );
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const StyledInput = styled(Input)`
  background: rgba(247, 250, 252, 0.8);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 0.8rem 1rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  &::placeholder {
    color: #b9bdc2;
  }
  &:focus {
    background: white;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
  }
`;

const StyledSelect = styled(Select)`
  background: rgba(247, 250, 252, 0.8);
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  font-size: 0.9rem;
  height: 2.8rem;

  &:focus {
    background: white;
    border-color: #4299e1;
  }
`;

const techniciansData = [
  {
    name: "Danny Praise",
    phone: "0807 4999 5108",
    workshop: "Port-Harcourt",
    email: "info@dannycode.com",
    speciality: "German",
    team: "Alpha",
    status: "On Duty",
  },
  {
    name: "Danny Praise",
    phone: "0807 4999 5108",
    workshop: "Port-Harcourt",
    email: "info@dannycode.com",
    speciality: "Japanese",
    team: "Bete",
    status: "On Duty",
  },
  {
    name: "Danny Praise",
    phone: "0807 4999 5108",
    workshop: "Port-Harcourt",
    email: "info@dannycode.com",
    speciality: "America",
    team: "Delta",
    status: "On Leave",
  },
  // Add more technician data as needed
];

interface TechnicianFormData {
  name: string;
  phone: string;
  workshop: string;
  email: string;
  speciality: string;
  team: string;
  status: string;
}

export default function TechniciansPage() {
  const [searchTerm] = useState("");
  // const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();
  const [formData, setFormData] = useState<TechnicianFormData>({
    name: "",
    phone: "",
    workshop: "",
    email: "",
    speciality: "",
    team: "",
    status: "On Duty",
  });
  const [editingTechnician, setEditingTechnician] =
    useState<TechnicianFormData | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);

  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchTerm(e.target.value);
  // };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEdit = (technician: TechnicianFormData) => {
    setEditingTechnician(technician);
    setFormData(technician);
    setIsEditMode(true);
    onModalOpen();
  };

  const handleDelete = (technicianToDelete: TechnicianFormData) => {
    const updatedTechnicians = techniciansData.filter(
      (tech) => tech.email !== technicianToDelete.email
    );
    // Update your data source
    techniciansData.length = 0;
    techniciansData.push(...updatedTechnicians);

    toast({
      title: "Technician deleted",
      description: "Technician has been removed successfully",
      status: "success",
      duration: 3000,
    });
  };

  const handleModalClose = () => {
    setIsEditMode(false);
    setEditingTechnician(null);
    setFormData({
      name: "",
      phone: "",
      workshop: "",
      email: "",
      speciality: "",
      team: "",
      status: "On Duty",
    });
    onModalClose();
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        status: "error",
        duration: 3000,
      });
      return;
    }

    if (isEditMode && editingTechnician) {
      // Update existing technician
      const technicianIndex = techniciansData.findIndex(
        (tech) => tech.email === editingTechnician.email
      );
      if (technicianIndex !== -1) {
        techniciansData[technicianIndex] = formData;
      }
      toast({
        title: "Success",
        description: "Technician updated successfully",
        status: "success",
        duration: 3000,
      });
    } else {
      // Add new technician
      const newTechnician = { ...formData };
      techniciansData.push(newTechnician);

      toast({
        title: "Success",
        description: "Technician added successfully",
        status: "success",
        duration: 3000,
      });
    }

    handleModalClose();
  };

  const filteredTechnicians = techniciansData.filter((technician) =>
    technician.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>
      <MainContent>
        <Box flex="1" p={8}>
          <Header />
          <Flex justify="space-between" align="center" mb={4}>
            <Heading size="sm">Technicians</Heading>
            <Flex>
              <Button
                colorScheme="blue"
                color="white"
                leftIcon={<FaPlus />}
                onClick={onModalOpen}
                size="sm">
                Add Technician
              </Button>
            </Flex>
          </Flex>
          <Box
            overflowX="auto"
            shadow="sm"
            rounded="lg"
            bg="white"
            css={{
              "&::-webkit-scrollbar": {
                height: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#f1f1f1",
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#cbd5e0",
                borderRadius: "4px",
                "&:hover": {
                  background: "#a0aec0",
                },
              },
            }}>
            <Box minWidth="1200px">
              <StyledTable>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    <Th>Phone</Th>
                    <Th>Workshop</Th>
                    <Th>Email</Th>
                    <Th>Speciality</Th>
                    <Th>Team</Th>
                    <Th>Status</Th>
                    <Th>Actions</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {filteredTechnicians.map((technician, index) => (
                    <Tr key={index}>
                      <Td>{technician.name}</Td>
                      <Td>{technician.phone}</Td>
                      <Td>{technician.workshop}</Td>
                      <Td>{technician.email}</Td>
                      <Td>{technician.speciality}</Td>
                      <Td>{technician.team}</Td>
                      <Td>
                        <Badge
                          colorScheme={
                            technician.status === "On Duty" ? "green" : "red"
                          }>
                          {technician.status}
                        </Badge>
                      </Td>
                      <Td>
                        <HStack spacing={2}>
                          <Button
                            size="sm"
                            colorScheme="blue"
                            variant="ghost"
                            onClick={() => handleEdit(technician)}
                            leftIcon={<FaEdit />}>
                            Edit
                          </Button>
                          <Button
                            size="sm"
                            colorScheme="red"
                            variant="ghost"
                            onClick={() => handleDelete(technician)}
                            leftIcon={<FaTrash />}>
                            Delete
                          </Button>
                        </HStack>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </StyledTable>
            </Box>
          </Box>
        </Box>
      </MainContent>

      {/* Add Technician Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose} size="xl">
        <ModalOverlay backdropFilter="blur(10px)" bg="blackAlpha.300" />
        <StyledModal>
          <ModalHeader
            borderBottom="1px solid"
            borderColor="gray.100"
            py={4}
            fontSize="lg"
            color="gray.700">
            {isEditMode ? "Edit Technician" : "Add New Technician"}
          </ModalHeader>
          <ModalCloseButton color="gray.800" />
          <ModalBody py={6}>
            <Stack spacing={6}>
              <FormControl isRequired>
                <FormLabel fontSize="sm" color="gray.600">
                  Full Name
                </FormLabel>
                <StyledInput
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter technician's full name"
                  //   _placeholder={{ color: "gray.400" }}
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm" color="gray.600">
                  Phone Number
                </FormLabel>
                <StyledInput
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel fontSize="sm" color="gray.600">
                  Email
                </FormLabel>
                <StyledInput
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                />
              </FormControl>

              <HStack spacing={4}>
                <FormControl flex={1}>
                  <FormLabel fontSize="sm" color="gray.600">
                    Workshop
                  </FormLabel>
                  <StyledSelect
                    color="gray.800"
                    name="workshop"
                    value={formData.workshop}
                    onChange={handleInputChange}
                    placeholder="Select workshop">
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="Port-Harcourt">
                      Port-Harcourt
                    </option>
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="Owerri">
                      Owerri
                    </option>
                  </StyledSelect>
                </FormControl>

                <FormControl flex={1}>
                  <FormLabel fontSize="sm" color="gray.600">
                    Speciality
                  </FormLabel>
                  <StyledSelect
                    color="gray.800"
                    name="speciality"
                    value={formData.speciality}
                    onChange={handleInputChange}
                    placeholder="Select speciality">
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="German">
                      German
                    </option>
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="Japanese">
                      Japanese
                    </option>
                    <option
                      style={{ backgroundColor: "#fdfdfd" }}
                      value="American">
                      American
                    </option>
                  </StyledSelect>
                </FormControl>
              </HStack>

              <FormControl>
                <FormLabel fontSize="sm" color="gray.600">
                  Team
                </FormLabel>
                <StyledSelect
                  color="gray.800"
                  name="team"
                  value={formData.team}
                  onChange={handleInputChange}
                  placeholder="Select team">
                  <option style={{ backgroundColor: "#fdfdfd" }} value="Alpha">
                    Alpha
                  </option>
                  <option style={{ backgroundColor: "#fdfdfd" }} value="Beta">
                    Beta
                  </option>
                  <option style={{ backgroundColor: "#fdfdfd" }} value="Delta">
                    Delta
                  </option>
                </StyledSelect>
              </FormControl>

              <FormControl>
                <FormLabel fontSize="sm" color="gray.600">
                  Status
                </FormLabel>
                <RadioGroup
                  value={formData.status}
                  onChange={(value) =>
                    setFormData((prev) => ({ ...prev, status: value }))
                  }>
                  <Stack direction="row" spacing={4}>
                    <Radio
                      value="On Duty"
                      colorScheme="blue"
                      color="gray.800"
                      sx={{
                        "span.chakra-radio__control": {
                          borderColor: "gray.300",
                          _checked: {
                            bg: "blue.500",
                            borderColor: "blue.500",
                          },
                        },
                      }}>
                      <Text fontSize="sm" color="gray.800">
                        On Duty
                      </Text>
                    </Radio>
                    <Radio
                      value="On Leave"
                      colorScheme="red"
                      color="gray.800"
                      sx={{
                        "span.chakra-radio__control": {
                          borderColor: "gray.300",
                          _checked: {
                            bg: "red.500",
                            borderColor: "red.500",
                          },
                        },
                      }}>
                      <Text fontSize="sm" color="gray.800">
                        On Leave
                      </Text>
                    </Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <Button
                colorScheme="blue"
                bg="blue.500"
                color="white"
                _hover={{ bg: "blue.600" }}
                _active={{ bg: "blue.700" }}
                size="sm"
                fontSize="sm"
                onClick={handleSubmit}
                width="full">
                {isEditMode ? "Update Technician" : "Add Technician"}
              </Button>
            </Stack>
          </ModalBody>
        </StyledModal>
      </Modal>
    </Flex>
  );
}
