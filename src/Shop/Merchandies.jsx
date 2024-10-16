import {
  Button,
  Card,
  CardBody,
  Flex,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function Merchandies({ info, onClick }) {
  return (
    <>
      <Card>
        <CardBody>
          <Heading size="md">{info.title}</Heading>
          <Flex>
            <img
              style={{
                height: "15vh",
              }}
              src={info.image}
            />
            <Spacer />
            <Flex direction="column">
              <Text noOfLines={[1, 2, 3]} maxW="300px">
                {info.description}
              </Text>
              <Spacer />
              <Button alignSelf="end" onClick={onClick} colorScheme="green">
                Add to cart
              </Button>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}