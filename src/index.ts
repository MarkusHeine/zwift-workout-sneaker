import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {type ParsedWorkout} from './models/block.model';

const getData = async () => {
	const response = await fetch(
		'https://whatsonzwift.com/workouts/garmin-unbound-gravel-training-plan',
	);
	const body = await response.text();
	const $ = cheerio.load(body);

	const $workout = $('.workout');

	const workoutMap: ParsedWorkout[] = []

	$workout.each((index, element) => {
		const $element = $(element);

		const parsedWorkout: ParsedWorkout = {
			title: 'no title',
			rawBlocks: [],
		};

		parsedWorkout.title = $element.attr('id')?.replace(/([ _]{2,}|-+)/g, ' ') ?? 'no title';

		const workoutList = $element.find('.workoutlist');

		workoutList.children().each((index, element) => {
			const $element = $(element);

			if ($element.attr('type') === 'button') {
				return;
			}

			parsedWorkout.rawBlocks.push($element.text());
		});

		workoutMap.push(parsedWorkout);
	});

	console.log('workoutMap:', workoutMap)
};

(async () => {
	await getData();
})();
