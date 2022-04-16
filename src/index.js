const { DateTime } = require("luxon");

const cities = [
  {
    city: "NEW YORK",
    timeZone: "America/New_York",
  },
  {
    city: "LONDON",
    timeZone: "Europe/London",
  },
  {
    city: "TOKYO",
    timeZone: "Asia/Tokyo",
  },
  {
    city: "SYDNEY",
    timeZone: "Australia/Sydney",
  },
  {
    city: "TAIPEI",
    timeZone: "Asia/Taipei",
  },
];

const clockZone = document.querySelector(".clockZone");

function renderClock() {
  clockZone.innerHTML = "";
  cities.forEach((ci) => {
    const dtDate = DateTime.now()
      .setZone(ci.timeZone)
      .toFormat("dd MMMM, yyyy");
    const dtTime = DateTime.now().setZone(ci.timeZone).toFormat("HH:mm:ss");
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
setInterval(renderClock, 1000);
