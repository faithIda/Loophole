import { useWallet } from '@cosmos-kit/react';
import { useRouter } from 'next/router'
import NextLink from "next/link"
import React, { useState } from 'react';
import {
  Box,
  Divider,
  Grid,
  Heading,
  Text,
  Stack,
  Container,
  Link,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
  Spinner,
  Tag,
  TableContainer,
  Table,
  Thead,
  Th,
  Tr,
  Td,
  Tbody,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';

const data = [
  {
    company: 'Twitter',
    title: 'Software Engineer II',
    salary: '50,000',
    gender: 'female',
    age: '25',
    lastPromotion: 'July 2022',
    verified: true,
  },
  {
    company: 'Google',
    title: 'Software Engineer I',
    salary: '45,000',
    gender: 'Male',
    age: '22',
    lastPromotion: 'January 2022',
    verified: false,
  },
  {
    company: 'Facebook',
    title: 'Senior Software Engineer',
    salary: '95,000',
    gender: 'female',
    age: '33',
    lastPromotion: 'December 2021',
    verified: true,
  }
];

export const Form = () => {
    const walletManager = useWallet();
    const {
      walletStatus,
    } = walletManager;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState('');
    const [salary, setSalary] = useState('');
    const [company, setCompany] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [lastPromotion, setLastPromotion] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [result, setResult] = useState('');
    const [verified, setVerified] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState([]);

    const onSubmit = () => {
      setSubmitted(true);
      setTimeout(() => setResult({
        type: "cosmos-sdk/StdTx",
        value: {
          msg: [
            {
              "type": "github.com/CudoVentures/cudos-node/nft/MsgMintNFT",
              "value": {
                "denom_id": "testdenom",
                "name": "testTokenName",
                "uri": "testuri",
                "data": "testdata",
                "sender": "cudos1qy7a8qvmqtqrscz7rf9l3xlllm0l6x3xnmarze",
                "recipient": "cudos1s609vqsnwxpm2t4scjq70770kph7uaz53lg89v"
              }
            }
          ],
          fee: {
            gas: "200000"
          },
          signatures: [],
          memo: "",
          timeout_height: "0"
        }
      }), 2000);
      setTimeout(() => setVerified(true), 5000);
    }

    // const onTest = () => {
    //   fetch('https://sentry1.gcp-uscentral1.cudos.org:36657/nft/nfts/denoms/issue', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       method: "nft",
    //       params: ["5"],
    //       id: 1
    //     }),
    //   })
    // }

    const setSelectedCompanyFilter = (company) => {
      const newFilters = [...selectedFilters];
      if (selectedFilters.includes(company)) {
        const index = selectedFilters.indexOf(company);
        if (index > -1) { // only splice array when item is found
          newFilters.splice(index, 1); // 2nd parameter means remove one item only
        }
      } else {
        newFilters.push(company);
      }
      setSelectedFilters(newFilters);
    }

    const bg = useColorModeValue('white', 'blackAlpha.400');
    const boxShadow = useColorModeValue(
      '0 0 2px #dfdfdf, 0 0 6px -2px #d3d3d3',
      '0 0 2px #363636, 0 0 8px -2px #4f4f4f'
    );

    return ( <>
      {/* <Button onClick={onTest}>Test</Button> */}
      {!showDashboard
      ?!submitted 
        ? walletStatus === 'Connected' 
          ? <Box 
            p='20px' 
            bg={bg}
            boxShadow={boxShadow}
            borderRadius='lg'
            >
            <form onSubmit={() => onSubmit()}>
              <Stack spacing={3}>
                <FormControl isRequired>
                  <FormLabel>First name</FormLabel>
                  <Input
                    placeholder=''
                    size='sm'
                    onChange={event => setFirstName(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input
                    placeholder=''
                    size='sm'
                    onChange={event => setLastName(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Gender</FormLabel>
                  <Input
                    placeholder=''
                    size='sm'
                    onChange={event => setGender(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Age</FormLabel>
                  <Input
                    placeholder=''
                    size='sm'
                    onChange={event => setAge(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Job Title</FormLabel>
                  <Input
                    placeholder=''
                    size='sm'
                    onChange={event => setJobTitle(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Company</FormLabel>
                  <Input
                    placeholder=''
                    size='sm'
                    onChange={event => setCompany(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Company Email</FormLabel>
                  <Input
                    placeholder=''
                    size='sm'
                    onChange={event => setCompanyEmail(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Last Promotion</FormLabel>
                  <Input
                    placeholder=''
                    size='sm'
                    onChange={event => setLastPromotion(event.currentTarget.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Salary</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents='none'
                      color='gray.300'
                      fontSize='1.2em'
                    >£</InputLeftElement>
                    <Input placeholder='Enter salary' onChange={event => setSalary(event.currentTarget.value)}/>
                  </InputGroup>
                </FormControl>
                <Button
                  variant="outline"
                  type="submit"
                  width="full"
                  mt={4}
                >
                  Submit
                </Button>
              </Stack>
            </form>
            </Box>
          : <Box 
              p='20px' 
              bg={bg}
              boxShadow={boxShadow}
              borderRadius='lg'
              textAlign="center"
            >
              <Heading
              as="h3"
              fontSize={{ base: '1xl'}}
              fontWeight="extrabold"
              >
                Please connect your wallet first.
              </Heading>  
            </Box>
        : !result 
          ? <Box textAlign="center">
              <Spinner />
              <Heading
                as="h1"
                fontSize={{ base: '3xl', sm: '4xl', md: '5xl' }}
                fontWeight="extrabold"
                mb={3}
              >
                Creating your NFT...
              </Heading>
            </Box>
          : <Box>
              <Box
                p='20px' 
                bg={bg}
                boxShadow={boxShadow}
                borderRadius='lg'
                mb='10px'
                >
                <CheckCircleIcon color='green'/> NFT successfully created by you
              </Box>
              <Box
                p='20px' 
                bg={bg}
                boxShadow={boxShadow}
                borderRadius='lg'
                mb='30px'
                >
                  {!verified 
                  ? <Flex>
                      <Spinner/>
                      <Text ms='10px'>Waiting for {company} to verify</Text>
                    </Flex>
                  : <><CheckCircleIcon color='green'/> {company} has verified you</>}
              </Box>
              <Box
                p='20px' 
                bg={bg}
                boxShadow={boxShadow}
                borderRadius='lg'
                >
                <Stack>
                  <Text><Tag>Name:</Tag> {firstName} {lastName} {verified && <Tag bgColor='green'>Verified by Employer</Tag>}</Text>
                  <Text><Tag>Age:</Tag> {age}</Text>
                  <Text><Tag>Gender:</Tag> {gender}</Text>
                  <Text><Tag>Company:</Tag> {company}</Text>
                  <Text><Tag>Email:</Tag> {companyEmail}</Text>
                  <Text><Tag>Job Title:</Tag> {jobTitle}</Text>
                  <Text><Tag>Last Promotion:</Tag> {lastPromotion}</Text>
                  <Text><Tag>Salary:</Tag> {salary}</Text>
                </Stack>
              </Box>
              <Box
                mt='30px'
                >
                <Button
                  w="full"
                  onClick={()=> setShowDashboard(true)}
                  minW="fit-content"
                  borderRadius='lg'
                  size="lg"
                  bgImage="linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)"
                  color="white"
                  opacity={1}
                  p='10px'
                  transition="all .5s ease-in-out"
                  _hover={{
                    bgImage:
                      'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)',
                    opacity: 0.75
                  }}
                  _active={{
                    bgImage:
                      'linear-gradient(109.6deg, rgba(157,75,199,1) 11.2%, rgba(119,81,204,1) 83.1%)',
                    opacity: 0.9
                  }}>View Dashboard</Button>
              </Box>
            </Box>
            : <Box mb='20px'>
              <Flex>
                <Tag>Company:</Tag>
                <Button bgColor={selectedFilters.includes(company) ? 'blue' : undefined} onClick={() => setSelectedCompanyFilter(company)} ms='10px'>{company}</Button>
                <Button bgColor={selectedFilters.includes('Facebook') ? 'blue' : undefined} onClick={() => setSelectedCompanyFilter('Facebook')} ms='10px'>Facebook</Button>
                <Button bgColor={selectedFilters.includes('Google') ? 'blue' : undefined} onClick={() => setSelectedCompanyFilter('Google')} ms='10px'>Google</Button>
              </Flex>
              <TableContainer>
                <Table variant='simple'>
                  <Thead>
                  <Tr>
                      <Th>Company</Th>
                      <Th>Title</Th>
                      <Th>Salary</Th>
                      <Th>Gender</Th>
                      <Th>Age</Th>
                      <Th>Last Promotion</Th>
                  </Tr>
                  </Thead>
                  <Tbody>
                  {selectedFilters.includes(company) || selectedFilters.length === 0 ?
                  <Tr>
                      <Td>{company} <CheckCircleIcon color='green'/></Td>
                      <Td>{jobTitle}</Td>
                      <Td>£{salary}</Td>
                      <Td>{gender}</Td>
                      <Td>{age}</Td>
                      <Td>{lastPromotion}</Td>
                  </Tr> : null}
                  {selectedFilters.includes('Facebook') || selectedFilters.length === 0 ?
                  <Tr>
                      <Td>Facebook</Td>
                      <Td>Software Engineer II</Td>
                      <Td>£60,000</Td>
                      <Td>Female</Td>
                      <Td>32</Td>
                      <Td>October 2021</Td>
                  </Tr> : null}
                  {selectedFilters.includes('Google') || selectedFilters.length === 0 ?
                  <Tr>
                      <Td>Google <CheckCircleIcon color='green'/></Td>
                      <Td>Software Engineer II</Td>
                      <Td>£70,000</Td>
                      <Td>Male</Td>
                      <Td>26</Td>
                      <Td>January 2021</Td>
                  </Tr> : null}
                  {selectedFilters.includes('Facebook') || selectedFilters.length === 0 ?
                  <Tr>
                      <Td>Facebook</Td>
                      <Td>Senior Software Engineer</Td>
                      <Td>£90,000</Td>
                      <Td>Female</Td>
                      <Td>31</Td>
                      <Td>January 2022</Td>
                  </Tr> : null}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
            }
          </>
      );
  };
  