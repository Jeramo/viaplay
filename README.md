# Viaplay Notifications
Denna webbapplikation är ett bidrag till Viaplay Young Dev. Program för år 2016. Uppgiften gjordes på totalt 7 timmar varav 1 timme användes till att justera och effektivisera kod. Webbapplikationen laddades upp på den privata webbsidan http://www.jeanrobert.se.

# Teknik
För denna uppgift användes HTML5, CSS3 och JS (ramverk jQuery) för att klara av uppgiften. Andra teknologier så som JSON användes för att hämta data från en extern källa, som ett "proof-of-concept" där notifikationer kan hämtas från en tredje part. JSON användes endast för den första notifikationen från sidan http://www.omdbapi.com som tillhandahåller information om diverse filmer genom REST API.

# Designval
Jag valde att använda mig av en minimalistisk design med enbart loggan, webbapplikationens namn samt notifikationerna. För att användaren skall kunna se om notifikationer öppnats eller ej, valde jag att använda mig av färgkoder. Röd färg symboliserar att notifikationen inte öppnats medan grön färg symboliserar att den öppnats. Samtlig innehåll i notifikationerna är centrerade för att hålla en konsekvent design. Bakgrunden har samma hexadecimala färgkod som Viaplays hemsida, #525252.

# HTML5 och localStorage
Då uppgiften söker att användaren skall kunna stänga och öppna webbläsaren och ännu bemötas av sidan i det skick det lämnades i, används HTML5s 
