import { drizzle } from "drizzle-orm/libsql";
import {
	Tag,
	Accessibility,
	Language,
	Accreditation,
	Provider,
	ApplicationProcess,
	Requirement,
	Day,
	Operator
} from "./src/lib/types/enums";
import { createClient } from "@libsql/client";
import { services, requirements, locations, hours } from "./src/lib/schemas/drizzle";
import * as schema from "./src/lib/schemas/drizzle";

const db = drizzle(
	createClient({
		url: "http://127.0.0.1:8080",
		authToken: undefined
	}),
	{ schema }
);

const alwaysOpen = (locationId: string) => [
	{
		locationId: "1",
		day: Day.Monday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Tuesday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Wednesday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Thursday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Friday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Sunday,
		open: -1,
		close: -1
	}
];

const unknownHours = (locationId: string) => [
	{
		locationId: "1",
		day: Day.Monday,
		open: 0,
		close: 0
	},
	{
		locationId: "1",
		day: Day.Tuesday,
		open: 0,
		close: 0
	},
	{
		locationId: "1",
		day: Day.Wednesday,
		open: 0,
		close: 0
	},
	{
		locationId: "1",
		day: Day.Thursday,
		open: 0,
		close: 0
	},
	{
		locationId: "1",
		day: Day.Friday,
		open: 0,
		close: 0
	},
	{
		locationId: "1",
		day: Day.Saturday,
		open: 0,
		close: 0
	},
	{
		locationId: "1",
		day: Day.Sunday,
		open: 0,
		close: 0
	}
];

