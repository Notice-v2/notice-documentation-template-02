import { IconProps } from '.'

export const ArrowLeft = ({ size, color }: IconProps) => {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M15 18L9 12L15 6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
		</svg>
	)
}
