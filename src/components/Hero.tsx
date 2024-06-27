'use client'

import { Flex, Heading, Text } from '@chakra-ui/react'

interface Props {
	project?: any
}

export const Hero = ({ project }: Props) => {
	return (
		<Flex
			maxW="700px"
			justify="center"
			align="flex-start"
			py={{ base: '8', lg: 20 }}
			direction="column"
			w="100%"
			h="fit-content"
		>
			<Heading
				as="h1"
				color="gray.600"
				fontSize={{ base: '4xl', lg: '6xl' }}
				fontWeight="400"
				lineHeight="1.2"
				mb="20px"
			>
				{project?.subtitle}
			</Heading>
			<Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color="gray.500" mb="4">
				{project?.description}
			</Text>
		</Flex>
	)
}
