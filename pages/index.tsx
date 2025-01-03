import withLayoutMain from '@/libs/components/layout/LayoutHome'
import { Container, Stack } from '@mui/material'
import { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<Container>
			<Stack className={'home-page'}>
				<Stack>
					<Stack className='container'>Popular Properties</Stack>
				</Stack>
				<Stack>
					<Stack className='container'>Top Agents</Stack>
				</Stack>
				<Stack>
					<Stack className='container'>Events</Stack>
				</Stack>
			</Stack>
		</Container>
	)
}

export default withLayoutMain(Home)
