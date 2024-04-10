/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */




// This is an array of objects (Filming locations), storing the name of location, location on map, a picture of location, and a description
let filmlocations = [
    { name: "Smoke House resturant", location: "https://www.google.com/maps/place/Smoke+House+Restaurant/@34.1456076,-118.3418589,18.74z/data=!4m6!3m5!1s0x80c2bfb5f113f829:0xbc28fa219dfba425!8m2!3d34.1455215!4d-118.341308!16s%2Fg%2F1w0p5x3b?entry=ttu", moviepic: "https://shot.cafe/images/o/la-la-land-2016-304-24585.jpeg", about: 'Where Mia and Sebastian first met!\nThis resturant is located in Burbank. Although sebastian was playing piano, there is no usual piano playing at this resturant.\n This resturant is a great place to go it you love barbecue!\n4420 Lakeside Dr, Burbank, CA 91505', comment: []},
    { name: "Mt Hollywood drive", location: "https://www.google.com/maps/place/Mt+Hollywood+Dr,+Los+Angeles,+CA+90027/@34.1354586,-118.306709,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2bf81e40c43d9:0x2debdc3540b629f3!8m2!3d34.1354586!4d-118.3041341!16s%2Fg%2F1tfsc33b?entry=ttu", moviepic: "https://wallpapercave.com/wp/wp6815130.jpg", about: "The first place Mia and Sebastian sang a song and danced together! \n In the scene there is a lamp post and bench, but there is in fact no real lamp post or bench at this location. \nThe iconic song \"A lovely night\" was performed here in the film, since you're sure to enjoy your night at this location!\nMt. Hollywood Dr, Los Angeles, CA 90027", comment: [] },
    { name: "Rialto Theatre", location: "https://www.google.com/maps/place/Mosaic+South+Pasadena+at+the+Rialto+Theatre/@34.1140576,-118.1518359,18.23z/data=!4m6!3m5!1s0x80c2c48cff020a75:0x19886c5ee9d2064!8m2!3d34.1140236!4d-118.1506209!16s%2Fm%2F012m__gc?entry=ttu", moviepic: "https://www.quirkybyte.com/wp-content/uploads/2019/09/La-La-Land.jpg", about: "The place where Mia and Sebastian fell in love!\nIt was built in 1925 as a single screen theatre.\nThis theatre is famous for playing old movies which include \"Rebel Without a Cause\"\n 1023 Fair Oaks Ave, South Pasadena, CA 91030", comment: []},
    { name: "Griffith observitory", location: "https://www.google.com/maps/place/Griffith+Observatory,+2800+E+Observatory+Rd,+Los+Angeles,+CA+90027/@34.118407,-118.3029968,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2bf61db63bdf3:0xd0361a1494d1b18e!8m2!3d34.118407!4d-118.3004219!16s%2Fg%2F1ptxnty_0?entry=ttu", moviepic: "https://th.bing.com/th/id/R.b8c58a2e8c4fa556db2a6f83be2290b3?rik=iWSbrAxjh1Ndew&riu=http%3a%2f%2fawol.junkee.com%2fwp-content%2fuploads%2f2017%2f01%2fLa-La-Land-Header-Planetarium-2_1050_591_81_s_c1-1024x576.jpg&ehk=lhxlkJznOce3k0KkqPyvLVrGD9pWuIi7PoYKW9hspcc%3d&risl=&pid=ImgRaw&r=0", about: "The place Mia and Sebastian shared a kiss! \nBuilt in 1933, the griffith observatory sits on a hill in Los Angeles where you can get a great view of the city.\nThe Griffith observistory has a planetarium you can go visit for only $30 and experience what they did in the movie.\n 2800 E Observatory Rd, Los Angeles, CA 90027", comment: [] },
    { name: "Grand central Market", location: "https://www.google.com/maps/place/Grand+Central+Market/@34.050872,-118.2516301,17z/data=!3m2!4b1!5s0x80c2c64b8ff178b5:0x9e80cd109c7f4171!4m6!3m5!1s0x80c2c64b8e4372e7:0x489d4efdeb06d3d8!8m2!3d34.050872!4d-118.2490552!16zL20vMDdmN3M5?entry=ttu", moviepic: "https://th.bing.com/th/id/OIP.89Nw62VTiR_JO28KQ6BlbQHaDC?rs=1&pid=ImgDetMain", about: "A fun moment together!\n The grand central market is a place where a variety of resurants are all in one place, located in Downtown LA!\nA part from the great food, across the street is Angels flight(Another filming location).\n 317 S Broadway, Los Angeles, CA 90013", comment: [] },
    { name: "Light house cafe", location: "https://www.google.com/maps/place/The+Lighthouse+Cafe/@33.8618245,-118.4036038,16z/data=!3m2!4b1!5s0x80c2b3791c19b3df:0xfdc6c0712b8e7760!4m6!3m5!1s0x80c2b378fd7df941:0x2a35c2d79987eba1!8m2!3d33.8618245!4d-118.4010289!16s%2Fm%2F043rsxs?entry=ttu", moviepic: "https://m.media-amazon.com/images/M/MV5BNzQ1NDI2ZWItNzAxMi00ZWNmLTk4YzMtMzhhMDgxMDgzNDBjL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNDQzMDg4Nzk@._V1_.jpg", about: "The place Sebastian took Mia to see Jazz!\nThis jazz club is one where they do infact play live music and have a bar.\nKaroke night is also offered at this location, which makes it a fun place to go and visit!\n30 Pier Ave, Hermosa Beach, CA 90254", comment: [] },
    { name: "Blind donkey", location: "https://www.google.com/maps/place/Blind+Donkey/@33.7689995,-118.4913894,11z/data=!4m10!1m2!2m1!1sBlind+Donkey!3m6!1s0x80dd313c20ad94a3:0x2930a68ded61e382!8m2!3d33.7689995!4d-118.1865188!15sCgxCbGluZCBEb25rZXkiA4gBAVoOIgxibGluZCBkb25rZXmSAQxjb2NrdGFpbF9iYXLgAQA!16s%2Fg%2F11bbrm9cbw?entry=ttu", moviepic: "https://www.seeing-stars.com/Locations/LaLaLand/Sebs1.jpg", about: "The final moment of the film!\nThis place is actually a bar located in long beach that has a DJ playing music, not a jazz club.\n\n149 Linden Ave, Long Beach, CA 90802", comment: [] },
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array of objects
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < filmlocations.length; i++) {
        const filmlocation = filmlocations[i];
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, filmlocation, i); // Edit title, image, and location, and description
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newFilmlocation, index) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    // console.log("name of location: ", newFilmlocation.name);
    cardHeader.textContent = newFilmlocation.name; // Puts new name on card

    const cardImage = card.querySelector("img");
    // console.log("movie pic link: ", newFilmlocation.moviepic);
    cardImage.src = newFilmlocation.moviepic; // Puts new image on card
    cardImage.alt = newFilmlocation.name + " Poster";

    const cardLocation = card.querySelector("a");
    cardLocation.href = newFilmlocation.location; // Gives button on card a new location

    const cardAbout = card.querySelector("p");
    cardAbout.textContent = newFilmlocation.about; // Gives the unique description associated with location

    const cardButton = card.querySelector("button");
    cardButton.setAttribute('onclick', `submitcomment(${index})`);

    console.log("current card index:", index);
    
    const cardComment = card.querySelector("input");
    cardComment.setAttribute("id", `input-${index}`);

    const cardCommentDisplay = card.querySelector("span");
    cardCommentDisplay.setAttribute("id", `span-${index}`);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function filterLocations() {

    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    let selectedLocation = document.getElementById('filterDropdown');
    selectedLocation.addEventListener("change", () => {
        console.log("selected index: ", selectedLocation.selectedIndex)
    });

    if (selectedLocation.selectedIndex == 0) {
        for (let i = 0; i < filmlocations.length; i++) {
            const filmlocation = filmlocations[i];
            const nextCard = templateCard.cloneNode(true); // Copy the template card
            editCardContent(nextCard, filmlocation); // Edit title, image, and location, and description
            cardContainer.appendChild(nextCard); // Add new card to the container
        }
    }
    else {
        const filmlocation = filmlocations[selectedLocation.selectedIndex-1];
        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, filmlocation); // Edit title, image, and location, and description
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function submitcomment(index){

    const cardComment = document.getElementById(`input-${index}`); 
    console.log(`input-${index}`);
    console.log(cardComment.value);

    filmlocations[index].comment.push(cardComment.value);
    const cardInput = document.getElementById(`span-${index}`);
    cardInput.innerHTML = filmlocations[index].comment[0];
}