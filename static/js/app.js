//Message order
$(document).ready(function() {
    $('.chat-box').scrollTop($('.chat-box-size').height() + 50000);
});
//Les selects
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
});
// Or with jQuery
$(document).ready(function(){
    $('select').formSelect();
});
var instance = M.FormSelect.getInstance(elem);
instance.getSelectedValues();
instance.destroy();