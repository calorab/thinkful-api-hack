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

displayActivityData = (data) => {
    let output = `
        <div class="activityContainer">
            <h2 class="activityName">${data.activity}</h2>
            <p class="rating">Search more about this activity?</p>
            <button class="repeatActivitySearch" type="button" onClick={fetchActivity()}>No, search again!</button>
            <button class="googleIt">Let's DO IT!</button>
        </div>`;
    $('.boredResult').html(output);
};

// API Functions here: 
fetchActivity = () => {
    let url = 'http://www.boredapi.com/api/activity';
    fetch(url)
        .then(response => {
            return response.json();
        })
        .then(result => {
            onGetActivity();
            displayActivityData(result);
            console.log(result);
        })
        .catch(err => {console.log('onFetch error: ', err)});
}; 

// Key for SERPAPI: 8408BAE7A9E14665A3F8D5E360C106BB
// https://api.scaleserp.com/search?api_key=8408BAE7A9E14665A3F8D5E360C106BB&q=bitcoin example
fetchGoogle = () => {
    let apiKey = "8408BAE7A9E14665A3F8D5E360C106BB"
    let query = "bitcoin"
    let url = 'https://api.scaleserp.com/search?api_key=' + apiKey + '&q=' + query;

    fetch(url)
        .then(response => {
            console.log(response);
            return response;
        })
        .then(result => {
            console.log('result body: ', result.json());
        })
        .catch(err => {
            console.log('fetch error: ', err);
        });
};


$(document).ready(function() {
    $('.getStarted').on('click', function() {
        onGetStarted();
    });

    $('.getActivity').click(function() {
        // call Bored App API
        fetchActivity();
    });
    
    $('.repeatActivitySearch').click(function() {
        // call Bored App API - Free
    });
    
    // $('.findEasy').click(function() {
    //     // call Bored App API - accessibility
    // });
    
    $('.repeat').click(function() {
        // repeat call Bored App API
        fetchActivity();
    });
    
    $('.googleIt').click(()  => {
        // call Google API 
        fetchGoogle();
    });
});


$(startup);