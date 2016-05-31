# Viaplay Notifications
Denna webbapplikation är ett bidrag till Viaplay Young Dev. Program för år 2016. Uppgiften gjordes på totalt 7 timmar varav 1 timme användes till att justera och effektivisera kod. Webbapplikationen laddades upp på den privata webbsidan http://www.jeanrobert.se.

# Användning
Användaren har möjlighet till att se fyra olika notifikationer på webbsidan. Användaren kan välja att arkivera (radera från "huvudmenyn"), öppna notifikationen och stänga den. I de olika notifikationerna finns diversierat innehåll som i två av fallen direkt går att interagera med. Informationen om användaren läst/arkiverat meddelandena sparas. Om användaren önskar radera all denna information för att starta på nytt, kan denne klicka på "Reset data". Om användaren vill ta del av källkoden till webbapplikationen, kan denne klicka på "Read me".

# Teknik
För denna uppgift användes HTML5, CSS3 och JS (ramverk jQuery) för att klara av uppgiften. Andra teknologier så som JSON användes för att hämta data från en extern källa, som ett "proof-of-concept" där notifikationer kan hämtas från en tredje part. JSON användes endast för den första notifikationen från sidan http://www.omdbapi.com som tillhandahåller information om diverse filmer genom REST API.

# Designval
Jag valde att använda mig av en minimalistisk design med enbart loggan, webbapplikationens namn samt notifikationerna. För att användaren skall kunna se om notifikationer öppnats eller ej, valde jag att använda mig av färgkoder. Röd färg symboliserar att notifikationen inte öppnats medan grön färg symboliserar att den öppnats. Samtlig innehåll i notifikationerna är centrerade för att hålla en konsekvent design. Bakgrunden har samma hexadecimala färgkod som Viaplays hemsida, #525252.

Eftersom att sidan även skall användas på ett bekvämt sätt för mobila användare, är sidans samtliga innehåll anpassad efter den skärmstorlek som användarens enhet har. Dessa justeringar återfinns i CSS-filen.

# HTML5 och localStorage
Då uppgiften söker att användaren skall kunna stänga och öppna webbläsaren och ännu bemötas av sidan i det skick det lämnades i, används localStorage som stöds i de flesta webbläsare med HTML5. Jag hade ursprungligen tänkt att använda mig av cookies, men eftersom att localStorage sparas direkt i webbläsaren och dessutom tillåter en större mängd data, blev localStorage det självklaraste valet.

Information om användaren öppnat eller arkiverat (raderat från "huvudmenyn") sparas i webbläsaren och återfås även om användaren stänger ned fönstret eller startar om datorn. För att kunna radera all localStorage i webbläsaren finns knappen "Reset all" som återställer informationen.

Denna funktion fungerar dock inte om användaren surfar genom en privat session eller inkognito.

# Test
Denna webbapplikation har testats på iOS (9.0), Google Chrome (Version 51.0.2704.63) och Microsoft Edge (25.10586.0.0) och fungerar som ovan förklarat.
