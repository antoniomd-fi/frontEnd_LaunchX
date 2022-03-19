const fetchPokemon = (options) =>{
    if (isNaN(options)){
        const pokeName = options;
        pokeInput = pokeName;
        document.getElementById("pokeName").value="";
        fetchPokemon2(pokeInput);
    }
    else{
        const pokeName=document.getElementById("pokeName");
        let pokeInput = pokeName.value.toLowerCase();
        document.getElementById("pokeName").value="";
        fetchPokemon2(pokeInput);
    }
}
const fetchPokemon2 = (pokeInput) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) =>{
        if(res.status!="200"){
            console.log(res);
            pokeImage("./image/pokemon-sad.gif");
            errorMessage();
        }
        else{
            return res.json();
        }
    }).then((data) => {
        console.log(data);
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImage(pokeImg);
        let nameAPI = data.name;
        let orderAPI = data.id;
        changeName(nameAPI,orderAPI);
        let stats = data.stats;
        console.log(stats);
        let hp=stats[0].base_stat;
        let attack=stats[1].base_stat;
        let defense=stats[2].base_stat;
        let sepecialAttack=stats[3].base_stat;
        let sepecialDefense=stats[4].base_stat;
        let speed=stats[5].base_stat;
        changeStats(hp,attack,defense,sepecialAttack,sepecialDefense,speed); 
        let types=data.types;  
        let typesAux = [];
        for(let i=0;i<types.length;i++){       
        typesAux[i]=types[i].type.name;
        }
        const tipo = document.getElementById("type").innerHTML="TYPE: ";
        for(let i=0;i<typesAux.length;i++){
            const tipo = document.getElementById("type").innerHTML+=("\n"+typesAux[i]);
        }
    })
}

const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src=url;
    pokeImg.style.height="200";
    
}

const changeName = (nameAPI, idAPI) => {
    const name = document.getElementById("nameSearch").innerHTML=nameAPI+" #"+idAPI;
}
const changeStats = (hp,attack,defense,sepecialAttack,sepecialDefense,speed)=>{
    const stats = document.getElementById("stats").innerHTML="STATS:";
    const life = document.getElementById("hp").innerHTML="HP: "+hp;
    const attackP = document.getElementById("attack").innerHTML="ATTACK: "+attack;
    const defenseP = document.getElementById("defense").innerHTML="DEFENSE: "+defense;
    const spAttackP = document.getElementById("spAttack").innerHTML="SPECIAL ATTACK: "+sepecialAttack;
    const spDefenseP = document.getElementById("spDefense").innerHTML="SPECIAL DEFENSE: "+sepecialDefense;
    const speedP = document.getElementById("speed").innerHTML="SPEED: "+speed;
    
}


const errorMessage = () =>{
    const title = document.getElementById("nameSearch").innerHTML="ERROR"; 
    const stats = document.getElementById("stats").innerHTML="POKEMON NOT FOUND:";
    const life = document.getElementById("hp").innerHTML="HP: ?";
    const attackP = document.getElementById("attack").innerHTML="ATTACK: ?";
    const defenseP = document.getElementById("defense").innerHTML="DEFENSE: ?";
    const spAttackP = document.getElementById("spAttack").innerHTML="SPECIAL ATTACK: ?";
    const spDefenseP = document.getElementById("spDefense").innerHTML="SPECIAL DEFENSE: ?";
    const speedP = document.getElementById("speed").innerHTML="SPEED: ?";
    const typ = document.getElementById("type").innerHTML="ERROR";
}







