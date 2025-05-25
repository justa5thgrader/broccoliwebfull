/**
 * Game List for Canvas Interface
 * Contains the list of games that can be loaded in the canvas interface
 */

// List of available games
const gamesList = [
    {
        title: "Solar Smash",
        url: "https://games.crazygames.com/en_US/solar-smash/index.html?v=1.331",
        thumbnail: "https://images.crazygames.com/games/solar-smash/cover-1591336739727.png?auto=format,compress&q=75&cs=strip",
        description: "Destroy planets with various weapons in this physics-based destruction game.",
        category: "Simulation"
    },
    {
        title: "Holey.io",
        url: "https://games.crazygames.com/en_US/holey-io-battle-royale/index.html?v=1.331",
        thumbnail: "https://images.crazygames.com/games/holey-io-battle-royale/thumb-1584433985486.png?auto=format,compress&q=75&cs=strip",
        description: "Grow your hole and consume everything in this multiplayer io game.",
        category: "IO"
    },
    {
        title: "Slice Master",
        url: "https://games.crazygames.com/en_US/slice-master/index.html?v=1.331",
        thumbnail: "https://images.crazygames.com/slice-master/20201014162703/slice-master-cover?auto=format,compress&q=75&cs=strip",
        description: "Slice fruits and avoid bombs in this fast-paced arcade game.",
        category: "Arcade"
    },
    {
        title: "Ragdoll Archers",
        url: "https://games.crazygames.com/en_US/ragdoll-archers/index.html?v=1.331",
        thumbnail: "https://images.crazygames.com/ragdoll-archers/20220318114011/ragdoll-archers-cover?auto=format,compress&q=75&cs=strip",
        description: "Battle with physics-based archery in this hilarious ragdoll game.",
        category: "Action"
    },
    {
        title: "Shell Shockers",
        url: "https://games.crazygames.com/en_US/shellshockersio/index.html?v=1.331",
        thumbnail: "https://images.crazygames.com/shellshockersio/20200325162704/shellshockersio-cover?auto=format,compress&q=75&cs=strip",
        description: "FPS game where you play as armed eggs in intense multiplayer battles.",
        category: "Shooter"
    },
    {
        title: "Devil Cat Granny",
        url: "https://games.crazygames.com/en_US/cat-life-simulator-devil-cat/index.html?v=1.331",
        thumbnail: "https://images.crazygames.com/cat-life-simulator-devil-cat/20230214172511/cat-life-simulator-devil-cat-cover?auto=format,compress&q=75&cs=strip",
        description: "Play as a mischievous cat causing chaos in a granny's house.",
        category: "Simulation"
    },
    {
        title: "Italian Brainrot Clicker",
        url: "https://games.crazygames.com/en_US/italian-brainrot-clicker-usp/index.html?v=1.331",
        thumbnail: "https://images.crazygames.com/italian-brainrot-clicker-usp/20230721151211/italian-brainrot-clicker-usp-cover?auto=format,compress&q=75&cs=strip",
        description: "An addictive clicker game with an Italian theme.",
        category: "Clicker"
    },
    {
        title: "Crazy Supermarket",
        url: "https://games.crazygames.com/en_US/supermarket-simulator-cashier-game/index.html?v=1.331",
        thumbnail: "https://images.crazygames.com/supermarket-simulator-cashier-game/20220519163850/supermarket-simulator-cashier-game-cover?auto=format,compress&q=75&cs=strip",
        description: "Manage a busy supermarket as a cashier in this fun simulator game.",
        category: "Simulation"
    },
    {
        title: "Hazmob FPS",
        url: "https://games.crazygames.com/en_US/hazmob-fps-online-shooter/index.html?v=1.331",
        thumbnail: "https://images.crazygames.com/hazmob-fps-online-shooter/20230607171928/hazmob-fps-online-shooter-cover?auto=format,compress&q=75&cs=strip",
        description: "Fast-paced multiplayer first-person shooter with hazmat suits and intense action.",
        category: "Shooter"
    }
];

