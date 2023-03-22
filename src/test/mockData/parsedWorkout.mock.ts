import { type ParsedWorkout } from '../../models/block.model';

export const parsedWorkoutMock: ParsedWorkout[] = [
	{
		title: 'week 1 kansas cadence work',
		rawBlocks: [
			'5min @ 85rpm, from 30 to 50% FTP',
			'10min @ 90rpm, 65% FTP',
			'10min @ 75rpm, 75% FTP',
			'10min @ 90rpm, 65% FTP',
			'10min @ 75rpm, 75% FTP',
			'10min @ 90rpm, 75% FTP',
			'3min from 50 to 30% FTP',
		],
	},
	{
		title: 'week 1 the long ride 15 hours',
		rawBlocks: ['1hr 30min free ride'],
	},
	{
		title: 'week 2 lake kahola cadence work',
		rawBlocks: [
			'10min @ 85rpm, from 50 to 80% FTP',
			'2min @ 50% FTP',
			'9x 3min 30sec @ 90rpm, 70% FTP,1min 30sec @ 65rpm, 85% FTP',
			'3min from 55 to 35% FTP',
		],
	},
	{
		title: 'week 7 pulverize the prairie',
		rawBlocks: [
			'7min from 45 to 75% FTP',
			'3min @ 95% FTP',
			'5min @ 50% FTP',
			'20sec @ 150% FTP',
			'20sec @ 50% FTP',
			'5min @ 75rpm, from 90 to 104% FTP',
			'5min @ 50% FTP',
			'30sec @ 140% FTP',
			'30sec @ 50% FTP',
			'5min @ 80rpm, from 90 to 104% FTP',
			'5min @ 50% FTP',
			'1min @ 130% FTP',
			'1min @ 50% FTP',
			'5min @ 85rpm, from 90 to 104% FTP',
			'5min @ 50% FTP',
			'5min @ 95% FTP',
			'3min from 50 to 30% FTP',
		],
	},
];
