
import React from "react";
import { Text, Box, useBreakpointValue, Avatar, Heading, Grid } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
// import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { SimpleGrid } from "@chakra-ui/react";
// Settings for the slider
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};
export function Sliding() {
  const [slider, setSlider] = React.useState(1);
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });
  const cards = [
    {
      id: 1,
      name: "Joe Loria, Content Manager",
      image:
        "https://buffer.com/static/testimonials/joe-mercy-for-animals@mobile.jpg",
      offer: "DressUp",
      par: "Buffer saves us, literally, hours and in turn helps us spread our message even further.",
    },
    {
      id: 2,
      name: "Luis Cancel, Managing Editor",
      image:
        "https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg",
      offer: "FOOD52",
      par: "Buffer has made sharing our story and building our brand on social media so much easier.",
    },
    {
      id: 3,
      name: "Liz Gillis, Digital Marketer",
      image:
        "https://buffer.com/static/testimonials/liz-gillis-dress-up@2x-mobile.jpg",
      offer: "THE SILL",
      par: "On social, we need to be fast, efficient, and intentional.  Buffer allows us to be exactly that.",
    },
    {
      id: 4,
      name: "Troy Petrunoff, Marketing Manager",
      image:
        "https://buffer.com/static/testimonials/troy-petrunoff@mobile.jpg",
      offer: "BURROW",
      par: "For a marketing team with a lot on our plates, Buffer is a crucial tool in our brand-building efforts.",
    },
    {
      id: 5,
      name: "Rodrigo Hyago, Social Media",
      image:
        "https://buffer.com/static/testimonials/rodrigo-hyago-happysocks@mobile.jpg",
      offer: "Happy Socks",
      par: "For a marketing team with a lot on our plates, Buffer is a crucial tool in our brand-building efforts.",
    },
    {
      id: 6,
      name: "Joe Loria, Content Manager",
      image:
        "https://buffer.com/static/testimonials/joe-mercy-for-animals@mobile.jpg",
      offer: "Huckberry",
      par: "Buffer saves us, literally, hours and in turn helps us spread our message even further.",
    },

    {
      id: 7,
      name: "Luis Cancel, Managing Editor",
      image:
        "https://buffer.com/static/testimonials/luis-cancel-huckberry-mobile.jpg",
      offer: "UPTO 15% OFF",
      par: "Buffer has made sharing our story and building our brand on social media so much easier.",
    },

    {
      id: 8,
      name: "Liz Gillis, Digital Marketer",
      image:
        " https://buffer.com/static/testimonials/liz-gillis-dress-up@2x-mobile.jpg",
      offer: "UPTO 25% OFF",
      par: "On social, we need to be fast, efficient, and intentional.  Buffer allows us to be exactly that.",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={"480px"}
      width={"100%"}
      // bgColor={"blue"}
      overflow={"hidden"}
      p={10}
    >

      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            marginTop={8}
            key={index}
            // bgColor={"green"}
            height={380}
            width={{ lg: "600", md: "500", sm: "400" }}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
          >
            <SimpleGrid column={[3, 2, 1]} spacing='40px'>
              <Box
                style={{
                  width: "400px",
                  boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                  // border:"1px solid red",
                  height: "600px",
                  p: "10px"
                }}
              >
                <Box
                  style={{
                    width: "100px",
                    marginLeft: "40%",
                    paddingBottom: "30px",
                  }}
                >
                  <Avatar size="xl" src={url.image} />
                </Box>
                <Box
                  style={{
                    width: "300px",
                    textAlign: "center",
                    marginLeft: "15%",
                  }}
                >
                  <Text fontSize={{ base: "none", sm: "0px", md: "0px", lg: "20px" }} mt={10}>
                    {url.par}
                  </Text>
                </Box>

                <Box>
                  <Text fontSize={{ base: "0px", sm: "0px", md: "0px", lg: "2xl" }} as="abbr" mt={10} color="RGBA(0, 0, 0, 0.24)" ml={100} >
                    {url.offer}
                  </Text>
                  <Heading as="h5" size="sm" display={{ base: "0px", sm: "0px", md: "0px", lg: "4xl" }} ml={100} mt={10}>
                    {url.name}
                  </Heading>
                </Box>

              </Box>
            </SimpleGrid>
        
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
