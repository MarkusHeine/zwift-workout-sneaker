import {expect} from 'chai';
import { parsedWorkout } from '../parseWorkout/parseWorkout';
import { parsedWorkoutMock} from './mockData/parsedWorkout.mock';


describe('ParsedWorkout', () => {
	it('function should exist', () => {
		// eslint-disable-next-line @typescript-eslint/no-unused-expressions
		expect(parsedWorkout).to.exist;
	});

	it('should return an array', () => {
		expect(parsedWorkout(parsedWorkoutMock)).to.be.an('array');
	});
});