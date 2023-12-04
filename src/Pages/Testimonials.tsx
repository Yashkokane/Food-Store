import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../css/testimonials.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

const Testimonials = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)">
      <Box className="testimonalsBox">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={false}
          interval={6100}>
          <GridItem>
            <div>
              <div className="myCarousel">
                <h3>lorem ipsum 1</h3>
                <Text display="flex">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  nibh ante. Nam pellentesque nunc, at mattis ante suscipit sit
                  amet. Phasellus placerat, quam eu condimentum pretium, turpis
                  tortor venenatis nulla, id efficitur nulla magna nec lectus.
                  Fusce vehicula imperdiet urna, ac gravida libero fermentum id.
                </Text>
                <Text className="locationofreview" marginTop="10%">
                  -location of review
                </Text>
              </div>
            </div>
          </GridItem>
          <GridItem>
            <div>
              <div className="myCarousel">
                <h3>lorem ipsum 2</h3>
                <Text display="flex">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  nibh ante. Nam pellentesque est nunc, at mattis ante suscipit
                  sit amet. Phasellus placerat, quam eu condimentum pretium,
                  turpis tortor venenatis nulla, id efficitur nulla magna nec
                  lectus. Fusce vehicula imperdiet urna, ac gravida libero
                  fermentum id.
                </Text>
                <Text className="locationofreview" marginTop="10%">
                  -location of review
                </Text>
              </div>
            </div>
          </GridItem>
          <GridItem>
            <div>
              <div className="myCarousel">
                <h3>lorem ipsum 3</h3>
                <Text display="flex">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a
                  nibh ante. Nam pellentesque est nunc, at mattis ante suscipit
                  sit amet. Phasellus placerat, quam eu condimentum pretium,
                  turpis tortor venenatis nulla, id efficitur nulla magna nec
                  lectus. Fusce vehicula imperdiet urna, ac gravida libero
                  fermentum id.
                </Text>
                <Text className="locationofreview" marginTop="10%">
                  -location of review
                </Text>
              </div>
            </div>
          </GridItem>
        </Carousel>
      </Box>
    </Grid>
  );
};

export default Testimonials;
