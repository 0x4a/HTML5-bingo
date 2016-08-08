var headerText = "Mailinglisten Bingo";

var footerText = "<a href='https://github.com/hdznrrd/HTML5-bingo/' target='_blank'>This version's code available on github</a><br/><a href='https://github.com/jeffehobbs/HTML5-bingo/' target='_blank'>Original code available on github</a><br/><a href='http://www.bruhaha.de/laws.html' target='_blank'>Manche Begriffe stammen aus den Usenet-Laws</a><br/><a href='https://en.wikipedia.org/wiki/List_of_logical_fallacies' target='_blank'>Wikipedia: List of logical fallacies</a>";

var winText = "The Game.";

var clickSnd = new Audio("audio/click.mp3");

var winSnd = new Audio("audio/win.mp3");

var JSONBingo = {"squares": [
        {"square": "Mehr Transparenz!"},
        {"square": "Plenum soll entscheiden"},
        {"square": "Vorstand soll entscheiden"},
        {"square": "Da gibt es einen Beschluss"},
        {"square": "Ad hominem"},
        {"square": "Moving the goalposts"},
        {"square": "Anekdotische Evidenz"},
        {"square": "Berufung auf Wahrscheinlich-keit"},
        {"square": "Strohmann"},
        {"square": "Argumentum ad ignorantiam"},
        {"square": "Ad nauseam"},
        {"square": "Petitio principii"},
        {"square": "Beweislast-umkehr"},
        {"square": "Zirkelschluss"},
        {"square": "Korrelation und Kausation verwechselt"},
        {"square": "Argumentum ad verecundiam"},
        {"square": "Falsches Dilemma"},
        {"square": "Fangfrage"},
        {"square": "Spieler-fehlschluss"},
        {"square": "Unvollst&auml;ndiger Vergleich"},
        {"square": "(Fehl)-interpretation der Intention"},
        {"square": "Ignoratio elenchi"},
        {"square": "Moral high ground"},
        {"square": "Natura-listischer Fehlschluss"},
        {"square": "Post hoc, ergo propter hoc"}, 
        {"square": "Cum hoc, ergo propter hoc"},
        {"square": "Beweis durch Wiederholung"},
        {"square": "Argumentum verbosium"},
        {"square": "Berufung auf Emotionen"},
        {"square": "Argumentum ad novitatem"},
        {"square": "Argumentum ad antiquitatem"},
        {"square": "Argumentum ad baculum"},
        {"square": "Argumentum ad populum"},
        {"square": "First world problem"},
        {"square": "Mimimi auf hohem Niveau"},
        {"square": "Pis erstes Gesetz"},
        {"square": "Pis zweites Gesetz"},
        {"square": "Godwin"},
        {"square": "Doppelt falsch ist gut"},
        {"square": "Broken window"},
        {"square": "Slippery slope"},
        {"square": "Blockwart schreitet ein"},
        {"square": "Argumentum ad mailclient"},
        {"square": "Wer hat Schuld"},
        {"square": "Wer ist denn Verantwortlich"},
        {"square": "Rehctschreibung"},  // absichtsvoller Schreibfehler
        {"square": "So hab ich das nicht gesagt"},
        {"square": "Fr&uuml;her haben wir das auch so gemacht"},
        {"square": "Confirmation Bias"},
        {"square": "tu quoque"},
        {"square": "Mereologischer Fehlschluss"},
        {"square": "Argument ad temperantiam"}, // übersetzt als: siehe nächste Zeile
        {"square": "Schiedrichter-Fehlschluss"},
        {"square": "Guilt by Association"},
        {"square": "Argument ex silentio"}  // http://www.hoheluft-magazin.de/2016/08/na-logisch-das-argument-ex-silentio/
    ]
};
