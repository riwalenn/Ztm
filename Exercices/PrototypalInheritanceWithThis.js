//How would you be able to create your own .bind() method using call or apply.
Function.prototype.bind = function(parent){
    const self = this;
    return function(){
        return self.apply(parent, arguments);
    };
}