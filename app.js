/////////////////////////////////////////////////////////
/*--------------------> VARIABLES <--------------------*/
/////////////////////////////////////////////////////////

const variables = function () {

    //ES5
    var name5 = "Jane Smith";
    var age5 = "23";
    name5 = "Jane Miller";
    console.log(name5);

    //ES6
    const name6 = "Jane Smith";
    let age6 = "23";
    //    name6 = "Jane Miller";
    //    console.log(name6);

    /*
    --VAR -> function-scoped
    --LET, CONST -> block-scoped

        EXAMPLE:
    */
    function driversLicence(passedTest) {
        if (passedTest) {
            var firstName = "John";
            var yearOfBirth = 1990;
        }
        console.log(firstName + ', born in ' + yearOfBirth + ' is now oficially allowed to drive a car.');
    }
    driversLicence(true); //-> Działa, ponieważ zmienne obejmują całą funkcję driversLicence

    //    function driversLicence6(passedTest) {
    //        if (passedTest) {
    //            let firstName = "John";
    //            const yearOfBirth = 1990;
    //        }
    //        console.log(firstName + ', born in ' + yearOfBirth + ' is now oficially allowed to drive a car.');
    //    }
    //    driversLicence6(true); //-> Wyrzuci błąd, ponieważ zmienne obejmują tylko w bloku if

    function driversLicence6(passedTest) {
        let firstName;
        const yearOfBirth = 1990;

        if (passedTest) {
            firstName = "John";
        }
        console.log(firstName + ', born in ' + yearOfBirth + ' is now oficially allowed to drive a car.');
    }
    driversLicence6(true); //-> Działa, ponieważ zmienne zadeklarowane bezpośrednio w bloku funkcji

};
//variables();

// CONST, LET nie mogą być używane przed zadeklarowaniem, pojawi się błąd i informacja, że zmienna 'is not defined'. W przypadku VAR pojawi się 'undefined', co znaczy, że istnieje, ale nie została zdefiniowana.





//////////////////////////////////////////////////////////////
/*--------------------> BLOCKS & IIFEs <--------------------*/
//////////////////////////////////////////////////////////////

function blocks() {


    //ES5
    (function () {
        var a = 10;
        console.log(a);
    })();


    //ES6
    {
        const b = 5;
        let c = 10;
        console.log(b, c);
    }

};
//blocks();







