// Andrew Clark
// 6/22/25
// sets up the tabs section

// initializes jQuery tabs
$(document).ready(function() {
    $('#tabContainer').tabs();
});

// counts tabs -- used when numbering the ids
let tabCount = 0;

// function that allows current table to be saved as a tab
function saveTab() {
    const lowFirst = $("#lowFirst").val();
    const highFirst = $("#highFirst").val();
    const lowSecond = $("#lowSecond").val();
    const highSecond = $("#highSecond").val();

    // get html generating the main multiplication table
    const table = $("#container").html();
    if (!table) { // if there isn't one, return
      return;
    }

    // using number of tabs to generate different ids for each list item
    tabCount++;
    const tabId = "saved-tab-" + tabCount;
    const label = `${lowFirst},${highFirst},${lowSecond},${highSecond}`;

    // append tab header
    // includes a checkbox for deleting multiple tabs
    $("#tabContainer ul").append(`
    <li id="tab-${tabCount}">
      <input type="checkbox" class="tab-select" />
      <a href="#${tabId}">${label}</a>
    </li>
    `);

    // change tabContainer's display from none to inline-block if it's not empty
    if ($("#tabContainer ul li").length > 0) {
      const container = document.getElementById('tabContainer');
      container.style.display = 'inline-block';
    }

    // append table contents
    $("#tabContainer").append(`<div id="${tabId}">${table}</div>`);

    $("#tabContainer").tabs("refresh");

    $("#tabContainer").tabs("option", "active", $("#tabContainer ul li").length - 1);
}

// the idea for deleting multiple tabs like this came from one of the examples shown during class
// delete selected tabs by pressing delete button
$('#deleteTabsButton').click(function() {
    $('#tabContainer ul input.tab-select:checked').each(function() {
        const li = $(this).closest('li');
        const href = li.find('a').attr('href');
        $(href).remove();
        li.remove();
    });

    $("#tabContainer").tabs("refresh");

    // if there are no tabs, hide the tabs container
    const container = document.getElementById('tabContainer');
    if ($('#tabContainer ul li').length == 0) {
      container.style.display = 'none';
    }
});
