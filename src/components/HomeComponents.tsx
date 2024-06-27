'use client'

import { Box } from '@chakra-ui/react'
import { Articles } from './Articles'
import { Hero } from './Hero'

interface Props {
	data: any
}

export const HomeComponents = ({ data }: Props) => {
	const hasHero = data?.project?.subtitle || data?.project?.description
	return (
		<Box h="fit-content" w="100%">
			<Box mx="auto" maxW="1118px" px={{ base: '20px', md: '34px', lg: '52px' }}>
				{hasHero && (
					<Box pb={{ base: '20px', md: '34px', lg: '120px' }} as="section">
						<Hero project={data?.project} />
					</Box>
				)}
			</Box>
			<Box
				as="section"
				mt={{ base: hasHero ? '34px' : '40px', lg: hasHero ? '30px' : '16px' }}
				w="100%"
				h="auto"
				position="relative"
				bg="#DAE9F9"
			>
				<Box h="auto" p="20px" maxW="1118px" mx="auto" fontSize={{ base: '16px', md: '18px' }}>
					<Articles pages={data?.pages} accentColor={data?.project?.accentColor} />
				</Box>
			</Box>
		</Box>
	)
}
