


var rowNumber = 1, indexNumber = 0;
var eventId;
showEventCard();

function showEventCard() {

  for (i = indexNumber; i < Events.length; i++) {

    if (rowNumber <= 4) {

      eventId = Events[i].id;

      singleEventCard(eventId);

      rowNumber += 1;
      indexNumber = i;
    }

  }

  indexNumber += 1;


}


function viewMore() {

  showEventCard();
  rowNumber = 1;
}


function singleEventCard(eventId) {

  Events.map((item) => {

    if (item.id == eventId) {
      let eventCardDiv = document.getElementById('eventCardDiv');

      let newDivCard = document.createElement('div');

      newDivCard.innerHTML = `
      <div class="event-card row align-items-center shadow-sm mb-3 bg-white rounded">
      <div  class="col-lg-5 col-md-12 p-0">
      <img src="${item.thumbnail}" class="event-img" alt="Event Thumbnail">
      </div>
      <div class="col-lg-5 col-md-12  d-flex flex-column justify-content-between">
        <div class="event-details">
            <span class="badge bg-secondary">${item.category}</span>
            <span class="text-muted small ms-2">Sponsored by: ${item.sponsors[0].name}</span>
            <h4 class="mt-2 mb-1">${item.eventName}</h4>
        </div>
        <div class="event-meta d-flex ">
            <p class="text-muted small mb-0 me-3 fw-bold">📅 ${item.date.split('T')[0]}</p>
            <p class="text-muted small mb-0 fw-bold"><i class="fa-solid fa-location-dot me-2" style="color: #700000;"></i></i>${item.location.city}</p>
        </div>
    </div>
    <div class="col-lg-2 col-md-12 ">
            <button onClick="eventDetailes('${item.id}')" class=" view-button btn-sm mt-2 align-self-start" data-bs-toggle="modal" data-bs-target="#staticBackdrop"><i class="fa-solid fa-arrow-right"></i></button>
    </div>
</div>




        `;

      eventCardDiv.appendChild(newDivCard);

    }

  })
}

// caurosalItems()
// function caurosalItems() {


//   Events.sort((b, a) => new Date(b.date) - new Date(a.date));

//   let caurosalDiv = document.getElementById('caurosalDiv');


//   for (i = 0; i < 6; i++) {

//     let caurosalSingleDiv = document.createElement('div');
//     caurosalSingleDiv.className = 'item';
//     // caurosalSingleDiv.style.backgroundImage = `url(${Events[i].imgUrls[1]})`;
//     caurosalSingleDiv.style.backgroundPosition = 'center';
//     caurosalSingleDiv.style.backgroundSize = 'cover';

//     caurosalSingleDiv.innerHTML = `                       
//                             <div  class="card carousal-card ">
//                             <img src=${Events[i].imgUrls[1]} class="card-img-top" alt="...">
//                             <div class="card-body">
//                             <h5 class="card-title">${Events[i].eventName}</h5>
//                             <p class="card-text">${Events[i].date.split('T')[0]}</p>
//                             <p class="card-text"><small class="text-muted">${Events[i].location.city}</small></p>
//                             </div>
//                             </div>`;

//     caurosalDiv.appendChild(caurosalSingleDiv);

//   }


// }

document.addEventListener('DOMContentLoaded', function() {
  caurosalItems();
});

