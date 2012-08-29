<%
  var grunt = require("grunt"),
      _ = require("underscore");
  _.each(tpls, function(tpl) {
  %>this['JST'] = this['JST'] || {};

this['JST']['<%=tpl%>'] = <%=_.template(grunt.file.read(tpl), false).source%>;<%
  });
%>