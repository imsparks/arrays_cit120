var ele = document.body.querySelector(".box")

var warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
];

for (var i=0; i<warriors.length; i++){
    var ele2 = document.createElement("div");
    var nameEle = document.createElement("h1");
    var damageEle = document.createElement("h2");
    var healthEle = document.createElement("h2");
    var warriorEle = document.createElement("h2");


    nameEle.innerHTML = "Name: " + warriors[i].name;
    damageEle.innerHTML = "Damage: " + warriors[i].damage;
    healthEle.innerHTML = "Health: " + warriors[i].health;
    warriorEle.innerHTML = "Warrior: " + warriors[i].warrior;

    if (warriors[i].health >= 10 && warriors[i].damage >= 2 && warriors[i].warrior === true) {
        ele2.appendChild(nameEle);
        ele2.appendChild(damageEle);
        ele2.appendChild(healthEle);
        ele2.appendChild(warriorEle);
        ele.appendChild(ele2);
        if(warriors[i].name.includes("a")){
            nameEle.style.color = "red";
            damageEle.style.color = "red";
            healthEle.style.color = "red";
            warriorEle.style.color = "red";
        }
    }
}