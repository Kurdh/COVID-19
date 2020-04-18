function world() {
    $.getJSON("https://corona.lmao.ninja/v2/all", function(data) {
        var cases = data.cases;
        var deaths = data.deaths;
        var recovered = data.recovered;

        $("button#world-cases").html($("button#world-cases").html().replace("{{data}}", cases));
        $("button#world-deaths").html($("button#world-deaths").html().replace("{{data}}", deaths));
        $("button#world-recovered").html($("button#world-recovered").html().replace("{{data}}", recovered));
    });
}

function country(cn) {
    $.getJSON("https://corona.lmao.ninja/v2/countries/" + cn, function(data) {
        var cases = data.cases;
        var deaths = data.deaths;
        var recovered = data.recovered;
        
        var todayCases = data.todayCases;
        var todayDeaths = data.todayDeaths;

        $("button#" + cn + "-cases").html($("button#" + cn + "-cases").html().replace("{{data}}", cases));
        $("button#" + cn + "-deaths").html($("button#" + cn + "-deaths").html().replace("{{data}}", deaths));
        $("button#" + cn + "-recovered").html($("button#" + cn + "-recovered").html().replace("{{data}}", recovered));

        $("button#" + cn + "-todayCases").html($("button#" + cn + "-todayCases").html().replace("{{data}}", todayCases));
        $("button#" + cn + "-todayDeaths").html($("button#" + cn + "-todayDeaths").html().replace("{{data}}", todayDeaths));
    });
}
