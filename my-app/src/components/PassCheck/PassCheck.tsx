import { HidePass } from "assets/HidePass"
import { ShowPass } from "assets/ShowPass"
import { ChangeEvent, useState } from "react"
import { IconWrapper, Indicator, IndicatorsContainer, Input, InputWrapper, Wrapper } from "./style"

const PASSWORD_LEVELS = [1, 2, 3]

export const PassCheck = () => {
	const [showPass, setShowPass] = useState(false)
	const [passLevel, setPassLevel] = useState(0)
	const [isPassTooShort, setIsPassTooShort] = useState(true)

	const checkLetterMatches = (value: string) => {
		const numbersMatch = !!value.match(/\d/)
		const lettersMatch = !!value.match(/[a-zA-Z]/)
		const symbolsMatch = !!value.match(/[.,?/!@#$%^&*()_\-+=<>:;]/)
		const passSummaryLevel = +numbersMatch + +lettersMatch + +symbolsMatch
		if (passSummaryLevel !== passLevel) setPassLevel(passSummaryLevel)
	}

	const descriptionPassStrenght = () => {
		if (isPassTooShort) return 'Password less than 8 characters'
		if (passLevel === 1) return 'Password is ease'
		if (passLevel === 2) return 'Password is medium'
		if (passLevel === 3) return 'Password is strong'
		return 'Enter your password'
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		checkLetterMatches(e.target.value)
		setIsPassTooShort(e.target.value.length > 0 && e.target.value.length < 8)
	}

	return (
		<Wrapper>
			<h2>Password strength checker</h2>
			<InputWrapper>
				<Input
					type={showPass ? 'text' : 'password'}
					onChange={onChangeHandler}
					autoComplete="off" />
				<IconWrapper role="button" aria-hidden="true" onClick={() => setShowPass(!showPass)}>
					{showPass
						? <ShowPass width={20} />
						: <HidePass width={22} />
					}
				</IconWrapper>
			</InputWrapper>
			<IndicatorsContainer >
				{PASSWORD_LEVELS.map(item => (
					<Indicator key={item} passLevel={passLevel} fillByLevel={item <= passLevel} fillByShortPass={isPassTooShort}
					/>
				))}
			</IndicatorsContainer>
			<p>{descriptionPassStrenght()}</p>
		</Wrapper>
	)
}