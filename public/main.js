// Write your JavaScript code here!
 var planets = [ 
        ['Pluto', 0.06], 
        ['Neptune', 1.148], 
        ['Uranus', 0.917], 
        ['Saturn', 1.139], 
        ['Jupiter', 2.640], 
        ['Mars', 0.3895], 
        ['Moon', 0.1655], 
        ['Earth', 1], 
        ['Venus', 0.9032], 
        ['Mercury', 0.377], 
        ['Sun', 27.9] 
    ];
    const planetDropdown = document.getElementById('planets');
    planets.forEach(function(planet){
        const option = document.createElement('option');
        option.value = planet [0];
        option.textContent = planet[0]; 
        planetDropdown.appendChild(option);
    });
    function calculateWeight(weight, planetName) { 
        let planet = planets.find(function(planet){
            return planet[0] === planetName;
        }); 
        return weight * planet[1];
    }
    function handleClickEvent(e) { 
        let userWeight = document.getElementById('user-weight').value; 
        let planetName = document.getElementById('planets').value; 
        let result = calculateWeight(userWeight, planetName);
        document.getElementById('output').textContent = `If you were on ${planetName}, you would weigh ${result.toFixed(2)}lbs!`
    } 
    document.getElementById('calculate-button').onclick = handleClickEvent;