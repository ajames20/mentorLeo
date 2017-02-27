'use strict';

(function() {
    function addClass() {
        let newClass = document.body.appendChild(document.createElement('div'));
        newClass.classList.add('card-layout');
        let url = 'https://jobs.github.com/positions.json?description=html&css';

        fetch(url, {
            method: 'get',
            mode: 'cors'

        }).then(function(resp) {
            return resp.json();
        }).then(function(data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                let jobLink = data[i].url,
                    companyName = data[i].company,
                    jobDescriptionJson = data[i].description.slice(0, 200) + '... ',
                    jobDescription = jobDescriptionJson.replace(/(<([^>]+)>)/ig, ""),
                    howToApply = data[i].url,
                    jobTitle = data[i].title,
                    photo = data[i].company_logo;

                newClass.innerHTML += '<div class="card description"><a href="jobDescription">' +
                    '<h3 class="title">' + companyName + '</h3>' +
                    '<span class="job-title">' + jobTitle + '</span>' +
                    '<div class="description">' + jobDescription + '</div></a>';
            }

        }).catch(function(error) {
            // If there is any error you will catch them here
            console.log(error);
        });

    }

    addClass();

})();