function caurosalItems() {


  Events.sort((b, a) => new Date(b.date) - new Date(a.date));

  let swiperWrapper = document.querySelector('.swiper-wrapper');

  for (let i = 0; i < Events.length; i++) {
    let swiperSlide = document.createElement('div');
    swiperSlide.className = 'swiper-slide';

    swiperSlide.innerHTML = `
<div class="card recent-card ">
<div class="row no-gutters">
  <div class="col-lg-5">
    <img src="${Events[i].imgUrls[1]}" class="card-img" alt="...">
  </div>
  <div class="col-lg-7 d-flex flex-column justify-content-center">
    <div class="card-body">
      <h5 class="card-title">${Events[i].eventName}</h5>
      <p class="card-text">${Events[i].date.split('T')[0]}</p>
      <p class="card-text"><small class="text-muted">${Events[i].location.city}</small></p>
    </div>
    
  </div>
</div>
</div>

    `;

    swiperWrapper.appendChild(swiperSlide);
  }


  new Swiper('.swiper-container', {
    direction: 'vertical', 
    slidesPerView: 3,
    loop: true,
    spaceBetween: 20,
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}


const eventArray = Events;

function eventDetailes(eventId) {

  const event = eventArray.find(eve => eve.id === String(eventId));


  document.getElementById("briefDescription").innerHTML = "";
  document.getElementById("fullDescription").innerHTML = "";
  document.getElementById("date").innerHTML = "";
  document.getElementById("venue").innerHTML = "";
  document.getElementById("location").innerHTML = "";
  document.getElementById("orgainzer-name").innerHTML = "";
  document.getElementById("orgainzer-email").innerHTML = "";
  document.getElementById("orgainzer-phone").innerHTML = "";
  document.getElementById("orgainzer-website").innerHTML = "";
  document.getElementById("Sicons").innerHTML = "";
  document.getElementById("sponsorDetails").innerHTML = "";
  document.getElementById("scheduleDetailContainer").innerHTML = "";
  document.getElementById('parkingInformation').innerHTML = "";
  document.getElementById('weatherInformation').innerHTML = "";
  document.getElementById("registrationLink").href = "";
  document.getElementById("reg-deadline").textContent = "";
  document.getElementById("guestDetails").innerHTML = "";

  if (event) {


    document.getElementById("briefDescription").innerHTML = event.briefDescription;
    document.getElementById("fullDescription").innerHTML = event.fullDescription;


    // date and time
    const isoDate = event.date;
    const dateTime = new Date(isoDate).toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
    document.getElementById("date").innerHTML = `<i class="fa-solid fa-calendar-days"></i> ${dateTime}`;


    // location
    document.getElementById("venue").innerHTML = ` <i class="fa-solid fa-location-dot me-2"></i>${event.location.venueName} ,${event.location.city} <i class="fa-solid fa-caret-down"></i>`
    document.getElementById("location").innerHTML = `${event.location.venueName}, ${event.location.address} ${event.location.city},${event.location.state},${event.location.country} - ${event.location.postalCode}`

    // event organizer info
    document.getElementById("orgainzer-name").innerHTML = event.organizer.name
    document.getElementById("orgainzer-email").innerHTML = `<i class="fa-solid fa-envelope me-2"></i>${event.organizer.contactEmail}`
    document.getElementById("orgainzer-phone").innerHTML = `<i class="fa-solid fa-phone me-2"></i>${event.organizer.contactPhone}`
    document.getElementById("orgainzer-website").innerHTML = `<i class="fa-solid fa-globe me-2"></i>${event.organizer.website}`
    // social media links
    document.getElementById("Sicons").innerHTML = `<a href="${event.socialMediaLinks.facebook}"><i class="fa-brands fa-facebook"></i></a> <a href="${event.socialMediaLinks.instagram}"><i class="fa-brands fa-instagram" style="color: #f5142b;"></i></a> <a href="${event.socialMediaLinks.instagram}"><i class="fa-brands fa-twitter"></i></a> `

    // sponsor
    const sponsorDetailsContainer = document.getElementById("sponsorDetails");
    event.sponsors.forEach(spon => {
      if (spon.logo && spon.name) {

        const sponsorContainer = document.createElement('div')
        sponsorContainer.classList.add('sponsor-container')

        const logoElement = document.createElement("img")
        logoElement.src = spon.logo
        logoElement.classList.add('sponsor-log')
        sponsorContainer.appendChild(logoElement)

        sponsorDetailsContainer.appendChild(sponsorContainer)
      }
    })


    // schedule
    const scheduleDetailContainer = document.getElementById("scheduleDetailContainer");
    event.schedule.forEach(sch => {
      if (sch.photo && sch.activity && sch.performer && sch.timeFrom && sch.timeTo) {
        const scheduleContainer = document.createElement('div');
        scheduleContainer.classList.add('schedule-container');

        const card = document.createElement('div');
        card.classList.add('card-horizontal');

        const imgElement = document.createElement('img');
        imgElement.src = sch.photo;
        imgElement.classList.add('schedule-image', 'me-3');

        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');

        const header = document.createElement('h5');
        header.classList.add('card-title',);
        header.textContent = sch.performer;

        const activity = document.createElement('p');
        activity.classList.add('card-text');

        const dateFrom = sch.timeFrom
        const startTime = new Date(dateFrom).toLocaleTimeString()

        const dateTo = sch.timeTo
        const endTime = new Date(dateTo).toLocaleTimeString()

        activity.innerHTML = `<span class="schedule-activity">${sch.activity}</span><br>  <i class="fa-regular fa-clock "></i> ${startTime} - ${endTime}`

        card.appendChild(imgElement);
        card.appendChild(cardBody);
        cardBody.appendChild(header);
        cardBody.appendChild(activity);
        scheduleContainer.appendChild(card);


        scheduleDetailContainer.appendChild(scheduleContainer);
      }
    });

    // accessibility

    const accessibilityInfo = event.accessibilityInformation
    displayAccessibilityFeatures(accessibilityInfo)

    function displayAccessibilityFeatures() {
      if (accessibilityInfo.wheelchairAccess) {
        document.getElementById("wheelchairAccess").innerHTML = '<i class="fa-solid fa-wheelchair"></i> Wheelchair Access';
      }

      if (accessibilityInfo.assistiveListeningDevices) {
        document.getElementById("assistiveListeningDevices").innerHTML = '<i class="fa-solid fa-assistive-listening-systems"></i> Assistive Listening Devices';
      }

      if (accessibilityInfo.signLanguageInterpreting) {
        document.getElementById("signLanguageInterpreting").innerHTML = '<i class="fa-solid fa-sign-language"></i> Sign Language Interpreting';
      }
    }
    // parking

    document.getElementById('parkingInformation').innerHTML = event.parkingInformation
    // weather
    document.getElementById('weatherInformation').innerHTML = event.weatherInformation

    // registration

    document.getElementById("registrationLink").href = event.registrationDetails.link

    const deadLine = Date(event.registrationDetails.deadline).toString().slice(0, 15);
    document.getElementById("reg-deadline").textContent = deadLine

  } else {

    console.log("Event not found.");
    document.getElementById("good").innerHTML = "Event not found.";
  }



  // Guest detaile display
  const guestDetailsContainer = document.getElementById("guestDetails");
  event.schedule.forEach(perf => {
    if (perf.photo && perf.performer && perf.activity) {

      const card = document.createElement("div");
      card.classList.add("card");


      const imgElement = document.createElement("img");
      imgElement.src = perf.photo;
      imgElement.classList.add("card-image");


      const content = document.createElement("div");
      content.classList.add("card-content");


      const nameElement = document.createElement("span");
      nameElement.textContent = perf.performer;
      nameElement.classList.add("performer-name");

      const activityElement = document.createElement("span");
      activityElement.textContent = perf.activity;
      activityElement.classList.add("performer-activity");


      content.appendChild(nameElement);
      content.appendChild(activityElement);


      card.appendChild(imgElement);
      card.appendChild(content);


      guestDetailsContainer.appendChild(card);
    }
  });

}