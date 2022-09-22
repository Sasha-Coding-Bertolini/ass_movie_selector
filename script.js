const radioBtns = document.querySelectorAll('.radio-buttons div input');
const xMenMovies = movies.filter(x => x.title.toLowerCase().includes("x-men"));
const avengerMovies = movies.filter(x => x.title.toLowerCase().includes("avenger"));
const princessMovies = movies.filter(x => x.title.toLowerCase().includes("princess"));
const batmanMovies = movies.filter(x => x.title.toLowerCase().includes("batman"));
const latestMovies = movies.filter(x => x.year >= "2014");
const moviePosters = document.querySelector("#movie-posters")
const onlyPosters = movies.map(x => x.poster);



window.addEventListener('load', function(){
    document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
    for (x in onlyPosters){
        const newLi = document.createElement('li');
        const newImg = document.createElement('img');
        newImg.src = onlyPosters[x];
        moviePosters.appendChild(newLi);
        newLi.appendChild(newImg);
    };
})



radioBtns.forEach(x => x.addEventListener('click', function(){   
    switch (x.id){
        case "latest":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            const latestPosters = latestMovies.map(x => x.poster);
            for (x in latestPosters){
                    const newLi = document.createElement('li');
                    const newImg = document.createElement('img');
                    newImg.src = latestPosters[x];
                    moviePosters.appendChild(newLi);
                    newLi.appendChild(newImg);
                };
        break;
        case "avenger":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            const avengerPosters = avengerMovies.map(x => x.poster);
            for (x in avengerPosters){
                    const newLi = document.createElement('li');
                    const newImg = document.createElement('img');
                    newImg.src = avengerPosters[x];
                    moviePosters.appendChild(newLi);
                    newLi.appendChild(newImg);
                };
        break;
        case "x-men":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            const xMenPosters = xMenMovies.map(x => x.poster);
            for (x in xMenPosters){
                    const newLi = document.createElement('li');
                    const newImg = document.createElement('img');
                    newImg.src = xMenPosters[x];
                    moviePosters.appendChild(newLi);
                    newLi.appendChild(newImg);
                };
        break;
        case "princess":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            const princessPosters = princessMovies.map(x => x.poster);
            for (x in princessPosters){
                    const newLi = document.createElement('li');
                    const newImg = document.createElement('img');
                    newImg.src = princessPosters[x];
                    moviePosters.appendChild(newLi);
                    newLi.appendChild(newImg);
                };
        break;
        case "batman":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            const batmanPosters = batmanMovies.map(x => x.poster);
            for (x in batmanPosters){
                    const newLi = document.createElement('li');
                    const newImg = document.createElement('img');
                    newImg.src = batmanPosters[x];
                    moviePosters.appendChild(newLi);
                    newLi.appendChild(newImg);
                };
        break;
        case "undo":
            document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
            const undoMoviesPosters = movies.map(x => x.poster);
            for (x in undoMoviesPosters){
                    const newLi = document.createElement('li');
                    const newImg = document.createElement('img');
                    newImg.src = undoMoviesPosters[x];
                    moviePosters.appendChild(newLi);
                    newLi.appendChild(newImg);
                };
        break;
    default:
        
    }
}))






// radioBtns.forEach(x => x.addEventListener('click', function(){   
//     switch (x.id){
//         case "latest":
//             document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
//             const latestPosters = latestMovies.map(x => x.poster);
//             for (x in latestPosters){
//                     const newLi = document.createElement('li');
//                     const newImg = document.createElement('img');
//                     newImg.src = latestPosters[x];
//                     moviePosters.appendChild(newLi);
//                     newLi.appendChild(newImg);
//                 };
//         break;
//         case "avenger":
//             document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
//             const avengerPosters = avengerMovies.map(x => x.poster);
//             for (x in avengerPosters){
//                     const newLi = document.createElement('li');
//                     const newImg = document.createElement('img');
//                     newImg.src = avengerPosters[x];
//                     moviePosters.appendChild(newLi);
//                     newLi.appendChild(newImg);
//                 };
//         break;
//         case "x-men":
//             document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
//             const xMenPosters = xMenMovies.map(x => x.poster);
//             for (x in xMenPosters){
//                     const newLi = document.createElement('li');
//                     const newImg = document.createElement('img');
//                     newImg.src = xMenPosters[x];
//                     moviePosters.appendChild(newLi);
//                     newLi.appendChild(newImg);
//                 };
//         break;
//         case "princess":
//             document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
//             const princessPosters = princessMovies.map(x => x.poster);
//             for (x in princessPosters){
//                     const newLi = document.createElement('li');
//                     const newImg = document.createElement('img');
//                     newImg.src = princessPosters[x];
//                     moviePosters.appendChild(newLi);
//                     newLi.appendChild(newImg);
//                 };
//         break;
//         case "batman":
//             document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
//             const batmanPosters = batmanMovies.map(x => x.poster);
//             for (x in batmanPosters){
//                     const newLi = document.createElement('li');
//                     const newImg = document.createElement('img');
//                     newImg.src = batmanPosters[x];
//                     moviePosters.appendChild(newLi);
//                     newLi.appendChild(newImg);
//                 };
//         break;
//         case "undo":
//             document.querySelectorAll("#movie-posters li").forEach(x => moviePosters.removeChild(x));
//             const undoMoviesPosters = movies.map(x => x.poster);
//             for (x in undoMoviesPosters){
//                     const newLi = document.createElement('li');
//                     const newImg = document.createElement('img');
//                     newImg.src = undoMoviesPosters[x];
//                     moviePosters.appendChild(newLi);
//                     newLi.appendChild(newImg);
//                 };
//         break;
//     default:
        
//     }
// }))