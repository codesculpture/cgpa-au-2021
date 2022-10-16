export type DEPT = "CSE" | "MECH" | "CIVIL" | "ECE" | "EEE";
export type GRADES = "O" | "A+" | "A" | "B+" | "B" | "C" | "U";

export type Subject = {
	PE? : {n: number, c: number};
	[key: string]: number | {n: number, c: number} | undefined;
}

export type SubGrades = {
	[key: string]: GRADES,
}

export type Query = {
	sem: number,
	subs: Subject,
	values: {
		[key:string] : string
	},
	id: number
}

export type Grades = {
	[key: string]: number
}

export type Result = {
	error: null | string,
	cgpa: number
}

export type PropsQuery = {
	query: Query,
	dept: DEPT,
	setQuery: (q: Query) => void,
	removeSem: (id: number) => void
}

export type Total = {
	dept: DEPT, 
	gpas:number, 
	error: string
}
