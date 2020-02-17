$(document).ready(function () {
    let defaultVal = $('input[name="food"]:checked').serialize().replace('food=', '');

    $('span').text(defaultVal);
    $("form").change(function () {
        let arrayOfValues = $('input[name="food"]:checked').serialize().split('&').map(ele => ele.replace('food=', ''))

        if (arrayOfValues[0] == '') {

            $('span').text('...');
        } else if (arrayOfValues.length > 2) {
            let remainder = arrayOfValues.slice(arrayOfValues[0], arrayOfValues.length - 1);
            let last = arrayOfValues.pop();
            $('span').text(remainder.join(', ') + ' and ' + last);
        } else if (arrayOfValues.length == 2) {
            $('span').text(arrayOfValues.join(' and '));
        } else {
            $('span').text(arrayOfValues.join(', '));
        }
    });
    $('input[name="deselect"]').change(function () {
        $('input[type="checkbox"]').prop('checked', false);
    })
});