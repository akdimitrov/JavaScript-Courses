function salary(input){
    const FACEBOOK_FINE = 150;
    const INSTAGRAM_FINE = 100;
    const REDDIT_FINE = 50;
    let index = 0;
    let oppenedTabs = Number(input[index++]);
    let salary = Number(input[index++]);
    
    for (let i = 0; i < oppenedTabs; i++) {
        let tab = input[index++];
        switch(tab){
            case "Facebook": salary -= FACEBOOK_FINE; break;
            case "Instagram": salary -= INSTAGRAM_FINE; break;
            case "Reddit": salary -= REDDIT_FINE; break;
        }

        if(salary <= 0){
            console.log("You have lost your salary.");
            break;
        }
    }

    if(salary > 0){
        console.log(salary);
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"])
salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"])