import { Box, Text, Center, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../css/contact.css";

const ContactUs = () => {
  return (
    <Box bg="#567219" height="60vh" className="mainbox">
      <SimpleGrid columns={1} spacing={10}>
        <Center>
          <Box height="80px">
            <Text fontSize="4xl" marginTop={5}>
              Contact Us
            </Text>
          </Box>
        </Center>
      </SimpleGrid>
      <SimpleGrid
        marginBottom={10}
        id="contact"
        columns={2}
        spacingX="40px"
        spacingY="20px"
        marginTop={10}
        paddingLeft="10%"
        paddingRight="2%">
        <Box height="50px" className="textboxs">
          <Text fontSize="30">Address:</Text>
          <Text overflowWrap="break-word">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a nibh
            ante
          </Text>
        </Box>
        <Box className="textboxs" height="50px">
          <Text className="maininfotext">Phone Numbers: 0123456789</Text>
        </Box>
        <Box height="50px" className="Directions">
          <Link to="/">
            <Text textDecoration="underline">Get Directions</Text>
          </Link>
        </Box>
        <Box height="50px">
          <Text className="maininfotext">Phone Numbers: 0123456789</Text>
        </Box>
        <Box height="50px" className="Email">
          <Text className="maininfotext">Email: info@info</Text>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default ContactUs;
