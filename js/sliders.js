// Andrew Clark
// 6/22/25
// sets up and binds slider value to form value and vice versa
// **Note: code is repetitive, can try to generalize later

$(document).ready(function () {
    //low first 
    $('#sliderLowFirst').slider({
      min: -50,
      max: 50,
      // lowFirst value or use 0 as a default starting point for slider handle
      value: parseInt($('#lowFirst').val()) || 0,
      slide: function(event, ui) {
        $('#lowFirst').val(ui.value).trigger('input');
      }
    });
    // if there's a new input, set slider value to that input
    $('#lowFirst').on('input', function() {
      let val = Number($(this).val());
      if (!isNaN(val) && val >= -50 && val <= 50) {
        $('#sliderLowFirst').slider('value', val);
      }
    });
    //high first
    $('#sliderHighFirst').slider({
      min: -50,
      max: 50,
      value: parseInt($('#highFirst').val()) || 0,
      slide: function(event, ui) {
        $('#highFirst').val(ui.value).trigger('input');
      }
    });

    $('#highFirst').on('input', function() {
      let val = Number($(this).val());
      if (!isNaN(val) && val >= -50 && val <= 50) {
        $('#sliderHighFirst').slider('value', val);
      }
    });

    //low second
    $('#sliderLowSecond').slider({
      min: -50,
      max: 50,
      value: parseInt($('#lowSecond').val()) || 0,
      slide: function(event, ui) {
        $('#lowSecond').val(ui.value).trigger('input');
      }
    });

    $('#lowSecond').on('input', function() {
      let val = Number($(this).val());
      if (!isNaN(val) && val >= -50 && val <= 50) {
        $('#sliderLowSecond').slider('value', val);
      }
    });
    //high second
    $('#sliderHighSecond').slider({
      min: -50,
      max: 50,
      value: parseInt($('#highSecond').val()) || 0,
      slide: function(event, ui) {
        $('#highSecond').val(ui.value).trigger('input');
      }
    });

    $('#highSecond').on('input', function() {
      let val = Number($(this).val());
      if (!isNaN(val) && val >= -50 && val <= 50) {
        $('#sliderHighSecond').slider('value', val);
      }
    });
});