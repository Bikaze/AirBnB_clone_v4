$('document').ready(function () {
  let amenities = {};
  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenities[$(this).attr('data-id')];
    }
    let firstTwoAmenities = Object.values(amenities).slice(0, 2);
    let displayedAmenities = Object.values(firstTwoAmenities).join(', ');
    if (Object.values(amenities).length > 2) {
        displayedAmenities += ", ...";
    }
    $('.amenities H4').text(displayedAmenities);
  });
  const url = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(url, function (answer) {
    if (answer.status == 'OK') {
        $('div#api_status').addClass('available');
    } else {
        $('div#api_status').removeClass('available');
    }
  });
});
