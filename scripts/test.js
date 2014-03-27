function test () {
    var textareas = $('textarea');
    var applicables = $('.ap');
    var valueAddeds = $('.va');
    var text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo dtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';


    _.each(textareas, function(textarea, index) {
        var va = $(valueAddeds[index]);
        var optionsLength = va.children().length;
        var selectedIndex = Math.floor(Math.random() * optionsLength);

        va.prop('selectedIndex', selectedIndex).change();
        $(textarea).val(text).keyup();

        if (randomForm()) {
            $(applicables[index]).prop('selectedIndex', 1).change();
        }
    })
}