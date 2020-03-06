/// <reference path='../_all.ts' />

module todos {
	export interface IShareDataService {
        getIncr (): number ;
        setIncr(incr: number);
	}
}