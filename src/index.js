const { DateTime } = require("luxon");

const cities = [
  //   {
  //     city: "LONDON",
  //     timeZone: "Europe/London",
  //   },
  //   {
  //     city: "BANGKOK",
  //     timeZone: "Asia/Bangkok",
  //   },
  //   {
  //     city: "SYDNEY",
  //     timeZone: "Australia/Sydney",
  //   },
  {
    city: "NEW YORK",
    timeZone: "America/New_York",
  },
  {
    city: "TAIPEI",
    timeZone: "Asia/Taipei",
  },
];

// console.log(DateTime.now().setZone("Europe/London").toFormat("dd MM, yyyy"));
// console.log(DateTime.now().setZone("Europe/London").toFormat("hh:mm:ss"));

// console.log(DateTime.now().toFormat("dd MM, yyyy"));
// console.log(DateTime.now().toFormat("hh:mm:ss"));

// const header = document.querySelector(".header");
// const title = document.querySelector(".title");
const clockZone = document.querySelector(".clockZone");

function renderClock() {
  clockZone.innerHTML = "";
  cities.forEach((ci) => {
    const dtDate = DateTime.now()
      .setZone(ci.timeZone)
      .toFormat("dd MMMM, yyyy");
    const dtTime = DateTime.now().setZone(ci.timeZone).toFormat("hh:mm:ss");
    // console.log(dtDate, dtTime);

    const html = `
      <div class="clockZone__grid">
        <div class="clockZone__grid--city-date">
          <span class="city heading-secondary ">${ci.city}</span>
          <span class="date heading-tertitary">${dtDate}</span>
        </div>
        <div class="clockZone__grid--time heading-secondary ">${dtTime}</div>
      </div>
	  `;

    clockZone.insertAdjacentHTML("beforeend", html);
  });
}
renderClock();
// setInterval(renderClock, 1000);
