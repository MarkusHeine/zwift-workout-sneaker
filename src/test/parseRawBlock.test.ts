import {expect} from 'chai';
import {BlockType} from '../models/block.model';
import {parseRawBlock} from '../parseWorkout/parseWorkout';

const failingBlock = 'this should fail'

const testBlocks = [
	{
		rawBlock: '1hr 30min free ride',
		type: BlockType.FREE_RIDE,
		repeat: 1,
	},
	{
		rawBlock: '5min @ 85rpm, from 30 to 50% FTP',
		type: BlockType.RAMP_UP,
		repeat: 1,
	},
	{
		rawBlock: '234min @ 85rpm, from 50 to 30% FTP',
		type: BlockType.RAMP_DOWN,
		repeat: 1,
	},
	{
		rawBlock: '10min @ 90rpm, 65% FTP',
		type: BlockType.TARGET,
		repeat: 1,
	},
	{
		rawBlock: '9x 3min 30sec @ 90rpm, 70% FTP,1min 30sec @ 65rpm, 120% FTP',
		type: BlockType.INTERVAL,
		repeat: 9,
	},
];

describe('ParseRawBlock', () => {
	it('function should exist', () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		expect(parseRawBlock).to.exist;
	});

	it('should throw an error if rawBlock is not a string', () => {
		// @ts-expect-error-not-assignable
		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
		expect(() => parseRawBlock(123)).to.throw('rawBlock must be a string');
		// @ts-expect-error-not-assignable
		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
		expect(() => parseRawBlock({})).to.throw('rawBlock must be a string');
		// @ts-expect-error-not-assignable
		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
		expect(() => parseRawBlock([])).to.throw('rawBlock must be a string');
		// @ts-expect-error-not-assignable
		// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
		expect(() => parseRawBlock(true)).to.throw('rawBlock must be a string');
	});

	it('should throw an error if rawBlock cannot be parsed', () => {
		expect(() => parseRawBlock(failingBlock)).to.throw(`rawBlock with string "${failingBlock}" cannot be parsed`);
	});

	it('should return an object', () => {
		testBlocks.forEach(block => {
			const response = parseRawBlock(block.rawBlock);
			expect(response).to.be.an('object');
		});
	});

	testBlocks.forEach(block => {
		it(`should have the type ${block.type} for the string ${block.rawBlock}`, () => {
			const response = parseRawBlock(block.rawBlock);
			expect(response.type).to.equal(block.type);
			expect(response.repeat).to.be.equal(block.repeat);
		});
	});
});
