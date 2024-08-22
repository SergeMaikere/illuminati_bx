"use client"
import { ReactNode } from "react"
import { useSignals } from '@preact/signals-react/runtime';
import classNames from "classnames";
import { theme } from '../signals/theme';

type C = { children: ReactNode }

export const ThemeProvider = ({children}: C) => {
	useSignals()

	return(
		<div className={classNames('w-full', {dark: theme.value === 'true'})}>
			{children}
		</div>
	)
}