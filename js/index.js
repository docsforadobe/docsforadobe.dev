var docs = [
  {
    name: "Javascript Tools Guide (ESTK)",
    url: "http://extendscript.docsforadobe.dev",
    tags: ["Scripting", "Extendscript"],
    apps: ["After Effects", "Animate", "Bridge", "Cross-Product", "Illustrator", "Lightroom", "Media Encoder", "Photoshop", "Premiere Pro", "InDesign"]
  },
  {
    name: "After Effects Scripting Guide",
    url: "http://ae-scripting.docsforadobe.dev/",
    tags: ["Scripting", "Extendscript"],
    apps: ["After Effects"]
  },
  {
    name: "Animate Scripting Guide",
    url: "http://an-scripting.docsforadobe.dev/",
    tags: ["Scripting", "Extendscript"],
    apps: ["Animate"]
  },
  {
    name: "Media Encoder Scripting Guide",
    url: "http://ame-scripting.docsforadobe.dev/",
    tags: ["Scripting", "Extendscript"],
    apps: ["Media Encoder"]
  },
  {
    name: "Illustrator Scripting Guide",
    url: "http://ai-scripting.docsforadobe.dev/",
    tags: ["Scripting", "Extendscript"],
    apps: ["Illustrator"]
  },
  {
    name: "Premiere Pro Scripting Guide",
    url: "http://ppro-scripting.docsforadobe.dev/",
    tags: ["Scripting", "Extendscript"],
    apps: ["Premiere Pro"]
  },
  {
    name: "AE C++ Plugin SDK Guide",
    url: "http://ae-plugins.docsforadobe.dev/",
    tags: ["C++"],
    apps: ["After Effects"]
  },
  {
    name: "Premiere Pro C++ Plugin SDK Guide",
    url: "http://ppro-plugins.docsforadobe.dev/",
    tags: ["C++"],
    apps: ["Premiere Pro"]
  },
  {
    name: "After Effects Expressions Documentation",
    url: "http://ae-expressions.docsforadobe.dev/",
    tags: ["Extendscript"],
    apps: ["After Effects"]
  },
  {
    name: "Peter Kahrel's ScriptUI for Dummies",
    url: "https://creativepro.com/files/kahrel/indesign/scriptui.html",
    tags: ["Extendscript"],
    apps: ["After Effects", "Animate", "Bridge", "Cross-Product", "Illustrator", "Lightroom", "Media Encoder", "Photoshop", "Premiere Pro", "InDesign"]
  },
  {
    name: "aequery AE Dom Helper Library Documentation",
    url: "http://aequery.aenhancers.com/",
    tags: ["Extendscript"],
    apps: ["After Effects"]
  }
];

window.onload = function () {
  var tags = [];
  var apps = [];

  // Set up list
  var list = document.getElementById("links");

  // Sort docs entries
  docs.sort((a, b) => a.name.localeCompare(b.name));

  docs.forEach(function (doc) {
    doc.tags.forEach(function (tag) {
      if (tags.indexOf(tag) === -1) {
        tags.push(tag);
      }
    });

    doc.apps.forEach(function (app) {
      if (apps.indexOf(app) === -1) {
        apps.push(app);
      }
    });

    var listItem = document.createElement("li");

    // Hacky way to have the tags displayed below
    listItem.innerHTML = [
      "<a href='" + doc.url + "'>" + doc.name + "</a>",
      "<div class='tags'>" + doc.tags.map(function (tag) {
        return "<button class='tag' onclick='filterList(\"" + tag + "\")'>" + tag + "</button>"
      }).join('') + "</div>" +
      "<div class='apps'>" + doc.apps.map(function (app) {
        return "<button class='app' onclick='filterList(\"" + app + "\")'>" + app + "</button>"
      }).join('') + "</div>"
    ].join("<br />");

    addClassToElement(listItem, doc.tags);
    addClassToElement(listItem, doc.apps);

    if (!doc.url.includes("docsforadobe.dev")) {
      addClassToElement(listItem, "External");
    }

    list.appendChild(listItem);
  });

  // Sort tags alphabetically
  tags.sort();
  apps.sort();

  // add the 'all' filter
  tags.unshift('all');

  filterList("all");

  // Set up event listeners on buttons
  var tagsContainer = document.getElementById("filterBtnsTags");

  tags.forEach(function (tag) {
    var tagButton = document.createElement("button");
    tagButton.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);

    addClassToElement(tagButton, ['btn', 'tagBtn']);

    tagButton.addEventListener("click", function() {
        filterList(tag);
    });

    tagsContainer.appendChild(tagButton);
  });

  var appsContainer = document.getElementById("filterBtnsApps");
  apps.forEach(function(app) {
    var appButton = document.createElement("button");
    appButton.textContent = app.charAt(0).toUpperCase() + app.slice(1);

    addClassToElement(appButton, ['btn', 'appBtn']);

    appButton.addEventListener("click", function() {
        filterList(app);
    });

    appsContainer.appendChild(appButton);
  });

  addClassToElement(tagsContainer.children[0], 'active');
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

  if (type.toLowerCase() == "all") {
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

    if (btn.textContent.toLowerCase() === type.toLowerCase() || btn.textContent === 'All' && type === '') {
      addClassToElement(btn, 'active');
      continue;
    }

    removeClassFromElement(btn, 'active');
  }
}
