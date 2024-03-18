export namespace utils {
	
	export class Restful {
	    code: number;
	    msg: string;
	    data: {[key: string]: any};
	
	    static createFrom(source: any = {}) {
	        return new Restful(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.code = source["code"];
	        this.msg = source["msg"];
	        this.data = source["data"];
	    }
	}

}

