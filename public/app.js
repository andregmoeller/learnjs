'use strict';
var learnjs = {};
learnjs.showView = function(hash) {
    var problemView = $('<div class="problem-view">').text('Coming soon!');
    alert($('.view-container').length)
    $('.view-container').empty().append(problemView);
};
