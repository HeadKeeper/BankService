function submitData() {
    $("form#userData :input").each(function(){
        var input = $(this);
        console.log(input.value);
    });
}