export const enum Provider {
	Encompass = "Encompass",
	EncompassALTO = "Encompass ALTO",
	PVSS = "Pajaro Valley Shelter Services"
}

export const enum Tag {
	Vouchers = "Vouchers",
	EmergencyHousing = "Emergency Housing",
	PermanentHousing = "Permanent Housing",
	TransitionalHousing = "Transitional Housing",
	SubstanceRecovery = "Substance Recovery",
	DisorderRecovery = "Disorder Recovery",
	MentalHealth = "Mental Health Aid",
	Education = "Education",
	ForChildren = "For Children",
	ForMothers = "For Mothers",
	ForFamilies = "For Families",
	ForFosterYouth = "For Foster Youth",
	AtHome = "At-Home",
	AcceptsMediCal = "Accepts Medi-Cal",
	DUIPrograms = "DUI Programs",
	ForIncacerated = "For The Incacerated",
	Employment = "Employment",
	JobAssistance = "Job Assistance",
	VocationalTraining = "Vocational Training",
	Recreation = "Recreation",
	Women = "Women",
	GeneralLinkage = "General Linkage",
	ParentalSupport = "Parental Support",
	CrisisIntervention = "Crisis Intervention",
	IndependentSkillsTraining = "Independent Skills Training",
	Meals = "Meals",
	CaseManagement = "Case Management",
	LegalAssistance = "Legal Assistance",
	Counseling = "Counseling",
	ProbationHelp = "Probation Help",
	LifeNavigation = "Life Navigation",
	Men = "Men"
}

export const enum Accessibility {
	Full = "Full",
	Partial = "Partial",
	None = "None"
}

export const enum Language {
	English = "English",
	Spanish = "Spanish",
	Chinese = "Chinese",
	Russian = "Russian",
	Hindi = "Hindi",
	Other = "Other"
}

export const enum Accreditation {
	CARF = "CARF",
	JCAHO = "JCAHO",
	SDHCS = "SDHCS",
	NAATP = "NAATP"
}

export const enum Day {
	Monday = "Monday",
	Tuesday = "Tuesday",
	Wednesday = "Wednesday",
	Thursday = "Thursday",
	Friday = "Friday",
	Saturday = "Saturday",
	Sunday = "Sunday"
}

export const enum Requirement {
	Diagnosis = "Must have a diagnosis.",
	Benefit = "Must be able to benefit from the service.",
	SelfCare = "Must be able to perform self-care.",
	Veteran = "Must be a veteran.",
	MediCal = "Must have active Medi-Cal insurance.",
	IndigentFunding = "Must have active Medi-Cal insurance or be indigent.",
	SubstanceDisorder = "Must have a significant substance use disorder.",
	MentalHealthIssue = "Must have a significant mental health issue.",
	Safe = "Must not pose immediate danger to self or others.",
	Incacerated = "Must be incarcerated in a county jail or on probation.",
	Referral = "Must have a referral from a county organization.",
	Homeless = "Must be experienceing homelessness.",
	Poverty = "Must be experiencing poverty as dictated by the federal guidelines.",
	CalWORKs = "Must be a CalWORKs recipient.",
	SSI = "Must be an Supplemental Security Income recipient.",
	FosterChild = "Must be a foster youth.",
	FosterCareGiver = "Must be a foster care giver.",
	Probation = "Must be on probation.",
	SantaCruz = "Must be a resident of Santa Cruz County.",
	Other = "Other"
}

export const enum ApplicationProcess {
	Call = "Call to apply.",
	Online = "Apply online.",
	InPerson = "Apply in person.",
	None = "No application process.",
	Referral = "Referral required.",
	Other = "Other"
}

export const enum Operator {
	OR,
	AND
}

export const enum LoginStage {
	CodeRequest,
	CodeVerify
}
