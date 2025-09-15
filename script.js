// Social Media Dashbord

class Social{
    constructor(borderTopColor, icon, handle, followers, arrow, today, todayColor){
        this.borderTopColor = borderTopColor;
        this.icon = icon;
        this.handle = handle;
        this.followers = followers;
        this.arrow = arrow;
        this.today = today;
        this.todayColor = todayColor;
    }
}

const facebook = new Social("rgba(56, 137, 203, 0.8);", "facebook.png", "@nathanf", 1997, "&utrif;", 12, "rgb(80, 200, 120)")
const x = new Social("rgb(0, 108, 255);", "x.png", "@nathanf", 1044, "&utrif;", 99, "rgb(80, 200, 120)");
const instagram = new Social("hotpink", "instagram.png", "@realnathanf", 11000, "&utrif;", 1099, "rgb(80, 200, 120)");
const youtube = new Social("rgb(237, 41, 81)", "youtube.png", "@Nathan F.", 8239, "&dtrif;", 144, "rgb(237, 41, 81)");

// Social Media Cards
const socials = [facebook, x, instagram, youtube];
const socialCards = document.querySelector(".cards");

socials.map(function(social){
    socialCards.innerHTML += `
    <div class="card" style="border-top-color: ${social.borderTopColor};">
        <div class="social">
            <img src="./logos/${social.icon}" class="social-logo"><span class="handle">${social.handle}</span>
        </div>
        <h1 class="followers">${social.followers}</h1>
        <span style="color: rgb(101, 139, 196)">Followers</span>
        <p class="stat" style="color: ${social.todayColor};"><span class="arrow" >${social.arrow}</span>${social.today} Today</p>
    </div>
    `
});

class Overview{
    constructor(title, icon, number, arrow, stat, statColor) {
        this.title = title;
        this.icon = icon;
        this.number = number;
        this.arrow = arrow;
        this.stat = stat;
        this.statColor = statColor;
    }
}

const pageViews = new Overview("Page Views",`${facebook.icon}`, 87, `&utrif;`, 3, "rgb(80, 200, 120)");
const likes1 = new Overview ("Likes",`${facebook.icon}`, 52, `&dtrif;`, 2, "rgb(237, 41, 81)");
const likes2 = new Overview("Likes",`${instagram.icon}`, 5462, `&utrif;`, 2257, "rgb(80, 200, 120)");
const profileViews = new Overview("Profile Views", `${instagram.icon}`, `${52}k`,`&utrif;`, 1375, "rgb(80, 200, 120)");
const retweets = new Overview("Retweets", `${x.icon}`, 117, `&utrif;`, 303, "rgb(80, 200, 120)");
const likes3 = new Overview("Likes", `${x.icon}`, 507, `&utrif;`, 553, "rgb(80, 200, 120)");
const likes4 = new Overview("Likes",`${youtube.icon}`, 107, `&dtrif;`,19, "rgb(237, 41, 81)");
const totalViews = new Overview("Total Views",`${youtube.icon}`, 1407,`&dtrif;`, 12, "rgb(237, 41, 81)")



const overviews = document.querySelector(".overview");
const overviewCards = [pageViews, likes1, likes2, profileViews, retweets, likes3, likes4, totalViews];

// Overview Cards
overviewCards.map(function(overview){
    overviews.innerHTML += `
    <div class="overview-card card">
        <div class="overview-card-part">
            <span>${overview.title}</span><img src="./logos/${overview.icon}" class="social-logo">
        </div>
        <div class="overview-card-part">
            <span class="followers">${overview.number}</span><span style="margin-top: 7px; color: ${overview.statColor}">${overview.arrow}${overview.stat}&percnt;</span>
        </div>
    </div>
    `
})

// Light Mode
const body = document.querySelector(".body");

// Theme
let theme = document.getElementById("theme")

// Toogle Button Light Mode
const toggleButton = document.querySelector(".tog");
const toggleContainer = document.querySelector(".con");

// Cards Light Mode
let socialCard = document.querySelectorAll(".card");

function lightMode(){
    toggleButton.classList.toggle("toggle-left");
    toggleContainer.classList.toggle("con-light");
    
    for (eachCard of socialCard) {
        eachCard.classList.toggle("card-light")
    }
    
    theme.innerHTML = `Light Mode`;
    body.classList.toggle("body-light");
    
    if (toggleButton.classList.contains("toggle-left")){
        theme.innerHTML = `Light Mode`;
    } else {
        theme.innerHTML = `Dark Mode`;
    }

}





