## Render underscore template
> Contributed By: [Floyd Huang](/floydsoft) (@floydsoft)

### Overview

This task render Underscore compatible template with assigned data into a file.

Inside your `grunt.js` file, add a section named `render`.
This section specifies the file to render and the data passed to
[underscore.template](http://underscorejs.org/#template).

#### Parameters

##### options ```object```

This controls how this task (and its helpers) operate and should contain key:value pairs,
see options below.

##### to ```string```

The render template file path.

##### out ```string```

The rendered file's output path.

#### Options

##### data ```object```

The data in which the render template are assigned to.

##### files ```object```

Similar to the data option except it's value will processed by
[grunt.file.expandFiles]
(https://github.com/cowboy/grunt/blob/master/docs/api_file.md#gruntfileexpandfiles)
and should be a file path or an array of file paths
(supports [minimatch](https://github.com/isaacs/minimatch)).

##### format ```object```

The settings passed to underscore when render template.

#### Config Examples

##### render to html

grunt.js:
``` javascript
render: {
  hello: {
    options: {
      data: {
        title: "Hello Grunt!"
      },
      format: {
        interpolate : /\{\{(.+?)\}\}/g
      }
    },
    to: "path/to/hello.tpl",
    out: "path/to/hello.html"
  }
}
```

hello.tpl
```underscore
<head><title>{{ title }}</title></head>
```

##### render to jst

grunt.js:
``` javascript
render: {
  jst: {
    options: {
      files: {
        tpls: "path/to/templates/*.html"
      }
    },
    to: "path/to/jst.tpl",
    out: "path/to/jst.js"
  }
}
```

jst.tpl
```underscore
<%
  var grunt = require("grunt"),
      _ = require("underscore");
  _.each(tpls, function(tpl) {
  %>this['JST'] = this['JST'] || {};

this['JST']['<%=tpl%>'] = <%=_.template(grunt.file.read(tpl), false).source%>;<%
  });
%>
```