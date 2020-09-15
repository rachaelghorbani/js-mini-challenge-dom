
document.addEventListener('DOMContentLoaded', function(){
    /***** Deliverable 1 *****/
    // Since the JS script is at the top of our HTML file in the header it will run before the HTML content is loaded. Added a DOMContentLoaded event listener to ensure all HTML is loaded and we havve access to all nodes before running any JS. It will execute before the HTML is fully loaded without this event listener, and since our header const is trying to access an HTML node, it will return null.

    const header = document.querySelector("#header")
    // console.log("Here's your header:", header)
    
    
    
    /***** Deliverable 2 *****/
    //the header node was found via querySelector and looking for its id. Now that we have that we can access its style properties by calling the .style method on it. We can now call the .color method on this and set it equal to red to change the text color
    header.style.color = 'red'
    
    /***** Deliverable 3 *****/
    // console.log("PLAYERS array looks like this:", PLAYERS)
    // console.log(PLAYERS)
    function addPlayers(){
        for(let player of PLAYERS){
            const div = document.querySelector('.player-container')
            const playerDiv = document.createElement('div')
            playerDiv.classList.add('player')
            playerDiv.setAttribute("data-number", `${player.number}`)
            div.append(playerDiv)
            playerDiv.innerHTML = 
            `<h3>${player.name} <em>${player.nickname}</em></h3>
            <img src="${player.photo}" alt="${player.name}" />` 
        }
    }
  
    addPlayers()
    /***** Deliverable 4 *****/
    const unwanted = document.querySelector("div .player[data-number*='7'")
    unwanted.remove()
})
