function leftMainTask(assignedTaskIdd) {
  const mainTsask = document.getElementById(assignedTaskIdd).innerText;
  const convertedMainTask = parseFloat(mainTsask);
  const leftMainTask = convertedMainTask - 1;
  document.getElementById(assignedTaskIdd).innerText = leftMainTask;

  if (leftMainTask === 0) {
    alert("Congrats!! You have completed all the current task");
  }
}

function TotalMainTask(totalTaskIdd, disabled) {
  const totaltask = document.getElementById(totalTaskIdd).innerText;
  const convertedTotalTask = parseFloat(totaltask);
  const summedTotalTask = convertedTotalTask + 1;
  document.getElementById(totalTaskIdd).innerText = summedTotalTask;
  document.getElementById(disabled).disabled = true;
}

function getElementById(buttonId, assignedTaskId, totalTaskId, disabled,doneTaskId) {
  document.getElementById(buttonId).addEventListener("click", function () {

    let doneTask = document.getElementById(doneTaskId).innerText;
    alert(`${doneTask} Updated Successfully...`);
    leftMainTask(assignedTaskId);
    TotalMainTask(totalTaskId, disabled);
  });
}

getElementById("card-1-button", "main-task", "total-task", "card-1-button", "fix");
getElementById("card-2-button", "main-task", "total-task", "card-2-button", "dark");
getElementById("card-3-button", "main-task", "total-task", "card-3-button", "home-page");
getElementById("card-4-button", "main-task", "total-task", "card-4-button", "emoji");
getElementById("card-5-button", "main-task", "total-task", "card-5-button", "open-ai");
getElementById("card-6-button", "main-task", "total-task", "card-6-button", "job-searching");


document.getElementById("color").addEventListener("click", function () {
  const colors = [
    "#F1C6D4",
    "#DAA520",
    "#E57373",
    "#A8D5BA",
    "#4DB6AC",
    "#D81B60",
    "#6A5ACD",
    "#FF7043",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

function dateyear(id) {
  let date = new Date();
  let weekday = date.toLocaleString("en-US", {weekday: "short"});
  let month = date.toLocaleString("en-US", {month: "short"});
  let day = date.toLocaleString("en-US", {day: "2-digit"});
  let year = date.toLocaleString("en-US", {year: "numeric"});

  let formattedDate = ` ${weekday}, <br> <b>${month} ${day} ${year}</b>`;
  document.getElementById(id).innerHTML = formattedDate;
}

dateyear("time-1");

document.getElementById("discovery").addEventListener("click", function () {
  window.location.href = "Question.html";
});

function workDoneSummery(id1, id2) {
  let doneTask = document.getElementById(id1).innerText;

  document.getElementById(id2).addEventListener("click", function () {
    let date = new Date();
    let time = date.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

    let p = document.createElement("p");
    p.innerHTML = `<p class=" px-5 bg-[#F4F7FF] rounded-lg mx-[5%] text-center"> You have Completed the <b>${doneTask}</b>  at ${time}.</p>`;
    document.getElementById("hide-unhide").appendChild(p);
  });
}

workDoneSummery("fix", "card-1-button");
workDoneSummery("dark", "card-2-button");
workDoneSummery("home-page", "card-3-button");
workDoneSummery("emoji", "card-4-button");
workDoneSummery("open-ai", "card-5-button");
workDoneSummery("job-searching", "card-6-button");

document.getElementById("clear-history").addEventListener("click", function () {
  document.getElementById("hide-unhide").innerHTML = "";
});
