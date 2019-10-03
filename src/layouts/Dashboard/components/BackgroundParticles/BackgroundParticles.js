import React from 'react'
import Particles from 'react-particles-js'
import clsx from 'clsx'
import {
 makeStyles 
} from '@material-ui/styles'

const useStyles = makeStyles( theme => ( {
	fullDimensions: {
		height: '100%',
		width: '100%'
	},
	particles: {
		position: 'absolute',
		top: 0
	}
} ) )

const BackgroundParticles = props => {
	const {
 className, colors 
} = props
	const classes = useStyles()

	return (
		<div className={ clsx( classes.fullDimensions, className ) }>
			{colors.map( ( color, i ) => {
				return (
					<Particles
						className={ clsx( classes.fullDimensions, classes.particles ) }
						height="100%"
						key={ `p-${i}` }
						params={ generateConfig( color ) }
						width="100%"
					/>
				)
			} )}
		</div>
	)
}

export default BackgroundParticles

const generateConfig = color => ( {
	particles: {
		color: {
			value: color
		},
		number: {
			value: 25,
			density: {
				enable: true,
				value_area: 1500
			}
		},
		size: {
			value: 30,
			random: true,
			anim: {
				speed: 0.5,
				size_min: 0.3
			}
		},
		line_linked: {
			enable: false
		},
		move: {
			random: true,
			speed: 0.125,
			direction: 'top-left',
			out_mode: 'out'
		},
		opacity: {
			random: true,
			anim: {
				speed: 0.125
			}
		}
	}
} )
