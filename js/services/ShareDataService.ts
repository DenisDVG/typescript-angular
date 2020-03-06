/// <reference path='../_all.ts' />

module todos {
    'use strict';

    /**
     * Services that persists and retrieves TODOs from localStorage.
     */
    export class ShareDataService implements IShareDataService {

        public incr: number = 0;

        getIncr (): number {
            return this.incr;
        }

        setIncr(incr: number) {
            this.incr = incr;
        }
    }
}