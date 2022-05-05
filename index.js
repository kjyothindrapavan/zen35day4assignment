function compareObjects(obj1,obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if(!compareArrays(keys1.sort(),keys2.sort())) {
        return false;
    }
    for(let key in obj1) {
        if((isPrimitive(obj1[key])) && isPrimitive(obj2[key])) {
            if(!(obj1[key]===obj2[key])) {
                return false;
            }
        }
        else if(Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
            if(!compareArrays(obj1[key],obj2[key])) {
                return false;
            }
        }
        else if((typeof obj1[key]) === (typeof obj2[key])) {
            if(!compareObjects(obj1[key],obj2[key])) {
                return false;
            }
        }
        else return false;
    }
    return true;
}

function compareArrays(arr1,arr2) {
    if(arr1.length != arr2.length) {
        return false;
    }
    for(let i=0;i<arr1.length;i++) {
        if((isPrimitive(arr1[i])) && isPrimitive(arr2[i])) {
            if(!(arr1[i]===arr2[i])) {
                return false;
            }
        }
        else if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if(!compareArrays(arr1[i],arr2[i])) {
                return false;
            }
        }
        else if((typeof arr1[i]) === (typeof arr2[i])) {
            if(!compareObjects(arr1[i],arr2[i])) {
                return false;
            }
        }
        else {
            return false;
        }
    }
    return true;
}

function isPrimitive(element) {
    if(typeof element === "object") {
        return false;
    }
    return true;
}

var obj1  = {
    name:"person 1",
    age:5
}
var obj2 = {
    age:5,
    name:"person 1"
}

console.log(compareObjects(obj1,obj2));

let jsonObj1 = {
    "name" : "pavan",
    "address": {
        "street" : "ramalayamveedhi",
        "state" : "AndhraPradesh",
        "pin": "534111"
    },
    "degree":"computer science",
    "technologies":["c","java","javascript","html","css"]
};

let jsonObj2 = {
    "name" : "pavan",
    "degree":"computer sciencekl",
    "address": {
        "street" : "ramalayamveedhi",
        "state" : "AndhraPradesh",
        "pin": "534111"
    },
    "technologies":["c","java","javascript","html","css"]
};

console.log(compareObjects(jsonObj1,jsonObj2));

//2.Use the rest countries API url -> https://restcountries.eu/rest/v2/all and display all the country flags in console
let xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all",true);
xhr.responseType = "json";
xhr.onload = () => {
    let countries = xhr.response;
    for(let country of countries) {
        console.log(`name: ${country.name}
        flag: ${country.flags.png}`);
    }
}
xhr.send();

//3. Use the same rest countries and print all countries name, region, sub region and population
let xhr2 = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v2/all",true);
xhr.responseType = "json";
xhr.onload = () => {
    let countries = xhr.response;
    for(let country of countries) {
        console.log(`name: ${country.name}
        region: ${country.region}
        subregion: ${country.subregion}
        population: ${country.population}`);
    }
}
xhr.send();
