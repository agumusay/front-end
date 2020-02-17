
$("form").submit(function (event) {
    event.preventDefault();
    let dataObj = {};
    $.each($('form').serializeArray(), function (wtf, kv) {
        dataObj[kv.name] = kv.value;
    });
    let output = $('#data-template').html();
    let template = Handlebars.compile(output);
    let outputData = template({ dataObj });
    $('.link-list').prepend(outputData);
});