import axios from "../../axios";
import {loaded} from "./state";

export const getStarships = (url,starships) => {
    return (dispatch) => {
        function getAllStarwarsShips() {
            let ships = [];
            // first page
            return axios("/starships/")
                .then(({data}) => {
                    // collect ships from first page
                    ships = data.results;
                    return data.count;
                })
                .then(count => {
                    // exclude the first request
                    const numberOfPagesLeft = Math.ceil((count - 1) / 10);
                    let promises = [];
                    // start at 2 as you already queried the first page
                    for (let i = 2; i <= numberOfPagesLeft; i++) {
                        promises.push(axios(`/starships?page=${i}`));
                    }
                    return Promise.all(promises);
                })
                .then(response => {
                    //get the rest records - pages 2 through n.
                    ships = response.reduce((acc, data) => [...acc, ...data.data.results], ships);
                    return ships;
                })
                .catch(error => console.log(error));
        }
        
        (async () => {
            const starwarsShips = await getAllStarwarsShips();
            dispatch(loaded(starwarsShips));
        })();
    }
}