module.exports = function(grunt) {
  // grunt stuff happens in here.
  grunt.initConfig({
    // grunt configs
    pkg: grunt.file.readJSON('package.json'),
    // this specifies the package that we're getting the grunt dependencies from.
    uglify: {
      options: {
        // banner goes at the top of the minified file
        banner: `/*! <%= ${pkg.name} %> <%= grunt.template.today("dd-mm-yyyy") %> */\n`,
      },
      dist: {
        files: {
          // output: [file to minify]
          'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }
  });
};


// I definitely need some help with this! I will check out YouTube.
