// Andrew Clark
// 6/22/25
// jQuery validation is used for the inputs
// checks that inputs are present, numners, and between -50 and 50
// add a mathod, 'greater' to check that the end values are larger than the start values
// error messages shown under input field

$(document).ready(function () {
    $("#formArea").validate({
        rules: {
            lowFirst: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            highFirst: {
                required: true,
                number: true,
                range: [-50, 50],
                greater: '#lowFirst'
            },
            lowSecond: {
                required: true,
                number: true,
                range: [-50, 50]
            },
            highSecond: {
                required: true,
                number: true,
                range: [-50, 50],
                greater: '#lowSecond'
            }
        },
        messages: {
            lowFirst: {
                required: "Required field.",
                number: "Input must be a number.",
                range: "Input must be between -50 and 50.",
            },
            highFirst: {
                required: "Required field.",
                number: "Input must be a number.",
                range: "Input must be between -50 and 50.",
                greater: "Input must be larger than or equal to horizontal start value."
            },
            lowSecond: {
                required: "Required field.",
                number: "Input must be a number.",
                range: "Input must be between -50 and 50.",
            },
            highSecond: {
                required: "Required field.",
                number: "Input must be a number.",
                range: "Input must be between -50 and 50.",
                greater: "Input must be larger than or equal to vertical start value."
            }
        }
    });

    // calls .valid() on highFirst when lowFirst changes to catch cases where lowFirst is changed
    // to a value smaller than highFirst after originally having been larger, which invalidated
    // highFirst
    $('#lowFirst').on('input', function () {
        $('#highFirst').valid();
    });

    // same as above comment but for lowSecond and highSecond
    $('#lowSecond').on('input', function () {
        $('#highSecond').valid();
    });
});

$.validator.addMethod("greater", function(value, element, param) {
    const temp = $(param);
    if (!value || !temp.val()) { return true; }
    return Number(value) >= Number(temp.val());
});