import { DEPT_MAP, GRADE_MAP} from '../data.ts';
import type { Query, DEPT, Total } from '../types/index.ts';
import { useState, useEffect} from 'preact/hooks';
import { TargetedEvent } from 'preact/compat';
import SemCard  from './SemCard.tsx';
import calculate  from '../utils/main.ts';
const DEPTS: DEPT[] = ["CSE", "EEE", "ECE", "MECH", "CIVIL"];

export default function Main() {
	const [total, setTotal] = useState<Total>({dept: "CSE", gpas: 0, error: ""});
	const [queries, setQueries] = useState<Query[]>([
		{
			id: Math.floor(Math.random() * 10000),
			subs: DEPT_MAP["CSE"][0],
			sem: 1,
			values: {}
		}
	]); 
	const handleChange = (e: TargetedEvent<HTMLSelectElement, Event>) => {
		setTotal({...total, dept: e.currentTarget.value})
	};

	const handleQuery = (query: Query) => {

		setQueries((queries) => {
			return queries.map((val) =>{
				if(val.id === query.id) return query;
				return val;
			})
		})
	}
	const addSem = () => {
		setQueries([...queries, {id: Math.floor(Math.random() * 10000), subs: DEPT_MAP["CSE"][0], sem:1, values:{}}]);
	}

	const calculateCGPA = () => {
		let sum = 0;
		for(const query of queries){
			if(Object.entries(query.subs).length == 0){
				return setTotal({...total, error: "Please Provide Correct Semester", gpas: 0});
			}
			const { cgpa, error} = calculate(query);
			if(error){
				return setTotal({...total, error, gpas: 0});
			}
			sum += cgpa;

		}
			setTotal({...total, error: "", gpas: sum / queries.length});

	}

	const removeSem = (id: number) => {
		if(queries.length <= 1) return;
		setQueries((query) => query.filter(i => i.id !== id));
	}

	useEffect(() => {console.log(queries)}, [queries])
	return(
		<div class="text-center">
			<div class="flex gap-2 justify-center">
 				<div class="text-center"> 
			    <label for="dept-select">Dept: </label>
			    <select name="dept" onChange={handleChange} id="dept-select" value={total.dept} class="border-b-2 focus:outline-none border-blue-600 rounded"> 
				    {DEPTS.map((val: DEPT) => { 
					return <option value={val}>{val}</option>
				    })}
			    </select>
 </div>
			<div class="text-center">
				<button class="text-center rounded active:outline-none w-20 text-sm text-white bg-blue-600" disabled={queries.length >= 8} onClick={() => addSem()}>Add Sem</button>
			</div>
				
			<div class="">
				<button onClick={() => calculateCGPA()} class="text-center w-20 text-sm border-2 active:outline-none rounded border-blue-600 text-blue-600">Calculate</button>
			</div>
			</div>
				{total.error && <div class="text-center text-red-600">{total.error}</div>}
			<div class="pt-2 text-sub"> 
				{total.gpas}
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-5 pt-10">
				{queries.map((query) => {
				return <SemCard query={query} removeSem={removeSem} setQuery={handleQuery} dept={total.dept}/>
			})}
			</div>
	    </div>
	);
}