/**
 * Creates game cards for the canvas interface
 * @param {HTMLElement} container - The container to add the game cards to
 */
function createGameCards(container) {
    if (!container) return;
    
    // Clear the container
    container.innerHTML = '';
    
    // Create a game grid
    const gameGrid = document.createElement('div');
    gameGrid.className = 'game-grid';
    gameGrid.style.display = 'grid';
    gameGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(250px, 1fr))';
    gameGrid.style.gap = '20px';
    gameGrid.style.padding = '20px';
    gameGrid.style.position = 'relative';
    gameGrid.style.zIndex = '10';
    
    // Add each game to the grid
    gamesList.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.className = 'game-card';
        gameCard.style.backgroundColor = 'rgba(20, 30, 90, 0.8)';
        gameCard.style.borderRadius = '10px';
        gameCard.style.overflow = 'hidden';
        gameCard.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
        gameCard.style.transition = 'transform 0.3s ease-out, box-shadow 0.3s ease';
        gameCard.style.cursor = 'pointer';
        
        // Create game card content
        gameCard.innerHTML = `
            <div style="position: relative; padding-top: 56.25%;">
                <img src="${game.thumbnail}" alt="${game.title}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
            </div>
            <div style="padding: 15px;">
                <h3 style="margin: 0 0 10px; color: #fff; font-family: 'Orbitron', sans-serif;">${game.title}</h3>
                <p style="margin: 0 0 15px; color: #ccc; font-size: 14px;">${game.description}</p>
                <span style="display: inline-block; background: linear-gradient(45deg, #ff00ff, #00ffff); color: #000; padding: 3px 8px; border-radius: 3px; font-size: 12px; font-weight: bold;">${game.category}</span>
                <button class="play-button" style="display: block; width: 100%; margin-top: 15px; padding: 10px; background: linear-gradient(45deg, #ff00ff, #00ffff); border: none; border-radius: 5px; color: #000; font-weight: bold; font-family: 'Orbitron', sans-serif; cursor: pointer; transition: transform 0.2s ease;">PLAY NOW</button>
            </div>
        `;
        
        // Add click event to play the game
        gameCard.querySelector('.play-button').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            playGame(game);
        });
        
        // Add the game card to the grid
        gameGrid.appendChild(gameCard);
    });
    
    // Add the grid to the container
    container.appendChild(gameGrid);
}

/**
 * Plays a game using the iframe-bypass system
 * @param {Object} game - The game to play
 */
function playGame(game) {
    if (window.iframeBypass && typeof window.iframeBypass.openCrazyGamesEmbed === 'function') {
        window.iframeBypass.openCrazyGamesEmbed(game.url);
    } else {
        console.error('iframe-bypass.js not loaded or openCrazyGamesEmbed not available');
        // Fallback to opening in a new tab
        window.open(game.url, '_blank');
    }
}

/**
 * Initializes the games interface
 */
function initGamesInterface() {
    // Create a container for the games if it doesn't exist
    let gamesContainer = document.getElementById('games-container');
    if (!gamesContainer) {
        gamesContainer = document.createElement('div');
        gamesContainer.id = 'games-container';
        gamesContainer.style.position = 'fixed';
        gamesContainer.style.top = '0';
        gamesContainer.style.left = '0';
        gamesContainer.style.width = '100%';
        gamesContainer.style.height = '100%';
        gamesContainer.style.overflowY = 'auto';
        gamesContainer.style.zIndex = '5';
        document.body.appendChild(gamesContainer);
    }
    
    // Create game cards
    createGameCards(gamesContainer);
}

// Initialize the games interface when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Wait a bit to ensure canvas is initialized first
    setTimeout(initGamesInterface, 500);
});

// Export functions for use in the main application
window.gamesInterface = {
    initGamesInterface,
    createGameCards,
    playGame,
    gamesList
};
