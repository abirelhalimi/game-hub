import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Image,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Heading,
} from "@chakra-ui/react";

export const GameDetail = () => {
  return (
    <>
      <Card maxW="sm">
        <CardBody padding={0}>
          <Image
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Green double couch with wooden legs"
            borderRadius="lg"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">Grand Theft Auto V</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              earum eos. Commodi at labore cupiditate dolorem ipsam, optio
              distinctio. Atque minima rerum beatae voluptate fugit veritatis
              suscipit dolorum numquam et.
            </Text>
            <Text color="blue.600" fontSize="2xl">
              $450
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button variant="solid" colorScheme="blue">
              Buy now
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Add to cart
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </>
  );
};
