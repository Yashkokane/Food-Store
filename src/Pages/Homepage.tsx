import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import homeImage from "../assets/Home page/Landing_image.jpg";
import Testimonals from "./Testimonials";
import "../css/homepage.css";

const Homepage = () => {
  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} id="homepage">
        <GridItem colSpan={5} className="main" bgImage={homeImage}>
          <Box h="calc(97vh)" color="Gold">
            <Flex
              marginBottom={5}
              justifyContent="center"
              className="maintext"
              style={{ marginTop: "15%" }}>
              <Text className="introtext"> Welcome to Food Store</Text>
            </Flex>
            <Flex marginBottom={5} justifyContent="center" className="maintext">
              <Text fontSize="6xl"> Tag Line</Text>
            </Flex>
            <Flex marginBottom={5} justifyContent="center">
              <Button
                className="orderbtn"
                variant="outline"
                borderColor="green.500"
                backgroundColor="blackAlpha.500"
                style={{ zIndex: 1 }}>
                ORDER ONLINE
              </Button>
            </Flex>
            <Flex marginBottom={5} justifyContent="center">
              <Text fontSize="xl"> Welcome to Food Store</Text>
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={5}>
          <AboutUs />
        </GridItem>
        <GridItem colSpan={5}>
          <Testimonals />
        </GridItem>
        <GridItem colSpan={5}>
          <ContactUs />
        </GridItem>
      </Grid>
      <footer>
        <Center>
          <p>© Copyright YashK. All Right Reserved</p>
        </Center>
      </footer>
    </>
  );
};

export default Homepage;
