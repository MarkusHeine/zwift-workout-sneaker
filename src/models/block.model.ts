export enum BlockType {
	INTERVAL = 'INTERVAL',
	RAMP_UP = 'RAMP_UP',
	RAMP_DOWN = 'RAMP_DOWN',
	FREE_RIDE = 'FREE_RIDE',
	TARGET = 'TARGET',
}

export type Block = {
	type: BlockType | undefined;
};

type Duration = {
	duration: number;
};

type Active = {
	duration: Duration;
	ftp: number;
};

type Change = {
	duration: Duration;
	high: number;
	low: number;
};

type Interval = {
	duration: Duration;
	repeats: number;
	active: number;
	recovery: number;
};

export type ParsedWorkout = {
	title: string;
	rawBlocks: string[];
}