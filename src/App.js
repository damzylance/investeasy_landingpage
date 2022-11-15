import {
  Box,
  Flex,
  Heading,
  Container,
  Image,
  Text,
  Button,
  Input,
} from "@chakra-ui/react";
import { AiOutlineClockCircle, AiTwotoneSecurityScan } from "react-icons/ai";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {
  MdOutlineLooksOne,
  MdOutlineLooksTwo,
  MdOutlineLooks3,
} from "react-icons/md";
function App() {
  return (
    <Box background={"#fff"}>
      <Box>Header</Box>
      <Box width={["95%", "95%", "90%"]} margin="auto">
        <Flex
          flexWrap={"wrap"}
          py={"20px"}
          backgroundImage={"url('/assets/images/wave.svg')"}
          backgroundPosition={"bottom"}
          backgroundRepeat="no-repeat"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box>
            <Container maxW={"550px"}>
              <Heading as="h1" size={"4xl"}>
                DEFI LOANS FOR THE REAL WORLD
              </Heading>
              <Text fontSize={"xl"} mt={"20px"}>
                No money upfront. Innovative uncollateralized lending.
              </Text>
              <Flex my={"20px"}>
                <Button background={"#5454d4"} color="#fff">
                  Buy Crypto Now Pay later
                </Button>
              </Flex>
            </Container>
          </Box>
          <Box>
            <Image src="/assets/images/hero.png" alt="Hero Image" />
          </Box>
        </Flex>
        <Flex
          my={"20px"}
          gap={["20px", "20px", ""]}
          justifyContent={["center", "center", "space-between"]}
          flexWrap={"wrap"}
        >
          <InfoBox
            icon={<AiOutlineClockCircle color="#5454d4" size={"30px"} />}
            width="350px"
            title={"Exit Anytime"}
            content={`Real-time problem solving is not just about time, it's about time.
            This allows you to solve within a specified time problem has a
            solution.`}
          />
          <InfoBox
            icon={<RiMoneyDollarCircleLine color="#5454d4" size={"30px"} />}
            width="350px"
            title={"Competitive Returns"}
            content={`By and large, credit cards are easily the most secure and safe payment method to use when you shop online. credit cards most secure.`}
          />
          <InfoBox
            icon={<AiTwotoneSecurityScan color="#5454d4" size={"30px"} />}
            width="350px"
            title={"Default Protection"}
            content={`The biggest benefit of offering 24/7 support is that you provide a more convenient service for your customers providing clock support.`}
          />
        </Flex>
        <FeatureBox
          image={"/assets/images/no-money.png"}
          heading={"NO MONEY UPFRONT"}
          subheading={`Instant Payment. Electronic payments are much faster than the
            traditional methods of payments.`}
          content={` Online invoice payment helps companies save time, are faster and
            save maximum effort for the clients. It also helps in reducing the
            excessive physical transactions.`}
        />
        <FeatureBox
          direction={"row-reverse"}
          image={"/assets/images/vetted.png"}
          heading={"VETTED BORROWERS"}
          subheading={`Instant Payment. Electronic payments are much faster than the
            traditional methods of payments.`}
          content={` Online payment companies are responsible for handling online or internetbased payment. The online payment systems.`}
        />
        <FeatureBox
          image={"/assets/images/no-money.png"}
          heading={"NO MONEY UPFRONT"}
          subheading={`Instant Payment. Electronic payments are much faster than the
            traditional methods of payments.`}
          content={` Online invoice payment helps companies save time, are faster and
            save maximum effort for the clients. It also helps in reducing the
            excessive physical transactions.`}
        />
        <Box width={"100%"} my={"50px"} py="50px" bg={"#5454d4"} color={"#fff"}>
          <Heading textAlign={"center"}>
            OWN CRYPTO IN THREE SIMPLE STEPS
          </Heading>
          <Box
            display={"flex"}
            marginX="auto"
            justifyContent="space-between"
            width="80%"
          >
            <InfoBox
              icon={<MdOutlineLooksOne color="#fff" size={"30px"} />}
              width="300px"
              title={"Exit Anytime"}
              content={`Real-time problem solving is not just about time, it's about time.
            This allows you to solve within a specified time problem has a
            solution.`}
            />
            <InfoBox
              icon={<MdOutlineLooksTwo color="#fff" size={"30px"} />}
              width="300px"
              title={"Competitive Returns"}
              content={`By and large, credit cards are easily the most secure and safe payment method to use when you shop online. credit cards most secure.`}
            />
            <InfoBox
              icon={<MdOutlineLooks3 color="#fff" size={"30px"} />}
              width="300px"
              title={"Default Protection"}
              content={`The biggest benefit of offering 24/7 support is that you provide a more convenient service for your customers providing clock support.`}
            />
          </Box>
        </Box>
        <Box
          backgroundColor={"#5454d440"}
          backgroundImage={"url(/assets/images/pshape.svg)"}
          backgroundRepeat={"no-repeat"}
          backgroundPosition={"top left"}
          borderRadius={"10px"}
          my={"50px"}
          py="50px"
        >
          <Container maxW={"1000px"}>
            <Text textAlign={"center"} fontSize={"2xl"} fontWeight={"700"}>
              Stay updated with our product updates, crypto news and market
              trends in your inbox every week!
            </Text>
          </Container>
          <Flex maxW={"600px"} gap={"30px"} mx="auto" my={"50px"}>
            <Input size={"lg"} placeholder="Email Address" variant={"filled"} />
            <Button
              size={"lg"}
              style={{ background: "#5454d4", color: "white" }}
            >
              Join Waitlist
            </Button>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
const InfoBox = (props) => {
  return (
    <Flex flexDir={"column"} gap="20px" my={"20px"}>
      <Box
        width={"50px"}
        height={"50px"}
        borderRadius={"50%"}
        display="flex"
        alignItems={"center"}
        justifyContent="center"
        boxShadow={
          "0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)"
        }
      >
        {props.icon}
      </Box>
      <Flex flexDir={"column"}>
        <Text fontSize={"2xl"} fontWeight={"bold"}>
          {props.title}
        </Text>
        <Container padding={0} maxW={props.width}>
          <Text fontSize={"md"}>{props.content}</Text>
        </Container>
      </Flex>
    </Flex>
  );
};

const FeatureBox = (props) => {
  return (
    <Flex
      width={"100%"}
      flexDirection={props.direction}
      justifyContent={"space-between"}
      alignItems="center"
      marginY={"100px"}
      flexWrap="wrap"
    >
      <Box>
        <Image src={props.image} />
      </Box>
      <Box>
        <Container padding={0} maxW={"400px"}>
          <Heading> {props.heading}</Heading>
          <Text my={"10px"} fontSize={"xl"} fontWeight={"bold"}>
            {props.subheading}
          </Text>
          <Text fontSize={"md"} opacity=".7">
            {props.content}
          </Text>
        </Container>
      </Box>
    </Flex>
  );
};

export default App;
