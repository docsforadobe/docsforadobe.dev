const docs = [
  {
    name: "Adobe Fonts API Reference",
    url: "https://github.com/typekit/fonts-api-docs/blob/master/guides.md",
    tags: ["API"],
    apps: ["Adobe Fonts"]
  },
  {
    name: "Adobe Fonts API Contact",
    url: "mailto:fontintegrations@adobe.com",
    tags: ["Contact"],
    apps: ["Adobe Fonts"]
  },
  {
    name: "Adobe Stock API Reference",
    url: "https://developer.adobe.com/stock/docs/getting-started",
    tags: ["API"],
    apps: ["Adobe Stock"]
  },
  {
    name: "Adobe Stock API Contact",
    url: "mailto:Grp-AdobeStockPartnerships@adobe.com",
    tags: ["Contact"],
    apps: ["Adobe Stock"]
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
    url: "https://developer.adobe.com/console/servicesandapis/cr",
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
    apps: ["CC Libraries"]
  },
  {
    name: "Cross-Product Extendscript Scripting Guide",
    url: "https://extendscript.docsforadobe.dev",
    tags: ["Scripting", "Extendscript"],
    apps: ["After Effects", "Animate", "Bridge", "Cross-Product", "Illustrator", "Lightroom", "Photoshop", "Premiere Pro", "InDesign"]
  },
  {
    name: "Cross-Product CEP Resources",
    url: "https://github.com/Adobe-CEP/CEP-Resources",
    tags: ["CEP", "Extendscript"],
    apps: ["After Effects", "Animate", "Bridge", "Cross-Product", "Illustrator", "Lightroom", "Photoshop", "Premiere Pro", "InDesign"]
  },
  {
    name: "Peter Kahrel's ScriptUI for Dummies",
    url: "https://creativepro.com/files/kahrel/indesign/scriptui.html",
    tags: ["Extendscript"],
    apps: ["After Effects", "Animate", "Bridge", "Cross-Product", "Illustrator", "Lightroom", "Media Encoder", "Photoshop", "Premiere Pro", "InDesign"]
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
    name: "XD UXP Guide",
    url: "https://developer.adobe.com/xd/uxp",
    tags: ["UXP"],
    apps: ["XD"]
  }
];

window.onload = function () {
  const allTags = [];
  const allApps = [];

  // Set up list
  const list = document.getElementById("linklist");

  // Sort docs entries
  docs.sort((a, b) => a.name.localeCompare(b.name));

  docs.forEach(function (doc) {
    doc.tags.forEach(function (tag) {
      if (allTags.indexOf(tag) === -1) {
        allTags.push(tag);
      }
    });

    doc.apps.forEach(function (app) {
      if (allApps.indexOf(app) === -1) {
        allApps.push(app);
      }
    });

    const linkPanel = document.createElement("li");

    // Hacky way to have the tags displayed below
    linkPanel.innerHTML = [
      "<a href='" + doc.url + "'>" + doc.name + "</a>",
      "<div class='tags'>" +
        doc.tags
          .map(function (featureTag) {
            return "<button class='featureTag' onclick='filterList(\"" + featureTag + "\")'>#" + featureTag.toLowerCase() + "</button>";
          })
          .join("") +
        doc.apps
          .map(function (appTag) {
            return "<button class='appTag' onclick='filterList(\"" + appTag + "\")'>#" + appTag.toLowerCase() + "</button>";
          })
          .join("") +
        "</div>"
    ].join("<br />");

    addClassToElement(linkPanel, "link");
    addClassToElement(linkPanel, doc.tags);
    addClassToElement(linkPanel, doc.apps);

    if (!doc.url.includes("docsforadobe.dev")) {
      addClassToElement(linkPanel, "External");
    }

    list.appendChild(linkPanel);
  });

  // Sort tags alphabetically
  allTags.sort();
  allApps.sort();

  // add the 'all' filter
  allTags.unshift("all");

  filterList("all");

  // Set up event listeners on buttons
  const filterTagsContainer = document.getElementById("filterBtnsTags");

  allTags.forEach(function (tag) {
    const filterTagButton = document.createElement("button");
    filterTagButton.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);

    addClassToElement(filterTagButton, ["filter-button", "tagBtn", "md-button"]);

    filterTagButton.addEventListener("click", function () {
      filterList(tag);
      updateSearchParam("tag", tag);
    });

    filterTagsContainer.appendChild(filterTagButton);
  });

  const filterAppsContainer = document.getElementById("filterBtnsApps");

  allApps.forEach(function (app) {
    const filterAppButton = document.createElement("button");
    filterAppButton.textContent = app.charAt(0).toUpperCase() + app.slice(1);

    addClassToElement(filterAppButton, ["filter-button", "appBtn", "md-button"]);

    filterAppButton.addEventListener("click", function () {
      filterList(app);
      updateSearchParam("app", app);
    });

    filterAppsContainer.appendChild(filterAppButton);
  });

  addClassToElement(filterTagsContainer.children[0], ["md-button--primary"]);

  const url = window.location.search.replace(/\+/g, "%2B");
  const searchParams = new URLSearchParams(url);
  const filterType = searchParams.has("app") ? "app" : searchParams.has("tag") ? "tag" : "";

  const filter = searchParams.get(filterType).split("-").join(" ");
  filterList(filter);
};

