var docs = [
  {
    name: "Javascript Tools Guide (ESTK)",
    url: "http://estk.aenhancers.com",
    tags: ["extendscript"]
  },
  {
    name: "After Effects Scripting Guide",
    url: "http://docs.aenhancers.com/",
    tags: ["extendscript"]
  },
  {
    name: "Animate Scripting Guide",
    url: "http://docs.aenhancers.com/",
    tags: ["extendscript"]
  },
  {
    name: "AME Scripting Guide",
    url: "http://ame.aenhancers.com/",
    tags: ["extendscript"]
  },
  {
    name: "Illustrator Scripting Guide",
    url: "http://ai.aenhancers.com/",
    tags: ["extendscript"]
  },
  {
    name: "Premiere Scripting Guide",
    url: "http://ppro.aenhancers.com/",
    tags: ["extendscript"]
  },
  {
    name: "AE C++ Plugin SDK Guide",
    url: "http://ae-plugin-sdk.aenhancers.com/",
    tags: ["c++"]
  },
  {
    name: "PPro C++ Plugin SDK Guide",
    url: "http://ppro-plugin-sdk.aenhancers.com/",
    tags: ["c++"]
  },
  {
    name: "After Effects Expressions Documentation",
    url: "http://expressions.aenhancers.com/",
    tags: ["extendscript"]
  },
  {
    name: "Peter Kahrel's ScriptUI for Dummies",
    url: "https://creativepro.com/files/kahrel/indesign/scriptui.html",
    tags: ["extendscript", "external"]
  },
  {
    name: "aequery AE Dom Helper Library Documentation",
    url: "http://aequery.aenhancers.com/",
    tags: ["extendscript", "external"]
  }
];

window.onload = function () {
  var allTags = ['all'];

  // Set up list
  var list = document.getElementById("links");

  docs.forEach(function (doc) {
    doc.tags.forEach(function (tag) {
      if (allTags.indexOf(tag) === -1) {
        allTags.push(tag);
      }
    });

    var listItem = document.createElement("li");
    // Hacky way to have the tags displayed below
    listItem.innerHTML = [
      "<a href='" + doc.url + "'>" + doc.name + "</a>",
      "<div class='tags'>" + doc.tags.map(function (tag) {
        return "<button class='tag' onclick='filterList(\"" + tag + "\")'>" + tag + "</button>"
      }).join('') + "</div>"
    ].join("<br />");

    addClassToElement(listItem, doc.tags);

    list.appendChild(listItem);
  });

  filterList("all");

  // Set up event listeners on buttons
  var btnContainer = document.getElementById("filterBtns");

  allTags.forEach(function (tag) {
    var tagButton = document.createElement("button");
    tagButton.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);

    addClassToElement(tagButton, 'btn');

    tagButton.addEventListener("click", function () {
      filterList(tag);
    });

    btnContainer.appendChild(tagButton);
  });

  addClassToElement(btnContainer.children[0], 'active');
};

/**
 * Add classes to an element
 *
 * @param {Element} element           Element to add classes to
 * @param {string | string[]} classes Class(es) to add
 */
function addClassToElement(element, classes) {
  var existingClasses = element.className.split(" ");
  var classsesToAdd = classes instanceof Array ? classes : classes.split(" ");

  for (var ii = 0; ii < classsesToAdd.length; ii++) {
    var classToAdd = classsesToAdd[ii];

    if (existingClasses.indexOf(classToAdd) === -1) {
      element.className += " " + classToAdd;
    }
  }
}

/**
 * Remove classes from an element
 *
 * @param {Element} element            Element to remove classes from
 * @param {string | stringp[]} classes Class(es) to remove
 */
function removeClassFromElement(element, classes) {
  var existingClasses = element.className.split(" ");
  var classsesToRemove =
    classes instanceof Array ? classes : classes.split(" ");

  for (var ii = 0; ii < classsesToRemove.length; ii++) {
    var classToRemove = classsesToRemove[ii];

    while (existingClasses.indexOf(classToRemove) > -1) {
      existingClasses.splice(existingClasses.indexOf(classToRemove), 1);
    }
  }

  element.className = existingClasses.join(" ");
}

function filterList(type) {
  var listItems = document.getElementsByTagName("li");

  if (type == "all") {
    type = "";
  }

  for (var ii = 0; ii < listItems.length; ii++) {
    var listItem = listItems[ii];

    removeClassFromElement(listItem, "show");

    if (listItem.className.indexOf(type) > -1) {
      addClassToElement(listItem, "show");
    }
  }

  // Set that button to active
  var btns = document.getElementsByClassName("btn");

  for (var ii = 0, il = btns.length; ii < il; ii++) {
    var btn = btns[ii];

    if (btn.textContent.toLowerCase() === type || btn.textContent === 'All' && type === '') {
      addClassToElement(btn, 'active');
      continue;
    }

    removeClassFromElement(btn, 'active');
  }
}
