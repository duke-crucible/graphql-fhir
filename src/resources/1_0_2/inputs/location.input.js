const {
	GraphQLNonNull,
	GraphQLEnumType,
	GraphQLList,
	GraphQLString,
	GraphQLInputObjectType,
} = require('graphql');
const IdScalar = require('../scalars/id.scalar.js');
const UriScalar = require('../scalars/uri.scalar.js');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Location Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Location_Input',
	description: 'Base StructureDefinition for Location Resource',
	fields: () => ({
		resourceType: {
			type: new GraphQLNonNull(
				new GraphQLEnumType({
					name: 'Location_Enum_input',
					values: { Location: { value: 'Location' } },
				}),
			),
			description: 'Type of resource',
		},
		_id: {
			type: require('./element.input.js'),
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		id: {
			type: IdScalar,
			description:
				'The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes.',
		},
		meta: {
			type: require('./meta.input.js'),
			description:
				'The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content may not always be associated with version changes to the resource.',
		},
		_implicitRules: {
			type: require('./element.input.js'),
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		implicitRules: {
			type: UriScalar,
			description:
				'A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content.',
		},
		_language: {
			type: require('./element.input.js'),
			description: 'The base language in which the resource is written.',
		},
		language: {
			type: CodeScalar,
			description: 'The base language in which the resource is written.',
		},
		text: {
			type: require('./narrative.input.js'),
			description:
				"A human-readable narrative that contains a summary of the resource, and may be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it 'clinically safe' for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety.",
		},
		contained: {
			type: new GraphQLList(GraphQLString),
			description:
				'These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		modifierExtension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the resource, and that modifies the understanding of the element that contains it. Usually modifier elements provide negation or qualification. In order to make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.',
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input.js')),
			description:
				'Unique code or number identifying the location to its users.',
		},
		_status: {
			type: require('./element.input.js'),
			description: 'active | suspended | inactive.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/location-status
		status: {
			type: CodeScalar,
			description: 'active | suspended | inactive.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'Name of the location as used by humans. Does not need to be unique.',
		},
		name: {
			type: GraphQLString,
			description:
				'Name of the location as used by humans. Does not need to be unique.',
		},
		_description: {
			type: require('./element.input.js'),
			description:
				'Description of the Location, which helps in finding or referencing the place.',
		},
		description: {
			type: GraphQLString,
			description:
				'Description of the Location, which helps in finding or referencing the place.',
		},
		_mode: {
			type: require('./element.input.js'),
			description:
				'Indicates whether a resource instance represents a specific location or a class of locations.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/location-mode
		mode: {
			type: CodeScalar,
			description:
				'Indicates whether a resource instance represents a specific location or a class of locations.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/v3-ServiceDeliveryLocationRoleType
		type: {
			type: require('./codeableconcept.input.js'),
			description: 'Indicates the type of function performed at the location.',
		},
		telecom: {
			type: new GraphQLList(require('./contactpoint.input.js')),
			description:
				'The contact details of communication devices available at the location. This can include phone numbers, fax numbers, mobile numbers, email addresses and web sites.',
		},
		address: {
			type: require('./address.input.js'),
			description: 'Physical location.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/location-physical-type
		physicalType: {
			type: require('./codeableconcept.input.js'),
			description:
				'Physical form of the location, e.g. building, room, vehicle, road.',
		},
		position: {
			type: require('./locationposition.input.js'),
			description:
				'The absolute geographic location of the Location, expressed using the WGS84 datum (This is the same co-ordinate system used in KML).',
		},
		managingOrganization: {
			type: GraphQLString,
			description:
				'The organization responsible for the provisioning and upkeep of the location.',
		},
		partOf: {
			type: GraphQLString,
			description:
				'Another Location which this Location is physically part of.',
		},
	}),
});
