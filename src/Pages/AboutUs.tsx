import {
  Box,
  Center,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react";
//import ImageSlider from "../Components/ImageSlider";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import "../css/About.css";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";

const AboutUs = () => {
  return (
    <SimpleGrid
      columns={2}
      h="calc(95vh)"
      id="about"
      className="about"
      templateAreas={{ base: `"main"`, lg: `"photo main"` }}>
      {/*image scroller for preview images*/}
      <GridItem marginTop={3} padding={4} area={"photo"}>
        <ImageSlider></ImageSlider>
      </GridItem>
      <GridItem area={"main"}>
        <Center>
          <Box display="flex">
            {/*text grid for information on about page*/}
            <SimpleGrid column={1}>
              <GridItem
                justifyContent="center"
                marginTop={2}
                className="Aboutus">
                <Text p="1" color="white" marginLeft="25%">
                  <Text fontSize="4xl" className="abouttext">
                    About Us
                  </Text>
                </Text>
                <Flex marginTop={2} marginLeft="43%">
                  <Link to="\">
                    <Icon
                      as={BsInstagram}
                      marginRight={10}
                      height="40px"
                      width="40px"
                      className="Icons"></Icon>
                  </Link>

                  <Link to="/">
                    <Icon
                      as={BsFacebook}
                      height="40px"
                      width="40px"
                      className="Icons"></Icon>
                  </Link>
                </Flex>
                {/* social media icons*/}
              </GridItem>
              {/* grid item that displays the open hours. used the chakra table for organizing the data*/}
              <GridItem>
                <Center className="closetext">We are closed on Tuesdays</Center>
                <GridItem>
                  <Center h="100px" color="white" fontSize="2xl">
                    Hours
                  </Center>
                  <TableContainer>
                    <Table variant="simple" colorScheme="teal">
                      <Tbody>
                        <Tr>
                          <Td>Monday</Td>
                          <Td>4pm-10pm</Td>
                        </Tr>
                        <Tr>
                          <Td>Wednesday</Td>
                          <Td>4pm-10pm</Td>
                        </Tr>
                        <Tr>
                          <Td>Thursday</Td>
                          <Td>4pm-10pm</Td>
                        </Tr>
                        <Tr>
                          <Td>Friday</Td>
                          <Td>4pm-10pm</Td>
                        </Tr>
                        <Tr>
                          <Td>Saturday</Td>
                          <Td>4pm-10pm</Td>
                        </Tr>
                        <Tr>
                          <Td>Sunday</Td>
                          <Td>4pm-10pm</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                </GridItem>
              </GridItem>
            </SimpleGrid>
          </Box>
        </Center>
      </GridItem>
    </SimpleGrid>
  );
};

export default AboutUs;
