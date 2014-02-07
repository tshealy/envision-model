function details() {
	return [
		{
			number: 'QL1.1',
			synopsis: findQuestion(envision.quality.questions, 'QL1.1').synopsis,
			intent: 'Improve the net quality of life of all communities affected by the project and mitigate negative impacts to communities.',
			metric: 'Measures taken to assess community needs and improve quality of life while minimizing negative impacts.',
			improved: {
				points: detailsPoints('quality', 'QL1.1', 'Improved'),
				synopsis: 'Internal focus.',
				copy: 'The project team has located and reviewed the most recent and relevant community planning information. Some, but not systematic outreach to stakeholders and decision makers has taken place. Some relatively easy, but not particularly important or meaningful changes made to the project. No significant adverse community effects are caused by the project (A, B, C)'
			},
			enhanced: {
				points: detailsPoints('quality', 'QL1.1', 'Enhanced'),
				synopsis: 'Community linkages.',
				copy: 'More substantive efforts to locate, review, assess and incorporate the needs, goals and plans of the host community into the project. Most potential negative adverse impacts of the project on the host community are reduced or eliminated. Key stakeholders are involved the project decision-making process. (A, B, C)'
			},
			superior: {
				points: detailsPoints('quality', 'QL1.1', 'Superior'),
				synopsis: 'Broad community alignment.',
				copy: 'All relevant community plans are reviewed and verified through stakeholder input. The project team works to achieve good project alignment with community plans, recognizing that the scope of the project is a limiting factor. Potential negative impacts on nearby affected communities are reduced or eliminated. (A, B, C)'
			},
			conserving: {
				points: detailsPoints('quality', 'QL1.1', 'Conserving'),
				synopsis: 'Holistic assessment and collaboration.',
				copy: 'The project makes a net positive contribution to the quality of life of the host and nearby affected communities. The project team makes a holistic assessment of community needs, goals and plans, incorporating meaningful stakeholder input. Project meets or exceeds important identified community needs and long-term requirements for sustainability. Remaining adverse impacts are minimal, mostly accepted as reasonable tradeoffs for benefits achieved. The project has broad community endorsement. (A, B, C)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL1.1', 'Restorative'),
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
		},
		{
			number: 'QL1.2',
			synopsis: findQuestion(envision.quality.questions, 'QL1.2').synopsis,
			intent: 'Support and stimulate sustainable growth and development, including improvements in job growth, capacity building, productivity, business attractiveness and livability.',
			metric: 'Assessment of the project\'s impact on the community\'s sustainable economic growth and development.',
			improved: {
				points: detailsPoints('quality', 'QL1.2', 'Improved'),
				synopsis: 'Project only focus.',
				copy: 'Community growth and development is measurable but confined to the economic contribution of the delivery of a single project. The economics of the project are the only contribution to economic growth and development. That contribution consists primarily of jobs created during the design and construction. (A)'
			},
			enhanced: {
				points: detailsPoints('quality', 'QL1.2', 'Enhanced'),
				synopsis: 'Significant and desirable development.',
				copy: 'The project creates facilities and infrastructure that increase access to other facilities and infrastructure. The completed works contributes to community growth and development by adding a new operating capacity, or increase the quality of existing capacity. Capacity additions can apply to business and industry. They can also apply to the public in terms of cultural and recreational facilities and infrastructure. Jobs are created because of this development. (A, B)'
			},
			superior: {
				points: detailsPoints('quality', 'QL1.2', 'Superior'),
				synopsis: 'Improving local productivity.',
				copy: 'The additional access and increases in the number and quality of choices is sufficient to substantially increase local productivity. Need for repair or refurbishment of existing infrastructure is considered. Cost effective access to business and industry-related infrastructure increases productivity. The constructed works fosters an expansion of the local skill base. (A, B, C)'
			},
			conserving: {
				points: detailsPoints('quality', 'QL1.2', 'Conserving'),
				synopsis: 'Business and people attractiveness.',
				copy: 'The constructed works is designed to contribute substantially to community attractiveness for compatible businesses and industries by improving the overall business environment. This may include increased productivity, cost effective access to facilities and infrastructure, and enhanced cultural and recreational opportunities. People want to live and work in the community. (A, B, C, D)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL1.2', 'Restorative'),
				synopsis: 'Developmental rebirth.',
				copy: 'At the early development stages, the project owner and the project team work with the community to identify existing community assets in the natural or built environment which, if restored, would improve the economic growth and development capacity of the community. The constructed works improve attractiveness through restoration of existing infrastructure, including physical, knowledge and social assets. Adaptive to changing conditions. (A, B, C, D, E)'
			},
			description: [
				'This credit is designed to foster sustainable, long term sustainable economic growth and development for the community that is in concert with community goals. The overall objective is to create socio-economic vitality and prosperity.',
				'The goal of infrastructure projects is to contribute to the socio-economic vitality and attractiveness of the community for both work and life. Such a community attracts business and industry for its productivity and livability. People want to reside in the community because of opportunity, culture, recreation and security. Sustainable, long-term growth and development requires an ability to adapt to changing economic conditions and operating environment. Businesses want to relocate to the area because of the overall benefits and attractiveness.',
				'Sustainable economic growth and development is not synonymous with expansion. Because of economic downturns and changes in demographics, many communities are facing shrinking populations and an eroding tax base. As a consequence, growth per se is not a viable option. In fact, in these situations, it may be more desirable to reduce the quantity of unused and abandoned housing, commercial buildings and industrial facilities to reduce the associated infrastructure burden.',
				'For this credit, projects are recognized for their contribution to what is termed "sustainable community growth and development". This is growth and development that takes into account what is realistic and affordable, and sets the community on an efficient path for development and/or renewal. Communities are consolidated and reconfigured in ways that form the nucleus for redevelopment. Infrastructure projects must contribute to the overall community attractiveness for business and people. Existing infrastructure should be repaired, replaced and/or refurbished on a cost-effective schedule. A broad set of alternatives should be considered, covering business and industry, cultural and recreational elements.'
			],
			benchmark: 'The project is designed as an entity unto itself, simply meeting the planning and regulatory requirements. No overall assessment of its contribution to sustainable community growth and development is made.',
			perfImprove: 'Expand focus from a project-only look to community-wide considerations. Make growth and development business and people attractive through increased infrastructure efficiency and cultural/recreational resources. Seek to restore, redevelop and repurpose community assets.',
			list: [
				{
					letter: 'Does the project create a significant number of jobs during its design and construction?',
					nums: [
						'Analyses showing what jobs are reasonably created during the design and construction of the project.',
					]
				},
				{
					letter: 'Does the delivered works create new, or increase the quality of existing, operating, recreational or cultural capacity for business, industry, or the public?',
					nums: [
						'Report showing how the delivered works expands the capacity or increases the quality of operating, recreational or cultural capacity.',
						'Verification of the report results by references to official community plans, goals, needs assessments, minutes of meetings, or letters from community leaders, decision-makers.'
					]
				},
				{
					letter: 'Does the delivered works significantly improve community productivity?',
					nums: [
						'Analyses showing the effects of the delivered works on local productivity, e.g., reduced congestion, lower operating costs, increased operating capacity, increased efficiency, and new operating alternatives.'
					]
				},
				{
					letter: 'Does the project improve community attractiveness for compatible businesses and industries, improves recreational opportunities, and generally improves the economic and social condition of the community?',
					nums: [
						'Demonstration of how the project improves community attractiveness for compatible businesses and industries, improves recreational opportunities, and generally improves the economic and social conditions in the community.',
						'Evidence showing how the project will improve the overall business environment, e.g., increased productivity, improved access to facilities and infrastructure, increased alternative resources, facilities and infrastructure.',
						'Evidence of new employment opportunities that will be created and the skill base is expanded'
					]
				},
				{
					letter: 'As part of the delivery of the constructed works, does the project rehabilitate, restore, create or repurpose existing community infrastructure assets in the natural and/or built environment, and in doing so, improves community prospects for sustainable economic growth and development?',
					nums: [
						'Reports, minutes of meetings, memoranda documenting efforts by the project team to work with the community to identify community infrastructure assets, needs for improvement, prospects and plans for growth and development.',
						'Analyses showing how the project will improve community prospects for sustainable economic growth and development.'
					]
				},
			]
		},
		{
			number: 'QL1.3',
			synopsis: findQuestion(envision.quality.questions, 'QL1.3').synopsis,
			intent: 'Expand the knowledge, skills and capacity of the community workforce to improve their ability to grow and develop.',
			metric: 'The extent to which the project will improve local employment levels, skills mix and capabilities.',
			improved: {
				points: detailsPoints('quality', 'QL1.3', 'Improved'),
				synopsis: 'Cost efficient.',
				copy: 'The project team proposes significant efforts to hire and train local workers as needed, but mostly hiring specifications directed to the construction contractor. Programs have articulated goals to meet or exceed industry sector averages. Training is to be done on and as needed basis. Emphasis placed on hiring and training disadvantaged groups. (A)'
			},
			enhanced: {
				points: detailsPoints('quality', 'QL1.3', 'Enhanced'),
				synopsis: 'Hire locally.',
				copy: 'The project team lays out broader programs within the project to bring on local firms and workers at higher skill levels. Local hiring is to extend beyond specifications to the construction contractor and into the project design team. Training and education is still proposed to be on an as-needed basis. It is not designed to build significant local skills or capabilities. (A)'
			},
			superior: {
				points: detailsPoints('quality', 'QL1.3', 'Superior'),
				synopsis: 'Specific skills outreach.',
				copy: 'The project team has developed and committed to affirmative outreach plans and programs to identify and hire local firms and workers at a broad range of skill levels. Education in some specialty areas will be provided where required. The project team makes an assessment of those educational needs and establishes the requisite education programs. (A)'
			},
			conserving: {
				points: detailsPoints('quality', 'QL1.3', 'Conserving'),
				synopsis: 'Local capacity development.',
				copy: 'The project team commits to working with the community to assess local employment and educational needs. Specific commitments are made to establish programs to hire and train local workers with an emphasis on minorities and/or other disadvantaged groups. Plans and commitments for hiring, training and education are compared to community needs are proposed. (A)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL1.3', 'Restorative'),
				synopsis: 'Long-term competitiveness.',
				copy: 'The project team commits to working with the local community not only to assess local employment and educational needs, but also to address future community competitiveness. Working with community leaders, programs are established to identify educational and employment needs and shortfalls. The team then works with the community to improve and retrofit the local skill base, thereby improving long term competitiveness. (A, B)'
			},
			description: [
				'The intent of this credit is to address the degree to which the project improves both local employment and the skills mix during the project design and implementation phases. At one end of the achievement spectrum, the owner, designer and contractor commit to hire local workers, mostly in the construction phase. At the other end, commitments to local hiring are established in all three phases, resulting in a more skilled and competitive workforce. Training and education programs are established in the project delivery phases to strengthen the skills base, with an emphasis on minority and/or disadvantaged groups.'
			],
			benchmark: 'Hiring and training of local workers or firms is strictly a cost decision and is predominantly unskilled labor. Training is done as needed, or as required by regulations and standards.',
			perfImprove: 'Shift from hiring local workers as needed to capacity building. More consideration of local employment and education needs, long-term workforce competitiveness.',
			list: [
				{
					letter: 'What is the expected degree to which the project will contribute to local employment, training and education, with emphasis on the most needy and/or disadvantaged groups through project planning, design and construction?',
					nums: [
						'Explanation of how the project team identified community employment, training and worker education needs.',
						'Documentation of plans and commitments for hiring local workers and disadvantaged groups for the project.',
						'Documentation of the extent and skill level of work planned for local firms.',
						'Documentation of the proposed skill mix of local project hires in relation to overall project employment.',
						'Statement of the ratio of proposed local hires to overall hires, and the skill mix of local hires in relation to overall project hiring and employment.',
						'New businesses with local employment expected with the project.'
					]
				},
				{
					letter: 'How will the project contribute to long-term community competitiveness?',
					nums: [
						'Documentation of proposed education and training programs to be developed and implemented, and an explanation of the extent to which these programs will address identified community needs and improved community competitiveness, current and future.'
					]
				}
			]
		},
		{
			number: 'QL2.1',
			synopsis: findQuestion(envision.quality.questions, 'QL2.1').synopsis,
			intent: 'Take into account the health and safety implications of using new materials, technologies or methodologies above and beyond meeting regulatory requirements.',
			metric: 'Efforts to exceed normal health and safety requirements, taking into account additional risks in the application of new technologies, materials and methodologies.',
			improved: {
				points: detailsPoints('quality', 'QL2.1', 'Improved'),
				synopsis: 'Assessment of new requirements.',
				copy: 'In addition to the health and safety plans and programs put in place as required by law and regulation, the owner and the project team identify, assess and institute new standards, methods and procedures to address any additional risks and exposures created by the application of new technologies, materials, equipment and methodologies. Requirements are passed down to the construction contractor in the form of construction specifications. (A, B, C)'
			},
			enhanced: {
				points: '',
				synopsis: '',
				copy: ''
			},
			superior: {
				points: '',
				synopsis: '',
				copy: ''
			},
			conserving: {
				points: detailsPoints('quality', 'QL2.1', 'Conserving'),
				synopsis: 'Excellence in all categories.',
				copy: 'The project team puts in place health and safety plans and programs that substantively exceed all applicable regulations. Explicit and comprehensive consideration given to the application of new technologies, materials, equipment and methodologies, and the corresponding new and health and safety requirements and considerations. (A, B, C)'
			},
			restorative: {
				points: '',
				synopsis: '',
				copy: ''
			},
			description: [
				'The purpose of this credit is to ensure that the owner and the project team take into account new health and safety issues that may arise because of the use of new materials and/or the application of new technologies and methodologies. After assessing the risks associated with the use of new materials, technologies and/or methodologies, additional health and safety protocols should be added to address the additional risks. These new protocols need to be compatible with existing and accepted protocols.',
				'Given the relative newness of many of the technologies and methodologies used to improve sustainable performance, the project team is expected to carry out additional assessments covering the potential risks to public health and the environment, and to project workers. Any significant risks uncovered should be addressed in the project health and safety plans.',
				'The project team must consult with the government officials responsible for public and environmental health and safety. Together, they will review project plans and assess the risks and exposures associated with any new materials, equipment, processes, technologies or methodologies to be used in the project. Health and safety plans and protocols should be adjusted to address the additional risks and exposures. A final compatibility check should be run, to check overall protocol compatibility.',
				'The addition of new and appropriate health and safety requirements, specifications and protocols may require consultation and signoff by environmental, and health and safety officials.'
			],
			benchmark: 'Project health and safety plans meet the minimum requirements. No additional consideration of new technologies and methodologies unless specified in applicable laws and regulations.',
			perfImprove: 'Increase the detail and comprehensiveness of the evaluation and risk assessment of all the new and/or non-standard technologies, materials, equipment and methodologies to be employed on the project. Institution of the appropriate changes in project design and construction to reduce the risk to public and worker health and safety to acceptable levels. Institution of the appropriate health and safety methodologies and protocols during construction.',
			list: [
				{
					letter: 'Have the project owner and the project team assessed the exposures and risks created by the application of new and/or non-standard technologies, materials, equipment and methodologies to be employed on the project?',
					nums: [
						'Reports documenting the assessment of the exposures and risks to public health and safety',
					]
				},
				{
					letter: 'Have the project owner and the project team assessed and made the appropriate changes to the project design to reduce the risk to public and worker health and safety to acceptable levels, and received approval and signoff by the appropriate environmental and public health and safety officials?',
					nums: [
						'Documentation of where and the degree to which the project owner and the project team changed the design of the project to better protect public health and safety.',
						'Evidence of approval and signoff by the appropriate environmental and public health and safety officials.'
					]
				},
				{
					letter: 'Have the project owner and the project team instituted the appropriate health and safety methodologies and protocols during construction?',
					nums: [
						'Evidence of approval and signoff by the appropriate environmental and public health and safety officials.',
						'Evidence that the health and safety methodologies and protocols have been passed onto the constructor.'
					]
				}
			]
		},
		{
			number: 'QL2.2',
			synopsis: findQuestion(envision.quality.questions, 'QL2.2').synopsis,
			intent: 'Minimize noise and vibration generated during construction and in the operation of the constructed works to maintain and improve community livability.',
			metric: 'The extent to which noise and vibration will be reduced during construction and operation.',
			improved: {
				points: detailsPoints('quality', 'QL2.2', 'Improved'),
				synopsis: 'Studies, predictions.',
				copy: 'Baseline studies of existing levels of noise and vibration specified in the project for construction and operations. Studies conducted. Predictions of levels of noise and vibration based on proposed project siting and design are produced. (A)'
			},
			enhanced: {
				points: '',
				synopsis: '',
				copy: ''
			},
			superior: {
				points: '',
				synopsis: '',
				copy: ''
			},
			conserving: {
				points: detailsPoints('quality', 'QL2.2', 'Conserving'),
				synopsis: 'Achieving acceptable levels.',
				copy: 'Proposals for mitigation of air-borne and ground-borne noise and vibration to acceptable levels in the affected community are created based on studies and determination of the noise goals of the affected communities. Proposals are presented, approved and incorporated into the project designs. Project team sets construction specifications for noise and vibration limits. Programs to monitor noise and vibration during operation are established. (A, B, C)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL2.2', 'Restorative'),
				synopsis: 'Creating quieter communities.',
				copy: 'The project is designed in such a way as to reduce ambient noise in the area. As a result of the project and the completed works, noise levels in the community have been substantially reduced below previous levels, and at least to affected community noise objectives. Specifications set for noise and vibration during construction take into account community needs. Residential property values may be improved as a result of reduced ambient noise levels. (A, B, C)'
			},
			description: [
				'Noise is defined as an unwanted or disturbing sound. It becomes unwanted when it interferes with normal activities or diminishes quality of life. Noise can have significant negative health effects, including hearing impairment, hypertension and sleep disturbance. It can also reduce performance in cognitive tasks.',
				'Target noise levels are based on a cumulative period of 30 minutes or more. Noise measurements are taken at the nearest property boundary of the affected land use.',
				'Proposals to mitigate noise and vibration from stationary and mobile sources are approved by local authorities and decision-makers, and incorporated into the design. Monitoring programs are included. Mitigation measures include the use of sound proofing, noise barriers, designs to locate mechanical equipment and other sources away from exterior spaces designed for use, use of innovative pavements designed to reduce traffic noise. For outdoor areas of occupancy, provide quiet outdoor spaces. The project team should measure ambient noise levels prior to initial design work. The team designs the project, giving extra attention to mitigating and eliminating sources of noise and vibration.',
				'Specifications for minimizing construction noise and vibration should meet or exceed accepted local practices. Programs should include details on the expected sources of significant noise and vibration, how the effects of those sources will be minimized, how noise and vibration will be monitored, and what corrective actions will be taken if specified levels are exceeded. The construction contractor is expected to work with affected neighbors to develop construction plans, as well as monitoring and corrective action programs.'
			],
			benchmark: 'No baseline studies and predictions of noise and vibration have been conducted, unless required by regulations. Compliance with local laws and regulations regarding construction noise, but no proposed inspection and enforcement programs beyond stipulated requirements.',
			perfImprove: 'Shift from meeting standards and regulatory requirements to further reductions in ambient noise and vibrations, ultimately creating quieter communities.',
			list: [
				{
					letter: 'Have appropriate studies been carried out to predict the levels of air-borne, ground-borne and structure-borne noise and vibration that will be present during construction and when the completed works is in operation?',
					nums: [
						'Noise and vibration studies and field monitoring providing adequate baseline information and predictions of ambient noise and vibration levels during construction and operation.',
						'Acceptability of the credentials and qualifications of the person(s) conducting the baselines studies and predictions, and developing the mitigation proposals.'
					]
				},
				{
					letter: 'Have proposals for ambient noise and vibration mitigation and monitoring been made and incorporated into the project design to reduce noise and vibration to accepted standard target levels?',
					nums: [
						'Proposals for ambient noise and vibration mitigation and monitoring submitted.',
						'Comprehensiveness of proposals in terms of coverage, detail and the flowdown of requirements to the construction contractor.'
					]
				},
				{
					letter: 'Has the project been designed to markedly reduce ambient noise and vibration down to levels that substantially improve community livability?',
					nums: [
						'Analyses and documentation of estimates of ambient noise and vibration levels and comparisons to community needs and goals for livability.'
					]
				}
			]
		},
		{
			number: 'QL2.3',
			synopsis: findQuestion(envision.quality.questions, 'QL2.3').synopsis,
			intent: 'Prevent excessive glare, light at night, and light directed skyward to conserve energy and reduce obtrusive lighting and excessive glare.',
			metric: 'Lighting meets minimum standards for safety but does not spill over into areas beyond site boundaries, nor does it create obtrusive and disruptive glare.',
			improved: {
				points: detailsPoints('quality', 'QL2.3', 'Improved'),
				synopsis: 'Cost savings focus.',
				copy: 'The project team conducts and overall assessment of lighting needs for the project. The team looks for opportunities to reduce or eliminate outdoor lighting based on potential cost savings. Appropriate measures taken to prevent light spillage and glare in the design. Design specifications state the use of energy-efficient lighting, use of automatic turnoff of outdoor lighting during off hours. Meet requirements for digital signage. Specify lighting requirements and limitations for the construction contractor. (A, B)'
			},
			enhanced: {
				points: detailsPoints('quality', 'QL2.3', 'Enhanced'),
				synopsis: 'Non-lighting alternatives.',
				copy: 'The project team makes additional reductions in the amount of lighting required by employing non-lighting alternatives, e.g., clear signage, clearly painted roadway lines, barriers to light spillage and glare. The design meets requirements for digital signage. The design reduces light spillage effects and glare through high barriers and planted trees and shrubs. See Discussion below regarding requirements for digital signage. (A, B, C)'
			},
			superior: {
				points: detailsPoints('quality', 'QL2.3', 'Superior'),
				synopsis: 'Cohesive zoning.',
				copy: 'The project team aligns the project with appropriate lighting zones and existing zoned districts. The team may establish lighting zones based on lighting needs balanced against the needs and limitations posed by sensitive environments and receptors. The team assesses street lighting needs and specifies the removal of unneeded street lighting. (A, B, C)'
			},
			conserving: {
				points: detailsPoints('quality', 'QL2.3', 'Conserving'),
				synopsis: 'Preserving the night sky.',
				copy: 'The project team performs an audit of lighting needs for all the areas affected by the project. The team assesses lighting needs and makes recommendations for overall lighting needs, plus considerations for reducing light spillage. The design specifies outdoor lighting with full cutoff lenses and reductions in lighting intensity for preserving the night sky. The team optimizes energy efficiency, considering time of day lighting needs and the use of energy-efficient lamps. (A, B, C)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL2.3', 'Restorative'),
				synopsis: 'Restoring the night sky.',
				copy: 'Work with lighting experts to assess true lighting needs as well as areas where exterior lighting is directed upward. Identify more fully, where, when and to what levels lighting is needed to meet wayfinding, safety and other illumination requirements. Also identify and appropriately reduce or eliminate lighting where existing lighting is negatively impacting dark sky conditions. Extensive use of appropriate time of day lighting schedule. Broad application of full cutoff lenses. Optimize energy efficiency. Assess and optimize energy expenditures. Focus on reducing unnecessary upward illumination. (A, B, C)'
			},
			description: [
				'The red and purple glow that covers the sky and blocks out the stars in many densely populated areas is of concern for several reasons. The cumulative exterior light directed upwards into the sky due to inappropriate lighting design, represents a massive waste of energy. Light spillage also disturbs nocturnal animals and interferes with sensitive environments, including open space, wilderness parks and preserves, areas near astronomical observatories, and other light-sensitive habitats.',
				'Finally, the ambient light that blocks the stars from view is undesirable for human beings from both an aesthetic and health perspective. Light pollution has the potential to disrupt circadian rhythms and human sleep patterns with numerous health implications.',
				'Well-designed lighting can maintain adequate light levels on the ground while reducing light pollution by using lighting more efficiently. Many cities and communities may be using more light than necessary and may benefit from a lighting needs audit and assessment.',
				'Design for reducing light spillage effects and glare can be accomplished through the application of full cutoff lenses that direct lighting to where it is needed. High barriers and planted trees and shrubs can also block light spillage effectively.'
			],
			benchmark: 'Compliance with local laws and regulations regarding light pollution, but not beyond what\'s required. Compliance with local laws and regulations regarding construction light pollution.',
			perfImprove: 'Incorporate non-lighting alternatives and rethink real lighting needs. Eliminate unnecessary lighting. Reduce glare. Increased use of dark-sky friendly lighting devices.',
			list: [
				{
					letter: 'Has the project team conducted an overall assessment of lighting needs for the project?',
					nums: [
						'Documentation of lighting assessments conducted for the project.',
						'Considerations of overall appropriate lighting zone levels.'
					]
				},
				{
					letter: 'Has the project team designed the lighting components of the project in a way that reduces lighting energy requirements?',
					nums: [
						'Plans, drawings, specifications showing the use of energy-efficient lighting, removal of existing but unneeded lighting, use of automatic turnoff systems, application of non-lighting alternatives.'
					]
				},
				{
					letter: 'Has the project team designed the lighting components of the project in a way that reduces or eliminates light spillage into sensitive environments and preserves the night sky?',
					nums: [
						'Plans, drawings, specifications showing reductions in lighting intensity, the use of high barriers and planted trees and shrubs, the use of full cutoff lenses.',
						'Demonstration that signage for the constructed works will meet the following standards for digital signs, digital billboards, electronic message boards or displays, electronic message centers, marquee signs and electronic display systems: During daylight hours between sunrise and sunset, luminance shall be no greater than 2000 candelas per square meter. At all other times, luminance shall be no greater than 250 candelas per square meter. There shall be no display movement such as twirls, swirls, blinking, video clips or other forms of animation. Sign copy cannot change more than once per hour.'
					]
				}
			]
		},
		{
			number: 'QL2.4',
			synopsis: findQuestion(envision.quality.questions, 'QL2.4').synopsis,
			intent: 'Locate, design and construct the project in a way that eases traffic congestion, improves mobility and access, does not promote urban sprawl, and otherwise improves community livability.',
			metric: 'Extent to which the project improves access and walkability, reductions in commute times, traverse times to existing facilities and transportation. Improved user safety considering all modes, e.g., personal vehicle, commercial vehicle, transit and bike/pedestrian.',
			improved: {
				points: detailsPoints('quality', 'QL2.4', 'Improved'),
				synopsis: 'Limited coordination.',
				copy: 'The project team recognizes the need and utility in providing access to adjacent facilities, amenities and transportation hubs. However, the team has not coordinated fully with owners and operators of adjacent facilities, amenities and/or transportation operators. Design decisions are made internally, within the project team. Despite attempts at coordination, design gaps in mobility and access are still significant. Principles and specifications for reducing negative impacts on mobility and access in the construction phase are limited. (A, B)'
			},
			enhanced: {
				points: detailsPoints('quality', 'QL2.4', 'Enhanced'),
				synopsis: 'Satisfactory access.',
				copy: 'Project team recognizes the need and utility of providing such access, and seeks input from the operators of adjacent facilities, amenities and transportation hubs. Design decisions are based In part on improved access. Access design decisions based on coordination with operators of adjacent facilities, amenities and transportation hubs. Principles and specifications for reducing negative impacts in the construction phase extend to adjacent facilities. (A, B)'
			},
			superior: {
				points: detailsPoints('quality', 'QL2.4', 'Superior'),
				synopsis: 'Exceptional access and flow.',
				copy: 'Project team expands access considerations to expected traffic flows and volumes, preferred modes of access. Discussions with decision-makers to optimize design choices. Project team works with decision-makers in adjacent facilities and amenities and transportation hubs to determine best modes of access. Designs based on expected traffic flows, transportation choices. Principles and specifications for reducing negative construction impacts emphasize substantially reduced impacts, well beyond construction norms. Construction specifications direct the contractor to consider alternative modes of access, e.g., rail, water, to reduce road traffic. Also, takes into consideration materials to be brought in and taken off site. (A, B, C, D, E)'
			},
			conserving: {
				points: detailsPoints('quality', 'QL2.4', 'Conserving'),
				synopsis: 'More livable communities.',
				copy: 'Project team expands the range of discussion. The team works not only with decision-makers in adjacent facilities, et al., but also with local community officials. Design considerations have moved beyond access issues and now address the reduction of traffic congestion, improvements in walkability in the community, and other key measures of mobility and access. The location of the project has been chosen to utilize and improve the existing transportation infrastructure. It incorporates a community transportation strategy. Principles and specifications for reducing negative construction impacts require strong programs for working with affected community. (A, B, C, D, E, F)'
			},
			restorative: {
				points: '',
				synopsis: '',
				copy: ''
			},
			description: [
				'The purpose of this credit is to reduce the negative impacts of the constructed works on transportation, mobility and access, thereby reducing congestion, improving traffic flow and contributing to community livability.',
				'If public access is required and the site and constructed works are not located near existing public transportation, consider creating new links to public transport rather than relying on motorized vehicles providing access.',
				'The use of alternate materials and sources that reduce the need for materials transport should be specified in construction. Alternate means of transportation, e.g., rail, water should be considered in the deliver of construction materials, as well as waste materials needing to be transported off site.'
			],
			benchmark: 'Compliance with local laws and regulations regarding construction transport, but no inspection and enforcement programs beyond what\'s required, if anything. Only conducting conventional impact studies as required by local regulations. No particular efforts in the design to improve access or reduce congestion. Only using conventional design standards for access.',
			perfImprove: 'Broader consideration given to coordination with adjacent facilities, amenities and transportation hubs. Focus on reducing traffic congestion and improving walkability. Net improvement on community livability.',
			list: [
				{
					letter: 'Have the impacts of the project on community access and mobility during construction and operation been properly and comprehensively addressed?',
					nums: [
						'Assessment studies and reports addressing the effects of the constructed works on access and mobility.',
						'Completeness of the assessment studies and reports.'
					]
				},
				{
					letter: 'Has the project team coordinated with owners and operators of adjacent facilities, amenities and/or transportation hubs to address issues of mobility and access during operation of the constructed works?',
					nums: [
						'Reports, memoranda, minutes of meetings with managers and operators covering access to adjacent facilities, amenities and transportation hubs.',
						'Decisions made and actions taken.'
					]
				},
				{
					letter: 'Has the project team considered and incorporated when feasible, the use of alternate modes of transport?',
					nums: [
						'Assessments of the availability, feasibility and use of rail, water, non-motorized transit, and pipeline access to ease congestion.',
						'Changes made or not made to transport modes and rationale.'
					]
				},
				{
					letter: 'Has the project team developed plans to reduce traffic disruption during construction, including monitoring, and corrective action?',
					nums: [
						'Specifications of requirements and procedures directed to the constructor.',
						'Comprehensiveness of those specifications.'
					]
				},
				{
					letter: 'Has the project team incorporated design strategies to address access and mobility concerns during operation, e.g., congestion, usage rates of existing transit infrastructure, access to public transit and non-motorized transportation?',
					nums: [
						'Access and mobility principles, requirements and specifications incorporated into the design, and expected outcomes.'
					]
				},
				{
					letter: 'Has the project team expanded mobility and access considerations to include improvements to long-term transportation infrastructure efficiency, walkability, and livability?',
					nums: [
						'Reports, memoranda and minutes of meetings with community officials covering the long-term mobility and access needs of the community.',
						'Design components showing the extent to which long-term mobility and access needs and issues were incorporated into the constructed works.'
					]
				}
			]
		},
		{
			number: 'QL2.5',
			synopsis: findQuestion(envision.quality.questions, 'QL2.5').synopsis,
			intent: 'Improve accessibility to non-motorized transportation and public transit. Promote alternative transportation and reduce congestion.',
			metric: 'The degree to which the project has increased walkability, use of public transit, non-motorized transit.',
			improved: {
				points: detailsPoints('quality', 'QL2.5', 'Improved'),
				synopsis: 'Transit access.',
				copy: 'The constructed works allow for walking distance and pedestrian accessible to multi-modal transportation. Location of facility or constructed works in relationship to multimodal transportation hubs. Pedestrian access. Restrictions on parking of motorized vehicles. (A, B)'
			},
			enhanced: {
				points: detailsPoints('quality', 'QL2.5', 'Enhanced'),
				synopsis: 'Non-motorized or transit friendly.',
				copy: 'Location encourages the use of transit or non-motorized transportation, e.g., walking or cycling. The constructed works creates or offers convenient access to transit. Design for convenience in movement to transit facilities. Extended, contiguous trails and bicycle networks that connect to the site and/or constructed works. (A, B, C)'
			},
			superior: {
				points: detailsPoints('quality', 'QL2.5', 'Superior'),
				synopsis: 'Non-motorized and transit friendly.',
				copy: 'The constructed works is located in a place and configured in such a way that encourages the use of non-motorized transportation and transit for access. Location selected is convenient to extended and contiguous pathways and bikeways. Secure bicycle lockers are available. Facilities for users of the constructed works are designed with appropriate facilities and incorporate appropriate support policies. (A, B, C, D)'
			},
			conserving: {
				points: detailsPoints('quality', 'QL2.5', 'Conserving'),
				synopsis: 'Public transportation enhancements.',
				copy: 'The project enhances public transportation facilities or implement programs to encourage the use of public and non-motorized transportation. (A, B, C, D, E)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL2.5', 'Restorative'),
				synopsis: 'Reviving transportation options.',
				copy: 'The project is designed and constructed in a way that rehabilitates pathways, bikeways, rail and/or water modes of transportation that were unused and/or in disrepair and/or removes barriers to use of alternative modes of transportation. The project integrates these underutilized assets into the existing transportation infrastructure, and the larger transportation infrastructure strategy. (A, B, C, D, E, F)'
			},
			description: [
				'For projects located in urbanized areas it is important to ensure integration into the existing public transportation network, and if possible improve upon it. The reliance on the car has had long lasting detrimental effects on cities. Widening streets, and large areas of surface parking, have made cities spread out making it more difficult for pedestrians, bicyclists, and those dependent on public transportation.',
				'The constructed works should be located within walking distance and pedestrian accessible to multi-modal transportation facility or constructed works offers convenient access to transit and pedestrian routes. Parking of motorized vehicles should be restricted.',
				'The constructed works should be located in a place that encourages the use of non-motorized transportation for access. The location selected is convenient to extended and contiguous pathways and bikeways. Secure bicycle lockers are available. Facilities for workers in the constructed works are designed with appropriate support facilities. Appropriate user policies are in place to encourage non-motorized transportation.'
			],
			benchmark: 'Simple access to transit, pathways or bikeways.',
			perfImprove: 'Improved access and convenience for non-motorized transportation. Design encourages the use of alternate modes of transportation.',
			list: [
				{
					letter: 'Is the constructed works located within walking distance and is it pedestrian accessible to multi-modal transportation facilities?',
					nums: [
						'Location and design drawings showing proximity and accessibility to transportation facilities.',
						'Degree of convenience and accessibility.'
					]
				},
				{
					letter: 'Does the constructed works and associated infrastructure restrict the parking of motorized vehicles?',
					nums: [
						'Location and design drawings showing parking availability in and around the constructed works.',
						'Parking spaces available relative to expected use of the constructed works and availability of alternative transportation. Comparisons to other parking restricted facilities and infrastructure.'
					]
				},
				{
					letter: 'Is the constructed works and associated infrastructure designed for convenience in access to multi-modal transportation facilities?',
					nums: [
						'Location and design drawings showing bicycle and pedestrian walkways, trails and networks that connect to the site and constructed works.',
						'Convenience, quality and safety of those walkways, trails and networks.'
					]
				},
				{
					letter: 'Is the constructed works configured and located so that users are encouraged to use non-motorized transportation?',
					nums: [
						'Location and design drawings showing the topography is relatively flat, with a network of pathways and bikeways converge on or near the constructed works.',
						'Availability of facilities and policies for the users.'
					]
				},
				{
					letter: 'Has the project owner and the project team, working with the community developed programs to encourage the use of alternative modes of transportation?',
					nums: [
						'Provision for sheltered and well-lit bus stops, tram stops, or transit access points',
						'Effective display of information such as time and route of public transportation [kiosks, protected displays at bus stops, etc.].'
					]
				},
				{
					letter: 'Has the project owner and the project team identified under-unused pathways, bikeways, rail and/or water modes of transportation that are unused, in disrepair and/or have barriers to safe use? Has the team sought to upgrade these elements and integrate them into the existing transportation infrastructure?',
					nums: [
						'Location and design drawings showing pathways, bikeways, rail and/or water modes of transportation that are unused and in disrepair.',
						'Designs for upgrading and incorporating those elements into the existing transportation infrastructure.',
						'Extent and effectiveness of rehabilitation and incorporation.'
					]
				}
			]
		},
		{
			number: 'QL2.6',
			synopsis: findQuestion(envision.quality.questions, 'QL2.6').synopsis,
			intent: 'Improve user accessibility, safety, and wayfinding of the site and surrounding areas.',
			metric: 'Clarity, simplicity, readability and broad-population reliability in wayfinding, user benefit and safety.',
			improved: {
				points: '',
				synopsis: '',
				copy: ''
			},
			enhanced: {
				points: detailsPoints('quality', 'QL2.6', 'Enhanced'),
				synopsis: 'Onsite wayfinding.',
				copy: 'Increase the users\' ability to understand, and safely access and leave the constructed works and the site. Provide signage and other guidance that makes it intuitive for users to orient themselves to navigate from place to place. (A, B)'
			},
			superior: {
				points: detailsPoints('quality', 'QL2.6', 'Superior'),
				synopsis: 'Additional safety and security.',
				copy: 'In addition to the site, the project makes additional efforts to improve the safety and security of its surroundings. This may include protecting sensitive sites (wetland, cultural sites, etc.) or, in populated areas, neighborhood safety and security. (A, B, C)A'
			},
			conserving: {
				points: detailsPoints('quality', 'QL2.6', 'Conserving'),
				synopsis: 'Integration with surroundings.',
				copy: 'In addition to the site, the project takes notable steps and significant effort to understand and improve the projects impact on its surroundings. This may include protecting sensitive sites (wetland, cultural sites, etc.) or, in populated areas, neighborhood safety and security. Project enhances public safety. The constructed works integrates well with the local community and its environmental and cultural resources. (A, B, C, D, E)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL2.6', 'Restorative'),
				synopsis: 'Restoring safe neighborhoods.',
				copy: 'Over and above the accessibility, safety and wayfinding aspects of the project, the changes made to the site and general vicinity of the constructed works improve overall access and safety of the adjacent neighborhoods, an increase from previous levels. (A, B, C, D, E, F)'
			},
			description: [
				'The project should be designed in such a way that users can find their way in and around the facility or other infrastructure. Wayfinding also has health and safety implications. It involves the ability of users and occupants to exit the facility and get out of harm\'s way in the event of an emergency. It also involves the ability of emergency personnel to access the facility and find their way in the event of an emergency. During design project team considers impacts on surroundings and considers the following measures:',
				'Physical safety',
				[
					'Improve the safety and accessibility of street crossings by providing universal access curb cuts, pedestrian crossing signs, and high visibility crosswalks. Or, for major roads, provide pedestrian over/under passes.',
					'Include traffic calming measures in areas with heavy pedestrian or bicycle traffic.',
					'Install physical barriers between sidewalks and street traffic exceeding 40 mph.',
					'Design bike lanes to encourage bicycling by being as safe as possible. This may include separating bike lanes from street traffic. When designing street parking consider the vehicle door swing if including adjacent bike lanes.',
					'Has the design make a clear distinction between publicly accessible space where pedestrian traffic is encouraged and restricted space where it is not.'
				],
				'Crime and vandalism',
				[
					'Locate publicly accessible space as to be as visible as possible from surrounding neighborhood at night.',
					'Design public space to have clear lines of sight internally and from major pedestrian traffic zones.',
					'Install surveillance equipment to discourage crime and vandalism.',
					'Design public space to integrate in the urban context and encourage pedestrian traffic.'
				],
				'Design site for easy public access to, from, and around the project with clear signage and wayfinding signals.'
			],
			benchmark: 'Only use conventional design standards for signage and wayfinding. Meet health and safety regulations applicable to cite safety in way-finding. Signage meets MUTCD and ADA requirements and other applicable standards.',
			perfImprove: 'Increasingly clear, identifiable and intuitive signage for safe access and egress.',
			list: [
				{
					letter: 'Have the project owner and the project team developed the appropriate signage for safety and wayfinding in and around the constructed works?',
					nums: [
						'Design documents showing plans for access and egress and plans for signage showing how the design and signage is clear and intuitive for users.'
					]
				},
				{
					letter: 'Have the project owner and the project team addressed appropriately, safety and accessibility in and around the constructed works for emergency personnel?',
					nums: [
						'Design documents showing plans for access and egress routes for emergency personnel, users and occupants.',
						'Effectiveness of the design for emergency situations.'
					]
				},
				{
					letter: 'Have the project owner and the project team extended accessibility and signage to protect nearby sensitive sites (wetland, cultural sites, etc.) or, in populated areas, neighborhood safety and security?',
					nums: [
						'Design documents showing plans for accessibility to and protection of nearby sensitive and/or cultural sites.',
						'Effectiveness of accessibility and protection'
					]
				},
				{
					letter: 'Have the project owner and the project team designed the project so as to have a net positive impact on public safety?',
					nums: [
						'Design documents and plans showing how the project will impact public safety.'
					]
				},
				{
					letter: 'Does the constructed works integrate well with the local community and its surroundings?',
					nums: [
						'Design documents and plans showing how the project will integrate with the local community and its environmental and cultural resources.'
					]
				},
				{
					letter: 'Have the owner and the project team incorporated features into the project design that restore and improve overall access and safety in adjacent neighborhoods?',
					nums: [
						'Design documents and plans showing how the project has restored safety and access in the adjacent neighborhoods.'
					]
				}
			]
		},
		{
			number: 'QL3.1',
			synopsis: findQuestion(envision.quality.questions, 'QL3.1').synopsis,
			intent: 'Preserve or restore significant historical and cultural sites and related resources to preserve and enhance community cultural resources.',
			metric: 'Summary of steps taken to identify, preserve or restore cultural resources.',
			improved: {
				points: detailsPoints('quality', 'QL3.1', 'Improved'),
				synopsis: 'Moderate efforts.',
				copy: 'Project team works with the community and required regulatory and resource agencies to identify historic and cultural resources and develop approaches to avoid, minimize and mitigate impacts to those resources. Feasibility analysis done to understand possibilities of incorporating preservation, enhancement into project. (A, B)'
			},
			enhanced: {
				points: '',
				synopsis: '',
				copy: ''
			},
			superior: {
				points: detailsPoints('quality', 'QL3.1', 'Superior'),
				synopsis: 'Proactive efforts.',
				copy: 'Potential stakeholders are consulted early in the project\'s development. Opportunities to preserve and protect cultural and heritage sites are taken. The project team works with cultural stakeholders to develop a sensitive design approach. (A, B, C)'
			},
			conserving: {
				points: detailsPoints('quality', 'QL3.1', 'Conserving'),
				synopsis: 'Preservation and conservation.',
				copy: 'Project is designed so it fully preserves the character-defining features of that resource. Project is developed in close coordination with all stakeholders and will likely involve a variety of interests ranging from local, state, national as well as public, regulatory, non-profits and private interests. (A, B, C)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL3.1', 'Restorative'),
				synopsis: 'Conservation and restoration.',
				copy: 'Project is designed to fully preserve the character-defining features of that resource and enhances the resource in a significant manner. Examples may include rehabilitation in accordance with the Secretary of Interior Standards, restoration of lost features such as an historic landscape or green spaces, upgrade and expansion of recreational facilities, or a publicly accessible educational or museum site in accord with cultural stakeholder wishes (A, B, C, D)'
			},
			description: [
				'This objective addresses the need to preserve and enhance historic and cultural resources. Historic and cultural resources include both architectural and archeological resources, as well as tribal cultural properties. To some extent, these resources are protected by federal statutes. However, those authorities are limited to federal agency actions. Other jurisdictions may have promulgated their own preservation laws. Communities may have additional local ordinances.',
				'In addition, the siting and construction of large renewable energy infrastructure may impact negatively historical landscapes and viewsheds. Reducing energy demands reduces the need for large, utility-scale renewable energy infrastructure.',
				'It should also be noted that preservation of historic sites and cultural resources might be in conflict with a community\'s efforts to consolidate and reduce the costs of maintaining the community\'s excess infrastructure.'
			],
			benchmark: 'Action does not result in either preservation of or a net benefit to historic and/or cultural resources.',
			perfImprove: 'To advance to higher levels of achievement project teams should increase efforts to understand community needs, opportunities for preservation, protection and enhancement. Owners should increase flexibility in incorporating protection and preservation elements into the project. Shift from preservation and conservation to restoration and enhancement of cultural and heritage sites.',
			list: [
				{
					letter: 'To what extent has the project team worked with the community and required regulatory and resources agencies to identify cultural resources?',
					nums: [
						'Reports, memoranda, minutes of meetings with the community and required regulatory and resource agencies to identify cultural resources.'
					]
				},
				{
					letter: 'Has the project team conducted a feasibility analysis to understand the possibilities of incorporating preservation, or enhancement, into the project',
					nums: [
						'Evidence of a feasibility study.'
					]
				},
				{
					letter: 'To what extent has the project team worked with cultural stakeholders to develop a sensitive design and approach, with the ultimate goal of avoiding all cultural resources or fully preserving the character defining features of that resource?',
					nums: [
						'Location and design drawings demonstrating that the site avoids impacting any cultural resource, or of efforts to mitigate impacts.',
						'Design documents of all mitigation efforts in the design.'
					]
				},
				{
					letter: 'Has the project team given special consideration to enhancing or restoring existing cultural resources?',
					nums: [
						'Documentation of efforts to enhance or restore existing cultural resources.',
						'Documentation that works was done in collaboration with preservationists to ensure restoration does not damage the quality of the existing cultural resource.',
						'Qualifications of preservationists.'
					]
				}
			]
		},
		{
			number: 'QL3.2',
			synopsis: findQuestion(envision.quality.questions, 'QL3.2').synopsis,
			intent: 'Design the project in a way that maintains the local character of the community and does not have negative impacts on community views.',
			metric: 'Thoroughness of efforts to identify important community views and aspects of local landscape, including communities, and incorporate them into the project design.',
			improved: {
				points: detailsPoints('quality', 'QL3.2', 'Improved'),
				synopsis: 'Understanding and balance.',
				copy: 'Public view plan developed and project adheres to existing policies and regulations regarding fit with local character. Take into consideration the preservation of natural landscape features. Balance the need for safety measures and barriers against desire for protection or enhancement of views. (A, B, C)'
			},
			enhanced: {
				points: detailsPoints('quality', 'QL3.2', 'Enhanced'),
				synopsis: 'Alignment with community values.',
				copy: 'As part of the stakeholder consultation process, project team identifies community values and concerns regarding protection and enhancement. Based on evaluations, the project team submits a plan for how views will be protected and enhanced, important natural landscape or community features are preserved and the overall placement in landscape or urban context considered. Aesthetic quality of the project beyond regulations considered. (A, B, C, D)'
			},
			superior: {
				points: detailsPoints('quality', 'QL3.2', 'Superior'),
				synopsis: 'Community preservation and enhancement.',
				copy: 'Public view plan implemented with little to no deviation. Contract includes clauses on the preservation of high value landscapes and landscape features. This includes the handling of on-site trees, vegetation, and other features. Stated penalties for non-compliance and programs to inspect outcomes and enforce. Project implements significant measures to fit with local character either natural or man-made. (A, B, C, D, E)'
			},
			conserving: {
				points: detailsPoints('quality', 'QL3.2', 'Conserving'),
				synopsis: 'Community connections and collaboration.',
				copy: 'Project team assists local community establish or enhance regulations, policies and standards on view corridors, views from public/open spaces, views of features associated with community identity or natural features. Fit with local character is considered key aspect of the project and alternatives are developed and implemented in collaboration with community stakeholders. Significant efforts in siting project and design and construction to preserve landscape features. (A, B, C, D, E, F)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL3.2', 'Restorative'),
				synopsis: 'Restoration of community and character.',
				copy: 'Owner seeks where appropriate to improve the local character of the natural landscape or urban fabric through restorative action as part of the project. This may include removing barriers, structures, or vegetation to restore views; restoring lost or damaged natural landscape features; and designing project to restore lost character features within the community. (A, B, C, D, E, F)'
			},
			description: [
				'It is important that a project\'s design should reflect its context. This includes both preserving views and fitting in with local character. The criteria may change depending on the context but the goals remain the same. For example, in a rural setting the project may need to be sensitive to views of natural landscapes and prominent features. Design features can fit with local character by reflecting the importance of the natural surroundings. In urban settings projects should likewise seek to maintain important view corridors, avoid blocking views from previous development. It should also seek to fit with the local urban character reflecting traditional streetscapes, materials choices, height limitations, etc.',
				'In fulfilling this credit project teams should minimize the impact on natural or community features, including rock formations, cutting of trees and other vegetation. Designs should take into account either the natural or urban local character in terms of landform or levels, materials, plantings, style/detailing, scale, landscape/townscape, etc. Special consideration should be given to identify, and prevent negative impacts to views. Designs should be in accordance with community goals and plans to protect view corridors, views from public or open spaces, and views of features strongly associated with the identity of the city or community.'
			],
			benchmark: 'The project team has some limited consideration of local landscape or urban character, but only to ensure that the project will not be a disharmonious imposition on the local landscape. No consideration is given to of views or view corridors, unless required. The project team achieves minimum compliance with laws and regulations for adverse impact on landscape features, and for any protected features, trees etc.',
			perfImprove: 'Shift from minimizing impacts to preservation and restoration. Expand planning to be more comprehensive, taking stakeholder input into account.',
			list: [
				{
					letter: 'To what extent has the project team demonstrated an understanding of local character of the project setting, in terms of landform or levels, views, natural landscape features, materials, planting, style/detailing, scale, and landscape/townscape pattern?',
					nums: [
						'Plans, drawings, and reports identifying important elements of the site character including landform or levels, views, natural landscape features, materials, planting, style/detailing, scale, and landscape/townscape pattern.',
						'Existing policies and regulations regarding public views and design guidelines relevant to the project.'
					]
				},
				{
					letter: 'Has the project team developed or adopted existing public view plans and design guidelines to preserve important view sheds and local character',
					nums: [
						'An inventory of all natural landscape features to be protected.',
						'An inventory of all view resources to be protected.',
						'A plan for addressing public views in the project design. Plans should include: identification and location of the areas to be protected, identifying compatible land use, setting development standards, and establishing policies for inappropriate development and land use.',
						'Design guidelines written for the project to preserve public views, important natural landscape features, and generally fit with the local character and context of its surroundings whether urban or rural.'
					]
				},
				{
					letter: 'To what extent does the final design address views and local character?',
					nums: [
						'Reports, drawings, plans, or images demonstrating how the final project design addresses each of the identified views, natural landscape features, and elements of local character.'
					]
				},
				{
					letter: 'To what extent has the project team worked with local official, communities, and decision makers?',
					nums: [
						'Reports, memoranda, minutes of meetings with local officials and decision-makers regarding local policies and regulations.',
						'Reports, memoranda, minutes of meetings with local officials and decision-makers to identify views, natural landscape features, and important local character traits.',
						'Reports, memoranda, minutes of meetings with local officials and decision-makers demonstrating their involvement in developing design guidelines or their approval of the final design guidelines for views and fit with local character.'
					]
				},
				{
					letter: 'Does the contract include clauses on the preservation of high value landscapes and landscape features, including stated penalties for non-compliance and programs to inspect outcomes and enforce?',
					nums: [
						'Contract clauses regarding the preservation of high value landscapes and landscape features.',
						'Penalties for non-compliance.',
						'Programs for monitoring and enforcement'
					]
				},
				{
					letter: 'Has the project team aided local communities in developing or improving local policies and regulations regarding views and fit with local character for future projects',
					nums: [
						'Report documenting any efforts to aid local communities in developing more comprehensive policies and regulations regarding views and fit with local character.A'
					]
				}
			]
		},
		{
			number: 'QL3.3',
			synopsis: findQuestion(envision.quality.questions, 'QL3.3').synopsis,
			intent: 'Improve existing public space including parks, plazas, recreational facilities, or wildlife refuges to enhance community livability.',
			metric: 'Plans and commitments to preserve, conserve, enhance and/or restore the defining elements of the public space.',
			improved: {
				points: detailsPoints('quality', 'QL3.3', 'Improved'),
				synopsis: 'No adverse effects.',
				copy: 'Project team works with the community, property owner and required regulatory and resource agencies to identify public space resources and develop possible solutions. Feasibility analysis done for incorporating preservation, enhancement, or the creation of new spaces into the project. Project is designed such that it results in no long-term adverse effects and may include mitigation. Project may result in minor temporary impacts. (A, B)'
			},
			enhanced: {
				points: detailsPoints('quality', 'QL3.3', 'Enhanced'),
				synopsis: 'No Impact to resources.',
				copy: 'Project team works with the community, property owner and required regulatory and resource agencies to develop avoidance solutions. Focus is on no impact to resource. The project has no significant permanent impact to the resource. Temporary impacts are minimized. Consideration is given to the creation of new public space. (A, B)'
			},
			superior: {
				points: detailsPoints('quality', 'QL3.3', 'Superior'),
				synopsis: 'Improvement and enhancement.',
				copy: 'Project team identifies and implements meaningful enhancement or the creation of new public space. The project team works with stakeholders (users, regulatory agencies, and resource owner) to develop a sensitive design. Official with jurisdiction over that resource must concur in writing with impact assessment - both for temporary and permanent impacts. (A, B)'
			},
			conserving: {
				points: detailsPoints('quality', 'QL3.3', 'Conserving'),
				synopsis: 'Overall net benefit.',
				copy: 'Examples include creating new space or facilities; addition of recreational facilities to an existing resource and/or significantly improving access for current and future users Stakeholder satisfaction with planned efforts and outcomes. Official with jurisdiction over the resource must concur in writing with impact assessment, both temporary and permanent impacts. (A, B)'
			},
			restorative: {
				points: detailsPoints('quality', 'QL3.3', 'Restorative'),
				synopsis: 'Substantial restoration.',
				copy: 'Restoration of existing plazas, parks, recreational areas or wildlife refuges is delivered. Examples may include restoring hiking trails, pavilions, or athletic fields. Urban contexts may include opening previously private space to public access or restoring existing public space. Stakeholder satisfaction with efforts and results. Official(s) with jurisdiction over that resource must concur in writing with impact assessment – both for temporary and permanent impacts. (A, B, C)'
			},
			description: [
				'Opening space whenever possible to community activity is helpful in gaining acceptance by local communities, educating the public about sustainable infrastructure, reducing crime, and encouraging healthy and vibrant neighborhoods. Public space can be in either urban or natural settings and may include, but is not limited to, parks, plazas, recreational facilities, and wildlife refuges. In the case of natural settings such as parks and wildlife refuges \'public\' refers to space accessible for human recreation and enjoyment. The preservation of habitats and species biodiversity is addressed by credits in the Natural World category. Infrastructure designs that open public space must take into account and mitigate any significant increases in risk to the public.',
				'This credit applies to all publicly-owned parks, recreational areas and wildlife refuges, or such privately-owned resources where there is significant and formalized public access that is specifically outlined in the written management plans and/or legal agreements of those privately-owned resources.',
				'An action is a net benefit if it results in the overall enhancement of the significant activities, features and attributes of a park, recreational area or wildlife refuge. The official(s) with jurisdiction over that resource must concur in writing that the proposed project will indeed result in a net benefit to that resource. Specific attention should be given to enhancements that improve security and crime safety during various times of the day. Allowing clear sightlines, increasing human activity, and improving site quality and safety may help reduce crime and improve the greater community as a whole.',
				'The Official(s) with jurisdiction is the entity that has control over the operation or governance of that resource. The official is often the owner, but may include additional entities in the cases of leases, trusts and other legal agreements.'
			],
			benchmark: 'The action has no particular effect, positive or negative, regarding the preservation or improvement of public space. No efforts to identify, preserve, or enhance other than what is required by local laws or regulations.',
			perfImprove: 'Shift from maintenance and preservation to enhancement and restoration.',
			list: [
				{
					letter: 'What effect will the project have on public space (e.g., parks, plazas, recreational facilities, or accessible space in wildlife refuges) that enhances community livability?',
					nums: [
						'Studies, assessments of the impact of the project on existing public space.',
						'Design documents describing any new public space developed as part of the project.',
						'Determination of benefits, improvements, negative impacts.',
						'Determination of risks to public health and safety.'
					]
				},
				{
					letter: 'Are the public agencies and other stakeholders satisfied with the project plans involving public space?',
					nums: [
						'Acceptance by the appropriate public agencies.',
						'Letters, memoranda, minutes of meetings with stakeholders showing stakeholder satisfaction.'
					]
				},
				{
					letter: 'Will meaningful and beneficial restoration efforts be undertaken?',
					nums: [
						'Plans, drawings showing the scope and extent of any restoration efforts to be made on public space.'
					]
				}
			]
		},
		{
			number: 'NW1.1',
			synopsis: findQuestion(envision.natural.questions, 'NW1.1').synopsis,
			intent: 'Avoid placing the project — and the site compound/temporary works — on land that has been identified as of high ecological value or as having species of high value.',
			metric: 'Avoidance of high ecological value sites and establishment of protective buffer zones.',
			improved: {
				points: '',
				synopsis: '',
				copy: ''
			},
			enhanced: {
				points: '',
				synopsis: '',
				copy: ''
			},
			superior: {
				points: detailsPoints('natural', 'NW1.1', 'Superior'),
				synopsis: 'Avoid development.',
				copy: 'The project has avoided the use of land that is judged to be "prime habitat" including, but not limited to, patches of old-growth forest; land of high ecological value or home to species of high value; national parks, monuments, seashores, and forests; wildlife refuges; wildlife preserves; wild and scenic rivers; and other protected areas. (A)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW1.1', 'Conserving'),
				synopsis: 'Protection of existing habitat.',
				copy: 'The project establishes a minimum 300 ft. natural buffer zone around all areas deemed prime habitat. Exceptions are possible if developed sites not within the project scope exist within the minimum distance. (A, B)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW1.1', 'Restorative'),
				synopsis: 'Restore habitat.',
				copy: 'Project significantly increases the area of prime habitat and connectivity. This should involve the restoration of habitat, as determined by a qualified ecosystem professional. The habitat produced can be part of a protective buffer zone and can be at the site of the project or adjacent to the site. (A, B, C)'
			},
			description: [
				'Some areas are especially important in protecting wildlife biodiversity due to their size, location, diversity of habitat types, or presence of a particular type of habitat for plant or animal species. Some of these areas are large and already protected; for example, national parks and national forests provide large areas of undeveloped land and support a range of wildlife.',
				'Other habitat areas, such as areas of old growth forest amidst a patch of younger trees, may be smaller and undocumented. All play important roles in maintaining biodiversity by providing crucial habitat for wildlife.',
				'Through construction, noise, light pollution, removal of vegetation, and other practices, infrastructure projects can have negative effects on these areas and local biodiversity. Infrastructure impacts can affect off-site areas as well.',
				'Siting infrastructure projects to prevent and minimize direct and indirect impacts is crucial. Problems associated with a poorly sited project are very difficult to correct after construction; preventing impacts by selecting appropriate sites during planning is significantly more effective.',
				'Multiple third parties already have identified and defined definitions and programs for forestry protection, including the Sustainable Forestry Initiative, Forest Stewardship Council, and the Canadian Standards Association. These standards may be used in this credit for definitions of priority conservation areas or as standards for preservation.'
			],
			benchmark: 'Awareness of the issue of preserving high ecological value lands, high conservation value forests and land supporting high-value species. Checks made with state or local agencies regarding classifications or regulations regarding high ecological value land or lands supporting high-value species. Compliance with applicable regulations.',
			perfImprove: 'Shift from avoidance to maintenance to restoration.',
			list: [
				{
					letter: 'Does the project avoid development on land that is judged to be "prime habitat" by a third party (including SFI, FSC, or CSA)?',
					nums: [
						'Narrative describing efforts by an interdisciplinary team to research and document all areas of "prime habitat" near or on the site using local, state, or national prime habitat information.',
						'Documentation demonstrating no areas of prime habitat are located on-site or within the specified distance of developed areas.'
					]
				},
				{
					letter: 'Does the project preserve, at minimum, an appropriately sized buffer zone of undeveloped land or other habitat protection and connectivity according to the specified width around all prime habitat areas?',
					nums: [
						'A site map illustrating a buffer of undeveloped land, fulfilling the requirements above, is preserved (or created if the site is currently developed) around all areas of prime habitat. Provide documentation to demonstrate appropriate size of buffer or other protection.'
					]
				},
				{
					letter: 'Does the project significantly increase the area of prime habitat through the restoration of vegetation and habitat connectivity to a degree suitable as habitat (as determined by a qualified habitat restoration professional), either as part of the protective buffer zone or adjacent to the site?',
					nums: [
						'A restoration plan outlining any efforts to restore prime habitat either on the project site or adjacent to the site, including, at a minimum a site map outlining locations of restoration, and a species list of plants used. This documentation must be signed by a qualified natural resource professional who assisted with the restoration and monitoring plan.'
					]
				}
			]
		},
		{
			number: 'NW1.2',
			synopsis: findQuestion(envision.natural.questions, 'NW1.2').synopsis,
			intent: 'Protect, buffer, enhance and restore areas designated as wetlands, shorelines, and waterbodies by providing natural buffer zones, vegetation and soil protection zones.',
			metric: 'Size of natural buffer zone established around all wetlands, shorelines, and waterbodies.',
			improved: {
				points: detailsPoints('natural', 'NW1.2', 'Improved'),
				synopsis: 'Avoid development or buffer >50 feet.',
				copy: 'Avoid development on sites that contain or are located within 50 feet of wetlands, shorelines, or water bodies. Additionally, if applicable, establish a vegetation and soil protection zone (VSPZ) for an area within 50 feet of any wetland areas, shoreline, or waterbody or within setback distances from wetlands prescribed in state or local laws and/or regulations, whichever is more stringent. Activities prohibited in this buffer zone include construction of any structure or road, non-native vegetation removal, and grading, filling, dredging, or excavation. (A, B)'
			},
			enhanced: {
				points: detailsPoints('natural', 'NW1.2', 'Enhanced'),
				synopsis: 'Buffer > 100 feet.',
				copy: 'Establish a vegetation and soil protection zone (VSPZ) for an area within 100 feet of any wetland areas, shoreline, or waterbody or within setback distances from wetlands prescribed in state or local laws and/or regulations, whichever is more stringent. (A, B)'
			},
			superior: {
				points: detailsPoints('natural', 'NW1.2', 'Superior'),
				synopsis: 'Buffer > 200 feet.',
				copy: 'Establish a vegetation and soil protection zone (VSPZ) for an area within 200 feet of any wetland areas, shoreline, or waterbody or within setback distances from wetlands prescribed in state or local laws and/or regulations, whichever is more stringent. (A, B)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW1.2', 'Conserving'),
				synopsis: 'Buffer >300 feet.',
				copy: 'Establish a vegetation and soil protection zone (VSPZ) for an area within 300 feet of any wetland areas, shoreline, or waterbody or within setback distances from wetlands prescribed in state or local laws and/or regulations, whichever is more stringent. (A, B)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW1.2', 'Restorative'),
				synopsis: 'Aquatic and wetland restoration.',
				copy: 'In addition to points awarded for buffering, project may earn up to 5 points for restoring previously degraded buffer zones to a natural state as part of establishing the VSPZ. Restoration must include: (1) Stabilization of stream channel or shoreline. (Bulkheads are not an acceptable stabilization measure for this objective), and (2) Re-vegetation with native plant communities. Stream channel restoration must include a geomorphic analysis of the reach and the planning for dynamical stable stream banks, based on channel dynamics and sediment transport. (A, B, C)'
			},
			description: [
				'Wetlands, shorelines, and water bodies provide a number of important ecological services, including mitigating flooding, improving water natural, and providing wildlife habitat. Maintaining the integrity of water bodies and wetlands requires more than simply protecting the water body itself from adverse impacts of infrastructure and related development; protecting upland areas is critical as well. A buffer zone around wetlands and water bodies plays particularly important roles in:',
				[
					'Protecting wildlife habitats, providing connected habitat corridors, and maintaining biodiversity: many wetland and aquatic-dependent species also require access to riparian or upland habitats for feeding, nesting, breeding, and hibernation',
					'Regulating water temperature: receiving water infiltrated from surfaces sources into the ground in buffer areas and shade from vegetation in buffer areas maintains water temperatures (increased water temperatures can harm aquatic life)',
					'Maintaining water natural: buffer areas provide erosion control and filter excess nutrients, such as nitrogen and phosphorus, and pollutants from runoff through groundwater infiltration',
					'Protecting hydrology: buffer areas regulate the flow of stormwater runoff and help preserve surface water and ground water levels and flows',
					'Protecting against human disturbance: providing a buffer helps protect wetlands and surface waters from impacts in nearby areas (including destroying vegetation, compacting soils, debris, noise, and light)'
				]
			],
			benchmark: 'Determine the full extent, if any, of wetlands on the site No special protection of buffers to wetlands, rivers or shores other than what is required by regulations.',
			perfImprove: 'Improve and extend vegetation and soil protection zones (VSPZ) while shifting from protection to restoration. Delineate and protect wetlands and other aquatic habitats regardless of size or connectivity.',
			list: [
				{
					letter: 'Is the project located on a site that neither contains nor is located within the specified distance of vernal pools, wetlands, shorelines, or water bodies unless located on a previously developed site?',
					nums: [
						'Documentation that the proposed site neither contains nor is within the specified distance of a wetland, vernal pool, shoreline or water body or other aquatic resource'
					]
				},
				{
					letter: 'If the site contains wetlands or water bodies, has the project team established a vegetation and soil protection zone (VSPZ) to provide a natural zone unaffected by development that maintains a buffer equal to the specified distance?',
					nums: [
						'A site plan showing the final site design, the boundaries of the VSPZ, and the minimal VSPZ depth calculated as the shortest point between the VSPZ boundary and the identified wetland, water body, or shoreline.'
					]
				},
				{
					letter: 'Has the project team restored previously degraded buffer zones to a natural state on a previously developed site?',
					nums: [
						'A restoration plan outlining any efforts to restore wetlands or waterbodies including, at a minimum a site map outlining locations of restoration, and proof that both required action types were taken.'
					]
				}
			]
		},
		{
			number: 'NW1.3',
			synopsis: findQuestion(envision.natural.questions, 'NW1.3').synopsis,
			intent: 'Identify and protect soils designated as prime farmland, unique farmland, or farmland of statewide importance.',
			metric: 'Percentage of prime farmland avoided during development.',
			improved: {
				points: '',
				synopsis: '',
				copy: ''
			},
			enhanced: {
				points: '',
				synopsis: '',
				copy: ''
			},
			superior: {
				points: detailsPoints('natural', 'NW1.3', 'Superior'),
				synopsis: ' 95% Protection.',
				copy: 'The project team designates at least 95 percent as a Vegetation and Soil Protection Zone (VSPZ). Construction impacts from overall site development shall not decrease the capacity of the VSPZ to support the desired vegetation. No more than 10 percent of the total area of the VSPZ can contain development. (A, B)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW1.3', 'Conserving'),
				synopsis: 'No development.',
				copy: 'Any soils designated as prime farmland soils, unique farmland, or farmlands of statewide importance found on the site are not developed. Credit is also earned if the owner and the project team can show that meaningful efforts were made to avoid the development of prime farmland during the site selection process. (A, B)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW1.3', 'Restorative'),
				synopsis: 'Restore prime farmland.',
				copy: 'Previously developed areas deemed prime farmland are restored to a productive state. (C)'
			},
			description: [
				'America\'s agricultural land provides the nation-and world-with an unparalleled abundance of food and fiber products. The dominant role of U.S. agriculture in the global economy has been likened to OPEC\'s in the field of energy. The food and farming system is important to the balance of trade and the employment of nearly 23 million people. Across the country, farmland supports the economic base of many rural and suburban communities.',
				'Agricultural land also supplies products with little market value, but enormous cultural and ecological importance. Some are more immediate, such as social heritage, scenic views, open space and community character. Long-range environmental benefits include wildlife habitat, clean air and water, flood control, ground- water recharge and carbon sequestration.',
				'Yet despite its importance to individual communities, the nation and the world, American farmland is at risk. It is imperiled by poorly planned development, especially in urban- influenced areas, and by the complex forces driving conversion. USDA\'s Economic Research Service (ERS) developed "urban influence" codes to classify each of the nation\'s 3,141 counties and county equivalents into groups that describe the degree of urban influence. The American Farmland Trust found that in 1997, farms in the 1,210 most urban-influenced counties produced 63 percent of dairy products and 86 percent of fruits and vegetables.',
				'Agricultural land is desirable for building because it tends to be flat, well drained and generally is more affordable to developers than to farmers and ranchers. Far more farmland is being converted than is necessary to provide housing for a growing population.',
				'Over the past 20 years, the acreage per person for new housing almost doubled. Most of this land is outside of existing urban areas. Since 1994, lots of 10 to 22 acres accounted for 55 percent of the growth in housing area. The NRI shows that the best agricultural soils are being developed fastest.'
			],
			benchmark: 'The project team checks to see if any of the soils on site have been designated by the NRCS as prime farmland, unique farmland, or farmland of statewide importance.',
			perfImprove: 'Shift from protection to preservation, e.g., no development on prime farmland. Note that restoration of land to prime farmland is very difficult.',
			list: [
				{
					letter: 'Have the project owner and the project team assessed the project site and determined whether or not the on-site soils have been identified as prime farmland, unique farmland, or farmland of statewide importance to conserve for future generations?',
					nums: [
						'Results of government studies and soil surveys'
					]
				},
				{
					letter: 'To what extent is prime farmland, unique farmland, or farmland of statewide importance to conserve for future generations protected or preserved by this project?',
					nums: [
						'Documentation showing how prime farmland is protected or development prevented.',
						'Documentation showing that no soils have been stripped from areas on the site defined as prime farmland.'
					]
				},
				{
					letter: 'To what extent has farmland, unique farmland, or farmland of statewide importance to conserve for future generations been restored by this project?',
					nums: [
						'Demonstration that restoration of prime farmland was accomplished.'
					]
				}
			]
		},
		{
			number: 'NW1.4',
			synopsis: findQuestion(envision.natural.questions, 'NW1.4').synopsis,
			intent: 'Avoid development in adverse geologic formations and safeguard aquifers to reduce natural hazards risk and preserve high natural groundwater resources.',
			metric: 'Degree to which natural hazards and sensitive aquifers are avoided and geologic functions maintained.',
			improved: {
				points: detailsPoints('natural', 'NW1.4', 'Improved'),
				synopsis: 'Comprehensive delineation.',
				copy: 'Prior to project siting the owner and the project team have identified and delineated any faults, low lying coastline and karst areas in and around the project site. Identification and delineation includes location, distribution, characteristics and groundwater hydrogeology, including flow and natural. (A)'
			},
			enhanced: {
				points: detailsPoints('natural', 'NW1.4', 'Enhanced'),
				synopsis: 'Sound risk management.',
				copy: 'Plans and designs are developed to reduce the risk of damage due to ground motion, tsunami flooding and collapse of karst areas and associated aquifer damage, or from the hazards of these areas, e.g., subsidence, sinkholes, flooding. Operating procedures for the constructed works are designed to prevent damage and contamination. Programs for monitoring are established. (A, B)'
			},
			superior: {
				points: detailsPoints('natural', 'NW1.4', 'Superior'),
				synopsis: 'Protection and risk management.',
				copy: 'Based on extensive geotechnical and hydrogeologic assessments, the adverse geologic areas and associated aquifers are well defined. Hazard areas are defined, designated and avoided. Buffers around faults, coastlines and karst features are established. Runoff controls, spill prevention and cleanup plans are created and implemented. (A, B, C)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW1.4', 'Conserving'),
				synopsis: 'Total avoidance.',
				copy: 'The owner and the project team site the project in a safe area that has no adverse geologic features and no negative affects on aquifers. (D)'
			},
			restorative: {
				points: '',
				synopsis: '',
				copy: ''
			},
			description: [
				'There are many types of geologic formations that are difficult to deal with and can either create risk to development or destroy a precious natural resource. Earthquake faults can give rise to devastating ground movements, soil liquefaction and tsunamis. In contrast, karst topography can be considered a green infrastructure resource, as it may a source of high natural water and provide mechanisms for groundwater recharge, stormwater storage, open space, habitat and recreation. It also can be a natural hazard, subject to subsidence, sinkholes, flooding and groundwater contamination. Natural processes, such as earthquakes and sinkhole formation, can cause increased building and infrastructure maintenance costs, e.g., structural damage to buildings, collapse of roads, and broken underground utilities.',
				'Karst hydrogeology is made up of a complex network of interconnected fissures, fractures and conduits formed in a low-permeability limestone. Groundwater flows through and is stored within this formation. Faults and cavities can also form an efficient conduit for contamination from landfills, hazardous material spills, stormwater runoff, and uncontrolled dumping. Once contaminated, aquifers are extremely difficult to clean up.'
			],
			benchmark: 'Follow local regulations regarding building in identified earthquake prone areas and over karst formations.',
			perfImprove: 'Shift from delineation to management of risk. Then shift from management controls to multiple levels of protection and public education. Ultimately, avoid earthquake and tsunami susceptible areas and karst geology altogether.',
			list: [
				{
					letter: 'Has the project team identified and delineated earthquake faults, low lying coastal areas and karst formations and aquifers?',
					nums: [
						'Documentation of site investigations to identify and delineate earthquake faults, tsunami susceptible coastlines and karst areas and aquifers, including location of the project site relative to these features.',
					]
				},
				{
					letter: 'Has the project team developed plans and designs to reduce the risk of damage, establish operating procedures, and establish a monitoring program for adverse geologic settings?',
					nums: [
						'Documentation of design of the project that illustrates strategies used to avoid damage to or damage, operating plans, and monitoring plans.'
					]
				},
				{
					letter: 'Has the project team established hazard areas, developed buffers around adverse geologic areas, and created runoff controls and spill prevention and cleanup plans?',
					nums: [
						'Documentation showing hazardous areas and plans illustrating buffers and runoff controls, and spill prevention and cleanup plans.'
					]
				},
				{
					letter: 'Has the project team chosen a site that avoids earthquake and karst-related damage and does not affect underlying aquifers?',
					nums: [
						'Documentation that no faults and karst features exist on site, nor do any site activities affect underlying aquifers.'
					]
				}
			]
		},
		{
			number: 'NW1.5',
			synopsis: findQuestion(envision.natural.questions, 'NW1.5').synopsis,
			intent: 'Preserve floodplain functions by limiting development and development impacts to maintain water management capacities and capabilities.',
			metric: 'Efforts to avoid floodplains or maintain predevelopment floodplain functions.',
			improved: {
				points: detailsPoints('natural', 'NW1.5', 'Improved'),
				synopsis: 'Avoid or mitigate impacts.',
				copy: 'Avoid or limit new development within the design frequency floodplain for waterways of all sizes, unless water dependent infrastructure that must cross or be adjacent to a waterway. Design water dependent infrastructure to minimize floodplain impacts or waterway crossings. Maintains pre-development floodplain storage and does not increase flood elevations. (A)'
			},
			enhanced: {
				points: detailsPoints('natural', 'NW1.5', 'Enhanced'),
				synopsis: 'Maintain infiltration and water natural. ',
				copy: 'Limit or eliminate the use of impervious surfaces to allow for groundwater infiltration. Maintain or enhance the vegetation and soil protection zones (VSPZs). Impacts from overall site development shall not decrease the capacity of the floodplain riparian vegetation and soil protection zone to support the desired vegetation. Take into consideration possible beneficial use of storm water runoff. (A, B)'
			},
			superior: {
				points: detailsPoints('natural', 'NW1.5', 'Superior'),
				synopsis: 'Enhance riparian and aquatic habitat. ',
				copy: 'Prepare flood emergency plan for floodplain infrastructure. Maintain or enhance the riparian and in-channel physical and vegetative habitat to support threatened and endangered or otherwise desirable species. Emergency operation and/or evacuation plans are prepared for all infrastructure in floodplain. (A, B, C)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW1.5', 'Conserving'),
				synopsis: 'Enhance connectivity and sediment transport.',
				copy: 'Modify or remove structures frequently damaged by floods. The project is designed to not inadvertently trap sediment and allow fish passage through project reach. If repeatedly damaged structures are in project reach they are removed or modified to reduce potential for flood damages. (A, B, C, D)'
			},
			restorative: {
				points: '',
				synopsis: '',
				copy: ''
			},
			description: [
				'Impervious surfaces increase storm water runoff volume, increase stream temperatures, and increase pollutant loading on waterways. Some infrastructure projects may not be able to avoid the floodplain (e.g., roadway and utility crossings, wastewater treatment facilities, ports and other water dependent structures). However these structures should be designed to minimize waterway crossings and floodplain impacts. The project is designed to maintain floodplain storage and not increase flood elevations.'
			],
			benchmark: 'Floodplain functions are not considered beyond local laws and requirements.',
			perfImprove: 'Shift from avoiding floodplain development to maintaining floodplain functions. Extend to enhancement of riparian and aquatic habitat. Move to considering aquatic habitat connectivity and sediment transport. Shift to consideration of extreme flood events due to climate change and to restore connectivity to fragmented aquatic and riparian habitat and sediment transport.',
			list: [
				{
					letter: 'Does the project avoid or limit new development within the design frequency floodplain for waterways of all sizes, unless water dependent infrastructure that must cross a waterway, or is the water dependent infrastructure designed to minimize floodplain impacts or waterway crossings?',
					nums: [
						'Documentation showing the location of the project relative to the 100-year or design floodplain.',
						'Documentation showing siting choices relative to floodplains and how impacts to the floodplain have been reduced.',
						'Document that pre- and post-floodplain storage and floodplain elevations and show that the project does not increase flood elevations outside of project easements and maintain floodplain storage.'
					]
				},
				{
					letter: 'Does the project maintain pre-development floodplain infiltration and water natural?',
					nums: [
						'Documentation of strategies used to maintain pre-development floodplain infiltration, such as amount of impervious surfaces, established vegetation and soil protection zones, and other strategies that allow for natural floodwater infiltration and filtration of pollutants.',
						'Estimates of pre-development floodplain infiltration capacity and estimates of post-development floodplain infiltration capacity using above-described strategies.'
					]
				},
				{
					letter: 'Does the project maintain or enhance riparian and aquatic habitat and the maintenance or enhancement of the riparian and in-channel physical and vegetative habitat to support threatened and endangered or otherwise desirable species? Has a flood emergency plan been prepared for all infrastructure in the floodplain accounting for emergency operations and/or evacuation?',
					nums: [
						'Documentation of strategies to maintain or enhance habitat, within and along the waterway in the floodplain.',
						'Provide documentation of a flood emergency management plan to address the operation and/or evacuation plan for all infrastructure in the floodplain.'
					]
				},
				{
					letter: 'Does the project maintain or enhance aquatic habitat connectivity and sediment transport? Is infrastructure subject to frequent damage by floods being modified or removed?',
					nums: [
						'Documentation of strategies used to maintain or enhance aquatic habitat connectivity, fish and sediment transport, including removal of barriers and traps.',
						'Inventory of flood damaged infrastructure and plan/design to modify or remove flood-damaged infrastructure'
					]
				}
			]
		},
		{
			number: 'NW1.6',
			synopsis: findQuestion(envision.natural.questions, 'NW1.6').synopsis,
			intent: 'Protect steep slopes and hillsides from inappropriate and unsuitable development in order to avoid exposures and risks from erosion and landslides, and other natural hazards.',
			metric: 'The degree to which development on steep slopes is avoided, or to which erosion control and other measures are used to protect the constructed works as well as other downslope structures.',
			improved: {
				points: detailsPoints('natural', 'NW1.6', 'Improved'),
				synopsis: 'Best practices.',
				copy: 'Assess the selected site. Design the project to minimize alteration to avoid excessive erosion and the potential for landslides. Institute management practices for the completed works to control erosion and prevent landslides. Add protection to downslope buildings, facilities and infrastructure from erosion and landslides. (A)'
			},
			enhanced: {
				points: '',
				synopsis: '',
				copy: ''
			},
			superior: {
				points: detailsPoints('natural', 'NW1.6', 'Superior'),
				synopsis: 'Optimal project siting.',
				copy: 'Work with local officials, property owners and other stakeholders to select and acquire a project site that is sufficiently suited for the project purpose. Seek to minimize siting on hillsides or steep slopes. Work to locate and acquire the best location that minimizes the possibility of excessive erosion and landslides. (A, B)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW1.6', 'Conserving'),
				synopsis: 'Steep slopes avoided.',
				copy: 'Work with local officials, property owners and other stakeholders to select and acquire a project site that is on land that has no hillsides or steep slopes. In the planning phase, project locations involving hillsides and steep slopes are determined to be candidates for the project site. Even though hillside/steep slope sites are candidates, none are selected. No hillsides or steep slopes to contend with in the design and operation. (C)'
			},
			restorative: {
				points: '',
				synopsis: '',
				copy: ''
			},
			description: [
				'Hillsides and steep slopes are part of the natural beauty of the landscape. These features increase the values of property and viewsheds, and offer opportunities for recreation. At the same time, development on or near these features creates risks. However, if improperly developed, hillsides and steep slopes can increase the potential for erosion and landslides. These features also present a greater danger from fires, as they are more difficult to control or fight.',
				'Designing, building and maintaining infrastructure on hillsides and steep slopes, especially roads, sewers, water systems and power lines, are also more expensive due to the challenges of the terrain.'
			],
			benchmark: 'Follow local regulations and standards and ordinances regarding development on hillsides and steep slopes, if any.',
			perfImprove: 'Shift from optimal siting and erosion control to avoiding development on high risk or steep slopes altogether, if possible.',
			list: [
				{
					letter: 'Does the project follow best management practices to manage erosion and prevent landslides?',
					nums: [
						'Documentation of best management and design practices used, including protection of downslope buildings, facilities, and infrastructure.'
					]
				},
				{
					letter: 'Is the project sited optimally and managed to avoid excessive erosion?',
					nums: [
						'Documentation of process used to identify and choose site, including meetings with officials and other stakeholders, site options with benefits and shortfalls of each, and reasoning used for final selection of site.'
					]
				},
				{
					letter: 'Does the project avoid high risk hillsides or steep slopes?',
					nums: [
						'Documentation of process used to identify high-risk hillsides or steep slopes and their location relative to final site selected.'
					]
				}
			]
		},
		{
			number: 'NW1.7',
			synopsis: findQuestion(envision.natural.questions, 'NW1.7').synopsis,
			intent: 'Conserve undeveloped land by locating projects on previously developed greyfield sites and/or sites classified as brownfields.',
			metric: 'Percentage of site that is a greyfield or the use and cleanup of a site classified as a brownfield.',
			improved: {
				points: detailsPoints('natural', 'NW1.7', 'Improved'),
				synopsis: '25% Greyfield site',
				copy: '25% of the developed area of the project is to be located on a Greyfield site. (A)'
			},
			enhanced: {
				points: detailsPoints('natural', 'NW1.7', 'Enhanced'),
				synopsis: '50% Greyfield site.',
				copy: '50% of the developed area of the project is to be located on a Greyfield site. (A)'
			},
			superior: {
				points: detailsPoints('natural', 'NW1.7', 'Superior'),
				synopsis: '75% Greyfield site.',
				copy: '75% of the developed area of the project is to be located on a Greyfield site. (A)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW1.7', 'Conserving'),
				synopsis: '100% Greyfield site.',
				copy: '100% of the developed area of the project is to be located on a Greyfield site. (A)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW1.7', 'Restorative'),
				synopsis: 'Use a Brownfield.',
				copy: 'The project is located on a Brownfield site; a site documented as contaminated by means of an ASTM E1903-11 Phase II Environmental Site Assessment or a local voluntary cleanup program; or defined as a Brownfield by a local, state, or federal government agency. Remediation measurers should be sufficient for the planned future use of the site (B, C)'
			},
			description: [
				'Selecting previously developed sites rather than greenfield sites often has reduced impacts on wildlife (minimizes likelihood of new habitat fragmentation and reduces disturbance associated with construction or operations of new infrastructure); lessens the need for additional infrastructure (previously developed sites tend to be already well-connected to transportation, water, and other infrastructure systems; greenfield sites may not be); and reduces the pressures on development for greenfield sites. This does not apply to a street, roadway, or altered landscapes resulting from current agricultural use, forestry use, or use as preserved natural area.',
				'While the term greyfield in some contexts may mean underutilized or abandoned sites, this credit defines all previously developed sites as greyfields. Previously developed sites consist of at least 75% of the site area that has preexisting paving, construction, or altered landscapes. This does not apply to a street, roadway, or altered landscapes resulting from current agricultural use, forestry use, or use as preserved natural area.',
				'Brownfield sites are properties with documented or assumed contamination caused by former uses. Choosing to redevelop brownfield sites avoids environmental impacts of Greenfield development (habitat fragmentation, etc.). In addition, remediating brownfields has the added environmental benefit of cleaning up contamination. These often under-utilized sites can pose environmental and health risks to their communities (including water contamination and illness). Cleaning up contamination benefits the local environment and community.',
				'Additional considerations:',
				[
					'If possible, projects should be located in areas designated or recognized as urban core/desired development zones.',
					'Projects should promote urban development channel development to urban areas to reduce pressure on undeveloped land, reduce resource consumption, and promote social and economic urban and neighborhood revitalization. This includes improvement of safety, creation of short- and long-term local jobs, and creation of, preservation of, or addition of parks or other recreational property used for nonprofit purposes.',
					'Projects should include restoration of impaired drainageways and other damaged or stressed natural resources.',
					'Projects should positively impact historically- and economically-disadvantaged urban populations.',
					'Projects should make adaptive use of existing underground and aboveground structures, including buildings, utility and roadway infrastructure.'
				]
			],
			benchmark: 'The project site selected is a Greenfield site, i.e., a site where no previous development is taking place. Little or no efforts were made to location the project on a greyfield or brownfield site.',
			perfImprove: 'Site the project to include increasing amounts of previously developed site or select a brownfield site and conduct the necessary cleanup or mitigation measures.',
			list: [
				{
					letter: 'Is the project located on a site that was previously developed, and what percentage of the project site was previously developed?',
					nums: [
						'Documentation showing the percentage of the developed area of the site that was formerly developed and may be classified as a "greyfield".'
					]
				},
				{
					letter: 'Is the project located on a site where all or part of it is documented as contaminated according to a ASTM E1903-11 Phase II Environmental Assessment or on a site deemed a brownfield by local, state, or federal government agencies?',
					nums: [
						'Documentation of brownfield status of site. Either documentation of the local, state, or federal agency designation or results from an ASTM E1903-11 Phase II Environmental Assessment of the site confirming contamination will suffice.'
					]
				},
				{
					letter: 'Has a brownfield remediation plan been prepared according to the ASTM report?',
					nums: [
						'Documentation that the controlling public authority has approved proposed remediation measures for the site.'
					]
				}
			]
		},
		{
			number: 'NW2.1',
			synopsis: findQuestion(envision.natural.questions, 'NW2.1').synopsis,
			intent: 'Minimize the impact of infrastructure on stormwater runoff quantity and quality.',
			metric: 'Infiltration and evapotranspiration capacity of the site and return to pre-development capacities.',
			improved: {
				points: '',
				synopsis: '',
				copy: ''
			},
			enhanced: {
				points: detailsPoints('natural', 'NW2.1', 'Enhanced'),
				synopsis: 'Increased storage capacity.',
				copy: 'Project employs low impact development (LID) measures to reduce generation of storm runoff to pre-development conditions. The target water storage capacity for Greyfields, 30% improvement in water storage capacity. For Brownfields, 20% improvement. Greenfields site maintains 100%. (A)'
			},
			superior: {
				points: detailsPoints('natural', 'NW2.1', 'Superior'),
				synopsis: 'Extended storage capacity.',
				copy: 'Project employs low impact development (LID) measures to reduce generation of storm runoff to pre-development conditions. The target water storage capacity for Greyfields, 60% improvement in water storage capacity. For Brownfields, 40% improvement. Greenfields site maintains 100%. (A)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW2.1', 'Conserving'),
				synopsis: 'Sustainable stormwater management.',
				copy: 'Project employs low impact development (LID) measures to reduce generation of storm runoff to pre-development conditions. The target water storage capacity for Greenfields is the pre-development water storage capacity. For Greyfields, 90% improvement in water storage capacity. For Brownfields, 60% improvement. (A)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW2.1', 'Restorative'),
				synopsis: 'Enhanced stormwater management.',
				copy: 'Project employs substantial low impact development (LID) measures to reduce generation of storm runoff. Runoff is maintained on site and/or exceeds undisturbed climax ecosystem. Stormwater management programs and storm water handling structures are designed to capture and repurpose more than 100% of storm water on-site as part of overall water management regime. (B)'
			},
			description: [
				'Development causes a change to the natural flow of runoff on a site. Increasing the quantity of impervious surface reduces the amount of stormwater that infiltrates into the ground, decreases the amount absorbed and expired by plants (evapotranspiration), and increases the amount of surface runoff.',
				'Increased surface runoff typically leads to increases in the erosion of land surfaces, increased water temperatures and an increase in pollutants reaching surface waters. It can deposit sediment and pollutants into waterways and warm historically cold water streams. It also increases the quantity of water draining into waterbodies, which can cause channel erosion in streams and downstream flooding. Changes in flow, increased sedimentation, pollutants, water temperatures and loss of groundwater input can negatively impact aquatic life as native species are replaced with more pollutant tolerant, warm water species.',
				'Low impact development (LID) measures can be incorporated into the design to reduce these negative impacts associated with increased runoff. Designs attempt to maintain or restore the water storage/infiltration ability of a site through infiltration, evapotransporation, water harvesting and cistern storage. These may include: gardens and bioretention, rooftop gardens, sidewalk storage, vegetated swales, buffers, and strips, tree preservation, roof leader disconnection, rain barrels and cisterns, permeable pavers, soil amendments, impervious surface reduction and disconnection, pollution prevention and good housekeeping. Many of these features also provide some level of treatment of the runoff, filtering pollutants and cooling runoff water before reaching the receiving waterway, maintaining or restoring groundwater input to the waterway. LID measures do not include stormwater ponds that store but do not infiltrate stormwater, increasing the temperature of stormwater discharged to receiving waterways.',
				'The TR-55 methodology can be used in conjunction with previously published work to determine target percent improvement in a site\'s infiltration/evapotranspiration/water harvest capacity or that these methods can be calculated using continuous simulation modeling.',
				'Determine and document the initial, final post-development, and target water storage, infiltration, evaporation, water harvesting and/or cistern storage capacities using TR-55 CNs or other continuous simulation modeling methods to describe site conditions. Adequate documentation regarding the methods employed and the results obtained must be submitted. For the purposes of this credit, the target water storage capacity is defined as follows:',
				[
					'For greenfields, the target water storage capacity is the pre-development water storage capacity.',
					'For greyfields and brownfields, the target water storage capacity using TR-55 CNs has been established for the various climates across the US to represent pre-development conditions.',
					[
						'Humid East Coast (e.g. Raleigh) - 70',
						'Humid Midwest (e.g. Chicago) - 70',
						'Humid West Coast (e.g. Portland) - 70',
						'Semiarid West (e.g. Denver) - 60',
						'Arid Southwest (e.g. Los Angeles) - 85'
					],
					'Determine and document that any increased infiltration occurring on site will not exacerbate regional ecological or safety problems. For example, increased infiltration in arid climates may alter historic stream types, converting ephemeral to perennial streams.',
					'Determine and document that design will not negatively affect receiving waters by changing the site water balance so that detrimental impacts to baseflow, nutrient cycling, sediment transport and groundwater recharge occur. For example, water harvesting techniques should not be used that "starve" the receiving systems of adequate flows necessary to maintain the ecological function of the downstream waters.'
				]
			],
			benchmark: 'Development meets minimum regulatory requirements for stormwater management. Create and implement an erosion, sedimentation, and pollutant control plan—commonly referred to as SWPPP (Stormwater Pollution Prevention Plan) or ESC (Erosion and Sedimentation Control Plan)—for all construction activities associated with the project. The plan (SWPPP or ESC) shall conform to erosion and sedimentation requirements of the 2003 (or most current version) EPA Construction General Permit OR local erosion and sedimentation control standards and codes, whichever is more stringent.',
			perfImprove: 'Improvements in water storage/infiltration capacity, extending to capacities larger than established for pre-development conditions.',
			list: [
				{
					letter: 'What percentage improvement for a greyfield or brownfield site does the site\'s proposed water storage, infiltration, evapotranspiration, and/or water harvesting capacity achieve, or does the site maintain a Greenfield site water storage capacity?',
					nums: [
						'Documentation of the initial, final post-development, and target water storage, infiltration, evaporation, water harvesting and/or cistern storage capacities using TR-55 CNs or other continuous simulation modeling methods to describe site conditions.'
					]
				},
				{
					letter: 'Is 100% of the target water storage capacity is achieved for greyfield and brownfield sites, or does the greenfield site exceed 100% target water capacity so as to mitigate the impact of adjacent developed sites?',
					nums: [
						'Documentation of the initial, final post-development, and target water storage, infiltration, evaporation, water harvesting and/or cistern storage capacities using TR-55 CNs or other continuous simulation modeling methods to describe site conditions.'
					]
				}
			]
		},
		{
			number: 'NW2.2',
			synopsis: findQuestion(envision.natural.questions, 'NW2.2').synopsis,
			intent: 'Reduce non-point source pollution by reducing the quantity, toxicity, bioavailability and persistence of pesticides and fertilizers, or by eliminating the need for the use of these materials.',
			metric: 'Efforts made to reduce the quantity, toxicity, bioavailability and persistence of pesticides and fertilizers used on site, including the selection of plant species and the use of integrated pest management techniques.',
			improved: {
				points: detailsPoints('natural', 'NW2.2', 'Improved'),
				synopsis: 'Application Management.',
				copy: 'Operational policies and programs are designed to control the application of pesticides and fertilizers so as not to over-apply. Runoff controls are put in place to minimize contamination of ground and surface water. (A, B)'
			},
			enhanced: {
				points: detailsPoints('natural', 'NW2.2', 'Enhanced'),
				synopsis: 'Pesticide, herbicide and fertilizer selection.',
				copy: 'The project team designs the landscaping to incorporate plant species that require less use of fertilizers and pesticides. Management programs are established to select pesticides and fertilizers with low toxicity, persistence and bioavailability. Programs are designed to control and reduce fertilizer use by increased use of compost. (A, B, C)'
			},
			superior: {
				points: detailsPoints('natural', 'NW2.2', 'Superior'),
				synopsis: 'Better selection, lower use.',
				copy: 'The project team reduces the potential negative impacts of pesticide and fertilizer use by a combination of plant species that need little or no fertilizers and pesticides and by increasing the use of pesticides and fertilizers with low toxicity, persistence and bioavailability. (A, B, C)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW2.2', 'Conserving'),
				synopsis: 'No pesticide, herbicide or fertilizer use.',
				copy: 'The project team designs the landscaping to incorporate plant species that require no pesticides, herbicides and fertilizers. Increased use of composting. Practice integrated pest management. (D)'
			},
			restorative: {
				points: '',
				synopsis: '',
				copy: ''
			},
			description: [
				'Pesticides and fertilizers are a major non-point source pollutant and whenever possible their use should be reduced or eliminated. A persistent problem is the over-application of pesticides and fertilizers. These chemicals can contaminate runoff and pollute streams, rivers, lakes and groundwater. If they are necessary it is often possible to source less toxic pesticides and fertilizers. Often better-suited plants can be chosen to grow in a particular climate without fertilizers and to resist pests.'
			],
			benchmark: 'Some efforts are made to control the types and usage of pesticides and fertilizers, primarily based on cost savings. Some procurement criteria are used covering toxicity, persistence and bioavailability.',
			perfImprove: 'Shift from managed use to better selection, selecting products with decreased toxicity, persistence, and bioavailability. Shift from minimal use of pesticides and fertilizers to no use.',
			list: [
				{
					letter: 'What operational policies will be put in place to control the application fertilizers and pesticides',
					nums: [
						'Operational policies for applying fertilizers and pesticides.'
					]
				},
				{
					letter: 'What runoff controls will be installed to minimize groundwater and surface water contamination?',
					nums: [
						'Plans and drawings showing how runoff controls will be designed and installed.'
					]
				},
				{
					letter: 'Has the project team selected pesticides and fertilizers that have low toxicity, persistence and bioavailability?',
					nums: [
						'Documentation showing the mix of pesticides and fertilizers to be used on the finished project, along with measured of their toxicity, persistence and bioavailability.'
					]
				},
				{
					letter: 'Has the project team designed the landscaping to incorporate plant species that require no pesticides, herbicides and fertilizers, or use integrated pest management approaches?',
					nums: [
						'Documentation of plans for landscaping showing the mix of plant species.'
					]
				}
			]
		},
		{
			number: 'NW2.3',
			synopsis: findQuestion(envision.natural.questions, 'NW2.3').synopsis,
			intent: 'Preserve fresh water resources by incorporating measures to prevent pollutants from contaminating surface and groundwater and monitor impacts over operations.',
			metric: 'Designs, plans and programs instituted to prevent and monitor surface and groundwater contamination.',
			improved: {
				points: detailsPoints('natural', 'NW2.3', 'Improved'),
				synopsis: 'Design for response.',
				copy: 'Protection is accomplished by spill and leak diversion systems, spill prevention plans and cleanup. (A, B)'
			},
			enhanced: {
				points: detailsPoints('natural', 'NW2.3', 'Enhanced'),
				synopsis: 'Long term monitoring.',
				copy: 'Measures have been incorporated into the design and operation of the project to enable long-term water quality monitoring and reporting. Monitoring will include surface and groundwater quantity and quality. Data will be submitted to the International Stormwater Best Management Practices (BMP) Database. Monitored data includes water quality data and temperature data. (A, B)'
			},
			superior: {
				points: detailsPoints('natural', 'NW2.3', 'Superior'),
				synopsis: 'Design for prevention.',
				copy: 'At the design stage, the location of equipment and facilities containing potentially polluting substances are located away from sensitive environments. Runoff interceptors and drainage channels are designed to accommodate pollutants in stormwater runoff or ice melt, potential spills and leakage. Spill prevention and response plans are in place. During operation, methods to monitor and minimize pollutants in stormwater runoff or ice melt are employed. (A, B, C, D, E)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW2.3', 'Conserving'),
				synopsis: 'Design for source elimination.',
				copy: 'Designers focus on eliminating potentially polluting substances from operations. If unable, designers seek to recycle the substances, keeping them within the operation or sending them off-site for use in other applications. Designers continue to address prevention measures by locating equipment and facilities containing potentially polluting substances are located away from sensitive environments. (A, B, C, D, E)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW2.3', 'Restorative'),
				synopsis: 'Remediate existing contamination.',
				copy: 'The project prevents future contamination by cleaning up previously contaminated land, restoring wellhead protection, and installing land use controls to prevent future contamination. Restoration also may include removal of materials storage piles, rerouting of surface runoff, or restoring groundwater infiltration patterns. (A, B, C, D, E, F, G)'
			},
			description: [
				'Aquatic ecosystems depend on a particular set of water conditions and changes to any of these factors can adversely affect aquatic life and groundwater quality. Aquatic ecosystems are threatened by changes in pH, decreases in water clarity, and increases in temperature, dissolved solids, coliform bacteria, toxic substances, and nutrients (especially phosphorus and nitrogen).',
				'Groundwater is a widely used source of drinking water. Protection of groundwater from contamination around water supply wellheads reduces the chances of groundwater contamination and protects the natural water purification processes. Design and operation of the constructed works should take into account wellhead protection plans and other requirements.',
				'Concerns regarding equipment and facilities containing potentially polluting substances include fuel and chemical storage, pipelines, piles of raw materials and process areas.',
				'At the construction stage, potential sources of groundwater and surface water contamination include spills and leaks from tanks, pipes and construction vehicles, leaching of pollutants from raw or waste materials, and releases of pollutants from demolition of previously constructed works.'
			],
			benchmark: 'Meet basic regulatory requirements for water quality and spill prevention planning, e.g., SPCC plans. Compliance with existing zoning and groundwater protection regulations.',
			perfImprove: 'Shift from response to prevention to source reduction and elimination. Special considerations are given to the protection and restoration of water supply wellhead areas.',
			list: [
				{
					letter: 'Have adequate and responsive surface and groundwater quantity and quality monitoring systems been incorporated into the project design?',
					nums: [
						'Documentation of hydrogeologic delineation studies, taking into consideration the complexity of the aquifers. Note that delineation may have already been done by local authorities.',
						'For projects situated in areas where the groundwater is used as a source or drinking water, documentation of wellhead protection plans and other requirements including establishing wellhead protection areas.',
						'Documentation of long-term surface and groundwater quality monitoring programs. Appropriate data will be submitted to the International Stormwater Best Management Practices (BMP) Database. The database web site also provides guidance on BMP monitoring.',
						'Documentation that the constructed works cannot reasonably have any impact on receiving waters. Show that there is no direct connection to receiving waters from the site of the construct works, or pollutant BMP are implemented and both the discharges to receiving waters and the receiving waters are monitored to verify pollutant loading, biological impact and impact on receiving water flow.'
					]
				},
				{
					letter: 'Have spill and leak prevention and response plans and design been incorporated into the design?',
					nums: [
						'Spill and leak prevention and response plans.',
						'Plans and drawings showing the placement of materials storage piles and handling of potentially polluting runoff.'
					]
				},
				{
					letter: 'Has the project team reduced or eliminated potentially polluting substances from the construction and operation of the completed works?',
					nums: [
						'Efforts to reduce the use of, or replacement of hazardous and/or potentially polluting materials with non-hazardous or non-polluting materials.'
					]
				},
				{
					letter: 'Has the project team sought to reduce future contamination by cleaning up areas of contamination and instituting land use controls to limit the introduction of future contamination sources?',
					nums: [
						'Plans to clean up contaminated areas.',
						'Proposed land use controls.',
						'Plans to prevent contamination from entering receiving waters or alter receiving water flow.'
					]
				},
				{
					letter: 'Have spill and leak prevention and response plans and design been incorporated into the design?',
					nums: [
						'Spill and leak prevention and response plans.',
						'Plans and drawings showing the placement of materials storage piles and handling of potentially polluting runoff.'
					]
				},
				{
					letter: 'Has the project team reduced or eliminated potentially polluting substances from the construction and operation of the completed works?',
					nums: [
						'Efforts to reduce the use of, or replacement of hazardous and/or potentially polluting materials with non-hazardous or non-polluting materials.'
					]
				},
				{
					letter: 'Has the project team sought to reduce future contamination by cleaning up areas of contamination and instituting land use controls to limit the introduction of future contamination sources?',
					nums: [
						'Plans to clean up contaminated areas.',
						'Proposed land use controls.'
					]
				}
			]
		},
		{
			number: 'NW3.1',
			synopsis: findQuestion(envision.natural.questions, 'NW3.1').synopsis,
			intent: 'Protect biodiversity by preserving and restoring species and habitats.',
			metric: 'Degree of habitat protection.',
			improved: {
				points: detailsPoints('natural', 'NW3.1', 'Improved'),
				synopsis: 'Identify and protect habitat.',
				copy: 'Project team works with state and local agencies to identify existing habitats in or near the project site, ensure that existing habitats are not harmed, and compensate for losses. Mitigation measures should maintain net habitat quality and area, and provide means for animals to access pre-development habitat after development is complete. (A)'
			},
			enhanced: {
				points: '',
				synopsis: '',
				copy: ''
			},
			superior: {
				points: '',
				synopsis: '',
				copy: ''
			},
			conserving: {
				points: detailsPoints('natural', 'NW3.1', 'Conserving'),
				synopsis: 'Improve habitat.',
				copy: 'Project team works with state and local agencies to identify existing habitats in or near the project site. Efforts are made during the course of the project to not only protect existing habitats but to upgrade. Efforts are made to reinstate appropriate vegetation, improve and expand wildlife corridors, and link existing habitats. Projects can preserve portions of the site, which are contiguous to natural areas outside of site, in an undisturbed condition; create new connections between areas of important habitat; or remove existing barriers to movement. (A, B)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW3.1', 'Restorative'),
				synopsis: 'Restore and create habitats.',
				copy: 'Project team works with state and local agencies to identify existing habitats in or near the project site. Efforts are made during the course of the project to not only protect and upgrade existing habitats, but to restore and create new habitats. Efforts are made to reinstate appropriate vegetation, improve and expand wildlife corridors, and link existing habitats. (C)'
			},
			description: [
				'Urbanization threatens wildlife because it fragments and shrinks areas of suitable habitat. Development tends to decrease the total quantity of available habitat and separate it into smaller, disconnected patches. When patches are not individually large enough to support a population of a species, connectivity between patches is critical for survival. Preserving and linking habitat is critical to biodiversity by:',
				[
					'Allowing species to move between patches of different types: species may require more than one type of habitat.',
					'Providing sufficient habitat for large-range species: some animals require a large "home range".',
					'Promoting genetic diversity. Connectivity between patches allows separate populations of the same species to interact and breed.'
				],
				'Enlarging habitats, connecting patches, and promoting safe movement between patches should be a priority for infrastructure projects.',
				'Supporting and protecting biodiversity typically begins with an analysis of species in the area. For this type of analysis, select at least four focal species that live in the area, or are targets for repopulation. When selecting the species, priority should be given to species that:',
				[
					'Have habitat preferences similar to other species',
					'Represent a range of animal classes - mammal, birds, amphibians, and reptiles',
					'Are susceptible to one or more threats associated with development (including land clearing, buildings and infrastructure, roads and traffic, and the presence of people or domestic animals)',
					'Are classified as threatened or endangered; or whose populations have recently declined',
					'Have sufficient information available to assess habitat preference and susceptibility to disturbances'
				]
			],
			benchmark: 'No willful destruction of valuable habitat but no active program to protect it either.',
			perfImprove: 'Shift from protection and enhancement to restoration and creating new habitats.',
			list: [
				{
					letter: 'Does the project demonstrate that it does not impact natural habitat and movement corridors or will mitigate adverse impacts of development?',
					nums: [
						'Documentation of analysis process that identifies existing habitats and outlines strategies to ensure that these habitats are not disturbed, or, if this is not possible, outlines strategies for mitigation of disturbed habitats.',
						'For each species, a map or equivalent documentation showing areas of important habitat in the surrounding region (GIS analysis and surveys can inform this step). Identify potential and/or likely movement corridors between habitat areas and potential barriers to these corridors on-site. These should include existing barriers as well as those that will result from development.',
						'A site plan and narrative illustrating the measurers taken to provide new habitat, improve connectivity or mitigate adverse impacts of the project.',
						'A monitoring plan to ensure mitigation measurers are effective for preserving animal access. Document collaboration with local and state agencies.'
					]
				},
				{
					letter: 'Does the project facilitate movement between habitats, provide new connections, or otherwise improve existing habitat?',
					nums: [
						'Documentation of habitat improvement strategies, including all elements listed above.'
					]
				},
				{
					letter: 'Does the project increase available habitat, increase connectivity between habitat areas by providing new connections that were not available before, or by removing existing barriers to movement and habitat?',
					nums: [
						'Documentation of habitat expansion strategies, including all elements listed above.'
					]
				}
			]
		},
		{
			number: 'NW3.2',
			synopsis: findQuestion(envision.natural.questions, 'NW3.2').synopsis,
			intent: 'Use appropriate non-invasive species and control or eliminate existing invasive species.',
			metric: 'Degree to which invasive species have been reduced or eliminated.',
			improved: {
				points: '',
				synopsis: '',
				copy: ''
			},
			enhanced: {
				points: '',
				synopsis: '',
				copy: ''
			},
			superior: {
				points: detailsPoints('natural', 'NW3.2', 'Superior'),
				synopsis: 'Locally appropriate and non-invasive.',
				copy: 'The project team works with state and local agencies and other groups to identify and use only locally appropriate plants on the site following completion of construction and commencement of operations. Identify and avoid any noxious plants by referring to lists provided in State Noxious Weeds laws or Federal Noxious Weeds laws. (A)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW3.2', 'Conserving'),
				synopsis: 'Invasive species control.',
				copy: 'The project team works with state and local agencies to identify current invasive species on the project site. The team establishes a comprehensive, multiyear management plan to control invasive species. (A, B)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW3.2', 'Restorative'),
				synopsis: 'Invasive species elimination.',
				copy: 'Programs and actions to eliminate existing invasive species from the project site. (A, B, C)'
			},
			description: [
				'Invasive species include non-indigenous or non-native flora and fauna that adversely affect the habitats or bioregions they invade. The species may dominate the new region, forcing out existing species by outcompeting the native species for nutrients, light, physical space, water, or food.',
				'Invasive species may invade and overcome native species through several mechanisms, including rapid reproduction, high ability to disperse, tolerance to or the ability to quickly adapt to a wide range of environmental conditions and food types.',
				'Non-native, invasive species can lead to the decline or extinction of native species or change the function of an ecosystem, altering fire regimens, nutrient cycling, and hydrology. Invasive plant species may also affect fauna by altering available food systems or changing living habitats.',
				'Humans can be a major factor in the distribution and establishment of invasive species colonies. Many non-native species may not become established and "invasive" until it has been introduced several times, for example through cars constantly driving to the site from another location.'
			],
			benchmark: 'No willful spreading of invasive species but no active management plans either. Invasive species avoided but no active consideration of choice of non-invasive plants to use.',
			perfImprove: 'Active management plans designed to control or eliminate invasive species.',
			list: [
				{
					letter: 'Does the project use only locally appropriate and non-invasive plants on the site?',
					nums: [
						'A list of invasive species in the region, and map all invasive species found on or within 2/3 mile (1000 m) of the site.',
						'Documentation that all species introduced to the site are non-invasive; include a site plan of the landscaping strategy including all vegetation species',
						'Documentation of collaboration with state or local agencies or the qualifications of the biologist, ecologist, or environmental professional.'
					]
				},
				{
					letter: 'Does the project control invasive species already on the site?',
					nums: [
						'A management/maintenance plan that addresses',
						[
							'Prediction and Prevention: Strategies for minimizing potential for invasive species, both plants and animals, to re-appear after initial removal and/or enter the site from nearby areas.',
							'Detection and Management: Strategies for monitoring for and removing invasive species that emerge on-site in the future.'
						]
					]
				},
				{
					letter: 'Does the project actively eliminate existing invasive species and ensure that invasive species stay off the site?',
					nums: [
						'In addition to documentation above, a management plan that includes:',
						[
							'Removal: Elimination of any invasive species on-site',
							'Rehabilitation and Restoration: Methods to restore habitats to pre-invasive state'
						]
					]
				}
			]
		},
		{
			number: 'NW3.3',
			synopsis: findQuestion(envision.natural.questions, 'NW3.3').synopsis,
			intent: 'Restore soils disturbed during construction and previous development to bring back ecological and hydrological functions.',
			metric: 'Percentage of disturbed soils restored.',
			improved: {
				points: '',
				synopsis: '',
				copy: ''
			},
			enhanced: {
				points: '',
				synopsis: '',
				copy: ''
			},
			superior: {
				points: '',
				synopsis: '',
				copy: ''
			},
			conserving: {
				points: detailsPoints('natural', 'NW3.3', 'Conserving'),
				synopsis: 'Construction restoration.',
				copy: 'Restore 100% of soils disturbed during construction in the site\'s vegetated area. Soils must be reused for functions comparable to their original function (i.e., topsoil is used as topsoil, subsoil as subsoil, or subsoil is amended to become functional topsoil). (A)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW3.3', 'Restorative'),
				synopsis: 'Previous development restoration.',
				copy: 'Restore 100%of soils disturbed as a result of previous development. Soils must be reused for functions comparable to their original function (i.e., topsoil is used as topsoil, subsoil as subsoil, or subsoil is amended to become functional topsoil). (B)'
			},
			description: [
				'Restoring soils disturbed during construction in areas that will be re-vegetated (all areas surrounding the constructed works) improves the soil\'s ability to support healthy plants, biological communities, water storage, and water infiltration. Previously developed sites may also benefit from soil restoration.',
			],
			benchmark: 'Soil restoration only to the extent required by regulations and construction permits.',
			perfImprove: 'Restoration of soils disturbed during the construction of the project, extended to restoration of soils disturbed during previous development.',
			list: [
				{
					letter: 'Have 100% of soils disturbed during construction been restored and reused properly?',
					nums: [
						'Documentation of soil restoration activities, areas of disturbance, and areas restored.',
						'Calculations showing that 100% of disturbed soils have been restored.',
						'Documentation of soil reuse.'
					]
				},
				{
					letter: 'Have 100% of soils disturbed by previous development, been restored and reused properly?',
					nums: [
						'Documentation of soil restoration activities, areas of disturbance, and areas restored.',
						'Calculations showing that 100% of disturbed soils have been restored.',
						'Documentation of soil reuse.'
					]
				}
			]
		},
		{
			number: 'NW3.4',
			synopsis: findQuestion(envision.natural.questions, 'NW3.4').synopsis,
			intent: 'Maintain and restore the ecosystem functions of streams, wetlands, waterbodies and their riparian areas.',
			metric: 'Number of functions maintained and restored.',
			improved: {
				points: detailsPoints('natural', 'NW3.4', 'Improved'),
				synopsis: 'Enhance one ecosystem function.',
				copy: 'Maintain or enhance one ecosystem function. (A, B, C, or D)'
			},
			enhanced: {
				points: detailsPoints('natural', 'NW3.4', 'Enhanced'),
				synopsis: 'Enhance two ecosystem functions.',
				copy: 'Maintain or enhance two ecosystem functions. (A, B, C, or D)'
			},
			superior: {
				points: detailsPoints('natural', 'NW3.4', 'Superior'),
				synopsis: 'Enhance three ecosystem functions.',
				copy: 'Maintain or enhance three ecosystem functions. (A, B, C or D)'
			},
			conserving: {
				points: detailsPoints('natural', 'NW3.4', 'Conserving'),
				synopsis: 'Enhance four ecosystem functions.',
				copy: 'Maintain or enhance four ecosystem functions. (A, B, C, or D)'
			},
			restorative: {
				points: detailsPoints('natural', 'NW3.4', 'Restorative'),
				synopsis: 'Restore ecosystem function.',
				copy: 'All four functions are maintained or enhanced and restored so as to have a fully functioning aquatic and riparian ecosystem. (A, B, C, D, E)'
			},
			description: [
				'Waterways, wetlands and their riparian areas provide a number of ecosystem functions. Infrastructure and related development has often impacted the ecosystem functions of these aquatic systems.',
				'There are four main ways to improve ecosystem functions. The first is to maintain or enhance hydrologic connections. The second is to maintain or enhance water quality. Many healthy waterways and wetlands receive much of the normal flow from underground sources. Maintaining or restoring the water quality of surface water and groundwater sources may be documented by showing the current source of the waterways\' normal flow, the water quality of its source water, and how the water quality will be maintained or enhanced. In many areas this may mean disconnecting direct surface water discharges and constructing infiltration Best Management Practices BMPs that will help remove pollutants and cool stormwater, discharging to the water body through groundwater.',
				'Other ways include maintaining or enhancing habitat. Past infrastructure projects may have removed the natural riffle, pool, and meander sequence of rivers and streams important to provide a healthy ecosystem. Lakes and watercourses may have had structures built on their shoreline destroying the shoreline habitat for plants and animals. Lastly, maintain or enhance sediment transport. Waterways not only move water but sediment. Natural in-waterway sediment transport is important to a healthily functioning ecosystem.'
			],
			benchmark: 'No meaningful action taken to maintain and restore ecosystem functions of waterways and wetlands on or adjacent to the project.',
			perfImprove: 'Choose systems to maintain or enhance, based upon individual characteristics, challenges, and available resources for each individual project. Restore any disturbed functions.',
			list: [
				{
					letter: 'Does the project maintain or enhance hydrologic connection?',
					nums: [
						'For streams, rivers and lakes documentation showing how the waterway is connected or proposed to be connected to its riparian floodplain at a six-month to two-year frequency flow event.',
						'For wetlands, documentation showing that structures that drain wetlands will be removed and/or appropriate sources of groundwater or surface waters are reconnected or diverted or maintained.'
					]
				},
				{
					letter: 'Does the project maintain or enhance water quality?',
					nums: [
						'Documentation showing the current source of the waterways\' normal flow, the water quality of its source water, and how the water quality will be maintained or enhanced.'
					]
				},
				{
					letter: 'Does the project maintain or enhance habitat?',
					nums: [
						'A habitat survey of the waterbody and reference areas, by a recognized professional, and a plan to maintain or enhance the habitat for aquatic and riparian species by plantings and appropriate physical modifications. This survey may include the location and proposed mitigation of existing obstructions to habitat connectivity, such as dams, roadway structures and other infrastructure that may block aquatic or shoreline species migration.'
					]
				},
				{
					letter: 'Does the project maintain or restore sediment transport?',
					nums: [
						'Documentation demonstrating that sediment transport will not be disrupted by the proposed project and existing sources of sediment obstruction are removed or mitigated and, if appropriate, sediment is removed. Reports from qualified resource professionals are required as part of the documentation.'
					]
				},
				{
					letter: 'Does the project maintain all four ecosystem functions and any fully restore any disturbed functions?',
					nums: [
						'Documentation provided by a resource professional team outlining strategies for ecosystem functions and description of, and restoration plan for, any disturbed ecosystem functions.'
					]
				}
			]
		}
	]
}