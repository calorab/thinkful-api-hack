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
            <button class="repeatActivitySearch" type="button" onClick={fetchActivity()}>No, search again...</button>
            <button class="googleIt" type="button" onClick={fetchGoogle()}>Let's DO IT!</button>
        </div>`;
    $('.boredResult').html(output);
};

displayGoogleData = (data) => {

    //MAP THIS CALEB

    let output = `
        <div class="googleContainer">
            <a href="I LINK HERE">
                <h2 class="googleItemName"></h2>
                <p class="googleItemTitle">"I TITLE HERE"</p>
                <P class="googleItemSnippet">"I SNIPPET HERE"</P>
                <p>"I snippet_matched[0] HERE"</p>
                <p>"I snippet_matched[1] HERE"</p>
                <p>"I snippet_matched[2] HERE"</p>
            </a>
        </div>`;
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
        .catch(err => {
            console.log('onFetch error: ', err);
        });
}; 


// Key for SERPAPI: 8408BAE7A9E14665A3F8D5E360C106BB
// https://api.scaleserp.com/search?api_key=8408BAE7A9E14665A3F8D5E360C106BB&q=bitcoin example
fetchGoogle = () => {
    console.log('fetchGoogle firing');
    let apiKey = "8408BAE7A9E14665A3F8D5E360C106BB"
    let query = "bitcoin"
    let url = 'https://api.scaleserp.com/search?api_key=' + apiKey + '&q=' + query;

    fetch(url)
        .then(response => {
            if (response.status === 429 || response.status === 402) {
                throw new Error('It looks like we \'ve made too many API calls this month! Please try again another day.');
            }
            return response.json();
        })
        .then(result => {
            console.log('result body: ', result);
            let testresult = result.organic_results;
            //display results CALEB...
            console.log('result: ', testresult);
        })
        .catch(err => {
            console.log('fetch error: ', err);
            let errMessage = `<p>${err.message}</p>`;
            $('.boredResult').html(errMessage);
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