const rows: (
	| typeof services.$inferInsert
	| typeof requirements.$inferInsert
	| typeof locations.$inferInsert
	| typeof hours.$inferInsert
)[] = [
	{
		id: "1",
		name: "",
		previewDescription: "",
		description: "",
		provider: Provider.Encompass,
		email: "",
		website: "",
		tags: [],
		fee: "",
		displayRequirements: [],
		minAge: -1,
		maxAge: -1,
		minIncome: -1,
		maxIncome: -1,
		languages: [],
		accessibility: Accessibility.Full,
		applicationProcess: [],
		applicationLink: "",
		accreditations: [],
		possibleUnits: -1,
		images: []
	},
	{
		serviceId: "1",
		operator: Operator.AND,
		requirements: []
	},
	{
		id: "1",
		serviceId: "1",
		name: "",
		phone: "",
		address: "",
		latitude: 0,
		longitude: 0
	},
	{
		locationId: "1",
		day: Day.Monday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Tuesday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Wednesday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Thursday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Friday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "1",
		day: Day.Sunday,
		open: -1,
		close: -1
	},

	{
		id: "1",
		name: "Santa Cruz Residential Recovery",
		previewDescription:
			"Located just outside of downtown Santa Cruz, in a historic Victorian home, the Encompass Santa Cruz Residential Recovery program offers a 30-bed co-ed residential program, serving clients for 30-90 days based on individual needs.",
		description:
			"The Encompass Santa Cruz Residential Recovery is staffed by a highly skilled and trained team where certified clinicians help clients focus on issues surrounding recovery from substance use and co-occurring disorders. Program activities include evidence-based trauma informed and cognitive behavior therapies (CBT), Dialectical Behavioral Therapy (DBT), as well as focused individual and group counseling, pro-social life skill building, mindfulness and daily house meetings. When applying, the substance use disorder clinic submits all neccesary documents and authorizes admission.",
		provider: Provider.Encompass,
		email: "crs@encompasscs.org",
		website: "https://www.encompasscs.org/santa_cruz_residential_recovery",
		tags: [
			Tag.DisorderRecovery,
			Tag.Counseling,
			Tag.TransitionalHousing,
			Tag.SubstanceRecovery,
			Tag.Education,
			Tag.AcceptsMediCal,
			Tag.Women,
			Tag.Men
		],
		displayRequirements: [
			"Must be at least 18 years old.",
			"Must have a substance use disorder diagnosis with either significant impairment in key life functioning areas or likely risk of significant deterioration in important life areas.",
			"For those with active Medi-Cal insurance, have a diagnosis of Diagnostic and Statistical Manual of Mental Disorders (DSM) substance use disorder.",
			"For those with active Medi-Cal insurance, must meet the American Society of Addiction Medicine criteria 3.1, qualifying you for clinically managed low-intensity residential treatment.",
			"Tobacco-Related and Non-Substance-Related Disorders are not primary diagnoses for this program.",
			"Must be able to benefit from the program.",
			"Must be capable of self-care.",
			"Must not pose immediate danger to self or others."
		],
		minAge: 18,
		languages: [Language.English, Language.Spanish],
		applicationProcess: [ApplicationProcess.Call],
		accreditations: [Accreditation.CARF, Accreditation.SDHCS],
		possibleUnits: 30,
		images: ["43dea9c0-191f-4cdb-e870-73409f159300"]
	},
	{
		id: "1",
		serviceId: "1",
		name: "Santa Cruz",
		phone: "0018314232003",
		address: "716 Ocean St, Santa Cruz, CA 95060",
		latitude: 36.978727643122475,
		longitude: -122.02060989601536
	},
	...alwaysOpen("1"),
	{
		serviceId: "1",
		operator: Operator.AND,
		requirements: [
			Requirement.SubstanceDisorder,
			Requirement.Benefit,
			Requirement.SelfCare,
			Requirement.Safe
		]
	},

	{
		id: "2",
		name: "ALTO In-Custody Anger Management",
		previewDescription:
			"Encompass' ALTO Counseling Program provides anger management classes at the local county jail facilities and probation success centers in Watsonville and Santa Cruz.",
		description:
			"Encompass' ALTO Counseling Program provides anger management classes at the local county jail facilities and probation success centers in Watsonville and Santa Cruz.",
		provider: Provider.EncompassALTO,
		email: "crs@encompasscs.org",
		website: "https://www.encompasscs.org/alto",
		tags: [Tag.DisorderRecovery, Tag.Women, Tag.Men, Tag.ForIncacerated, Tag.Counseling],
		displayRequirements: [
			"Must be at least 18 years old.",
			"Must be incarcerated in a county jail or on probation."
		],
		minAge: 18,
		accessibility: Accessibility.Full,
		applicationProcess: [ApplicationProcess.None],
		accreditations: [Accreditation.CARF, Accreditation.SDHCS],
		images: ["38b58f86-f36e-418f-b9fd-cd6144e91200"]
	},
	{
		id: "2",
		serviceId: "2",
		name: "Santa Cruz County Jail",
		phone: "0018314232003",
		address: "259 Water St, Santa Cruz, CA 95060",
		latitude: 36.98016912581793,
		longitude: -122.02392405631599
	},
	...unknownHours("2"),
	{
		serviceId: "2",
		operator: Operator.AND,
		requirements: [Requirement.Incacerated]
	},

	{
		id: "3",
		name: "ALTO In-Custody Substance Use Disorder Treatment",
		previewDescription:
			"Encompass' ALTO Counseling Program provides substance use disorder treatment at the local county jail facilities and probation success centers in Watsonville and Santa Cruz.",
		description:
			"Encompass' ALTO Counseling Program provides substance use disorder treatment at the local county jail facilities and probation success centers in Watsonville and Santa Cruz.",
		provider: Provider.EncompassALTO,
		email: "crs@encompasscs.org",
		website: "https://www.encompasscs.org/alto",
		tags: [Tag.SubstanceRecovery, Tag.Women, Tag.Men, Tag.ForIncacerated, Tag.Counseling],
		displayRequirements: [
			"Must be at least 18 years old.",
			"Must be incarcerated in a county jail or on probation."
		],
		minAge: 18,
		accessibility: Accessibility.Full,
		applicationProcess: [ApplicationProcess.None],
		accreditations: [Accreditation.CARF, Accreditation.SDHCS],
		images: ["38b58f86-f36e-418f-b9fd-cd6144e91200"]
	},
	{
		id: "3",
		serviceId: "3",
		name: "Santa Cruz County Jail",
		phone: "0018314232003",
		address: "259 Water St, Santa Cruz, CA 95060",
		latitude: 36.98016912581793,
		longitude: -122.02392405631599
	},
	...unknownHours("3"),
	{
		serviceId: "3",
		operator: Operator.AND,
		requirements: [Requirement.Incacerated]
	},

	{
		id: "4",
		name: "ALTO Counseling",
		previewDescription:
			"Encompass' ALTO Counseling Center offers outpatient treatment for those living with Substance Use Disorder (SUD) and drinking driver programs. Outpatient treatment can help you establish a satisfying life without substances while addressing the medical and social complications.",
		description:
			"ALTO Counseling Center, operated by Encompass, provides comprehensive substance abuse treatment and court-mandated services in Santa Cruz and Watsonville. Their core services include confidential outpatient substance use disorder (SUD) treatment through individual and group counseling, with free services available to Medi-Cal beneficiaries and sliding-scale fees for others. They offer specialized programs including state-approved drinking driver programs (for first and multiple offenses), court diversion options, anger management classes, and a 52-week batterers intervention program. Key advantages include flexible scheduling, proven treatment approaches, professional counselors, and a comfortable environment, making it particularly suitable for individuals seeking either voluntary treatment or fulfilling court requirements.",
		provider: Provider.EncompassALTO,
		email: "crs@encompasscs.org",
		website: "https://www.encompasscs.org/alto",
		tags: [
			Tag.SubstanceRecovery,
			Tag.AcceptsMediCal,
			Tag.DUIPrograms,
			Tag.Counseling,
			Tag.Women,
			Tag.Men
		],
		fee: "Sliding scale",
		displayRequirements: ["Must be at least 18 years old."],
		minAge: 18,
		applicationProcess: [ApplicationProcess.Call],
		accreditations: [Accreditation.CARF, Accreditation.SDHCS],
		images: ["a9237404-7adf-4a5a-8e77-e03414966000", "b441bcf9-6f95-439c-cf12-f2f6ad99fb00"]
	},
	{
		id: "4",
		serviceId: "4",
		name: "Santa Cruz",
		phone: "0018314232003",
		address: "716 Ocean St, Santa Cruz, CA 95060",
		latitude: 36.978719276870095,
		longitude: -122.02064090807508
	},
	{
		locationId: "4",
		day: Day.Monday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "4",
		day: Day.Tuesday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "4",
		day: Day.Wednesday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "4",
		day: Day.Thursday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "4",
		day: Day.Friday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "4",
		day: Day.Saturday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "4",
		day: Day.Sunday,
		open: 1000,
		close: 1800
	},
	{
		id: "5",
		serviceId: "4",
		name: "Watsonville",
		phone: "0018317282233",
		address: "585-B Auto Center Dr, Watsonville, CA 95076",
		latitude: 36.91693063831368,
		longitude: -121.76707652790947
	},
	{
		locationId: "5",
		day: Day.Monday,
		open: 830,
		close: 1630
	},
	{
		locationId: "5",
		day: Day.Tuesday,
		open: 830,
		close: 1630
	},
	{
		locationId: "5",
		day: Day.Wednesday,
		open: 830,
		close: 1630
	},
	{
		locationId: "5",
		day: Day.Thursday,
		open: 830,
		close: 1630
	},
	{
		locationId: "5",
		day: Day.Friday,
		open: 830,
		close: 1630
	},
	{
		locationId: "5",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "5",
		day: Day.Sunday,
		open: -1,
		close: -1
	},

	{
		id: "5",
		name: "Casa Pacfic",
		previewDescription:
			"Casa Pacific is part of an innovative project centered around work and meaningful daily activities, as the core of the co-occurring disorders treatment approach.",
		description:
			"Casa Pacific offers a comprehensive recovery program that combines substance abuse treatment with vocational training and life skills development. The facility specializes in treating co-occurring disorders through a work-focused approach, partnering with local organizations to provide job training, volunteer opportunities, and social activities. Residents receive individualized support for maintaining sobriety while developing practical skills for independent living.",
		provider: Provider.Encompass,
		email: "crs@encompasscs.org",
		website: "https://www.encompasscs.org/casa_pacific",
		tags: [
			Tag.DisorderRecovery,
			Tag.SubstanceRecovery,
			Tag.Counseling,
			Tag.Education,
			Tag.Employment,
			Tag.JobAssistance,
			Tag.VocationalTraining,
			Tag.Recreation,
			Tag.Women,
			Tag.Men
		],
		displayRequirements: [
			"Must be at least 18 years old.",
			"Must have a referral through Santa Cruz County Behavioral Health.",
			"Must have active Medi-Cal insurance or be indigent with the county.",
			"Must have a diagnosis of a singificant substance use disorder.",
			"Must be able to benefit from the program.",
			"Must be capable of self-care.",
			"Must not pose immediate danger to self or others."
		],
		minAge: 18,
		applicationProcess: [ApplicationProcess.Referral],
		accreditations: [Accreditation.CARF],
		images: ["2871be45-ece3-477b-331b-8f5df2030300"]
	},
	{
		id: "6",
		serviceId: "5",
		name: "Community Connections Mariposa Center",
		phone: "008317688132",
		address: "10 Carr St, Watsonville, CA 95076",
		latitude: 36.91245085693948,
		longitude: -121.7545447790781
	},
	...unknownHours("6"),
	{
		id: "7",
		serviceId: "5",
		name: "Santa Cruz County Behavioral Health",
		phone: "0018009522335",
		address: "1080 Emeline Ave, Santa Cruz, CA 95060",
		latitude: 36.99244746957373,
		longitude: -122.01720049529773
	},
	{
		locationId: "7",
		day: Day.Monday,
		open: 800,
		close: 1630
	},
	{
		locationId: "7",
		day: Day.Tuesday,
		open: 800,
		close: 1630
	},
	{
		locationId: "7",
		day: Day.Wednesday,
		open: 800,
		close: 1630
	},
	{
		locationId: "7",
		day: Day.Thursday,
		open: 800,
		close: 1630
	},
	{
		locationId: "7",
		day: Day.Friday,
		open: 800,
		close: 1630
	},
	{
		locationId: "7",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "7",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		serviceId: "5",
		operator: Operator.AND,
		requirements: [
			Requirement.Referral,
			Requirement.Diagnosis,
			Requirement.Benefit,
			Requirement.SelfCare,
			Requirement.Safe
		]
	},
	{
		serviceId: "5",
		operator: Operator.OR,
		requirements: [Requirement.MediCal, Requirement.IndigentFunding]
	},

	{
		id: "6",
		name: "Downtown Outreach",
		previewDescription:
			"The Downtown Outreach program is responsible for providing outreach to adults struggling with homelessness and/or mental illness in the Santa Cruz downtown corridor.",
		description:
			"The Downtown Outreach program in Santa Cruz provides critical support to homeless adults and those experiencing mental illness in the downtown area. Through crisis intervention and relationship-based outreach, the team works to prevent psychiatric hospitalizations and incarceration while connecting clients to essential resources for housing, healthcare, substance use treatment, and mental health services, ultimately aiming to improve their quality of life and stability.",
		provider: Provider.Encompass,
		email: "crs@encompasscs.org",
		website: "https://www.encompasscs.org/dow",
		tags: [Tag.GeneralLinkage, Tag.Women, Tag.Men],
		displayRequirements: ["Must be experiencing homelessness in or around downtown Santa Cruz."],
		applicationProcess: [ApplicationProcess.Call],
		accreditations: [Accreditation.CARF],
		images: ["a9237404-7adf-4a5a-8e77-e03414966000", "f152ce88-6dff-449a-d334-bb8d6d91e600"]
	},
	{
		id: "8",
		serviceId: "6",
		name: "Encompass Headquarters",
		phone: "0018312263523",
		address: "380 Encinal St Suite 200, Santa Cruz, CA 95060",
		latitude: 36.988278901201134,
		longitude: -122.0373666002301
	},
	{
		locationId: "8",
		day: Day.Monday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "8",
		day: Day.Tuesday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "8",
		day: Day.Wednesday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "8",
		day: Day.Thursday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "8",
		day: Day.Friday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "8",
		day: Day.Saturday,
		open: 1000,
		close: 1800
	},
	{
		locationId: "8",
		day: Day.Sunday,
		open: 1000,
		close: 1800
	},
	{
		serviceId: "6",
		operator: Operator.AND,
		requirements: [Requirement.Homeless]
	},

	{
		id: "7",
		name: "Early Head Start",
		previewDescription:
			"Early Head Start provides high quality child development services to the most vulnerable young children of Santa Cruz County in their pre-natal months and first three years.",
		description:
			"Early Head Start is a comprehensive early childhood development program serving vulnerable children from prenatal to age 3 and their families in Santa Cruz County. The program offers two main service options: a home visiting program featuring weekly 1.5-hour visits and monthly socialization groups, and a center-based program providing full-day childcare five days a week with meals included. Both options focus on enhancing children's development across physical, social, emotional, and cognitive domains while supporting parents through education, capacity building, and health services. Key benefits include individualized family support, professional child development guidance, and the establishment of strong educational foundations during critical early years. Services are available across multiple locations including Watsonville, Freedom, and San Lorenzo Valley, making it accessible to families throughout the region.",
		provider: Provider.Encompass,
		website: "https://www.encompasscs.org/early_head_start",
		tags: [
			Tag.ForFamilies,
			Tag.ForChildren,
			Tag.ParentalSupport,
			Tag.ForMothers,
			Tag.Education,
			Tag.AtHome,
			Tag.Women,
			Tag.Men
		],
		displayRequirements: [
			"Must be a child from prenatal to age 3.",
			"Must have a family income at or below the federal poverty guidelines OR",
			"Must be a foster child OR",
			"Must be a child from a family receiving CalWORKs or SSI OR",
			"Must be a homeless child.",
			"Must have 1040-A tax form to prove eligibility.",
			"Must have a copy of birth or hospital certificates, medical insurance card, or a U.S. passport for age verification.",
			"Must have a copy of child immunization records."
		],
		minAge: 0,
		maxAge: 3,
		maxIncome: 31200,
		applicationProcess: [ApplicationProcess.InPerson, ApplicationProcess.Online],
		applicationLink: "https://www.encompasscs.org/eligibility_application",
		accreditations: [Accreditation.CARF],
		images: [
			"57233a7a-f411-4c44-79aa-c1fb164e7a00",
			"bffb63ce-0107-44b9-e7fc-5c9846826c00",
			"2b9d02ba-4684-4c72-c08f-3c1265a75e00",
			"0a705efe-7ab6-47b0-4e94-d6b4b7579000"
		]
	},
	{
		id: "9",
		serviceId: "7",
		name: "Child and Family Development Programs Main Office",
		phone: "0018317243885",
		address: "225 Westridge Dr, Watsonville, CA 95076",
		latitude: 36.91332778885892,
		longitude: -121.78311403879572
	},
	{
		id: "10",
		serviceId: "9",
		name: "Baskin Toddler Center",
		address: "6500 Soquel Drive Building 1700, Aptos, CA 95003",
		latitude: 36.954025460134055,
		longitude: -122.04888907548812
	},
	{
		id: "11",
		serviceId: "7",
		name: "Natural Bridges Toddler Center",
		phone: "0018314296222",
		address: "255 Swift St, Santa Cruz, CA 95060",
		latitude: 36.954025460134055,
		longitude: -122.04888907548812
	},
	{
		id: "12",
		serviceId: "7",
		name: "Starlight Children’s Toddler Center",
		address: "360 Arthur Rd, Watsonville, CA 95076",
		latitude: 36.92174304351906,
		longitude: -121.77005133235751
	},
	{
		locationId: "9",
		day: Day.Monday,
		open: 900,
		close: 1700
	},
	{
		locationId: "9",
		day: Day.Tuesday,
		open: 900,
		close: 1700
	},
	{
		locationId: "9",
		day: Day.Wednesday,
		open: 900,
		close: 1700
	},
	{
		locationId: "9",
		day: Day.Thursday,
		open: 900,
		close: 1700
	},
	{
		locationId: "9",
		day: Day.Friday,
		open: 900,
		close: 1700
	},
	{
		locationId: "9",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "9",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		locationId: "10",
		day: Day.Monday,
		open: 815,
		close: 1615
	},
	{
		locationId: "10",
		day: Day.Tuesday,
		open: 815,
		close: 1615
	},
	{
		locationId: "10",
		day: Day.Wednesday,
		open: 815,
		close: 1615
	},
	{
		locationId: "10",
		day: Day.Thursday,
		open: 815,
		close: 1615
	},
	{
		locationId: "10",
		day: Day.Friday,
		open: 815,
		close: 1615
	},
	{
		locationId: "10",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "10",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		locationId: "11",
		day: Day.Monday,
		open: 830,
		close: 1630
	},
	{
		locationId: "11",
		day: Day.Tuesday,
		open: 830,
		close: 1630
	},
	{
		locationId: "11",
		day: Day.Wednesday,
		open: 830,
		close: 1630
	},
	{
		locationId: "11",
		day: Day.Thursday,
		open: 830,
		close: 1630
	},
	{
		locationId: "11",
		day: Day.Friday,
		open: 830,
		close: 1630
	},
	{
		locationId: "11",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "11",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	...unknownHours("12"),
	{
		serviceId: "7",
		operator: Operator.OR,
		requirements: [
			Requirement.Poverty,
			Requirement.CalWORKs,
			Requirement.SSI,
			Requirement.FosterChild,
			Requirement.Homeless
		]
	},

	{
		id: "8",
		name: "Head Start",
		previewDescription:
			"Head Start provides high quality child development services to the most vulnerable young children of Santa Cruz County.",
		description:
			"Head Start offers comprehensive early childhood education programs for children aged 3-5, featuring two main schooling options: a part-day program (3.5 hours, 9 months) and an extended-day program (6 hours, 11 months), both running Tuesday through Friday. These free services include nutritious meals, developmentally appropriate curriculum focusing on literacy and math, physical activity, social-emotional learning, and a book lending program, complemented by health screenings, parent education, and social services. Both programs require family participation through home visits and parent-teacher conferences, making it an holistic approach to early childhood development and school readiness.",
		provider: Provider.Encompass,
		website: "https://www.encompasscs.org/head_start",
		tags: [
			Tag.ForFamilies,
			Tag.ForChildren,
			Tag.ParentalSupport,
			Tag.ForMothers,
			Tag.Education,
			Tag.Meals,
			Tag.Men,
			Tag.Women
		],
		displayRequirements: [
			"Must be a child aged 3-5.",
			"Must have a family income at or below the federal poverty guidelines OR",
			"Must be a foster child OR",
			"Must be a child from a family receiving CalWORKs or SSI OR",
			"Must be a homeless child.",
			"Must have 1040-A tax form to prove eligibility.",
			"Must have a copy of birth or hospital certificates, medical insurance card, or a U.S. passport for age verification.",
			"Must have a copy of child immunization records."
		],
		minAge: 3,
		maxAge: 5,
		maxIncome: 31200,
		languages: [Language.English, Language.Spanish],
		applicationProcess: [ApplicationProcess.InPerson, ApplicationProcess.Online],
		applicationLink: "https://www.encompasscs.org/eligibility_application",
		accreditations: [Accreditation.CARF],
		images: [
			"57233a7a-f411-4c44-79aa-c1fb164e7a00",
			"04f54693-8270-4a96-f5cf-411d7e948b00",
			"",
			"bffb63ce-0107-44b9-e7fc-5c9846826c00",
			"2b9d02ba-4684-4c72-c08f-3c1265a75e00",
			"9e3cf8cb-88cc-42dd-d70c-8595b6f37c00",
			"4ea54ecf-65c3-4bd9-6a03-639291781b00",
			"12b3a0d5-ad76-43e7-6dba-b223969c7200",
			"9c6e0922-3d46-441a-9204-125d361a9800",
			"138fe434-2e0b-4ed1-2d1c-205057ac0600",
			"5bd37504-9ace-4bc0-3b89-5ec852a38100",
			"5bab4dd1-f1da-4ce1-5f45-ad064b69cb00"
		]
	},
	{
		id: "13",
		serviceId: "8",
		name: "Child and Family Development Programs Main Office",
		phone: "0018317243885",
		address: "225 Westridge Dr, Watsonville, CA 95076",
		latitude: 36.91332778885892,
		longitude: -121.78311403879572
	},
	{
		id: "14",
		serviceId: "8",
		name: "Branciforte",
		phone: "0018316883802",
		address: "175 Benito Ave, Santa Cruz, CA 95062",
		latitude: 36.98068847850556,
		longitude: -122.01212768330898
	},
	{
		id: "15",
		serviceId: "8",
		name: "Ludlow Preschool",
		phone: "0018313352447",
		address: "7101 Hwy 9, Felton, CA 95018",
		latitude: 37.06150474720248,
		longitude: -122.08425350322715
	},
	{
		id: "16",
		serviceId: "8",
		name: "Natural Bridges Toddler Center",
		phone: "0018314296222",
		address: "255 Swift St, Santa Cruz, CA 95060",
		latitude: 36.954025460134055,
		longitude: -122.04888907548812
	},
	{
		id: "17",
		serviceId: "8",
		name: "Baskin Toddler Center",
		address: "6500 Soquel Drive Building 1700, Aptos, CA 95003",
		latitude: 36.954025460134055,
		longitude: -122.04888907548812
	},
	{
		id: "18",
		serviceId: "8",
		name: "Soquel Headstart",
		phone: "0018317243885",
		address: "3060 Cunnison Ln, Soquel, CA 95073",
		latitude: 36.98806532897861,
		longitude: -121.94261325569525
	},
	{
		id: "19",
		serviceId: "8",
		name: "Angela Agbayani Center",
		address: "140 Herman Ave, Watsonville, CA 95076",
		latitude: 36.92499788169875,
		longitude: -121.78517284987039
	},
	{
		id: "20",
		serviceId: "8",
		name: "Martinelli Preschool",
		phone: "0018317223640",
		address: "441 Rogers Ave, Watsonville, CA 95076",
		latitude: 36.92835775032019,
		longitude: -121.75742175628376
	},
	{
		id: "21",
		serviceId: "8",
		name: "Terry Jimenez Center",
		phone: "0018317228663",
		address: "201 Brewington Ave, Watsonville, CA 95076",
		latitude: 36.91832171092066,
		longitude: -121.75195744016463
	},
	{
		id: "22",
		serviceId: "8",
		name: "Via del Mar Preschool",
		address: "120 W Beach St, Watsonville, CA 95076",
		latitude: 36.90901250171332,
		longitude: -121.75895624901817
	},
	{
		id: "23",
		serviceId: "8",
		name: "Vista Verde Education Center",
		address: "1936 Freedom Blvd, Freedom, CA 95019",
		latitude: 36.93651020977194,
		longitude: -121.77486924985168
	},
	{
		id: "24",
		serviceId: "8",
		name: "Starlight Elementary",
		address: "235 Hammer Dr, Watsonville, CA 95076",
		latitude: 36.92149414178757,
		longitude: -121.77178220633996
	},
	{
		locationId: "13",
		day: Day.Monday,
		open: 900,
		close: 1700
	},
	{
		locationId: "13",
		day: Day.Tuesday,
		open: 900,
		close: 1700
	},
	{
		locationId: "13",
		day: Day.Wednesday,
		open: 900,
		close: 1700
	},
	{
		locationId: "13",
		day: Day.Thursday,
		open: 900,
		close: 1700
	},
	{
		locationId: "13",
		day: Day.Friday,
		open: 900,
		close: 1700
	},
	{
		locationId: "13",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "13",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		locationId: "14",
		day: Day.Monday,
		open: 815,
		close: 1615
	},
	{
		locationId: "14",
		day: Day.Tuesday,
		open: 815,
		close: 1615
	},
	{
		locationId: "14",
		day: Day.Wednesday,
		open: 815,
		close: 1615
	},
	{
		locationId: "14",
		day: Day.Thursday,
		open: 815,
		close: 1615
	},
	{
		locationId: "14",
		day: Day.Friday,
		open: 815,
		close: 1615
	},
	{
		locationId: "14",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "14",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		locationId: "15",
		day: Day.Monday,
		open: 815,
		close: 1415
	},
	{
		locationId: "15",
		day: Day.Tuesday,
		open: 815,
		close: 1415
	},
	{
		locationId: "15",
		day: Day.Wednesday,
		open: 815,
		close: 1415
	},
	{
		locationId: "15",
		day: Day.Thursday,
		open: 815,
		close: 1415
	},
	{
		locationId: "15",
		day: Day.Friday,
		open: 815,
		close: 1415
	},
	{
		locationId: "15",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "15",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		locationId: "16",
		day: Day.Monday,
		open: 830,
		close: 1630
	},
	{
		locationId: "16",
		day: Day.Tuesday,
		open: 830,
		close: 1630
	},
	{
		locationId: "16",
		day: Day.Wednesday,
		open: 830,
		close: 1630
	},
	{
		locationId: "16",
		day: Day.Thursday,
		open: 830,
		close: 1630
	},
	{
		locationId: "16",
		day: Day.Friday,
		open: 830,
		close: 1630
	},
	{
		locationId: "16",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "16",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		locationId: "17",
		day: Day.Monday,
		open: 815,
		close: 1615
	},
	{
		locationId: "17",
		day: Day.Tuesday,
		open: 815,
		close: 1615
	},
	{
		locationId: "17",
		day: Day.Wednesday,
		open: 815,
		close: 1615
	},
	{
		locationId: "17",
		day: Day.Thursday,
		open: 815,
		close: 1615
	},
	{
		locationId: "17",
		day: Day.Friday,
		open: 815,
		close: 1615
	},
	{
		locationId: "17",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "17",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	...unknownHours("18"),
	...unknownHours("19"),
	{
		locationId: "20",
		day: Day.Monday,
		open: 815,
		close: 1415
	},
	{
		locationId: "20",
		day: Day.Tuesday,
		open: 815,
		close: 1415
	},
	{
		locationId: "20",
		day: Day.Wednesday,
		open: 815,
		close: 1415
	},
	{
		locationId: "20",
		day: Day.Thursday,
		open: 815,
		close: 1415
	},
	{
		locationId: "20",
		day: Day.Friday,
		open: 815,
		close: 1415
	},
	{
		locationId: "20",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "20",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		locationId: "21",
		day: Day.Monday,
		open: 815,
		close: 1415
	},
	{
		locationId: "21",
		day: Day.Tuesday,
		open: 815,
		close: 1415
	},
	{
		locationId: "21",
		day: Day.Wednesday,
		open: 815,
		close: 1415
	},
	{
		locationId: "21",
		day: Day.Thursday,
		open: 815,
		close: 1415
	},
	{
		locationId: "21",
		day: Day.Friday,
		open: 815,
		close: 1415
	},
	{
		locationId: "21",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "21",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		locationId: "22",
		day: Day.Monday,
		open: 815,
		close: 1615
	},
	{
		locationId: "22",
		day: Day.Tuesday,
		open: 815,
		close: 1615
	},
	{
		locationId: "22",
		day: Day.Wednesday,
		open: 815,
		close: 1615
	},
	{
		locationId: "22",
		day: Day.Thursday,
		open: 815,
		close: 1615
	},
	{
		locationId: "22",
		day: Day.Friday,
		open: 815,
		close: 1615
	},
	{
		locationId: "22",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "22",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	{
		locationId: "23",
		day: Day.Monday,
		open: 800,
		close: 1600
	},
	{
		locationId: "23",
		day: Day.Tuesday,
		open: 800,
		close: 1600
	},
	{
		locationId: "23",
		day: Day.Wednesday,
		open: 800,
		close: 1600
	},
	{
		locationId: "23",
		day: Day.Thursday,
		open: 800,
		close: 1600
	},
	{
		locationId: "23",
		day: Day.Friday,
		open: 800,
		close: 1600
	},
	{
		locationId: "23",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "23",
		day: Day.Sunday,
		open: -1,
		close: -1
	},
	...unknownHours("24"),
	{
		id: "9",
		name: "El Dorado",
		previewDescription:
			"A community-based, short-term treatment program for individuals who may be stepping down from locked care. El Dorado is an intensive, structured residential program; it is an unlocked, home-like environment facilitating the healing process in preparation for transitioning back to community living.",
		description:
			"El Dorado Center (EDC) is an unlocked, residential treatment facility offering short-term, intensive care for individuals transitioning from higher-level psychiatric settings back into community living. The program provides comprehensive support through individual and group counseling, medication management, crisis intervention, and independent living skills training, all within a home-like environment staffed by counselors, a registered nurse, and an affiliated County psychiatrist. Access requires coordination through Santa Cruz County Behavioral Health.",
		provider: Provider.Encompass,
		website: "https://www.encompasscs.org/el_dorado",
		tags: [Tag.DisorderRecovery, Tag.CrisisIntervention, Tag.IndependentSkillsTraining],
		displayRequirements: [
			"Must be at least 18 years old.",
			"Must have a referral through Santa Cruz County Behavioral Health.",
			"Must be able to benefit from the program.",
			"Must be capable of self-care.",
			"Must not pose immediate danger to self or others.",
			"Must have a mental health disorder diagnosis causing a significant impairment.",
			"Must have active Medi-Cal insurance or be indigent with the county."
		],
		minAge: 18,
		applicationProcess: [ApplicationProcess.Referral],
		accreditations: [Accreditation.CARF],
		images: ["7005fdb3-e7fa-4bc4-df90-2719eaca7700"]
	},
	{
		id: "24",
		serviceId: "9",
		name: "El Dorado Center",
		phone: "0018009522335",
		address: "941 El Dorado Ave, Santa Cruz, CA 95062",
		latitude: 36.97008589321873,
		longitude: -121.99031368800894
	},
	...alwaysOpen("24"),
	{
		id: "10",
		name: "Families Together",
		previewDescription:
			"Provides counseling, parenting support, and case management to families using a home visiting model and a client-centered approach to services. Caregivers participate in the development of an individualized service plan based on their unique strengths and needs.",
		description:
			"Families Together offers comprehensive family support services in Santa Cruz County through a flexible, home-based model that prioritizes client-centered care. Available in English and Spanish, their services include counseling, parenting education, mental health support, and case management, with referrals accepted through Family & Children's Services or CalWORKs. Key differentiators include customized service plans, in-home visits, expertise in early childhood development and parent-child attachment, and connections to additional community resources like substance use counseling and domestic violence services.",
		provider: Provider.Encompass,
		email: "ftfamiliestogether@encompasscs.org",
		website: "https://www.encompasscs.org/families_together",
		tags: [
			Tag.Education,
			Tag.ForFamilies,
			Tag.AtHome,
			Tag.IndependentSkillsTraining,
			Tag.SubstanceRecovery,
			Tag.DisorderRecovery,
			Tag.CaseManagement,
			Tag.LegalAssistance,
			Tag.Men,
			Tag.Women
		],
		displayRequirements: [
			"Must be referred through Santa Cruz's Family & Children's Services or CalWORKs.",
			"Must be experiencing low income OR",
			"Must be experiencing mental health issues OR",
			"Must be experiencing substance use disorders."
		],
		maxAge: 5,
		accessibility: Accessibility.Full,
		applicationProcess: [ApplicationProcess.Referral],
		accreditations: [Accreditation.CARF],
		images: ["d8edfc3d-5623-43fa-762e-2aa22a45e500"]
	},
	{
		serviceId: "10",
		operator: Operator.AND,
		requirements: [Requirement.Referral]
	},
	{
		serviceId: "10",
		operator: Operator.OR,
		requirements: [
			Requirement.Poverty,
			Requirement.MentalHealthIssue,
			Requirement.SubstanceDisorder
		]
	},
	{
		id: "25",
		serviceId: "10",
		name: "Families Together Office",
		phone: "0018316621303",
		address: "9057 Soquel Dr Bldg C Suite A, Aptos, CA 95003",
		latitude: 36.976496536211016,
		longitude: -121.88953151650796
	},
	{
		locationId: "25",
		day: Day.Monday,
		open: 900,
		close: 1700
	},
	{
		locationId: "25",
		day: Day.Tuesday,
		open: 900,
		close: 1700
	},
	{
		locationId: "25",
		day: Day.Wednesday,
		open: 900,
		close: 1700
	},
	{
		locationId: "25",
		day: Day.Thursday,
		open: 900,
		close: 1700
	},
	{
		locationId: "25",
		day: Day.Friday,
		open: 900,
		close: 1700
	},
	{
		locationId: "25",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "25",
		day: Day.Sunday,
		open: -1,
		close: -1
	},

	{
		id: "11",
		name: "Family Urgent Response System (Cal-FURS)",
		previewDescription:
			"The California Family Urgent Response System, or “Cal-FURS,” is a coordinated system designed to provide in-person support to youth and families facing immediate challenges. Current or former foster and probation youth (up to age 21) and/or their caregivers can access immediate help, 24/7, 365 days a year from a centralized call center.",
		description:
			"The California Family Urgent Response System (Cal-FURS) is a comprehensive support service for foster and probation youth up to age 21 and their caregivers, offering 24/7 immediate, trauma-informed assistance through a statewide hotline and local mobile response teams. Key features include confidential, judgment-free support from trained counselors and professionals who can provide on-site crisis intervention, help develop stabilization plans, and connect individuals to local resources during critical moments. This service is particularly valuable for young people in the foster care system seeking immediate, compassionate help during challenging situations.",
		provider: Provider.Encompass,
		website: "https://cal-furs.org/",
		tags: [
			Tag.ForFosterYouth,
			Tag.Counseling,
			Tag.ForFamilies,
			Tag.AtHome,
			Tag.CrisisIntervention,
			Tag.CaseManagement,
			Tag.GeneralLinkage,
			Tag.Men,
			Tag.Women
		],
		displayRequirements: [
			"Must be a current or former foster or probation youth up to age 21 OR",
			"Must be a caregiver of a current or former foster or probation youth up to age 21."
		],
		maxAge: 21,
		accessibility: Accessibility.Full,
		applicationProcess: [ApplicationProcess.None],
		accreditations: [Accreditation.CARF],
		images: []
	},
	{
		serviceId: "11",
		operator: Operator.OR,
		requirements: [Requirement.FosterChild, Requirement.FosterCareGiver]
	},
	{
		id: "26",
		serviceId: "11",
		name: "Hotline",
		phone: "0018339393877",
		latitude: 0,
		longitude: 0
	},
	...alwaysOpen("26"),

	{
		id: "12",
		name: "FUERTE Wraparound",
		previewDescription:
			"A four to twelve month intensive program that aims to address the mental health needs of youth on probation (ages 12-20) and increase parental capacity and skills to care for and address the mental health needs of their children involved in the justice system. Additionally, Wraparound addresses the unmet needs of family members through linkages to community resources.",
		description:
			"The Wraparound program is a comprehensive mental health intervention for youth ages 12-20 on probation, offering intensive, holistic support over 4-12 months. It uniquely provides in-home counseling, case management, and 24-hour crisis response, while focusing on both youth and family needs through evidence-based treatments like Trauma Focused Cognitive Behavioral Therapy. By collaborating with local juvenile probation, behavioral health services, and community resources, the program aims to address mental health challenges, improve parental skills, and create supportive connections to help youth successfully navigate personal and legal challenges.",
		provider: Provider.Encompass,
		email: "wraparound@encompasscs.org",
		website: "https://www.encompasscs.org/fuerte",
		tags: [
			Tag.ProbationHelp,
			Tag.AtHome,
			Tag.Counseling,
			Tag.CrisisIntervention,
			Tag.GeneralLinkage,
			Tag.MentalHealth,
			Tag.Men,
			Tag.Women
		],
		displayRequirements: [
			"Must live in Santa Cruz County.",
			"Must be a youth aged 12-20.",
			"Must be on probation.",
			"Must have a referall from the Juvenile Probation Department."
		],
		minAge: 12,
		maxAge: 20,
		applicationProcess: [ApplicationProcess.Referral],
		accreditations: [Accreditation.CARF],
		images: ["d3751553-06d0-4b32-e7f9-27ef4c45f500"]
	},
	{
		serviceId: "12",
		operator: Operator.AND,
		requirements: [Requirement.SantaCruz, Requirement.Probation, Requirement.Referral]
	},
	{
		id: "27",
		serviceId: "12",
		name: "Encompass Headquarters",
		phone: "0018313162205",
		address: "380 Encinal St Suite 200, Santa Cruz, CA 95060",
		latitude: 36.988278901201134,
		longitude: -122.0373666002301
	},
	{
		locationId: "27",
		day: Day.Monday,
		open: 900,
		close: 1700
	},
	{
		locationId: "27",
		day: Day.Tuesday,
		open: 900,
		close: 1700
	},
	{
		locationId: "27",
		day: Day.Wednesday,
		open: 900,
		close: 1700
	},
	{
		locationId: "27",
		day: Day.Thursday,
		open: 900,
		close: 1700
	},
	{
		locationId: "27",
		day: Day.Friday,
		open: 900,
		close: 1700
	},
	{
		locationId: "27",
		day: Day.Saturday,
		open: 900,
		close: 1700
	},
	{
		locationId: "27",
		day: Day.Sunday,
		open: 900,
		close: 1700
	},

	{
		id: "13",
		name: "ReTurn",
		previewDescription:
			"Provides therapy and mental health services for AB109 eligible probation clients who are adjusting to life after serving a jail or prison term. ReTURN helps clients gain pro-social skills, repair relationships, and attain and maintain sobriety.",
		description:
			"The ReTURN program is a comprehensive mental health and rehabilitation service specifically designed for probation clients transitioning from incarceration back into community life. Targeting AB109 eligible individuals, the program offers holistic support through mental health assessments, counseling, and crucial practical assistance like benefits navigation, housing support, and documentation help. Its key strengths include providing cognitive-behavioral therapy, family and individual counseling, and systematic guidance to help clients develop pro-social skills, repair relationships, maintain sobriety, and successfully reintegrate into society after serving a jail or prison term.",
		provider: Provider.Encompass,
		website: "https://www.encompasscs.org/return_project",
		tags: [
			Tag.ForIncacerated,
			Tag.IndependentSkillsTraining,
			Tag.TransitionalHousing,
			Tag.EmergencyHousing,
			Tag.Counseling,
			Tag.DisorderRecovery,
			Tag.SubstanceRecovery,
			Tag.LifeNavigation
		],
		displayRequirements: [
			"Must be at least 18 years old.",
			"Must live in Santa Cruz County.",
			"Must be an AB109 eligible probation client.",
			"Must be transitioning from incarceration back into the community.",
			"Must have a referall from the Santa Cruz Probation Department."
		],
		minAge: 18,
		applicationProcess: [ApplicationProcess.Referral],
		accreditations: [Accreditation.CARF],
		images: ["d3751553-06d0-4b32-e7f9-27ef4c45f500"]
	},
	{
		serviceId: "13",
		operator: Operator.AND,
		requirements: [Requirement.SantaCruz, Requirement.Referral]
	},
	{
		id: "28",
		serviceId: "13",
		name: "ALTO Counseling Center",
		phone: "0018314232003",
		address: "716 Ocean St, Santa Cruz, CA 95060",
		latitude: 36.978719276870095,
		longitude: -122.02064090807508
	},
	{
		locationId: "27",
		day: Day.Monday,
		open: 900,
		close: 1630
	},
	{
		locationId: "27",
		day: Day.Tuesday,
		open: 900,
		close: 1630
	},
	{
		locationId: "27",
		day: Day.Wednesday,
		open: 900,
		close: 1630
	},
	{
		locationId: "27",
		day: Day.Thursday,
		open: 900,
		close: 1630
	},
	{
		locationId: "27",
		day: Day.Friday,
		open: 900,
		close: 1630
	},
	{
		locationId: "27",
		day: Day.Saturday,
		open: -1,
		close: -1
	},
	{
		locationId: "27",
		day: Day.Sunday,
		open: -1,
		close: -1
	},

	{
		id: "14",
		name: "Second Story",
		previewDescription: "",
		description: "",
		provider: Provider.Encompass,
		email: "",
		website: "",
		tags: [],
		fee: "",
		displayRequirements: [],
		minAge: -1,
		maxAge: -1,
		minIncome: -1,
		maxIncome: -1,
		languages: [],
		accessibility: Accessibility.Full,
		applicationProcess: [],
		applicationLink: "",
		accreditations: [],
		possibleUnits: 6,
		images: []
	},
	{
		serviceId: "1",
		operator: Operator.AND,
		requirements: []
	},
	{
		id: "1",
		serviceId: "1",
		name: "",
		phone: "",
		address: "",
		latitude: 0,
		longitude: 0
	}
];
