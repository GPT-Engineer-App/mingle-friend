import React from "react";
import { Box, VStack, Flex, Text, Input, Button, Avatar, Divider, useToast } from "@chakra-ui/react";
import { FaWeixin, FaUserCircle, FaSearch, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const sendMessage = () => {
    toast({
      title: "Message sent.",
      description: "Your message has been sent successfully!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex h="100vh" bg="gray.100">
      {/* Sidebar */}
      <VStack w="250px" bg="white" p={4} spacing={4} borderRight="1px" borderColor="gray.200">
        <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWNoYXQlMjBhdmF0YXJ8ZW58MHx8fHwxNzA4NTk1ODQ5fDA&ixlib=rb-4.0.3&q=80&w=1080" size="xl" />
        <Text fontSize="xl">
          <FaWeixin /> WeChat
        </Text>
        <Divider />
        <Button leftIcon={<FaUserCircle />} justifyContent="start" w="100%">
          Profile
        </Button>
        <Button leftIcon={<FaSearch />} justifyContent="start" w="100%">
          Add Contact
        </Button>
      </VStack>

      {/* Chat Area */}
      <VStack flex={1} p={4} spacing={4}>
        <Box w="100%" h="calc(100% - 60px)" bg="white" borderRadius="md" p={4} overflowY="auto">
          {/* Chat messages will go here */}
        </Box>
        <Flex w="100%">
          <Input placeholder="Type a message..." flex={1} />
          <Button ml={2} colorScheme="blue" onClick={sendMessage}>
            <FaPaperPlane />
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Index;