/**
 * Update the search parameters to match the current filter
 *
 * @param {String} name  type of filter
 * @param {String} value value of filter
 */
function updateSearchParam(name, value) {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.delete("tag");
  searchParams.delete("app");

  value = value.replace(/\s/g, "-").toLowerCase();

  searchParams.set(name, value);
  window.location.search = searchParams;
}

/**
 * Add classes to an element
 *
 * @param {Element} element           Element to add classes to
 * @param {string | string[]} classes Class(es) to add
 */
function addClassToElement(element, classes) {
  const existingClasses = element.className.split(" ");
  const classesToAdd = classes instanceof Array ? classes : classes.split(" ");

  for (let ii = 0; ii < classesToAdd.length; ii++) {
    const classToAdd = classesToAdd[ii];

    if (existingClasses.indexOf(classToAdd) === -1) {
      element.className += " " + classToAdd.toLowerCase();
    }
  }
}

/**
 * Remove classes from an element
 *
 * @param {Element} element           Element to remove classes from
 * @param {string | string[]} classes Class(es) to remove
 */
function removeClassFromElement(element, classes) {
  const existingClasses = element.className.split(" ");
  const classesToRemove = classes instanceof Array ? classes : classes.split(" ");

  for (let ii = 0; ii < classesToRemove.length; ii++) {
    const classToRemove = classesToRemove[ii];

    while (existingClasses.indexOf(classToRemove) > -1) {
      existingClasses.splice(existingClasses.indexOf(classToRemove), 1);
    }
  }

  element.className = existingClasses.join(" ");
}

function filterList(filterType) {
  filterType = filterType.toLowerCase();

  const linkPanels = document.getElementsByClassName("link");

  if (filterType == "all") {
    filterType = "";
  }

  for (let ii = 0; ii < linkPanels.length; ii++) {
    const linkPanel = linkPanels[ii];

    removeClassFromElement(linkPanel, "show");

    if (linkPanel.className.indexOf(filterType) > -1) {
      addClassToElement(linkPanel, "show");
    }
  }

  // Set that button to active
  const filterButtons = document.getElementsByClassName("filter-button");

  for (let ii = 0, il = filterButtons.length; ii < il; ii++) {
    const filterButton = filterButtons[ii];

    if (filterButton.textContent.toLowerCase() === filterType || (filterButton.textContent === "All" && filterType === "")) {
      addClassToElement(filterButton, ["md-button--primary"]);
      continue;
    }

    removeClassFromElement(filterButton, ["md-button--primary"]);
  }
}
