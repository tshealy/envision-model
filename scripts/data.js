var envision = {};

envision.questions = [
	{
		number: 'QL1.1',
		synopsis: 'Improve community quality of life.',
		body: 'Improve the net quality of life of all communities affected by the project and mitigate negative impacts to communities.',
		addedValue: [
			{
				level: 'Improved',
				val: 2
			},
			{
				level: 'Enhanced',
				val: 5
			},
			{
				level: 'Superior',
				val: 10
			},
			{
				level: 'Conserving',
				val: 20
			},
			{
				level: 'Restorative',
				val: 25
			}
		]
	},
	{
		number: 'QL1.2',
		synopsis: 'Stimulate sustainable growth and development.',
		body: 'Support and stimulate sustainable growth and development, including improvements in job growth, capacity building, productivity, business attractiveness and livability.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Enhanced',
				val: 2
			},
			{
				level: 'Superior',
				val: 5
			},
			{
				level: 'Conserving',
				val: 13
			},
			{
				level: 'Restorative',
				val: 16
			}
		]
	},
	{
		number: 'QL1.3',
		synopsis: 'Develop local skills and capabilities.',
		body: 'Expand the knowledge, skills and capacity of the community workforce to improve their ability to grow and develop.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Enhanced',
				val: 2
			},
			{
				level: 'Superior',
				val: 5
			},
			{
				level: 'Conserving',
				val: 12
			},
			{
				level: 'Restorative',
				val: 15
			}
		]
	},
	{
		number: 'QL2.1',
		synopsis: 'Enhance public health and safety.',
		body: 'Take into account the health and safety implications of using new materials, technologies or methodologies above and beyond meeting regulatory requirements.',
		addedValue: [
			{
				level: 'Improved',
				val: 2
			},
			{
				level: 'Conserving',
				val: 16
			}
		]
	},
	{
		number: 'QL2.2',
		synopsis: 'Minimize noise and vibration.',
		body: 'Minimize noise and vibration generated during construction and in the operation of the constructed works to maintain and improve community livability.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Conserving',
				val: 8
			},
			{
				level: 'Restorative',
				val: 11
			}
		]
	},
	{
		number: 'QL2.3',
		synopsis: 'Minimize light pollution.',
		body: 'Prevent excessive glare, light at night, and light directed skyward to conserve energy and reduce obtrusive lighting and excessive glare.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Enhanced',
				val: 2
			},
			{
				level: 'Superior',
				val: 4
			},
			{
				level: 'Conserving',
				val: 8
			},
			{
				level: 'Restorative',
				val: 11
			}
		]
	},
	{
		number: 'QL2.4',
		synopsis: 'Improve community mobility and access.',
		body: 'Locate, design and construct the project in a way that eases traffic congestion, improves mobility and access, does not promote urban sprawl, and otherwise improves community livability.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Enhanced',
				val: 4
			},
			{
				level: 'Superior',
				val: 7
			},
			{
				level: 'Conserving',
				val: 14
			}
		]
	},
	{
		number: 'QL2.5',
		synopsis: 'Encourage alternative modes of transportation.',
		body: 'Improve accessibility to non-motorized transportation and public transit. Promote alternative transportation and reduce congestion.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Enhanced',
				val: 3
			},
			{
				level: 'Superior',
				val: 6
			},
			{
				level: 'Conserving',
				val: 12
			},
			{
				level: 'Restorative',
				val: 15
			}
		]
	},
	{
		number: 'QL2.6',
		synopsis: 'Improve site accessibility, safety and wayfinding.',
		body: 'Improve user accessibility, safety, and wayfinding of the site and surrounding areas.',
		addedValue: [
			{
				level: 'Enhanced',
				val: 3
			},
			{
				level: 'Superior',
				val: 6
			},
			{
				level: 'Conserving',
				val: 12
			},
			{
				level: 'Restorative',
				val: 15
			}
		]
	},
	{
		number: 'QL3.1',
		synopsis: 'Preserve historic and cultural resources.',
		body: 'Preserve or restore significant historical and cultural sites and related resources to preserve and enhance community cultural resources.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Superior',
				val: 7
			},
			{
				level: 'Conserving',
				val: 13
			},
			{
				level: 'Restorative',
				val: 16
			}
		]
	},
	{
		number: 'QL3.2',
		synopsis: 'Preserve views and local character.',
		body: 'Design the project in a way that maintains the local character of the community and does not have negative impacts on community views.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Enhanced',
				val: 3
			},
			{
				level: 'Superior',
				val: 6
			},
			{
				level: 'Conserving',
				val: 11
			},
			{
				level: 'Restorative',
				val: 14
			}
		]
	},
	{
		number: 'QL3.3',
		synopsis: 'Enhance public space.',
		body: 'Improve existing public space including parks, plazas, recreational facilities, or wildlife refuges to enhance community livability.',
		addedValue: [
			{
				level: 'Improved',
				val: 1
			},
			{
				level: 'Enhanced',
				val: 3
			},
			{
				level: 'Superior',
				val: 6
			},
			{
				level: 'Conserving',
				val: 11
			},
			{
				level: 'Restorative',
				val: 13
			}
		]
	},
]

envision.template = _.template($('#question').text())
envision.totalScore = 0;

