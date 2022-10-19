import { TargetedEvent } from 'preact/compat';
import { useEffect, useState } from 'preact/hooks';
import { DEPT_MAP, GRADE_MAP} from '../data.ts';
import type { PropsQuery, Subject, SubGrades } from '../types/index.ts';

const GRADES: string[] = [];
for(const a in GRADE_MAP) GRADES.push(a);

export default function SemCard({dept, query, setQuery, removeSem} : PropsQuery) {
		useEffect(() => {
		const SUBS = DEPT_MAP[dept][query.sem - 1];
		if(!SUBS) {
			console.log('SEM WRONG');
			setQuery({...query, subs: {}, values: {}});
			return;
		}

		      const values: SubGrades = {};
			for(const sub in SUBS){
				if(sub == "PE" && SUBS["PE"]){
					for(let i = 0; i < SUBS["PE"].n; i++){
						values[`PE00${i+1}`] = "B+";
					}
					continue;
				}
				values[sub] = "B+";
			}
			setQuery({...query, values,subs: SUBS});

	}, [dept, query.sem]);

	const handleChange = (e: TargetedEvent<HTMLInputElement, Event>) => {
		setQuery({...query, [e.currentTarget.name]: e.currentTarget.value});
	}

	const handleGrade = (e: TargetedEvent<HTMLSelectElement, Event>, sub: string) => {
		setQuery({...query, values : {...query.values, [sub]: e.currentTarget.value}});

	};


	return (
		<div class="shadow-xl text-center w-auto border-white-500/30 border-1 hover:border-b-2 hover:border-l-2 bg-white-500/25 shadow-gBox rounded-lg flex flex-row text-sm gap-x-5 backdrop-blur-gBox">
			<div>
				<label for="sem-select" class="pt-3">Semester: </label>
			    <input value={query.sem} 
				    onInput={handleChange} 
				id="sem"
				type="text" 
				name="sem" 
				placeholder="1-8" 
				class="w-10 text-center border-b-2 
				focus:outline-none border-blue-600"/>
				<button class="text-blue-600" onClick={() => removeSem(query.id)}>X</button>
				    <div>
	{Object.entries(query.subs).map(([key, val], i) => {				
		if(key === "PE"){
		    const nodes = [];
		for(let i = 0; i < val.n; i++)
			nodes.push( <div class="p-2">
			{`PE00${i+1}`}: <select onChange={(e) => handleGrade(e, `PE00${i+1}`)} name="grade" value={query.values[`PE00${i+1}`] ?? "B"}>
				{GRADES.map((g) => <option value={g}>{g}</option>)}
			</select>
		</div>
   
);
		return nodes;
	}
									    return (
              <div class="p-2">
		      {key}: <select onChange={(e) => handleGrade(e, key)} name="grade" value={query.values[key] ?? "B"}>
			      {GRADES.map((g) => <option value={g}>{g}</option>)}
		      </select>
	      </div>
									    )
	})}
			</div>
				    </div>
	    </div>);

}
