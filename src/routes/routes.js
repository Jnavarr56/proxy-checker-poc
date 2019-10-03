import React, {
 lazy 
} from 'react'
import {
 Redirect 
} from 'react-router-dom'
import {
 Dashboard as DashboardLayout 
} from '../layouts'

export default [
	{
		path: '/',
		component: DashboardLayout,
		routes: [
			{
				path: '/home',
				exact: true,
				component: lazy( () => import( '../views/Home' ) )
			},
			{
				component: () => <Redirect to="/home" />
			}
		]
	},
	{
		component: <Redirect to="/" />
	}
]
