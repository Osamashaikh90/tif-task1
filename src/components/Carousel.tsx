
import { useState } from 'react';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Tomatoe, Broccli, Crunch, Grill, Meral, Peach } from '../assets/images/cards/index';

const Carousel = () => {
  const Data = [
    { title: 'Grilled Tomatoes at Home', imageUrl: Tomatoe, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Snacks for Travel', imageUrl: Peach, description: 'Lorem Ipsum has been the industry’s standard dummy text.' },
    { title: 'Post-workout Recipes', imageUrl: Meral, description: 'Lorem Ipsum has been the industry’s standard dummy text.' },
    { title: 'How To Grill Corn', imageUrl: Grill, description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
    { title: 'Crunchwrap Supreme', imageUrl: Crunch, description: 'Lorem Ipsum has been the industry’s standard dummy text.' },
    { title: 'Broccoli Cheese Soup', imageUrl: Broccli, description: 'Lorem Ipsum has been the industry’s standard dummy text.' },
  ];

  const itemsPerPage = 3;
  const totalSlides = Math.ceil(Data.length / itemsPerPage);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < totalSlides - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const getVisibleItems = () => {
    return Data.slice(currentIndex * itemsPerPage, (currentIndex + 1) * itemsPerPage);
  };

  return (
    <Box maxWidth="100%" display="flex" flexDirection="column"  py={{ md: 6 }}>
      <Text fontSize={{base:'4xl',md:'5xl'}} fontWeight={{base:'semibold'}}  mb={4} className="text-[#0e2368]" textAlign={{base:"center",md:'left'}}>
        Latest Articles
      </Text>
      <Flex 
        direction={{ base: 'column', md: 'row' }}
        gap={6}
        justify="center" 
        align="center"
        overflow="hidden"
        width="100%"
        maxWidth="1200px"
      >
        {getVisibleItems().map((item, index) => (
          <Box
            key={index}
            flex={{ base: '0 0 100%', md: '0 0 30%' }}
            p={6}
            borderWidth="2px"
            borderRadius="3xl"
            margin="10px"
            textAlign={{base:"center",md:'left'}}
          >
            <Image src={item.imageUrl} alt={item.title} borderRadius="md" mb={4} />
            <Box p={5}>
              <Text fontSize="xl" mb={2} className="text-[#0e2368] text-2xl font-semibold">{item.title}</Text>
              <Text fontSize="sm" mb={4}>{item.description}</Text>
              <Button colorScheme="blue" variant="outline" className="px-6 py-1 border border-black rounded-full" mt={5}>Read More</Button>
            </Box>
          </Box>
        ))}
      </Flex>
      <Flex justify="center" alignItems="center" mt={10}>
        <Button borderWidth="2px" borderRadius="lg" onClick={prevSlide} disabled={currentIndex === 0} mr={2}>
          <FaChevronLeft />
        </Button>
        <Text>{currentIndex + 1} / {totalSlides}</Text>
        <Button borderWidth="2px" borderRadius="lg" onClick={nextSlide} disabled={currentIndex === totalSlides - 1} ml={2}>
          <FaChevronRight />
        </Button>
      </Flex>
    </Box>
  );
};

export default Carousel;
