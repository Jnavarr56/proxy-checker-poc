import React, {
 Suspense, useState, useEffect 
} from 'react'
import {
 BackgroundParticles 
} from './components'
import {
	LinearProgress,
	Grid,
	colors,
	Fade,
	TextField,
	InputAdornment,
	IconButton,
	Card,
	CardHeader,
	CardContent
} from '@material-ui/core'
import {
 Search as SearchIcon 
} from '@material-ui/icons'
import {
 makeStyles, useTheme 
} from '@material-ui/styles'
import {
 renderRoutes 
} from 'react-router-config'
import PropTypes from 'prop-types'

const useStyles = makeStyles( theme => ( {
	containerGrid: {
		height: '100%',
		position: 'relative'
	},
	leftBackgroundColumn: hi => ( {
		backgroundColor: colors.teal['A200'],
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: theme.spacing( 8, 3, 0 )
	} ),
	particles: {
		height: '100%',
		width: '100%',
		position: 'absolute'
	},
	searchCard: {
		zIndex: 100,
		width: '100%',
		backgroundColor: 'rgba(255, 255, 255, .90)',
		'& .MuiCardContent-root': {
			paddingBottom: theme.spacing( 2 )
		}
	},
	search: {
		backgroundColor: 'rgba(0, 0, 0, 0)',
		'&, & .MuiTextField-root': {
			width: '100%',
			borderRadius: theme.spacing( 0.5 )
		},
		'& .MuiInputBase-input, & .MuiSvgIcon-root': {
			color: 'black'
		},
		'& .MuiInputBase-input': {
			fontSize: '.85rem'
		},
		'& .MuiSvgIcon-root': {
			fontSize: '1.25rem'
		},
		'& .MuiInputLabel-root': {
			transform: 'translate(14px, 20px) scale(1)',
			fontSize: '.85rem',
			color: 'black'
		},
		'& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
			transform: 'translate(14px, -6px) scale(0.75)',
			color: 'black'
		},
		'& .MuiOutlinedInput-notchedOutline': {
			borderColor: 'black !important'
		},
		boxShadow: theme.shadows[0]
	}
} ) )

const Dashboard = ( {
 location 
} ) => {
	const classes = useStyles()

	const [ searchValue,
setSearchValue ] = useState( '' )
	const handleSearchInput = e => {
		setSearchValue( e.currentTarget.value )
	}

	const [ mounted,
setMounted ] = useState( false )
	useEffect( () => {
		setMounted( prevMounted => !prevMounted )
	}, [ location.pathname ] )

	// console.log(useTheme())
	return (
		<Fade
			in={ mounted }
			timeout={ 3000 }
		>
			<Grid
				className={ classes.containerGrid }
				container
			>
				<Grid
					className={ classes.leftBackgroundColumn }
					item
					xs={ 4 }
				>
					<Card
						className={ classes.searchCard }
						elevation={ 3 }
					>
						<CardContent>
							<TextField
								className={ classes.search }
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton
												edge="end"
												// onClick={handleClickShowPassword}
												// onMouseDown={handleMouseDownPassword}
											>
												<SearchIcon />
											</IconButton>
										</InputAdornment>
									)
								}}
								label="Search by Name or Ticker"
								type="text"
								value={ searchValue }
								// InputLabelProps={{

								// }}
								variant="outlined"
								onChange={ handleSearchInput }
							/>
						</CardContent>
					</Card>
				</Grid>
				<Grid
					item
					xs={ 8 }
				/>
				<BackgroundParticles
					className={ classes.particles }
					colors={ [
						colors.teal['A200'],
						colors.amber['A200'],
						colors.amber['A200'],
						'#ffffff',
						'#ffffff'
					] }
				/>
				{/* <Suspense fallback={ <LinearProgress /> }>
                        {renderRoutes(props.route.routes)}
                    </Suspense> */}
			</Grid>
		</Fade>
	)
}

export default Dashboard
