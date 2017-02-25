let jobList = [
    'Junior frontend developer - HTML5/CSS3/React',
    'Web developer intern',
    'Full stack developer - Node.js/React',
    'Senior backend developer - PHP/Node.js/mySQL',
    'iOS developer',
    'Android developer'
];
let jobTest = document.body.appendChild(document.createElement('div'));
jobTest.setAttribute('id', 'jobTest');
jobTest.innerHTML = 'Test';

function removeId() {
    jobTest.remove();
    addClass();
};

function addClass() {
    let newClass = document.body.appendChild(document.createElement('div'));
    newClass.classList.add('list-job', 'container');
    let list = document.createElement('ul')
    newClass.appendChild(list);

    for (var i = 0; i < jobList.length; i++) {
        let item = document.createElement("li");
        item.innerHTML = jobList[i];
        list.appendChild(item);
    }

}


removeId();
