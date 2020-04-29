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

function start() {
    money = prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    while (isNaN(money) || money == "" || money == null) {
        money = prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
     budget: money,
     expenses: {},
     optionalExprenses: [],
     income: [],
     timeData : time,
     savings: true,
     chooseExpenses: function() {
        for (let i = 0; i < 1; i++) {
            let a = prompt ("Введіть обовязкові витрати в цьому місяці :", ""),
                b = prompt ("Скільки це буде коштувати?", "");
        
            if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) 
            {
        
                console.log ("done");
        
                appData.expenses[a] = b;
            } else {                            
                console.log ("bad result");
                i--;}
            } },
    
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let a = prompt ("Введіть додаткові необовязкові витрати в цьому місяці : ", "");
            appData.optionalExprenses [i] = (a);       
        }
        alert("1:  " + appData.optionalExprenses[1] + '\n' + "2:  " + appData.optionalExprenses[2]);
},

    detectDayBudget: function(){ 
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert ("Бюджет на 1 день становить :  " + appData.moneyPerDay + "  гривасіків");
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log ("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log ("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log ("Это высокий уровень достатка!");
        } else {
            console.log ("Произошла ошибка");
        }},

    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Скільки відклав,бомжара?"),
            percent = +prompt("Під який процент?");
            appData.mounthIncome = save/100/12*percent ;
            alert("Дохід з депозиту: " + appData.mounthIncome);
    }},
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt ('Що принесе додатковий прибуток? (вкажіть через кому)','');
        
            if ( typeof(items) === 'string'  && typeof(items) != null && items != "" &&  items.length < 50) 
            {
        
                console.log ("done");
                appData.income = items.split(', ');
                appData.income.push(prompt('Може ше шось?'));
                appData.income.sort();

            } else {                            
                console.log ("bad result");
                i--;}
            }
            appData.income.forEach(function(item, i){
            alert('Способы доп. заработка : \n' + (i+1) + ' :  ' + item );});

    }
     

};
// console.log('Наш обєкт має такі властивості :  ');
// for (let key in appData) {
//     console.log( key + '  ' + appData[key]);
// }