///////////////////////////////////////////////////////
/*--------------------> STRINGS <--------------------*/
///////////////////////////////////////////////////////
function strings() {

    let firstName = "John";
    let lastName = "Smith";
    const yearOfBirth = 1990;

    function calcAge(year) {
        return 2018 - year;
    };

    //ES5
    console.log('This is ' + firstName + ". He was born in " + yearOfBirth + ". Today, he is " + calcAge(yearOfBirth) + " years old. ");

    //ES6
    console.log(`This is ${firstName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);


    const n = `${firstName} ${lastName}`;
    console.log(n.startsWith('J'));
    console.log(n.endsWith('h'));
    console.log(n.includes(' '));
    console.log(`${firstName} `.repeat(5));

};
//strings();







///////////////////////////////////////////////////////////////
/*--------------------> ARROW FUNCTIONS <--------------------*/
///////////////////////////////////////////////////////////////

const arrowFunctions = function () {

    //ES5
    var years = [1990, 2008, 1954, 1967, 1989];

    var ages5 = years.map(function (el) {
        return 2018 - el;
    });
    console.log(ages5);


    //ES6
    let ages6 = years.map(el => 2018 - el); // <-- 1 argument nawias niepotrzebny
    //console.log(ages6);


    ages6 = years.map((el, index) => `Element number ${index + 1}: ${2018 - el} years.`); // <-- więcej niż 1 argument, używamy nawiasu
    console.log(ages6);


    ages6 = years.map((el, index) => {
        const date = new Date().getFullYear();
        return `Element number ${index + 1}: ${date - el} years.`; // <-- więcej niż 1 linia kodu, używamy {}
    });
    console.log(ages6);


    // - arrow functions with 'THIS' keyword
    // 1. EXAMPLE


    //ES5
    var box5 = {
        color: 'green',
        position: 1,
        clickMe: function () {
            var self = this;
            document.querySelector('.green').addEventListener('click', function () {
                var str = "This is box number " + self.position + " and it is " + self.color;
                alert(str);
            })
        }
    }
    box5.clickMe();

    //ES6
    const box6 = {
        color: 'green',
        position: 1,
        clickMe: function () {
            document.querySelector('.green').addEventListener('click', () => {
                const str = `This is box number ${this.position} and it is ${this.color}`;
                alert(str);
            })
        }
    }
    box6.clickMe();

    // 2. EXAMPLE

    function Person(name) {
        this.name = name;
    }

    //ES5
    Person.prototype.myFriends5 =
        function (friends) {
            var arr = friends.map(function (el) {
                return this.name + ' is friends with ' + el;
            }.bind(this));
            console.log(arr);
        }

    var friends = ['Bob', 'Jane', 'Mark'];
    new Person("Tom").myFriends5(friends);

    //ES6
    Person.prototype.myFriends6 =
        function (friends) {
            const arr = friends.map(el => `${this.name} is friends with ${el}`);
            console.log(arr);
        }

    var friends = ['Bob', 'Jane', 'Mark'];
    new Person("Adam").myFriends6(friends);
    new Person("Helen").myFriends6(friends);

};
//arrowFunctions();





/////////////////////////////////////////////////////////////
/*--------------------> DESTRUCTURING <--------------------*/
/////////////////////////////////////////////////////////////

const destructuring = function () {

    //ES5
    var John = ['John', 26];
    var name = John[0];
    var age = John[1];
    console.log(name, age);

    //ES6
    const [a, b] = ['Tom', 25];
    console.log(a, b);

    const obj = {
        firstName: 'Aga',
        lastName: 'Kowal'
    }
    const {
        firstName,
        lastName
    } = obj; //nazwy zmiennych takie same jak klucz w obiekcie
    console.log(firstName, lastName);

    const {
        firstName: x,
        lastName: y
    } = obj; //nazwy zmiennych inne niż klucz w obiekcie
    console.log(x, y);

    // 1. EXAMPLE

    function calcAgeRetirement(year) {
        const age = new Date().getFullYear() - year;
        return [age, 65 - age];
    }

    const [age1, retirement] = calcAgeRetirement(1990);
    console.log(age1, retirement);

};
//destructuring();




//////////////////////////////////////////////////////
/*--------------------> ARRAYS <--------------------*/
//////////////////////////////////////////////////////

const arrays = function () {

    const boxes = document.querySelectorAll('.box'); //-> gdy pobieramy element ma on postać NodeList

    //ES5
    var boxes5 = Array.prototype.slice.call(boxes); //-> przenoszenie elementów do Array 
    //    boxes5.forEach(function(cur){
    //        cur.style.backgroundColor = "dodgerBlue";
    //    });

    //ES6
    const boxes6 = Array.from(boxes); //-> przenoszenie w ES6
    boxes6.forEach(cur => cur.style.backgroundColor = "dodgerBlue");


    // EXAMPLE

    //ES5
    var ages = [15, 17, 11, 23, 16, 8];
    var fullAge = ages.map(function (cur) {
        return cur >= 18;
    });
    console.log(fullAge.indexOf(true));
    console.log(ages[fullAge.indexOf(true)]);

    //ES6
    console.log(ages.findIndex(cur => cur >= 18));
    console.log(ages.find(cur => cur >= 18));


    /*-------LOOPS--------*/
    //ES5
    //    for(var i = 0; i < boxes5.length; i++) {
    //        if(boxes5[i].className === "box blue"){
    //            continue;
    //        }
    //        boxes5[i].textContent = "I changed to blue"
    //    };

    //ES6
    for (const cur of boxes6) {
        if (cur.className.includes("blue")) {
            continue;
        }
        cur.textContent = "I changed to blue";
    }


};
//arrays();




////////////////////////////////////////////////////////////////
/*--------------------> SPREAD OPERATORS <--------------------*/
////////////////////////////////////////////////////////////////

function spreadOperators() {

    function addFourAges(a, b, c, d) {
        return a + b + c + d;
    }

    var sum1 = addFourAges(18, 30, 12, 21);
    console.log(sum1);

    //ES5
    var ages = [18, 30, 12, 21];
    var sum2 = addFourAges.apply(null, ages);
    console.log(sum2);

    //ES6
    const sum3 = addFourAges(...ages);
    console.log(sum3);

    // EXAMPLE
    const family1 = ["Adam", "John", "Anne"];
    const family2 = ["Tom", "Jane", "Bryan"];

    const bigFamily = [...family1, "Lily", ...family2];
    console.log(bigFamily);

    // EXAMPLE
    const h = document.querySelector('h1');
    const boxes = document.querySelectorAll('.box');
    const all = [h, ...boxes];

    all.forEach(cur => cur.style.color = "purple");

};
//spreadOperators();




///////////////////////////////////////////////////////////////
/*--------------------> REST PARAMETERS <--------------------*/
///////////////////////////////////////////////////////////////

function restParameters() {

    //ES5
    function fullAge5(limit) {
        var arr = Array.prototype.slice.call(arguments, 1);
        arr.forEach(function (cur) {
            console.log(2018 - cur >= limit);
        })
    };
    fullAge5(21, 1990, 2010, 1967);

    //ES6
    function fullAge6(limit, ...years) {
        years.forEach(cur => console.log(2018 - cur >= limit));
    };
    fullAge6(18, 1990, 2010, 1967, 2016, 1933);
};
//restParameters();

/* Największą różnicą między spread operator, a rest parameters jest miejsce w którym ich używamy. Spread jest używany w function call, natomiast rest w deklaracji. */





//////////////////////////////////////////////////////////////////
/*--------------------> DEFAULT PARAMETERS <--------------------*/
//////////////////////////////////////////////////////////////////

function defaultParameters() {

    //ES5
    function SmithPerson(firstName, yearOfBirth, lastName, nationality) {

        lastName === undefined ? lastName = "Smith" : lastName = lastName;
        nationality === undefined ? nationality = "American" : nationality = nationality;
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
        this.lastName = lastName;
        this.nationality = nationality;
    };

    var john = new SmithPerson("John", "1991");
    //    console.log(john);

    //ES6

    function SmithPerson2(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American') {
        this.firstName = firstName;
        this.yearOfBirth = yearOfBirth;
        this.lastName = lastName;
        this.nationality = nationality;
    }

    var john = new SmithPerson2("John", "1976");
    var tom = new SmithPerson2("Tom", "1993", "Chyc", "Polish");
    console.log(john);
    console.log(tom);
};
//defaultParameters();





////////////////////////////////////////////////////
/*--------------------> MAPS <--------------------*/
////////////////////////////////////////////////////

function maps() {

    const question = new Map();

    /*---SET---*/
    question.set('question', 'What is the official name of the latest major Javascript version?');
    question.set(1, 'ES5');
    question.set(2, 'ES6');
    question.set(3, 'ES2015');
    question.set(4, 'ES7');
    question.set('correct', 3);
    question.set(true, 'Correct answer :)');
    question.set(false, 'Wrong, please try again!');

    //    console.log(question);

    /*---GET---*/
    console.log(question.get('question'));
    //    console.log(question.get('3'));
    //    console.log(question.get('true'));

    /*---SIZE---*/
    //    console.log(question.size);

    /*---DELETE---*/
    //question.delete(4);
    //    question.delete(2);
    //    console.log(question);

    /*---HAS---*/
    if (question.has(4)) {
        //        console.log('Answer 4 is here');
    }

    /*---CLEAR---*/
    //    question.clear();
    //    console.log(question);

    /*---LOOPING---*/
    //    question.forEach((key, value) => console.log(`This is ${key}, and it's set to ${value}`));

    //    for ( let key of question.keys()){
    //        console.log(key);
    //    }
    //    
    //        for ( let val of question.values()){
    //        console.log(val);
    //    }

    for (let [key, value] of question.entries()) {
        if (typeof (key) === 'number') {
            console.log(`Answer ${key}: ${value}`);
        }
    }
    const ans = parseInt(prompt('Write the correct answer'));
    console.log(question.get(ans === question.get('correct')));

};
//maps();





///////////////////////////////////////////////////////
/*--------------------> CLASSES <--------------------*/
///////////////////////////////////////////////////////

function classes() {

    //ES5
    var Person5 = function (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfbirth = yearOfBirth;
        this.job = job;
    }

    Person5.prototype.calculatedAge = function () {
        var age = new Date().getFullYear() - this.yearOfbirth;
        console.log(age);
    }
    var tom = new Person5('Tom', 1993, 'Teacher');
    console.log(tom);

    //ES6
    class Person6 {
        constructor(name, yearOfBirth, job) {
            this.name = name;
            this.yearOfbirth = yearOfBirth;
            this.job = job;
        }
        calculatedAge() {
            const age = new Date().getFullYear() - this.yearOfbirth;
            console.log(age);
        }
        static greeting() {
            console.log('Hey there!');
        }
    }
    var adam = new Person5('Adam', 1963, 'Designer');
    console.log(adam);

    Person6.greeting();
};
//classes();

/*
1.Klasy w odróżnieniu do Konstruktorów nie mają właściwości hoisting, dlatego jeżeli chcemy z nich      korzystać, musimy je zadeklarować na początku.
2. Możemy dodawać tylko metody do klasy, ale nie właściwości.
*/





///////////////////////////////////////////////////////////////////////
/*--------------------> CLASSES WITH SUBCLASSES <--------------------*/
///////////////////////////////////////////////////////////////////////

function subclasses() {

    //ES5
    var Person5 = function (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfbirth = yearOfBirth;
        this.job = job;
    }

    Person5.prototype.calculatedAge = function () {
        var age = new Date().getFullYear() - this.yearOfbirth;
        console.log(age);
    }

    var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
        Person5.call(this, name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    };

    Athlete5.prototype = Object.create(Person5.prototype); /// Athlete5 - subclass, Person5 - superclass

    Athlete5.prototype.wonMedal = function () {
        this.medals++;
        console.log(this.medals);
    };

    var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
    console.log(johnAthlete5);

    johnAthlete5.calculatedAge();
    johnAthlete5.wonMedal();


    //ES6
    class Person6 {
        constructor(name, yearOfBirth, job) {
            this.name = name;
            this.yearOfbirth = yearOfBirth;
            this.job = job;
        }
        calculatedAge() {
            const age = new Date().getFullYear() - this.yearOfbirth;
            console.log(age);
        }
    }

    class Athlete6 extends Person6 {
        constructor(name, yearOfBirth, job, olympicGames, medals) {
            super(name, yearOfBirth, job);
            this.olympicGames = olympicGames;
            this.medals = medals;
        }
        wonMedals() {
            this.medals++;
            console.log(this.medals);
        }
    }
    var johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
    console.log(johnAthlete6);
    johnAthlete6.wonMedals();
    johnAthlete6.calculatedAge();

};
//subclasses();





////////////////////////////////////////////////////////
/*--------------------> PRACTICE <--------------------*/
////////////////////////////////////////////////////////

const practice = function () {

    class Element {
        constructor(name, buildYear) {
            this.name = name;
            this.buildYear = buildYear;
        }
    }

    class Park extends Element {
        constructor(name, buildYear, area, numTrees) {
            super(name, buildYear);
            this.area = area;
            this.numTrees = numTrees;
        }

        treeDensity() {
            const density = this.numTrees / this.area;
            console.log(`${this.name} has a tree density of ${density} trees per square km.`);
        }
    }

    class Street extends Element {
        constructor(name, buildYear, length, size = 3) {
            super(name, buildYear);
            this.length = length;
            this.size = size;
        }

        classifyStreet() {
            const classification = new Map();
            classification.set(1, "tiny");
            classification.set(2, "small");
            classification.set(3, "normal");
            classification.set(4, "big");
            classification.set(5, "huge");
            console.log(`${this.name}, built in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
        }
    }

    function calc(array) {

        const sum = array.reduce((prev, cur, index) => prev + cur, 0);

        return [sum, sum / array.length];

    }

    const allParks = [new Park('Green Park', 1987, 0.2, 215),
                      new Park('Central Park', 1942, 1.1, 921),
                      new Park('Side Park', 1891, 2.6, 3541)];

    const allStreets = [new Street('Tatary Street', 1999, 1.1, 4),
                      new Street('Kosciuszki Street', 1987, 2.7, 2),
                      new Street('Ocean Street', 2009, 1.1),
                      new Street('Slomiana Street', 1978, 2.5, 5)];


    function reportParks(p) {
        console.log('-------PARK REPORT-------');
        //Density
        p.forEach(el => el.treeDensity());

        //Average age
        const age = p.map(el => new Date().getFullYear() - el.buildYear);
        const [totalAge, avgAge] = calc(age);
        console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

        //Which park has more than 1000 trees
        const trees = p.map(el => el.numTrees).findIndex(el => el >= 1000);
        console.log(`${p[trees].name} has more than 1000 trees.`)

    };

    function reportStreets(s) {
        console.log('-------STREET REPORT-------');

        //Total and average length of the town's streets
        const strLength = s.map(el => el.length);
        const [totalLength, avgLength] = calc(strLength);
        console.log(`Our ${s.length} streets has a total length of ${totalLength} km, with an average of ${avgLength} km.`)

        //Classify sizes
        s.forEach(el => el.classifyStreet());
    };

    reportParks(allParks);
    reportStreets(allStreets);

};
practice();