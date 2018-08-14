const CodeScalar = require('../scalars/code.scalar');
const DateTimeScalar = require('../scalars/datetime.scalar');
const InstantScalar = require('../scalars/instant.scalar');
const { GraphQLInputObjectType, GraphQLEnumType, GraphQLNonNull, GraphQLString, GraphQLList } = require('graphql');

const { extendSchema } = require('../../../utils/schema.utils');

// TODO: Verify this is the correct resourceType
let DiagnosticReportResourceInputType = new GraphQLEnumType({
	name: 'DiagnosticReportResourceInputType',
	values: {
		DiagnosticReport: { value: 'DiagnosticReport' }
	}
});

/**
 * @name exports
 * @summary DiagnosticReport Input Schema
 */
module.exports = new GraphQLInputObjectType({
	name: 'DiagnosticReport_Input',
	description: 'Base StructureDefinition for DiagnosticReport Resource.',
	fields: () => extendSchema(require('./domainresource.input'), {
		resourceType: {
			type: new GraphQLNonNull(DiagnosticReportResourceInputType),
			description: 'Type of this resource'
		},
		identifier: {
			type: new GraphQLList(require('./identifier.input')),
			description: 'Identifiers assigned to this report by the performer or other systems.'
		},
		basedOn: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Details concerning a test or procedure requested.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-report-status
		status: {
			type: new GraphQLNonNull(CodeScalar),
			description: 'The status of the diagnostic report as a whole.'
		},
		_status: {
			type: require('./element.input'),
			description: 'The status of the diagnostic report as a whole.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/diagnostic-service-sections
		category: {
			type: require('./codeableconcept.input'),
			description: 'A code that classifies the clinical discipline, department or diagnostic service that created the report (e.g. cardiology, biochemistry, hematology, MRI). This is used for searching, sorting and display purposes.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/report-codes
		code: {
			type: new GraphQLNonNull(require('./codeableconcept.input')),
			description: 'A code or name that describes this diagnostic report.'
		},
		subject: {
			type: require('./reference.input'),
			description: 'The subject of the report. Usually, but not always, this is a patient. However diagnostic services also perform analyses on specimens collected from a variety of other sources.'
		},
		context: {
			type: require('./reference.input'),
			description: 'The healthcare event  (e.g. a patient and healthcare provider interaction) which this DiagnosticReport per is about.'
		},
		effectiveDateTime: {
			type: DateTimeScalar,
			description: 'The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.'
		},
		_effectiveDateTime: {
			type: require('./element.input'),
			description: 'The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.'
		},
		effectivePeriod: {
			type: require('./period.input'),
			description: 'The time or time-period the observed values are related to. When the subject of the report is a patient, this is usually either the time of the procedure or of specimen collection(s), but very often the source of the date/time is not known, only the date/time itself.'
		},
		issued: {
			type: InstantScalar,
			description: 'The date and time that this version of the report was released from the source diagnostic service.'
		},
		_issued: {
			type: require('./element.input'),
			description: 'The date and time that this version of the report was released from the source diagnostic service.'
		},
		performer: {
			type: new GraphQLList(require('./diagnosticreportperformer.input')),
			description: 'Indicates who or what participated in producing the report.'
		},
		specimen: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Details about the specimens on which this diagnostic report is based.'
		},
		result: {
			type: new GraphQLList(require('./reference.input')),
			description: 'Observations that are part of this diagnostic report. Observations can be simple name/value pairs (e.g. \'atomic\' results), or they can be grouping observations that include references to other members of the group (e.g. \'panels\').'
		},
		imagingStudy: {
			type: new GraphQLList(require('./reference.input')),
			description: 'One or more links to full details of any imaging performed during the diagnostic investigation. Typically, this is imaging performed by DICOM enabled modalities, but this is not required. A fully enabled PACS viewer can use this information to provide views of the source images.'
		},
		image: {
			type: new GraphQLList(require('./diagnosticreportimage.input')),
			description: 'A list of key images associated with this report. The images are generally created during the diagnostic process, and may be directly of the patient, or of treated specimens (i.e. slides of interest).'
		},
		conclusion: {
			type: GraphQLString,
			description: 'Concise and clinically contextualized impression / summary of the diagnostic report.'
		},
		_conclusion: {
			type: require('./element.input'),
			description: 'Concise and clinically contextualized impression / summary of the diagnostic report.'
		},
		// TODO: ValueSetReference: http://hl7.org/fhir/ValueSet/clinical-findings
		codedDiagnosis: {
			type: new GraphQLList(require('./codeableconcept.input')),
			description: 'Codes for the conclusion.'
		},
		presentedForm: {
			type: new GraphQLList(require('./attachment.input')),
			description: 'Rich text representation of the entire result as issued by the diagnostic service. Multiple formats are allowed but they SHALL be semantically equivalent.'
		}
	})
});