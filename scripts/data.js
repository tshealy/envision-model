// temporary spot for parse stuff . .
var Student = Parse.Object.extend("Student");


$(document).ready(function() {
	getCache()
})

function getCache() {
	envision = JSON.parse(sessionStorage.getItem('envision'));

	if (envision === null) {

		envision = {};

		envision.quality = {
			questions: [
				{
					number: 'QL1.1',
					synopsis: 'Improve community quality of life.',
					body: 'Improve the net quality of life of all communities affected by the project and mitigate negative impacts to communities.',
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
					valueAdded: [
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
		}

		envision.natural = {
			questions: [
				{
					number: 'NW1.1',
					synopsis: 'Preserve prime habitat.',
					body: 'Avoid placing the project – and the site compound/temporary works – on land that has been identified as of high ecological value or as having species of high value.',
					valueAdded: [
						{
							level: 'Superior',
							val: 9
						},
						{
							level: 'Conserving',
							val: 14
						},
						{
							level: 'Restorative',
							val: 18
						}
					]
				},
				{
					number: 'NW1.2',
					synopsis: 'Protect wetlands and surface water.',
					body: 'Protect, buffer, enhance and restore areas designated as wetlands, shorelines, and waterbodies by providing natural buffer zones, vegetation and soil protection zones.',
					valueAdded: [
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
							val: 9
						},
						{
							level: 'Conserving',
							val: 14
						},
						{
							level: 'Restorative',
							val: 18
						}
					]
				},
				{
					number: 'NW1.3',
					synopsis: 'Preserve prime farmland.',
					body: 'Identify and protect soils designated as prime farmland, unique farmland, or farmland of statewide importance.',
					valueAdded: [
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
					number: 'NW1.4',
					synopsis: 'Avoid adverse geology.',
					body: 'Avoid development in adverse geologic formations and safeguard aquifers to reduce natural hazards risk and preserve high quality groundwater resources.',
					valueAdded: [
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
							val: 3
						},
						{
							level: 'Conserving',
							val: 5
						}
					]
				},
				{
					number: 'NW1.5',
					synopsis: 'Preserve floodplain functions.',
					body: 'Preserve floodplain functions by limiting development and development impacts to maintain water management capacities and capabilities.',
					valueAdded: [
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
							val: 8
						},
						{
							level: 'Conserving',
							val: 14
						}
					]
				},
				{
					number: 'NW1.6',
					synopsis: 'Avoid unsuitable development on steep slopes.',
					body: 'Protect steep slopes and hillsides from inappropriate and unsuitable development in order to avoid exposures and risks from erosion and landslides, and other natural hazards.',
					valueAdded: [
						{
							level: 'Improved',
							val: 1
						},
						{
							level: 'Superior',
							val: 4
						},
						{
							level: 'Conserving',
							val: 6
						}
					]
				},
				{
					number: 'NW1.7',
					synopsis: 'Preserve greenfields.',
					body: 'Conserve undeveloped land by locating projects on previously developed greyfield sites and/or sites classified as brownfields.',
					valueAdded: [
						{
							level: 'Improved',
							val: 3
						},
						{
							level: 'Enhanced',
							val: 6
						},
						{
							level: 'Superior',
							val: 10
						},
						{
							level: 'Conserving',
							val: 15
						},
						{
							level: 'Restorative',
							val: 23
						}
					]
				},
				{
					number: 'NW2.1',
					synopsis: 'Manage stormwater.',
					body: 'Minimize the impact of infrastructure on stormwater runoff quantity and quality.',
					valueAdded: [
						{
							level: 'Enhanced',
							val: 4
						},
						{
							level: 'Superior',
							val: 9
						},
						{
							level: 'Conserving',
							val: 17
						},
						{
							level: 'Restorative',
							val: 21
						}
					]
				},
				{
					number: 'NW2.2',
					synopsis: 'Reduce pesticide and fertilizer impacts.',
					body: 'Reduce non-point source pollution by reducing the quantity, toxicity, bioavailability and persistence of pesticides and fertilizers, or by eliminating the need for the use of these materials.',
					valueAdded: [
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
							val: 9
						}
					]
				},
				{
					number: 'NW2.3',
					synopsis: 'Prevent surface and groundwater contamination.',
					body: 'Preserve fresh water resources by incorporating measures to prevent pollutants from contaminating surface and groundwater and monitor impacts over operations.',
					valueAdded: [
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
							val: 9
						},
						{
							level: 'Conserving',
							val: 14
						},
						{
							level: 'Restorative',
							val: 18
						}
					]
				},
				{
					number: 'NW3.1',
					synopsis: 'Preserve species biodiversity.',
					body: 'Protect biodiversity by preserving and restoring species and habitats.',
					valueAdded: [
						{
							level: 'Improved',
							val: 2
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
					number: 'NW3.2',
					synopsis: 'Control invasive species.',
					body: 'Use appropriate non-invasive species and control or eliminate existing invasive species.',
					valueAdded: [
						{
							level: 'Superior',
							val: 5
						},
						{
							level: 'Conserving',
							val: 9
						},
						{
							level: 'Restorative',
							val: 11
						}
					]
				},
				{
					number: 'NW3.3',
					synopsis: 'Restore disturbed soils.',
					body: 'Restore soils disturbed during construction and previous development to bring back ecological and hydrological functions.',
					valueAdded: [
						{
							level: 'Conserving',
							val: 8
						},
						{
							level: 'Restorative',
							val: 10
						}
					]
				},
				{
					number: 'NW3.4',
					synopsis: 'Maintain wetland and surface water functions.',
					body: 'Maintain and restore the ecosystem functions of streams, wetlands, waterbodies and their riparian areas.',
					valueAdded: [
						{
							level: 'Improved',
							val: 3
						},
						{
							level: 'Enhanced',
							val: 6
						},
						{
							level: 'Superior',
							val: 9
						},
						{
							level: 'Conserving',
							val: 15
						},
						{
							level: 'Restorative',
							val: 19
						}
					]
				}
			]
		}

		// true for Conserving default
		envision.conserving = true;

		envision.totalScore = envision.conserving === true ? conservingTotalScore(envision.quality.questions.concat(envision.natural.questions)) : 0;

		envision.quality.DOM = {
			applicable: makeArray(envision.quality.questions.length, 0),
			valueAdded: envision.conserving === true ? [4,4,4,2,2,4,4,4,3,3,4,4] : makeArray(envision.quality.questions.length, 0)
		}

		envision.natural.DOM = {
			applicable: makeArray(envision.natural.questions.length, 0),
			valueAdded: envision.conserving === true ? [2,4,2,4,4,3,4,3,4,4,2,2,1,4] : makeArray(envision.natural.questions.length, 0)
		}

		// set explanation
		envision.quality.explanations = makeArray(envision.quality.questions.length, '');
		envision.natural.explanations = makeArray(envision.natural.questions.length, '');

		// set score
		envision.quality.scores = makeArray(envision.quality.questions.length, 0);
		envision.natural.scores = makeArray(envision.natural.questions.length, 0);

		// set question max points
		determineMaxPoints(envision.quality.questions.concat(envision.natural.questions))

		// create select drop down data
		processSelectOptions(envision.quality.questions.concat(envision.natural.questions))

		// envision total posible points
		envision.maxScore = maxScore(envision.quality.questions.concat(envision.natural.questions))

		// get details for links
		envision.details = details();

		// stores envision
		sessionStorage.setItem('envision', JSON.stringify(envision));
		
	}
}

function makeArray(length, item) {
	var array = [];
	for (var i = 0; i < length; i++) {
		array.push(item)
	}
	return array.slice()
}

// sets maxPoints each question based on return value of maxPoints function. also side-effectively sets envisions maxScore.
function determineMaxPoints(questions) {
	_.each(questions, function(question, index) {
		question.maxPoints = _.first(maxPoints(question.valueAdded)).val
	})
}

// sorts vals to find greatest
function maxPoints(valueAdded) {
	return valueAdded.sort(function(a, b) {
		return b.val - a.val;
	})
}

function maxScore(questions) {
	var maxScore = 0;

	_.each(questions, function(question, index) {
		maxScore += question.maxPoints;
	})

	$('#max-score').text(maxScore)

	return maxScore;
}

// takes valueAdded array of each question and generates option tags with correct values
function processSelectOptions(questions) {
	_.each(questions, function(question) {
		question.selectOptions = _.map(question.valueAdded, function(val) {
			var option = envision.conserving === true ? "<option value=" + val.val + ">" + val.level + " (" + relate(question, val.val) + ")</option>" : "<option value='" + val.val + "'>" + val.level + " (+" + val.val + ")</option>";
			return option;
		}).reverse().join('')
		question.selectOptions = envision.conserving === true ? "<option class='no-value' value='0'>No Value Added (" + relate(question, 0) + ")</option>" + question.selectOptions : "<option class='no-value' value='0'>No Value Added (0)</option>" + question.selectOptions;
	})
}

// relate vals for default Conservative
function relate(question, val) {
	var conservativeVal = _.findWhere(question.valueAdded, {level: 'Conserving'}).val

	if (val === conservativeVal) {
		return val;
	}
	if (val < conservativeVal) {
		return '-' + (conservativeVal - val).toString();
	}
	return '+' + (question.maxPoints - conservativeVal).toString();
}

function conservingTotalScore(questions) {
	return _.reduce(_.map(questions, function(question) {
		return _.findWhere(question.valueAdded, {level: 'Conserving'}).val
	}), function(memo, num) {return memo + num})
}

function findQuestion(questions, number) {
	return _.findWhere(questions, {number: number})
}

function findValue(questions, number, level) {
	return _.findWhere(findQuestion(questions, number).valueAdded, {level: level}).val
}

function details() {
	return [
		{
			number: 'QL1.1',
			synopsis: findQuestion(envision.quality.questions, 'QL1.1').synopsis,
			intent: 'Improve the net quality of life of all communities affected by the project and mitigate negative impacts to communities.',
			metric: 'Measures taken to assess community needs and improve quality of life while minimizing negative impacts.',
			improved: {
				points: envision.conserving === true ? relate(findQuestion(envision.quality.questions, 'QL1.1'), findValue(envision.quality.questions, 'QL1.1', 'Improved')) : findValue(envision.quality.questions, 'QL1.1', 'Improved'),
				synopsis: 'Internal focus.',
				copy: 'The project team has located and reviewed the most recent and relevant community planning information. Some, but not systematic outreach to stakeholders and decision makers has taken place. Some relatively easy, but not particularly important or meaningful changes made to the project. No significant adverse community effects are caused by the project (A, B, C)'
			},
			enhanced: {
				points: envision.conserving === true ? relate(findQuestion(envision.quality.questions, 'QL1.1'), findValue(envision.quality.questions, 'QL1.1', 'Enhanced')) : findValue(envision.quality.questions, 'QL1.1', 'Enhanced'),
				synopsis: 'Community linkages.',
				copy: 'More substantive efforts to locate, review, assess and incorporate the needs, goals and plans of the host community into the project. Most potential negative adverse impacts of the project on the host community are reduced or eliminated. Key stakeholders are involved the project decision-making process. (A, B, C)'
			},
			superior: {
				points: envision.conserving === true ? relate(findQuestion(envision.quality.questions, 'QL1.1'), findValue(envision.quality.questions, 'QL1.1', 'Superior')) : findValue(envision.quality.questions, 'QL1.1', 'Superior'),
				synopsis: 'Broad community alignment.',
				copy: 'All relevant community plans are reviewed and verified through stakeholder input. The project team works to achieve good project alignment with community plans, recognizing that the scope of the project is a limiting factor. Potential negative impacts on nearby affected communities are reduced or eliminated. (A, B, C)'
			},
			conserving: {
				points: envision.conserving === true ? relate(findQuestion(envision.quality.questions, 'QL1.1'), findValue(envision.quality.questions, 'QL1.1', 'Conserving')) : findValue(envision.quality.questions, 'QL1.1', 'Conserving'),
				synopsis: 'Holistic assessment and collaboration.',
				copy: 'The project makes a net positive contribution to the quality of life of the host and nearby affected communities. The project team makes a holistic assessment of community needs, goals and plans, incorporating meaningful stakeholder input. Project meets or exceeds important identified community needs and long-term requirements for sustainability. Remaining adverse impacts are minimal, mostly accepted as reasonable tradeoffs for benefits achieved. The project has broad community endorsement. (A, B, C)'
			},
			restorative: {
				points: envision.conserving === true ? relate(findQuestion(envision.quality.questions, 'QL1.1'), findValue(envision.quality.questions, 'QL1.1', 'Restorative')) : findValue(envision.quality.questions, 'QL1.1', 'Restorative'),
				synopsis: 'Community renaissance.',
				copy: 'Through rehabilitation of important community assets, upgraded and extended access, increased safety, improved environmental quality and additional infrastructure capacity, the project substantially reinvigorates the host and nearby communities. Working in genuine collaboration with stakeholders and community decision-makers, the project owner and the project team scope the project in a way that elevates community awareness and pride. Overall quality of life in these communities is markedly elevated. (A, B, C, D)'
			},
			description: [
				"This credit addresses the extent to which the project contributes to the quality of life of the host community: the community in which the constructed works is situated and directly affects. This determination is based on how well the project team has identified and assessed community needs, goals and objectives, and incorporated them into the project. Relevant community plans are assumed to be a viable expression of those needs, goals, objectives and aspirations. In a real sense, they are the community's expression of their desired quality of life.",
				"Communication and interactions with community stakeholders is essential to reaffirm and improve the assessment. The project team works closely with community stakeholders to identify and address issues and concerns. When operational, the constructed works is expected to contribute to the efficiency and effectiveness of community infrastructure, while having minimal impact on the environment. Its benefits should be seen as equitably distributed throughout the community.",
				"A project designed to benefit one community may have adverse effects on others. The purpose of this credit is to recognize projects that provide significant benefits to affected communities, as well as reduce or eliminate negative impacts. Positive effects on all important dimensions of performance may not be practical. Thus the credit seeks a net positive impact.",
				"If the project team can show that the affected community (or communities) has an existing project assessment and approval process that verifies that the project is in concert with community goals and objectives, and that the project has gone through that process successfully, then that success will constitute achievement of this credit. The level of achievement will be determined by the Assessor and Verifier, and is a function of the comprehensiveness of the process, the extent to which community stakeholders are engaged in collaborative dialogue (rather than merely outside input to the process), and the degree to which improvements were made and/or adverse impacts mitigated."
			],
			benchmark: "The project team may have located and reviewed community plans, looking for possible project fatal flaws. The team complies with local regulations and policies for stakeholder involvement.",
			perfImprove: "Give increased attention to community needs, goals, plans and their relation to the project. Increase the thoroughness and participatory engagement by which community goals and plans are incorporated into the project. Give additional consideration to existing conditions and look for opportunities to rehabilitate community assets. Achieve strong endorsement by stakeholders and community leaders.",
			list: [
				{
					letter: 'Has the project team identified and taken into account community needs, goals, plans and issues?',
					nums: [
						'Lists and examples of documents obtained and reviewed, minutes of meetings with key stakeholders, community leaders and decision-makers, letters and memoranda.',
					]
				},
				{
					letter: 'Has the project team sought to align the project vision and goals to the needs and goals of the host and affected communities as well as address potential adverse impacts?',
					nums: [
						'Comprehensive impact assessments conducted, identifying and evaluating the positive and negative impacts of the project on affected communities. Planned actions for mitigating adverse impacts.',
						'Minutes of meetings, letters and memoranda with key stakeholders, community leaders and decision-makers for obtaining input and agreement regarding the impact assessment and planned actions.',
					]
				},
				{
					letter: 'To what extent has the affected communities been meaningfully engaged in the project design process?',
					nums: [
						'Reports and documented results of meetings, design charrettes and other activities conducted with representatives of affected communities.',
						'Evidence of project processes for collecting, evaluating and incorporating community input into the project designs. Demonstration of the thoroughness of the evaluation and incorporation into the designs.',
						'Evidence showing the extent to which options were identified, and needed and reasonable changes to project were made in accordance with community needs, plans.',
						'Acknowledgments and endorsements by the community that the design participation process was helpful and that their input was appropriately assessed and incorporated into the project design.'
					]
				},
				{
					letter: 'Has the project owner and the project team designed the project in a way that improves existing community conditions and rehabilitates infrastructure assets?',
					nums: [
						'Plans, designs, meeting minutes with community stakeholders and decision-makers demonstrating an understanding of community conditions and assets, and substantive efforts to rehabilitate.',
						'Evidence of community satisfaction and endorsement of plans.'
					]
				}
			]
		}
	]
}









