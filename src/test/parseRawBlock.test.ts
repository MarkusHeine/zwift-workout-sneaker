import {expect} from 'chai';
import { BlockType } from '../models/block.model';
import { parseRawBlock } from '../parseWorkout/parseWorkout';

const freeRideString = '1hr 30min free ride';
const rampUpString = '5min @ 85rpm, from 30 to 50% FTP';
const rampDownString = '234min @ 85rpm, from 50 to 30% FTP';
const targetString = '10min @ 90rpm, 65% FTP';
const interValString = '9x 3min 30sec @ 90rpm, 70% FTP,1min 30sec @ 65rpm, 120% FTP';

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

	it('should return an object', () => {
		const rampUpReturn = parseRawBlock(rampUpString);
		expect(rampUpReturn).to.be.an('object');

		const rampDownReturn = parseRawBlock(rampDownString);
		expect(rampDownReturn).to.be.an('object');

		const targetReturn = parseRawBlock(targetString);
		expect(targetReturn).to.be.an('object');

		const freeRideReturn = parseRawBlock(freeRideString);
		expect(freeRideReturn).to.be.an('object');

		const interValReturn = parseRawBlock(interValString);
		expect(interValReturn).to.be.an('object');
	});

	it(`should have the type ${BlockType.FREE_RIDE} for the string ${freeRideString}`, () => {
		const response = parseRawBlock(freeRideString);
		expect(response.type).to.equal(BlockType.FREE_RIDE);
	});

	it(`should have the type ${BlockType.RAMP_UP} for the string ${rampUpString}`, () => {
		const response = parseRawBlock(rampUpString);
		expect(response.type).to.equal(BlockType.RAMP_UP);
	});

	it(`should have the type ${BlockType.RAMP_DOWN} for the string ${rampDownString}`, () => {
		const response = parseRawBlock(rampDownString);
		expect(response.type).to.equal(BlockType.RAMP_DOWN);
	});

	it(`should have the type ${BlockType.TARGET} for the string ${targetString}`, () => {
		const response = parseRawBlock(targetString);
		expect(response.type).to.equal(BlockType.TARGET);
	});

	it(`should have the type ${BlockType.INTERVAL} for the string ${interValString}`, () => {
		const response = parseRawBlock(interValString);
		expect(response.type).to.equal(BlockType.INTERVAL);
	});
});
