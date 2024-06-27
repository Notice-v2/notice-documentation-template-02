'use client'

import { Box, Flex, Heading, HStack, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { PageContent } from './blocks/render-blocks'
import { DocumentCard } from './DocumentCard'
import { SocialShare } from './SocialShare'

interface Props {
	data: any
}

export const SubPageComponents = ({ data }: Props) => {
	const { page, relatedPages } = data || {}

	const formattedDate = useMemo(() => dayjs(page?.createdAt).format('MMM D, YYYY'), [page?.createdAt])

	function removeFirstElement(arr: any[]) {
		const newArr = arr.slice()
		newArr.shift()
		return newArr
	}

	const filteredContent = useMemo(() => removeFirstElement(page?.content ?? []), [page])

	return (
		<Box>
			<Flex direction="column" justify="center" px="20px" align="flex-start" mx={'auto'} maxW="1118px">
				<VStack py={{ base: '8', lg: 16 }} justify="center" align="flex-start" w="100%">
					<Flex maxW="800px" justify="center" align="flex-start" direction="column" w="100%" h="fit-content">
						<Heading
							as="h1"
							color="gray.600"
							fontSize={{ base: '2xl', md: '4xl', lg: '6xl' }}
							fontWeight="400"
							lineHeight="1.2"
							mb="20px"
						>
							{page?.title}
						</Heading>
						{page?.description !== '' && (
							<Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color="gray.500" mb="4">
								{page?.description}
							</Text>
						)}
						<HStack my="8px" justify="flex-start" align="center" gap="20px" w="100%">
							<Text flexShrink={0} fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color="fg.muted">
								{formattedDate}
							</Text>
							<SocialShare />
						</HStack>
					</Flex>
				</VStack>
			</Flex>
			<Box as="section" py={{ base: '30px', lg: '68px' }} w="100%" h="100%" bg="white">
				<Box px="20px" maxW="1118px" mx="auto" fontSize={{ base: '16px', md: '18px' }}>
					<PageContent blocks={filteredContent} />
					{relatedPages.length > 0 && (
						<Box w="100%" my="52px" as="section">
							<Heading as="h2" fontSize="2xl" fontWeight="700" lineHeight="1.2" mb="24px" color="gray.600">
								Related Articles
							</Heading>
							<SimpleGrid columns={{ base: 1, sm: 2 }} spacing={8}>
								{relatedPages?.map((page: any) => (
									<DocumentCard key={page._id} page={page} flipBg />
								))}
							</SimpleGrid>
						</Box>
					)}
				</Box>
			</Box>
		</Box>
	)
}
