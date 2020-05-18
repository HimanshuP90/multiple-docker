/**
 * Array.filter():  A new array with the elements that pass the test. If no elements pass the test, an empty array will be returned.
 */



 if(!Array.prototype.filter) {
     Array.prototype.filter = function(fn, context) {
        var i , value, result = [];
        var length = this.length;

        for ( i = 0; i < length; i++) {
            if ( this.hasOwnProperty(i)) {
                value = this[i];
                if (fn.call(context, value, i, this)) {
                    result.push(value);
                }
            }
        }
        return result;
     }
 }