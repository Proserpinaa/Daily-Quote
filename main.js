// add event to element with id button
var searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click',quoteSearch, false);

// enter key also activates/runs the function
var search = document.getElementById('search');
search.addEventListener('keypress', function enterKey(e) {
    if (e.keyCode == 13) {
        quoteSearch();
    };
}, false);

function quoteSearch() {
    
    // creating request variable and assigning XMLHRequest to it
    var request = new XMLHttpRequest();
    request.withCredentials = true;
    
    // clear any previous data after each new search
    document.getElementById('results').innerHTML = " ";

    
     // open a new connection, using the GET request on the URL endpoint
    request.open("GET", "https://quotes15.p.rapidapi.com/quotes/random/?language_code=en");
    request.setRequestHeader("x-rapidapi-host", "quotes15.p.rapidapi.com");
    request.setRequestHeader("x-rapidapi-key", "db9fcc3a67msh33deed82dc6759ep146526jsne07f73377e79");
    


    request.onload = function() {
        // begin accessing JSON data here 
        var data = JSON.parse(this.responseText);
        console.log(data)
        
        // create elements
        var newCode = document.createElement('div');
        var newName = document.createElement('h1')
        var newContent = document.createElement('h2');
        var newTags = document.createElement('h3');
        var newUrl = document.createElement('a');

        // fill the info to elements
        newContent.innerText = data.content;
        newName.innerText = data.originator.name;
        newTags.innerText = data.tags;

        newUrl.className = 'btn';
        newUrl.innerText = 'Learn More';
        newUrl.href = data.url;
        newUrl.setAttribute('target','_blank');

        // add tags to document
        newCode.appendChild(newName);
        newCode.appendChild(newContent);
        newCode.appendChild(newUrl);
        newCode.appendChild(newTags);


        // add results to the screen
        var results = document.getElementById('results');
        results.appendChild(newCode);
        };
    request.send();
}