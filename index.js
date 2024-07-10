class StringCalculator {
    constructor(str){
        this.str = str
        this.negativeNumbers = ""
    }

    calculate(){
        let sum = 0;
        let delimiter = this.getDelimiter();
        this.str.split(delimiter).forEach((element, index, arr) => {
            this.validateNumber(element,( index === arr.length - 1));
            sum += parseInt(element);
        });
        return sum;
    }

    getDelimiter(){
        if (this.str.startsWith("//")){
            let lastValue;
            let delimiter = this.str.split("")[2]
            this.str = this.str.split("")
                .filter((ele, index) => index > 2 && ele.indexOf("\n") !== 0 )
                .reduce((acc, ele) => acc+ele)
            return delimiter
        }
        else {
            return /\n,|\n|,/
        }
            
    }

    validateNumber(element, ifLastElement) {
        if(element < 0) {
            this.negativeNumbers = this.negativeNumbers.concat(element).concat((!ifLastElement)? ", ": "") //+ element + (!ifLastElement)? ", ": ""
            if (ifLastElement){
                throw Error(`negative numbers not allowed ${this.negativeNumbers}`);
            }
                
        }
    }
}

module.exports = {
    StringCalculator: StringCalculator
}