'use client'

import { useIsHovered } from '@/hooks'
import { NarrowArrowRightIcon } from '@/icons'
import { Link } from '@chakra-ui/next-js'
import { Box, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import { useRef } from 'react'

dayjs.extend(relativeTime)

interface Props {
	page: any
	accentColor?: string
	flipBg?: boolean
}

export const DocumentCard = ({ page, flipBg }: Props) => {
	const postDate = dayjs(page?.createdAt)
	const sinceDate = postDate.fromNow()

	const ref = useRef<HTMLAnchorElement>(null)
	const isHovered = useIsHovered([ref]).some(Boolean)

	return (
		<Link
			ref={ref}
			variant="unstyled"
			href={page?.slug || page?._id}
			transition={'all 0.3s ease'}
			_hover={{ textDecoration: 'none' }}
		>
			<Flex
				bg={flipBg ? 'white' : '#E8F2FC'}
				direction="column"
				h="100%"
				justify="center"
				align="flex-start"
				border={`2px solid ${isHovered ? 'black' : 'rgba(37,57,81,.2)'}`}
			>
				<Flex w="100%" h="100%" direction="column" p={{ base: '24px', md: '28px', lg: '30px' }}>
					<Heading
						as="h2"
						fontSize={{ base: 'xl', md: 'xl', lg: '2xl' }}
						fontWeight="600"
						color="gray.700"
						lineHeight="1.2"
					>
						{page?.title}
					</Heading>
					{page?.description !== '' && (
						<Text noOfLines={3} fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color="gray.600">
							{page?.description}
						</Text>
					)}
				</Flex>
				<HStack
					py={{ base: '24px', md: '28px', lg: '24px' }}
					px={{ base: '24px', md: '28px', lg: '24px' }}
					w="100%"
					borderTop={`2px solid ${isHovered ? 'black' : 'rgba(37,57,81,.2)'}`}
					justify="flex-start"
					align="center"
				>
					<Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color="gray.700">
						{' '}
						Read More
					</Text>
					<Box
						w="fit-content"
						h="fit-content"
						transform={isHovered ? 'translateX(0.3125rem)' : 'none'}
						transition="all 0.3s ease"
					>
						<NarrowArrowRightIcon size={20} color="#718096" />
					</Box>
				</HStack>
			</Flex>
		</Link>
	)
}
