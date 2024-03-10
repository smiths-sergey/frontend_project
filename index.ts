//#region 1. Создание новых объектов через функции конструкторы
{

    interface User{
        name:string,
        age:number,
        userBirthday():void,    
    }
   
    const newObjectBlock = document.querySelector("#newObject");
  
    const user:User={
        name:'Alex',
        age:18,
        userBirthday(){
            this.age++;
        }
    }
    const userName = document.createElement("p");
    userName.textContent = user.name;
    newObjectBlock?.append(userName);
    const age = document.createElement("p");
    age.textContent = String(user.age);
    newObjectBlock?.append(age);
  
    const button = document.createElement("button");
    button.textContent = "День рождения";
    button.onclick = () => {
      user.userBirthday();
      age.textContent = String(user.age);
    };
    newObjectBlock?.append(button);
  }
  //#endregion 1. Создание новых объектов через функции конструкторы
  //#region 2. Логеры счетчиков от нуля, используя замыкания
  {
    function createCounterLogger() {
      let count = 0;
  
      return function () {
        count++;
        return count;
      };
    }
    const counterLogger = createCounterLogger();
    const counterBlock = document.querySelector("#counter");
    const button = document.createElement("button");
    button.textContent = '0';
    counterBlock?.append(button);
    button.onclick = () => {
      button.textContent = String(counterLogger());
    };
  }
  //#endregion 2. Логеры счетчиков от нуля, используя замыкания
  //#region 3. Видоизменение массивов и объектов
  {
    document
      ?.querySelector("#buttonSalaries")
      ?.addEventListener("click", function () {
        const salaries: number[] = [];
        const salariesLenght:number = 2 + Math.round(Math.random() * 10);
        for (let i = 0; i < salariesLenght; i++) {
          salaries.push(17000 + Math.round(Math.random() * 100000));
        }
        const netOfTaxsalaries:number[] = salaries.map((x) => x * 0.87);
        console.log(netOfTaxsalaries);
      });
  }
  //#endregion 3. Видоизменение массивов и объектов
  