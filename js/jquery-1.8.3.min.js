$(document).ready(function(){
    $('#vehicle').popover({
        title: '<h4><span class="glyphicon glyphicon-hand-right"></span> Nissan Micra</h4>',
        content: '<ul><li>1.6L I4 Engine</li><li>109 HP Power</li><li>Front-Wheel Drive</li><li>5-Speed Manual</li><li>2+3 Seating</li></ul>',
        html: true,
        container: 'body',
        placement: 'right',
        trigger: 'hover'
    });
});