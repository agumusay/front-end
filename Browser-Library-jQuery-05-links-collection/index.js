
$("form").submit(function (event) {
    event.preventDefault();
    let dataObj = {};
    $.each($('form').serializeArray(), function (wtf, keyValue) {
        dataObj[keyValue.name] = keyValue.value;
    });
    let output = $('#data-template').html();
    let template = Handlebars.compile(output);
    let outputData = template({ dataObj });
    $('.link-list').prepend(outputData);
});