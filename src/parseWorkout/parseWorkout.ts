import {BlockType, type Block, type ParsedWorkout} from '../models/block.model';

export const parsedWorkout = (parsedWorkout: ParsedWorkout[]): any[] => [];

export const parseRawBlock = (rawBlock: string): Block => {
	if (typeof rawBlock !== 'string') {
		throw new Error('rawBlock must be a string');
	}

	const parsedBlock: Block = {
		type: undefined,
	};

	if (rawBlock.includes('free ride')) {
		parsedBlock.type = BlockType.FREE_RIDE;
		return parsedBlock;
	}

	if (/^\d+min @ \d+rpm, from \d+ to \d+% FTP$/i.exec(rawBlock)) {
		const [,, rpm, , firstPercentage, , secondPercentage] = rawBlock.split(' ');

		const parsedRpm = parseFloat(rpm);
		const parsedFirstPercentage = parseFloat(firstPercentage);
		const parsedSecondPercentage = parseFloat(secondPercentage);

		if (parsedFirstPercentage < parsedSecondPercentage) {
			parsedBlock.type = BlockType.RAMP_UP;
		}

		if (parsedFirstPercentage > parsedSecondPercentage) {
			parsedBlock.type = BlockType.RAMP_DOWN;
		}

		return parsedBlock;
	}

	if (/^\d+min @ \d+rpm, \d+% FTP$/.exec(rawBlock)) {
		parsedBlock.type = BlockType.TARGET;
		return parsedBlock;
	}

	if (/^\d+x \d+min \d+sec @ \d+rpm, \d+% FTP,\d+min \d+sec @ \d+rpm, \d+% FTP$/i.exec(rawBlock)) {
		parsedBlock.type = BlockType.INTERVAL;
		return parsedBlock;
	}

	throw new Error(`rawBlock with string "${rawBlock}" cannot be parsed`);
};
