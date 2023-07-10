import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
	<VStack bg="white" color="black" align="start"  borderRadius="12px" spacing="12px">
		<Image
			borderRadius="12px"
			boxSize='100%'
			objectFit='cover'
			src={imageSrc}
			alt='Dan Abramov'
		/>
		<VStack align="start" spacing="12px" px="16px" pb="16px">
			<Heading as='h5' size='sm' noOfLines={1}>{title}</Heading>
			<Text>{description}</Text>
			<Heading as='h6' size='xs' noOfLines={1}>See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></Heading>
		</VStack>
	</VStack>
  );
};

export default Card;
