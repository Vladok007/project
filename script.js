'use scrict';
/*let persone = {
    name: "John",
    age: 23,
    loh: true
}; */

//console.log (persone['age']);
//alert("HELLO WORLD!!");
//let answer = confirm("Are you here?");
//let answer = prompt("Є 18 гівнюк?", "Да");

//console.log(answer);
//function showFirstMessage(text) {
//    alert(text);
//}
//
//showFirstMessage("PRIVET VLAD");
let money, time;

/*function start() {
    money = prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == "" || money == null) {
        money = prompt('Ваш бюджет на месяц?', '');
    }
}
start();*/

let appData = {
     budget: money,
     expenses: {},
     optionalExprenses: [],
     income: [],
     timeData : time,
     savings: true
};

/*function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
    
            console.log ("done");
    
            appData.expenses[a] = b;
        } else {                            
            console.log ("bad result");
            i--;
        }
    
    }
}
chooseExpenses();*/

function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let a = prompt ("Введите необязательную статью расходов в этом месяце", "");
        appData.optionalExprenses [i] = (a);       
    }
    alert("1:  " + appData.optionalExprenses[1] + '\n' + "2:  " + appData.optionalExprenses[2]+ 
    '\n' + "3:  " + appData.optionalExprenses[3]);
}

chooseOptExpenses();

/*function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log ("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log ("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log ("Это высокий уровень достатка!");
    } else {
        console.log ("Произошла ошибка");
    }    
}
detectLevel();

function checkSavings () {
    if (appData.savings == true) {
        let save = +prompt("Скільки відклав,бомжара?"),
        percent = +prompt("Під який процент?");
        appData.mounthIncome = save/100/12*percent ;
        alert("Дохід з депозиту: " + appData.mounthIncome);
    }
}
checkSavings();*/