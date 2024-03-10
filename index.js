var _a;
//#region 1. Создание новых объектов через функции конструкторы
{
    var newObjectBlock = document.querySelector("#newObject");
    var user_1 = {
        name: 'Alex',
        age: 18,
        userBirthday: function () {
            this.age++;
        }
    };
    var userName = document.createElement("p");
    userName.textContent = user_1.name;
    newObjectBlock === null || newObjectBlock === void 0 ? void 0 : newObjectBlock.append(userName);
    var age_1 = document.createElement("p");
    age_1.textContent = String(user_1.age);
    newObjectBlock === null || newObjectBlock === void 0 ? void 0 : newObjectBlock.append(age_1);
    var button = document.createElement("button");
    button.textContent = "День рождения";
    button.onclick = function () {
        user_1.userBirthday();
        age_1.textContent = String(user_1.age);
    };
    newObjectBlock === null || newObjectBlock === void 0 ? void 0 : newObjectBlock.append(button);
}
//#endregion 1. Создание новых объектов через функции конструкторы
//#region 2. Логеры счетчиков от нуля, используя замыкания
{
    function createCounterLogger() {
        var count = 0;
        return function () {
            count++;
            return count;
        };
    }
    var counterLogger_1 = createCounterLogger();
    var counterBlock = document.querySelector("#counter");
    var button_1 = document.createElement("button");
    button_1.textContent = '0';
    counterBlock === null || counterBlock === void 0 ? void 0 : counterBlock.append(button_1);
    button_1.onclick = function () {
        button_1.textContent = String(counterLogger_1());
    };
}
//#endregion 2. Логеры счетчиков от нуля, используя замыкания
//#region 3. Видоизменение массивов и объектов
{
    (_a = document === null || document === void 0 ? void 0 : document.querySelector("#buttonSalaries")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        var salaries = [];
        var salariesLenght = 2 + Math.round(Math.random() * 10);
        for (var i = 0; i < salariesLenght; i++) {
            salaries.push(17000 + Math.round(Math.random() * 100000));
        }
        var netOfTaxsalaries = salaries.map(function (x) { return x * 0.87; });
        console.log(netOfTaxsalaries);
    });
}
//#endregion 3. Видоизменение массивов и объектов
