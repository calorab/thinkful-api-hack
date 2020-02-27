startup = function() {
    $('.boredMain').hide();
    $('.boredResult').hide();
    $('.googleResults').hide();
    $('.welcome').show();
};

onGetStarted = function() {
    $('.boredMain').show();
    $('.boredResult').hide();
    $('.googleResults').hide();
    $('.welcome').hide();
};

onGetActivity = function() {
    $('.boredMain').hide();
    $('.boredResult').show();
    $('.googleResults').hide();
    $('.welcome').hide();
};

onGetGoogle = function() {
    $('.boredMain').hide();
    $('.boredResult').hide();
    $('.googleResults').show();
    $('.welcome').hide();
};

// API Functions here:
// fetchActivity = function() {}; ... need 2 more for \Free and \accessibility ??
// fetchGoogle = function() {};
$(document).ready(function() {
    $('.getStarted').on('click', function() {
        console.log('you clicked get started');
        // onGetStarted();
    });
});


$('.getActivity').click(function() {
    // call Bored App API
});

$('.findFree').click(function() {
    // call Bored App API - Free
});

$('.findEasy').click(function() {
    // call Bored App API - accessibility
});

$('.repeat').click(function() {
    // repeat call Bored App API
});

$('.googleIt').click(()  => {
    // call Google API 
});


$(startup);