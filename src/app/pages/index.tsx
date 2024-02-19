'use client';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { useEffect, useState } from 'react';
import { useGamepads } from 'react-gamepads';

export default function Home() {
	const [gamepads, setGamepads] = useState<any>({});
	useGamepads((controller: any) => {
		setGamepads(controller);
	});
	const [counterOne, setCounterOne] = useState<number>(0);
	const [counterTwo, setCounterTwo] = useState<number>(0);
	const [counterThree, setCounterThree] = useState<number>(0);
	const [counterFour, setCounterFour] = useState<number>(0);
	const [counterFive, setCounterFive] = useState<number>(0);
	const [counterSix, setCounterSix] = useState<number>(0);
	const [counterSeven, setCounterSeven] = useState<number>(0);
	const [counterEight, setCounterEight] = useState<number>(0);
	const [counterNine, setCounterNine] = useState<number>(0);
	const [counterTen, setCounterTen] = useState<number>(0);

	useEffect(() => {
		if (gamepads && gamepads[0]) {
			if (gamepads[0].buttons[0].pressed) {
				setCounterOne(counterOne + 1);
			}
			if (gamepads[0].buttons[1].pressed) {
				setCounterTwo(counterTwo + 1);
			}
			if (gamepads[0].buttons[2].pressed) {
				setCounterThree(counterThree + 1);
			}
			if (gamepads[0].buttons[3].pressed) {
				setCounterFour(counterFour + 1);
			}
			if (gamepads[0].buttons[4].pressed) {
				setCounterFive(counterFive + 1);
			}
			if (gamepads[0].buttons[5].pressed) {
				setCounterSix(counterSix + 1);
			}
			if (gamepads[0].buttons[6].pressed) {
				setCounterSeven(counterSeven + 1);
			}
			if (gamepads[0].buttons[7].pressed) {
				setCounterEight(counterEight + 1);
			}
			if (gamepads[0].buttons[8].pressed) {
				setCounterNine(counterNine + 1);
			}
			if (gamepads[0].buttons[9].pressed) {
				setCounterTen(counterTen + 1);
			}
		}
	}, [gamepads && gamepads[0]]);

	const button0 =
		gamepads && gamepads[0] && gamepads[0].buttons[0].pressed
			? 'True'
			: 'False';
	const button1 =
		gamepads && gamepads[0] && gamepads[0].buttons[1].pressed
			? 'True'
			: 'False';
	const button2 =
		gamepads && gamepads[0] && gamepads[0].buttons[2].pressed
			? 'True'
			: 'False';
	const button3 =
		gamepads && gamepads[0] && gamepads[0].buttons[3].pressed
			? 'True'
			: 'False';
	const button4 =
		gamepads && gamepads[0] && gamepads[0].buttons[4].pressed
			? 'True'
			: 'False';
	const button5 =
		gamepads && gamepads[0] && gamepads[0].buttons[5].pressed
			? 'True'
			: 'False';
	const button6 =
		gamepads && gamepads[0] && gamepads[0].buttons[6].pressed
			? 'True'
			: 'False';
	const button7 =
		gamepads && gamepads[0] && gamepads[0].buttons[7].pressed
			? 'True'
			: 'False';
	const button8 =
		gamepads && gamepads[0] && gamepads[0].buttons[8].pressed
			? 'True'
			: 'False';
	const button9 =
		gamepads && gamepads[0] && gamepads[0].buttons[9].pressed
			? 'True'
			: 'False';

	const gamePadCounter = [
		{
			gamepadButton: 'X ou A',
			pressures: button0,
			count: counterOne,
		},
		{
			gamepadButton: 'Bola ou B',
			pressures: button1,
			count: counterTwo,
		},
		{
			gamepadButton: 'Quadrado ou X',
			pressures: button2,
			count: counterThree,
		},
		{
			gamepadButton: 'Triangulo ou Y',
			pressures: button3,
			count: counterFour,
		},
		{
			gamepadButton: 'L1 ou LB',
			pressures: button4,
			count: counterFive,
		},
		{
			gamepadButton: 'R1 ou RB',
			pressures: button5,
			count: counterSix,
		},
		{
			gamepadButton: 'L2 ou LT',
			pressures: button6,
			count: counterSeven,
		},
		{
			gamepadButton: 'R2 ou RT',
			pressures: button7,
			count: counterEight,
		},
		{
			gamepadButton: 'SELECT',
			pressures: button8,
			count: counterNine,
		},
		{
			gamepadButton: 'START',
			pressures: button9,
			count: counterTen,
		},
	];

	return (
		<div>
			<Card className="w-[800px]">
				<CardHeader>
					<CardTitle>
						GamePad:{' '}
						{gamepads && gamepads[0] && gamepads[0].connected
							? 'True'
							: 'False'}
					</CardTitle>
					<CardDescription>
						{gamepads && gamepads[0] && gamepads[0].id
							? gamepads[0].id
							: ''}
					</CardDescription>
				</CardHeader>
				<CardContent>
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead className="w-[300px]">
									Mapeamento - PlayStation ou Xbox
								</TableHead>
								<TableHead>Pressionado</TableHead>
								<TableHead>Contador ao Pressionar</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{gamePadCounter.map((gamePadCounter) => (
								<TableRow key={gamePadCounter.gamepadButton}>
									<TableCell className=" text-center">
										{gamePadCounter.gamepadButton}
									</TableCell>
									<TableCell>
										{gamePadCounter.pressures}
									</TableCell>
									<TableCell>
										{gamePadCounter.count}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</CardContent>
			</Card>
		</div>
	);
}
