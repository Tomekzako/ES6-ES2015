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
destructuring();




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
arrays();