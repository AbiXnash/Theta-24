const eventData = {
  1: [
    {
      cluster: "Cluster 4",
      title: "Event 1",
      note: "Event Description ",
      url_sastra: "#",
      url_otherclg: "#",
    },
    {
      cluster: "Cluster 3",
      title: "Event 2",
      note: "Event Description ",
      url_sastra: "#",
      url_otherclg: "#",
    },
  ],
  2: [
    {
      cluster: "Cluster 2",
      title: "Event 3",
      note: "Event Description ",
      url_sastra: "#",
      url_otherclg: "#",
    },
  ],
  3: [
    {
      cluster: "Cluster 1",
      title: "Event 4",
      note: "Event Description ",
      url_sastra: "#",
      url_otherclg: "#",
    },
  ],
};

function showEvents(day) {
  const eventsContainer = document.getElementById("events-container");
  const tabs = document.querySelectorAll(".tab");

  tabs.forEach((tab) => tab.classList.remove("active"));

  if (day === "all") {
    const allEvents = Object.values(eventData).flat();
    displayEvents(allEvents);
    tabs[0].classList.add("active");
  } else {
    const events = eventData[day];
    displayEvents(events);
    tabs[day].classList.add("active");
  }
}

function displayEvents(events) {
  const eventsContainer = document.getElementById("events-container");
  eventsContainer.innerHTML = ""; // Clear previous events

  events.forEach((event) => {
    const courseItem = document.createElement("div");
    courseItem.classList.add("ag-courses_item");

    const courseLink = document.createElement("div");
    courseLink.classList.add("ag-courses-item_link");

    const courseBg = document.createElement("div");
    courseBg.classList.add("ag-courses-item_bg");
    courseLink.appendChild(courseBg);

    const courseTitleContainer = document.createElement("div");
    courseTitleContainer.classList.add("ag-courses-item_title");

    const courseTitle = document.createElement("h4");
    courseTitle.innerHTML = `<br>${event.title}`;
    courseTitleContainer.appendChild(courseTitle);
    courseTitleContainer.appendChild(courseTitle);
    const lineBreak = document.createElement("br");
    courseTitleContainer.appendChild(lineBreak);

    const additionalText = document.createElement("p");
    additionalText.style.fontSize = "1rem";
    additionalText.style.lineHeight = "1";
    additionalText.style.fontWeight = "normal";
    additionalText.textContent = event.note || "";
    courseTitleContainer.appendChild(additionalText);

    courseLink.appendChild(courseTitleContainer);

    if (event.cluster) {
      const dateBox = document.createElement("div");
      dateBox.classList.add("ag-courses-item_date-box");

      const startLabel = document.createTextNode("Conducted by: ");
      dateBox.appendChild(startLabel);

      const dateSpan = document.createElement("span");
      dateSpan.classList.add("ag-courses-item_date");
      dateSpan.textContent = event.cluster;
      dateBox.appendChild(dateSpan);

      // Add the register buttons
      const registerBtnDiv = document.createElement("div");
      registerBtnDiv.classList.add("register-btn");

      const sastraBtn = document.createElement("button");
      sastraBtn.classList.add("button-85");
      sastraBtn.setAttribute("role", "button");
      sastraBtn.textContent = " SASTRA ";
      sastraBtn.addEventListener("click", () =>
        openURL(event.url_sastra || "#"),
      ); // Use event.url or default to '#'
      registerBtnDiv.appendChild(sastraBtn);

      const otherCollegeBtn = document.createElement("button");
      otherCollegeBtn.classList.add("button-85");
      otherCollegeBtn.setAttribute("role", "button");
      otherCollegeBtn.textContent = "Other College";
      otherCollegeBtn.addEventListener("click", () =>
        openURL(event.url_otherclg || "#"),
      ); // Set a default URL for Other College
      registerBtnDiv.appendChild(otherCollegeBtn);

      dateBox.appendChild(registerBtnDiv);

      courseLink.appendChild(dateBox);
    }

    courseItem.appendChild(courseLink);
    eventsContainer.appendChild(courseItem);
  });
}

function openURL(url) {
  window.open(url, "_blank"); // Open the URL in a new tab/window
}

// Initial display of all events
showEvents("all");
