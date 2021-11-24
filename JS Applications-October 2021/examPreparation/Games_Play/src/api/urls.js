let baseUrl = 'http://localhost:3030';

export let loginUrl = `${baseUrl}/users/login`;
export let registerUrl = `${baseUrl}/users/register`;
export let logoutUrl = `${baseUrl}/users/logout`;


export let getAllGamesUrl = `${baseUrl}/data/games?sortBy=_createdOn%20desc`;
export let getRecentGamesUrl = `${baseUrl}/data/games?sortBy=_createdOn%20desc&distinct=category`;
export let createGameUrl = `${baseUrl}/data/games`;
export let getGameUrl  = (gameId) => `${baseUrl}/data/games/${gameId}`;
export let editGameUrl = (gameId) =>`${baseUrl}/data/games/${gameId}`;
export let deleteGameUrl = (gameId) => `${baseUrl}/data/games/${gameId}`;