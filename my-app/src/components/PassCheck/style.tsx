import styled from 'styled-components';
import { IndicatorProps } from './PassCheck.types';

const getBackgroundColor = (level: number) => {
	if(level === 1) return '#d82a2a'
	if(level === 2) return '#d8d809'
	if(level === 3) return '#23b823'
	return '#cccaca'
}

export const Wrapper = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	max-width: 300px;
`

export const InputWrapper = styled.div`
	display: flex;
	border: 2px solid rgb(97, 96, 96);
	border-radius: 8px;
	outline: none;
	overflow: hidden;
	width: 100%;
	`

export const IconWrapper = styled.div`
	display: flex;
	width: 22px;
	align-items: center;
	justify-content: center;
	padding: 0 4px;
	cursor: pointer;
`

export const Input = styled.input`
	padding: 4px 8px;
	border: transparent;
	outline: none;
	color: rgb(36, 36, 36);
	font-size: 16px;
	width: 100%;
`

export const IndicatorsContainer = styled.div`
	width: 100%;
	display: flex;
	gap: 4px;
`

export const Indicator = styled.div<IndicatorProps>`
	height: 10px;
	width: 100%;
	border-radius: 10px;
	background-color: ${({passLevel, fillByLevel, fillByShortPass}) => {
		if(fillByShortPass) return '#d82a2a'
		if(fillByLevel) return  getBackgroundColor(passLevel)
		return '#cccaca'
		}};
	overflow: hidden;
	transition: background-color .2s;
`