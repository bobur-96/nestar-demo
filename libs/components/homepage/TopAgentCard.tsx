import { Box, Stack, Typography } from '@mui/material'

const TopAgentCard = () => {
	return (
		<Stack className='top-agent-card'>
			<Box
				component={'img'}
				className={'card-img'}
				style={{
					backgroundImage: `url("/img/profile/child.jpg")`,
				}}
			></Box>
			<Typography className='agent-name'>
				<strong>Neo</strong>
			</Typography>
			<Typography className='agent-details'>Agent Details</Typography>
		</Stack>
	)
}
export default TopAgentCard
