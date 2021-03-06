const {
	GraphQLString,
	GraphQLList,
	GraphQLNonNull,
	GraphQLInputObjectType,
} = require('graphql');
const CodeScalar = require('../scalars/code.scalar.js');

/**
 * @name exports
 * @summary Contributor Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'Contributor_Input',
	description: 'Base StructureDefinition for Contributor Type',
	fields: () => ({
		_id: {
			type: require('./element.input.js'),
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		id: {
			type: GraphQLString,
			description:
				'unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces.',
		},
		extension: {
			type: new GraphQLList(require('./extension.input.js')),
			description:
				'May be used to represent additional information that is not part of the basic definition of the element. In order to make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension.',
		},
		_type: {
			type: require('./element.input.js'),
			description: 'The type of contributor.',
		},
		// valueSetReference: http://hl7.org/fhir/ValueSet/contributor-type
		type: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The type of contributor.',
		},
		_name: {
			type: require('./element.input.js'),
			description:
				'The name of the individual or organization responsible for the contribution.',
		},
		name: {
			type: new GraphQLNonNull(GraphQLString),
			description:
				'The name of the individual or organization responsible for the contribution.',
		},
		contact: {
			type: new GraphQLList(require('./contactdetail.input.js')),
			description:
				'Contact details to assist a user in finding and communicating with the contributor.',
		},
	}),
});
