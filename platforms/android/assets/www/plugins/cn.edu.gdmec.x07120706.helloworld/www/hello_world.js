cordova.define("cn.edu.gdmec.x07120706.helloworld.helloworld", function(require, exports, module) {var HelloWorld = function() {};  
  
HelloWorld.prototype.say = function() {  
    alert("Hello World");  
};  
  
var helloWorld = new HelloWorld();  
module.exports = helloWorld;
});
