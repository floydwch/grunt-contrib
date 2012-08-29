var grunt = require("grunt");

exports.render = {
  main: function(test) {
    test.expect(2);

    var expectA = "this['JST'] = this['JST'] || {};\n\nthis['JST']['fixtures/render/hello.tpl'] = function(obj){\nvar __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\nwith(obj||{}){\n__p+='<head><title>'+\n( title )+\n'</title></head>';\n}\nreturn __p;\n};";
    var resultA = grunt.file.read("fixtures/output/render_jst.js");
    test.equal(expectA, resultA, "should compile underscore templates into JST");
    var expectB = "<head><title>Hello Grunt!</title></head>";
    var resultB = grunt.file.read("fixtures/output/hello.html");
    test.equal(expectB, resultB, "should compile underscore templates into html");

    test.done();
  }
};