import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "@/app/components/major/Sidebar";
import MainContent from "@/app/components/minor/MainContent";

export default function JobOrderLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex>
      <Box display={{ base: "none", lg: "block" }}>
        <Sidebar />
      </Box>
      <MainContent>
        <Box flex="1" p={8}>
          {children}
        </Box>
      </MainContent>
    </Flex>
  );
}