startup = () => {
    $('.boredMain').hide();
    $('.boredResult').hide();
    $('.googleResults').hide();
    $('.welcome').show();
};

onGetStarted = () => {
    $('.boredMain').show();
    $('.boredResult').hide();
    $('.googleResults').hide();
    $('.welcome').hide();
};

onGetActivity = () => {
    $('.boredMain').hide();
    $('.boredResult').show();
    $('.googleResults').hide();
    $('.welcome').hide();
};

onGetGoogle = () => {
    $('.boredMain').hide();
    $('.boredResult').hide();
    $('.googleResults').show();
    $('.welcome').hide();
};

// API Functions here:
// fetchActivity = () => {}; need 2 more for \Free and \accessibility ??
// fetchGoogle = () => {};

$(".getStarted").onclick( () => {
    onGetStarted();
});

$(".getActivity").onclick( () => {
    // call Bored App API
});

$(".findFree").onclick( () => {
    // call Bored App API - Free
});

$(".findEasy").onclick( () => {
    // call Bored App API - accessibility
});

$(".repeat").onclick( () => {
    // repeat call Bored App API
});

$(".googleIt").onclick( () => {
    // call Google API 
});


$(startup);