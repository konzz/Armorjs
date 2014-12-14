require.config({
    paths: {
        'underscore': '../../bower_components/underscore/underscore',
        'jquery': '../../bower_components/jquery/dist/jquery',
        'engine': '../../engine'
      },
    shim: {
        'underscore': {
        exports: '_'
    }
  },
});

require(['engine/engine'], function(engine){

});