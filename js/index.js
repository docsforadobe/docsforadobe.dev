var docs = [
  {
    name: "Adobe Fonts API Reference",
    url: "https://github.com/typekit/fonts-api-docs/blob/master/guides.md",
    tags: ["API"],
    apps: ["Fonts"]
  },
  {
    name: "Adobe Fonts API Contact",
    url: "mailto:fontintegrations@adobe.com",
    tags: ["Contact"],
    apps: ["Fonts"]
  },
  {
    name: "Adobe Stock API Reference",
    url: "https://developer.adobe.com/stock/docs/getting-started",
    tags: ["API"],
    apps: ["Stock"]
  },
  {
    name: "Adobe Stock API Contact",
    url: "mailto:Grp-AdobeStockPartnerships@adobe.com",
    tags: ["Contact"],
    apps: ["Stock"]
  },
  {
    name: "After Effects Plugin SDK Guide",
    url: "https://ae-plugins.docsforadobe.dev",
    tags: ["C++"],
    apps: ["After Effects"]
  },
  {
    name: "After Effects Scripting Guide",
    url: "https://ae-scripting.docsforadobe.dev",
    tags: ["Scripting", "Extendscript"],
    apps: ["After Effects"]
  },
  {
    name: "After Effects Expressions Documentation",
    url: "http://ae-expressions.docsforadobe.dev/",
    tags: ["Extendscript"],
    apps: ["After Effects"]
  },
  {
    name: "aequery AE Dom Helper Library Documentation",
    url: "http://aequery.aenhancers.com/",
    tags: ["Extendscript"],
    apps: ["After Effects"]
  },
  {
    name: "Animate Scripting Guide",
    url: "https://an-scripting.docsforadobe.dev",
    tags: ["Scripting", "Extendscript"],
    apps: ["Animate"]
  },
  {
    name: "Animate Plugin SDK Guide",
    url: "https://helpx.adobe.com/animate/using/custom-platform-support-api-reference.html",
    tags: ["C++"],
    apps: ["Animate"]
  },
  {
    name: "Animate JSAPI Documentation",
    url: "https://github.com/AdobeDocs/developers-animatesdk-docs",
    tags: ["CEP", "Extendscript"],
    apps: ["Animate"]
  },
  {
    name: "Audition API Reference",
    url: "https://developer.adobe.com/console/servicesandapis/au",
    tags: ["C++", "SDK Download"],
    apps: ["Audition"]
  },
  {
    name: "Audition CEP Samples",
    url: "https://github.com/Adobe-CEP/Samples/tree/master/Audition",
    tags: ["CEP", "Extendscript"],
    apps: ["Audition"]
  },
  {
    name: "Audition CEP Script Dictionary",
    url: "https://github.com/Adobe-CEP/Samples/tree/master/Audition/ScriptDictionary",
    tags: ["Scripting", "Extendscript"],
    apps: ["Audition"]
  },
  {
    name: "Bridge API Reference",
    url: "https://developer.adobe.com/console/servicesandapis/br",
    tags: ["Scripting", "Extendscript", "C++", "SDK Download"],
    apps: ["Bridge"]
  },
  {
    name: "Camera Raw API Reference",
    url: "https://developer.adobe.com/console/servicesandapis/au",
    tags: ["Other Downloads"],
    apps: ["Camera Raw"]
  },
  {
    name: "Camera Raw DNG Converter",
    url: "https://helpx.adobe.com/camera-raw/using/adobe-dng-converter.html",
    tags: ["Other Downloads"],
    apps: ["Camera Raw"]
  },
  {
    name: "Creative Cloud Libraries UXP Guide",
    url: "https://developer.adobe.com/creative-cloud-libraries/docs",
    tags: ["UXP"],
    apps: ["Libraries"]
  },
  {
    name: "Cross-Product Extendscript Scripting Guide",
    url: "https://extendscript.docsforadobe.dev",
    tags: ["Scripting", "Extendscript"],
    apps: [
      "After Effects",
      "Animate",
      "Bridge",
      "Cross-Product",
      "Illustrator",
      "Lightroom Classic",
      "Photoshop",
      "Premiere Pro",
      "InDesign"
    ]
  },
  {
    name: "Cross-Product CEP Resources",
    url: "https://github.com/Adobe-CEP/CEP-Resources",
    tags: ["CEP", "Extendscript"],
    apps: [
      "After Effects",
      "Animate",
      "Bridge",
      "Cross-Product",
      "Illustrator",
      "Lightroom Classic",
      "Photoshop",
      "Premiere Pro",
      "InDesign"
    ]
  },
  {
    name: "Peter Kahrel's ScriptUI for Dummies",
    url: "https://creativepro.com/files/kahrel/indesign/scriptui.html",
    tags: ["Extendscript"],
    apps: [
      "After Effects",
      "Animate",
      "Bridge",
      "Cross-Product",
      "Illustrator",
      "Lightroom",
      "Media Encoder",
      "Photoshop",
      "Premiere Pro",
      "InDesign"
    ]
  },
  {
    name: "Dreamweaver Plugin SDK Guide",
    url: "https://helpx.adobe.com/dreamweaver/extend/c-level-extensibility-javascript-interpreter.html",
    tags: ["C++"],
    apps: ["Dreamweaver"]
  },
  {
    name: "Dreamweaver Scripting Guide",
    url: "https://helpx.adobe.com/dreamweaver/extend/topics.html",
    tags: ["CEP", "Extendscript"],
    apps: ["Dreamweaver"]
  },
  {
    name: "Illustrator Plugin SDK Guide",
    url: "https://developer.adobe.com/console/servicesandapis/ai",
    tags: ["C++"],
    apps: ["Illustrator"]
  },
  {
    name: "Illustrator Scripting Guide",
    url: "https://ai-scripting.docsforadobe.dev/",
    tags: ["Scripting", "Extendscript"],
    apps: ["Illustrator"]
  },
  {
    name: "InDesign API Reference",
    url: "https://developer.adobe.com/console/servicesandapis/id",
    tags: ["Scripting", "Extendscript", "C++", "SDK Download"],
    apps: ["InDesign"]
  },
  {
    name: "InDesign CEP Guide",
    url: "https://github.com/Adobe-CEP/CEP-Resources/blob/master/Documentation/Product%20specific%20Documentation/CEP%20for%20InDesign%20Developers.pdf",
    tags: ["CEP", "Extendscript"],
    apps: ["InDesign"]
  },
  {
    name: "Lightroom Classic API Reference",
    url: "https://developer.adobe.com/console/servicesandapis/lr",
    tags: ["C++", "SDK Download"],
    apps: ["Lightroom"]
  },
  {
    name: "Lightroom API Reference",
    url: "https://developer.adobe.com/lightroom/lightroom-api-docs",
    tags: ["API"],
    apps: ["Lightroom"]
  },
  {
    name: "Media Encoder Scripting Guide",
    url: "https://ame-scripting.docsforadobe.dev",
    tags: ["Scripting", "Extendscript"],
    apps: ["Media Encoder"]
  },
  {
    name: "Photoshop API Reference",
    url: "https://developer.adobe.com/console/servicesandapis/ps",
    tags: ["C++", "SDK Download"],
    apps: ["Photoshop"]
  },
  {
    name: "Photoshop Scripting Reference",
    url: "https://github.com/Adobe-CEP/CEP-Resources/tree/master/Documentation/Product%20specific%20Documentation/Photoshop%20Scripting",
    tags: ["Scripting", "Extendscript"],
    apps: ["Photoshop"]
  },
  {
    name: "Photoshop UXP Guide",
    url: "https://developer.adobe.com/photoshop/uxp",
    tags: ["UXP"],
    apps: ["Photoshop"]
  },
  {
    name: "Premiere Pro API Reference",
    url: "https://developer.adobe.com/console/servicesandapis/pr",
    tags: ["C++", "SDK Download"],
    apps: ["Premiere Pro"]
  },
  {
    name: "Premiere Pro Plugin SDK Guide",
    url: "https://ppro-plugins.docsforadobe.dev",
    tags: ["C++"],
    apps: ["Premiere Pro"]
  },
  {
    name: "Premiere Pro Scripting Guide",
    url: "https://ppro-scripting.docsforadobe.dev",
    tags: ["Scripting", "Extendscript"],
    apps: ["Premiere Pro"]
  },
  {
    name: "Premiere Pro UXP Guide",
    url: "https://wiki.corp.adobe.com/display/drover/Drover+UXP+Extension+Hosting+and+Examples",
    tags: ["UXP"],
    apps: ["Premiere Pro"]
  },
  {
    name: "XD UXP Guide",
    url: "https://developer.adobe.com/xd/uxp",
    tags: ["UXP"],
    apps: ["XD"]
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
