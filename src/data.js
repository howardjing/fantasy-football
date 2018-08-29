// https://fantasyfootballcalculator.com/rankings
const table = `
<tr class="RB">
  <td class="text-right">1.</td>
  <td>Todd Gurley</td>
  <td>RB</td>
  <td>LAR</td>
  <td>12</td>
</tr>

<tr class="RB">
  <td class="text-right">2.</td>
  <td>LeVeon Bell</td>
  <td>RB</td>
  <td>PIT</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">3.</td>
  <td>David Johnson</td>
  <td>RB</td>
  <td>ARI</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">4.</td>
  <td>Ezekiel Elliott</td>
  <td>RB</td>
  <td>DAL</td>
  <td>8</td>
</tr>

<tr class="RB">
  <td class="text-right">5.</td>
  <td>Alvin Kamara</td>
  <td>RB</td>
  <td>NO</td>
  <td>6</td>
</tr>

<tr class="RB">
  <td class="text-right">6.</td>
  <td>Saquon Barkley</td>
  <td>RB</td>
  <td>NYG</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">7.</td>
  <td>Antonio Brown</td>
  <td>WR</td>
  <td>PIT</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">8.</td>
  <td>Melvin Gordon</td>
  <td>RB</td>
  <td>LAC</td>
  <td>8</td>
</tr>

<tr class="RB">
  <td class="text-right">9.</td>
  <td>Leonard Fournette</td>
  <td>RB</td>
  <td>JAX</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">10.</td>
  <td>Kareem Hunt</td>
  <td>RB</td>
  <td>KC</td>
  <td>12</td>
</tr>

<tr class="WR">
  <td class="text-right">11.</td>
  <td>DeAndre Hopkins</td>
  <td>WR</td>
  <td>HOU</td>
  <td>10</td>
</tr>

<tr class="RB">
  <td class="text-right">12.</td>
  <td>Dalvin Cook</td>
  <td>RB</td>
  <td>MIN</td>
  <td>10</td>
</tr>

<tr class="WR">
  <td class="text-right">13.</td>
  <td>Odell Beckham Jr</td>
  <td>WR</td>
  <td>NYG</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">14.</td>
  <td>Julio Jones</td>
  <td>WR</td>
  <td>ATL</td>
  <td>8</td>
</tr>

<tr class="RB">
  <td class="text-right">15.</td>
  <td>Christian McCaffrey</td>
  <td>RB</td>
  <td>CAR</td>
  <td>4</td>
</tr>

<tr class="RB">
  <td class="text-right">16.</td>
  <td>Jordan Howard</td>
  <td>RB</td>
  <td>CHI</td>
  <td>5</td>
</tr>

<tr class="RB">
  <td class="text-right">17.</td>
  <td>Devonta Freeman</td>
  <td>RB</td>
  <td>ATL</td>
  <td>8</td>
</tr>

<tr class="WR">
  <td class="text-right">18.</td>
  <td>Michael Thomas</td>
  <td>WR</td>
  <td>NO</td>
  <td>6</td>
</tr>

<tr class="WR">
  <td class="text-right">19.</td>
  <td>Davante Adams</td>
  <td>WR</td>
  <td>GB</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">20.</td>
  <td>Joe Mixon</td>
  <td>RB</td>
  <td>CIN</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">21.</td>
  <td>Keenan Allen</td>
  <td>WR</td>
  <td>LAC</td>
  <td>8</td>
</tr>

<tr class="TE">
  <td class="text-right">22.</td>
  <td>Rob Gronkowski</td>
  <td>TE</td>
  <td>NE</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">23.</td>
  <td>A.J. Green</td>
  <td>WR</td>
  <td>CIN</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">24.</td>
  <td>Derrick Henry</td>
  <td>RB</td>
  <td>TEN</td>
  <td>8</td>
</tr>

<tr class="WR">
  <td class="text-right">25.</td>
  <td>Mike Evans</td>
  <td>WR</td>
  <td>TB</td>
  <td>5</td>
</tr>

<tr class="RB">
  <td class="text-right">26.</td>
  <td>LeSean McCoy</td>
  <td>RB</td>
  <td>BUF</td>
  <td>11</td>
</tr>

<tr class="RB">
  <td class="text-right">27.</td>
  <td>Alex Collins</td>
  <td>RB</td>
  <td>BAL</td>
  <td>7</td>
</tr>

<tr class="WR">
  <td class="text-right">28.</td>
  <td>T.Y. Hilton</td>
  <td>WR</td>
  <td>IND</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">29.</td>
  <td>Stefon Diggs</td>
  <td>WR</td>
  <td>MIN</td>
  <td>10</td>
</tr>

<tr class="RB">
  <td class="text-right">30.</td>
  <td>Jerick McKinnon</td>
  <td>RB</td>
  <td>SF</td>
  <td>10</td>
</tr>

<tr class="QB">
  <td class="text-right">31.</td>
  <td>Aaron Rodgers</td>
  <td>QB</td>
  <td>GB</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">32.</td>
  <td>Royce Freeman</td>
  <td>RB</td>
  <td>DEN</td>
  <td>10</td>
</tr>

<tr class="WR">
  <td class="text-right">33.</td>
  <td>Tyreek Hill</td>
  <td>WR</td>
  <td>KC</td>
  <td>12</td>
</tr>

<tr class="WR">
  <td class="text-right">34.</td>
  <td>Doug Baldwin</td>
  <td>WR</td>
  <td>SEA</td>
  <td>7</td>
</tr>

<tr class="TE">
  <td class="text-right">35.</td>
  <td>Travis Kelce</td>
  <td>TE</td>
  <td>KC</td>
  <td>12</td>
</tr>

<tr class="RB">
  <td class="text-right">36.</td>
  <td>Lamar Miller</td>
  <td>RB</td>
  <td>HOU</td>
  <td>10</td>
</tr>

<tr class="RB">
  <td class="text-right">37.</td>
  <td>Jay Ajayi</td>
  <td>RB</td>
  <td>PHI</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">38.</td>
  <td>Adam Thielen</td>
  <td>WR</td>
  <td>MIN</td>
  <td>10</td>
</tr>

<tr class="WR">
  <td class="text-right">39.</td>
  <td>Amari Cooper</td>
  <td>WR</td>
  <td>OAK</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">40.</td>
  <td>Kenyan Drake</td>
  <td>RB</td>
  <td>MIA</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">41.</td>
  <td>JuJu Smith-Schuster</td>
  <td>WR</td>
  <td>PIT</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">42.</td>
  <td>Mark Ingram</td>
  <td>RB</td>
  <td>NO</td>
  <td>6</td>
</tr>

<tr class="QB">
  <td class="text-right">43.</td>
  <td>Deshaun Watson</td>
  <td>QB</td>
  <td>HOU</td>
  <td>10</td>
</tr>

<tr class="RB">
  <td class="text-right">44.</td>
  <td>Marshawn Lynch</td>
  <td>RB</td>
  <td>OAK</td>
  <td>7</td>
</tr>

<tr class="TE">
  <td class="text-right">45.</td>
  <td>Zach Ertz</td>
  <td>TE</td>
  <td>PHI</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">46.</td>
  <td>Larry Fitzgerald</td>
  <td>WR</td>
  <td>ARI</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">47.</td>
  <td>Josh Gordon</td>
  <td>WR</td>
  <td>CLE</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">48.</td>
  <td>Chris Hogan</td>
  <td>WR</td>
  <td>NE</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">49.</td>
  <td>Brandin Cooks</td>
  <td>WR</td>
  <td>LAR</td>
  <td>11</td>
</tr>

<tr class="RB">
  <td class="text-right">50.</td>
  <td>Kerryon Johnson</td>
  <td>RB</td>
  <td>DET</td>
  <td>6</td>
</tr>

<tr class="WR">
  <td class="text-right">51.</td>
  <td>Demaryius Thomas</td>
  <td>WR</td>
  <td>DEN</td>
  <td>10</td>
</tr>

<tr class="TE">
  <td class="text-right">52.</td>
  <td>Jimmy Graham</td>
  <td>TE</td>
  <td>GB</td>
  <td>7</td>
</tr>

<tr class="QB">
  <td class="text-right">53.</td>
  <td>Tom Brady</td>
  <td>QB</td>
  <td>NE</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">54.</td>
  <td>Jarvis Landry</td>
  <td>WR</td>
  <td>CLE</td>
  <td>11</td>
</tr>

<tr class="RB">
  <td class="text-right">55.</td>
  <td>Carlos Hyde</td>
  <td>RB</td>
  <td>CLE</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">56.</td>
  <td>Marquise Goodwin</td>
  <td>WR</td>
  <td>SF</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">57.</td>
  <td>Allen Robinson</td>
  <td>WR</td>
  <td>CHI</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">58.</td>
  <td>Rex Burkhead</td>
  <td>RB</td>
  <td>NE</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">59.</td>
  <td>Marvin Jones</td>
  <td>WR</td>
  <td>DET</td>
  <td>6</td>
</tr>

<tr class="RB">
  <td class="text-right">60.</td>
  <td>Dion Lewis</td>
  <td>RB</td>
  <td>TEN</td>
  <td>11</td>
</tr>

<tr class="QB">
  <td class="text-right">61.</td>
  <td>Russell Wilson</td>
  <td>QB</td>
  <td>SEA</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">62.</td>
  <td>Jamaal Williams</td>
  <td>RB</td>
  <td>GB</td>
  <td>7</td>
</tr>

<tr class="WR">
  <td class="text-right">63.</td>
  <td>Corey Davis</td>
  <td>WR</td>
  <td>TEN</td>
  <td>8</td>
</tr>

<tr class="WR">
  <td class="text-right">64.</td>
  <td>Alshon Jeffery</td>
  <td>WR</td>
  <td>PHI</td>
  <td>9</td>
</tr>

<tr class="TE">
  <td class="text-right">65.</td>
  <td>Greg Olsen</td>
  <td>TE</td>
  <td>CAR</td>
  <td>4</td>
</tr>

<tr class="RB">
  <td class="text-right">66.</td>
  <td>Chris Carson</td>
  <td>RB</td>
  <td>SEA</td>
  <td>7</td>
</tr>

<tr class="WR">
  <td class="text-right">67.</td>
  <td>Will Fuller</td>
  <td>WR</td>
  <td>HOU</td>
  <td>10</td>
</tr>

<tr class="RB">
  <td class="text-right">68.</td>
  <td>Rashaad Penny</td>
  <td>RB</td>
  <td>SEA</td>
  <td>7</td>
</tr>

<tr class="WR">
  <td class="text-right">69.</td>
  <td>Golden Tate</td>
  <td>WR</td>
  <td>DET</td>
  <td>6</td>
</tr>

<tr class="QB">
  <td class="text-right">70.</td>
  <td>Drew Brees</td>
  <td>QB</td>
  <td>NO</td>
  <td>6</td>
</tr>

<tr class="QB">
  <td class="text-right">71.</td>
  <td>Cam Newton</td>
  <td>QB</td>
  <td>CAR</td>
  <td>4</td>
</tr>

<tr class="TE">
  <td class="text-right">72.</td>
  <td>Evan Engram</td>
  <td>TE</td>
  <td>NYG</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">73.</td>
  <td>Tevin Coleman</td>
  <td>RB</td>
  <td>ATL</td>
  <td>8</td>
</tr>

<tr class="RB">
  <td class="text-right">74.</td>
  <td>Ronald Jones II</td>
  <td>RB</td>
  <td>TB</td>
  <td>5</td>
</tr>

<tr class="WR">
  <td class="text-right">75.</td>
  <td>Michael Crabtree</td>
  <td>WR</td>
  <td>BAL</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">76.</td>
  <td>Sony Michel</td>
  <td>RB</td>
  <td>NE</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">77.</td>
  <td>Sammy Watkins</td>
  <td>WR</td>
  <td>KC</td>
  <td>12</td>
</tr>

<tr class="WR">
  <td class="text-right">78.</td>
  <td>Julian Edelman</td>
  <td>WR</td>
  <td>NE</td>
  <td>11</td>
</tr>

<tr class="TE">
  <td class="text-right">79.</td>
  <td>Trey Burton</td>
  <td>TE</td>
  <td>CHI</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">80.</td>
  <td>Isaiah Crowell</td>
  <td>RB</td>
  <td>NYJ</td>
  <td>11</td>
</tr>

<tr class="TE">
  <td class="text-right">81.</td>
  <td>Kyle Rudolph</td>
  <td>TE</td>
  <td>MIN</td>
  <td>10</td>
</tr>

<tr class="WR">
  <td class="text-right">82.</td>
  <td>Emmanuel Sanders</td>
  <td>WR</td>
  <td>DEN</td>
  <td>10</td>
</tr>

<tr class="RB">
  <td class="text-right">83.</td>
  <td>Marlon Mack</td>
  <td>RB</td>
  <td>IND</td>
  <td>9</td>
</tr>

<tr class="QB">
  <td class="text-right">84.</td>
  <td>Carson Wentz</td>
  <td>QB</td>
  <td>PHI</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">85.</td>
  <td>Jordy Nelson</td>
  <td>WR</td>
  <td>OAK</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">86.</td>
  <td>Aaron Jones</td>
  <td>RB</td>
  <td>GB</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">87.</td>
  <td>Peyton Barber</td>
  <td>RB</td>
  <td>TB</td>
  <td>5</td>
</tr>

<tr class="QB">
  <td class="text-right">88.</td>
  <td>Kirk Cousins</td>
  <td>QB</td>
  <td>MIN</td>
  <td>4</td>
</tr>

<tr class="TE">
  <td class="text-right">89.</td>
  <td>Delanie Walker</td>
  <td>TE</td>
  <td>TEN</td>
  <td>8</td>
</tr>

<tr class="WR">
  <td class="text-right">90.</td>
  <td>Robby Anderson</td>
  <td>WR</td>
  <td>NYJ</td>
  <td>11</td>
</tr>

<tr class="QB">
  <td class="text-right">91.</td>
  <td>Andrew Luck</td>
  <td>QB</td>
  <td>IND</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">92.</td>
  <td>Devin Funchess</td>
  <td>WR</td>
  <td>CAR</td>
  <td>4</td>
</tr>

<tr class="RB">
  <td class="text-right">93.</td>
  <td>Chris Thompson</td>
  <td>RB</td>
  <td>WAS</td>
  <td>4</td>
</tr>

<tr class="RB">
  <td class="text-right">94.</td>
  <td>Tarik Cohen</td>
  <td>RB</td>
  <td>CHI</td>
  <td>5</td>
</tr>

<tr class="DEF">
  <td class="text-right">95.</td>
  <td>Jacksonville Defense</td>
  <td>DEF</td>
  <td>JAX</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">96.</td>
  <td>Randall Cobb</td>
  <td>WR</td>
  <td>GB</td>
  <td>7</td>
</tr>

<tr class="WR">
  <td class="text-right">97.</td>
  <td>Cooper Kupp</td>
  <td>WR</td>
  <td>LAR</td>
  <td>12</td>
</tr>

<tr class="TE">
  <td class="text-right">98.</td>
  <td>Jordan Reed</td>
  <td>TE</td>
  <td>WAS</td>
  <td>4</td>
</tr>

<tr class="QB">
  <td class="text-right">99.</td>
  <td>Matthew Stafford</td>
  <td>QB</td>
  <td>DET</td>
  <td>6</td>
</tr>

<tr class="WR">
  <td class="text-right">100.</td>
  <td>Kelvin Benjamin</td>
  <td>WR</td>
  <td>BUF</td>
  <td>4</td>
</tr>

<tr class="QB">
  <td class="text-right">101.</td>
  <td>Jimmy Garoppolo</td>
  <td>QB</td>
  <td>SF</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">102.</td>
  <td>Nelson Agholor</td>
  <td>WR</td>
  <td>PHI</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">103.</td>
  <td>CJ Anderson</td>
  <td>RB</td>
  <td>CAR</td>
  <td>10</td>
</tr>

<tr class="WR">
  <td class="text-right">104.</td>
  <td>Mike Williams</td>
  <td>WR</td>
  <td>LAC</td>
  <td>8</td>
</tr>

<tr class="WR">
  <td class="text-right">105.</td>
  <td>Robert Woods</td>
  <td>WR</td>
  <td>LAR</td>
  <td>12</td>
</tr>

<tr class="TE">
  <td class="text-right">106.</td>
  <td>David Njoku</td>
  <td>TE</td>
  <td>CLE</td>
  <td>11</td>
</tr>

<tr class="QB">
  <td class="text-right">107.</td>
  <td>Philip Rivers</td>
  <td>QB</td>
  <td>LAC</td>
  <td>8</td>
</tr>

<tr class="DEF">
  <td class="text-right">108.</td>
  <td>LA Rams Defense</td>
  <td>DEF</td>
  <td>LAR</td>
  <td>12</td>
</tr>

<tr class="RB">
  <td class="text-right">109.</td>
  <td>Nick Chubb</td>
  <td>RB</td>
  <td>CLE</td>
  <td>11</td>
</tr>

<tr class="RB">
  <td class="text-right">110.</td>
  <td>LeGarrette Blount</td>
  <td>RB</td>
  <td>DET</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">111.</td>
  <td>Jamison Crowder</td>
  <td>WR</td>
  <td>WAS</td>
  <td>4</td>
</tr>

<tr class="QB">
  <td class="text-right">112.</td>
  <td>Matt Ryan</td>
  <td>QB</td>
  <td>ATL</td>
  <td>8</td>
</tr>

<tr class="DEF">
  <td class="text-right">113.</td>
  <td>Minnesota Defense</td>
  <td>DEF</td>
  <td>MIN</td>
  <td>10</td>
</tr>

<tr class="QB">
  <td class="text-right">114.</td>
  <td>Ben Roethlisberger</td>
  <td>QB</td>
  <td>PIT</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">115.</td>
  <td>Latavius Murray</td>
  <td>RB</td>
  <td>MIN</td>
  <td>10</td>
</tr>

<tr class="RB">
  <td class="text-right">116.</td>
  <td>Ty Montgomery</td>
  <td>RB</td>
  <td>GB</td>
  <td>7</td>
</tr>

<tr class="WR">
  <td class="text-right">117.</td>
  <td>D.J. Moore</td>
  <td>WR</td>
  <td>CAR</td>
  <td>4</td>
</tr>

<tr class="WR">
  <td class="text-right">118.</td>
  <td>Pierre Garcon</td>
  <td>WR</td>
  <td>SF</td>
  <td>11</td>
</tr>

<tr class="RB">
  <td class="text-right">119.</td>
  <td>Corey Clement</td>
  <td>RB</td>
  <td>PHI</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">120.</td>
  <td>Kenny Stills</td>
  <td>WR</td>
  <td>MIA</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">121.</td>
  <td>Calvin Ridley</td>
  <td>WR</td>
  <td>ATL</td>
  <td>8</td>
</tr>

<tr class="QB">
  <td class="text-right">122.</td>
  <td>Pat Mahomes</td>
  <td>QB</td>
  <td>KC</td>
  <td>12</td>
</tr>

<tr class="WR">
  <td class="text-right">123.</td>
  <td>Allen Hurns</td>
  <td>WR</td>
  <td>DAL</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">124.</td>
  <td>Duke Johnson</td>
  <td>RB</td>
  <td>CLE</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">125.</td>
  <td>Sterling Shepard</td>
  <td>WR</td>
  <td>NYG</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">126.</td>
  <td>Adrian Peterson</td>
  <td>RB</td>
  <td>WAS</td>
  <td>9</td>
</tr>

<tr class="DEF">
  <td class="text-right">127.</td>
  <td>Philadelphia Defense</td>
  <td>DEF</td>
  <td>PHI</td>
  <td>9</td>
</tr>

<tr class="QB">
  <td class="text-right">128.</td>
  <td>Jared Goff</td>
  <td>QB</td>
  <td>LAR</td>
  <td>12</td>
</tr>

<tr class="DEF">
  <td class="text-right">129.</td>
  <td>LA Chargers Defense</td>
  <td>DEF</td>
  <td>LAC</td>
  <td>8</td>
</tr>

<tr class="RB">
  <td class="text-right">130.</td>
  <td>James White</td>
  <td>RB</td>
  <td>NE</td>
  <td>11</td>
</tr>

<tr class="TE">
  <td class="text-right">131.</td>
  <td>George Kittle</td>
  <td>TE</td>
  <td>SF</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">132.</td>
  <td>Kenny Golladay</td>
  <td>WR</td>
  <td>DET</td>
  <td>6</td>
</tr>

<tr class="WR">
  <td class="text-right">133.</td>
  <td>Cameron Meredith</td>
  <td>WR</td>
  <td>NO</td>
  <td>5</td>
</tr>

<tr class="QB">
  <td class="text-right">134.</td>
  <td>Marcus Mariota</td>
  <td>QB</td>
  <td>TEN</td>
  <td>8</td>
</tr>

<tr class="RB">
  <td class="text-right">135.</td>
  <td>Rob Kelley</td>
  <td>RB</td>
  <td>WAS</td>
  <td>4</td>
</tr>

<tr class="RB">
  <td class="text-right">136.</td>
  <td>Doug Martin</td>
  <td>RB</td>
  <td>OAK</td>
  <td>5</td>
</tr>

<tr class="TE">
  <td class="text-right">137.</td>
  <td>Jack Doyle</td>
  <td>TE</td>
  <td>IND</td>
  <td>9</td>
</tr>

<tr class="DEF">
  <td class="text-right">138.</td>
  <td>Houston Defense</td>
  <td>DEF</td>
  <td>HOU</td>
  <td>10</td>
</tr>

<tr class="DEF">
  <td class="text-right">139.</td>
  <td>Baltimore Defense</td>
  <td>DEF</td>
  <td>BAL</td>
  <td>10</td>
</tr>

<tr class="WR">
  <td class="text-right">140.</td>
  <td>DeVante Parker</td>
  <td>WR</td>
  <td>MIA</td>
  <td>11</td>
</tr>

<tr class="RB">
  <td class="text-right">141.</td>
  <td>Devontae Booker</td>
  <td>RB</td>
  <td>DEN</td>
  <td>10</td>
</tr>

<tr class="QB">
  <td class="text-right">142.</td>
  <td>Alex Smith</td>
  <td>QB</td>
  <td>WAS</td>
  <td>12</td>
</tr>

<tr class="QB">
  <td class="text-right">143.</td>
  <td>Derek Carr</td>
  <td>QB</td>
  <td>OAK</td>
  <td>7</td>
</tr>

<tr class="WR">
  <td class="text-right">144.</td>
  <td>John Brown</td>
  <td>WR</td>
  <td>BAL</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">145.</td>
  <td>Marqise Lee</td>
  <td>WR</td>
  <td>JAX</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">146.</td>
  <td>Tyler Lockett</td>
  <td>WR</td>
  <td>SEA</td>
  <td>7</td>
</tr>

<tr class="PK">
  <td class="text-right">147.</td>
  <td>Greg Zuerlein</td>
  <td>PK</td>
  <td>LAR</td>
  <td>12</td>
</tr>

<tr class="WR">
  <td class="text-right">148.</td>
  <td>Michael Gallup</td>
  <td>WR</td>
  <td>DAL</td>
  <td>8</td>
</tr>

<tr class="DEF">
  <td class="text-right">149.</td>
  <td>Denver Defense</td>
  <td>DEF</td>
  <td>DEN</td>
  <td>10</td>
</tr>

<tr class="TE">
  <td class="text-right">150.</td>
  <td>Tyler Eifert</td>
  <td>TE</td>
  <td>CIN</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">151.</td>
  <td>Matt Breida</td>
  <td>RB</td>
  <td>SF</td>
  <td>11</td>
</tr>

<tr class="PK">
  <td class="text-right">152.</td>
  <td>Stephen Gostkowski</td>
  <td>PK</td>
  <td>NE</td>
  <td>11</td>
</tr>

<tr class="RB">
  <td class="text-right">153.</td>
  <td>Jordan Wilkins</td>
  <td>RB</td>
  <td>IND</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">154.</td>
  <td>Bilal Powell</td>
  <td>RB</td>
  <td>NYJ</td>
  <td>11</td>
</tr>

<tr class="DEF">
  <td class="text-right">155.</td>
  <td>New Orleans Defense</td>
  <td>DEF</td>
  <td>NO</td>
  <td>6</td>
</tr>

<tr class="WR">
  <td class="text-right">156.</td>
  <td>Anthony Miller</td>
  <td>WR</td>
  <td>CHI</td>
  <td>5</td>
</tr>

<tr class="PK">
  <td class="text-right">157.</td>
  <td>Justin Tucker</td>
  <td>PK</td>
  <td>BAL</td>
  <td>10</td>
</tr>

<tr class="WR">
  <td class="text-right">158.</td>
  <td>Josh Doctson</td>
  <td>WR</td>
  <td>WAS</td>
  <td>4</td>
</tr>

<tr class="WR">
  <td class="text-right">159.</td>
  <td>Geronimo Allison</td>
  <td>WR</td>
  <td>GB</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">160.</td>
  <td>Giovani Bernard</td>
  <td>RB</td>
  <td>CIN</td>
  <td>9</td>
</tr>

<tr class="TE">
  <td class="text-right">161.</td>
  <td>O.J. Howard</td>
  <td>TE</td>
  <td>TB</td>
  <td>5</td>
</tr>

<tr class="RB">
  <td class="text-right">162.</td>
  <td>Donta Foreman</td>
  <td>RB</td>
  <td>HOU</td>
  <td>10</td>
</tr>

<tr class="QB">
  <td class="text-right">163.</td>
  <td>Jameis Winston</td>
  <td>QB</td>
  <td>TB</td>
  <td>5</td>
</tr>

<tr class="QB">
  <td class="text-right">164.</td>
  <td>Dak Prescott</td>
  <td>QB</td>
  <td>DAL</td>
  <td>8</td>
</tr>

<tr class="DEF">
  <td class="text-right">165.</td>
  <td>Carolina Defense</td>
  <td>DEF</td>
  <td>CAR</td>
  <td>4</td>
</tr>

<tr class="RB">
  <td class="text-right">166.</td>
  <td>Samaje Perine</td>
  <td>RB</td>
  <td>WAS</td>
  <td>4</td>
</tr>

<tr class="RB">
  <td class="text-right">167.</td>
  <td>James Conner</td>
  <td>RB</td>
  <td>PIT</td>
  <td>7</td>
</tr>

<tr class="QB">
  <td class="text-right">168.</td>
  <td>Eli Manning</td>
  <td>QB</td>
  <td>NYG</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">169.</td>
  <td>Martavis Bryant</td>
  <td>WR</td>
  <td>OAK</td>
  <td>7</td>
</tr>

<tr class="DEF">
  <td class="text-right">170.</td>
  <td>New England Defense</td>
  <td>DEF</td>
  <td>NE</td>
  <td>11</td>
</tr>

<tr class="WR">
  <td class="text-right">171.</td>
  <td>Tyrell Williams</td>
  <td>WR</td>
  <td>LAC</td>
  <td>8</td>
</tr>

<tr class="PK">
  <td class="text-right">172.</td>
  <td>Wil Lutz</td>
  <td>PK</td>
  <td>NO</td>
  <td>6</td>
</tr>

<tr class="RB">
  <td class="text-right">173.</td>
  <td>Spencer Ware</td>
  <td>RB</td>
  <td>KC</td>
  <td>12</td>
</tr>

<tr class="TE">
  <td class="text-right">174.</td>
  <td>Austin Hooper</td>
  <td>TE</td>
  <td>ATL</td>
  <td>8</td>
</tr>

<tr class="WR">
  <td class="text-right">175.</td>
  <td>Chris Godwin</td>
  <td>WR</td>
  <td>TB</td>
  <td>5</td>
</tr>

<tr class="DEF">
  <td class="text-right">176.</td>
  <td>Pittsburgh Defense</td>
  <td>DEF</td>
  <td>PIT</td>
  <td>7</td>
</tr>

<tr class="RB">
  <td class="text-right">177.</td>
  <td>Nyheim Hines</td>
  <td>RB</td>
  <td>IND</td>
  <td>9</td>
</tr>

<tr class="PK">
  <td class="text-right">178.</td>
  <td>Matt Bryant</td>
  <td>PK</td>
  <td>ATL</td>
  <td>8</td>
</tr>

<tr class="WR">
  <td class="text-right">179.</td>
  <td>Keelan Cole</td>
  <td>WR</td>
  <td>JAX</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">180.</td>
  <td>Taywan Taylor</td>
  <td>WR</td>
  <td>TEN</td>
  <td>8</td>
</tr>

<tr class="WR">
  <td class="text-right">181.</td>
  <td>Dede Westbrook</td>
  <td>WR</td>
  <td>JAX</td>
  <td>9</td>
</tr>

<tr class="WR">
  <td class="text-right">182.</td>
  <td>John Ross</td>
  <td>WR</td>
  <td>CIN</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">183.</td>
  <td>Frank Gore</td>
  <td>RB</td>
  <td>MIA</td>
  <td>9</td>
</tr>

<tr class="PK">
  <td class="text-right">184.</td>
  <td>Harrison Butker</td>
  <td>PK</td>
  <td>KC</td>
  <td>12</td>
</tr>

<tr class="PK">
  <td class="text-right">185.</td>
  <td>Mason Crosby</td>
  <td>PK</td>
  <td>GB</td>
  <td>7</td>
</tr>

<tr class="DEF">
  <td class="text-right">186.</td>
  <td>Chicago Defense</td>
  <td>DEF</td>
  <td>CHI</td>
  <td>5</td>
</tr>

<tr class="QB">
  <td class="text-right">187.</td>
  <td>Tyrod Taylor</td>
  <td>QB</td>
  <td>CLE</td>
  <td>11</td>
</tr>

<tr class="RB">
  <td class="text-right">188.</td>
  <td>Jeremy Hill</td>
  <td>RB</td>
  <td>NE</td>
  <td>9</td>
</tr>

<tr class="PK">
  <td class="text-right">189.</td>
  <td>Jake Elliott</td>
  <td>PK</td>
  <td>PHI</td>
  <td>9</td>
</tr>

<tr class="RB">
  <td class="text-right">190.</td>
  <td>Austin Ekeler</td>
  <td>RB</td>
  <td>LAC</td>
  <td>8</td>
</tr>

<tr class="PK">
  <td class="text-right">191.</td>
  <td>Matt Prater</td>
  <td>PK</td>
  <td>DET</td>
  <td>6</td>
</tr>

<tr class="PK">
  <td class="text-right">192.</td>
  <td>Chris Boswell</td>
  <td>PK</td>
  <td>PIT</td>
  <td>7</td>
</tr>

<tr class="PK">
  <td class="text-right">193.</td>
  <td>Robbie Gould</td>
  <td>PK</td>
  <td>SF</td>
  <td>11</td>
</tr>

<tr class="RB">
  <td class="text-right">194.</td>
  <td>TJ Yeldon</td>
  <td>RB</td>
  <td>JAX</td>
  <td>9</td>
</tr>

<tr class="TE">
  <td class="text-right">195.</td>
  <td>Hayden Hurst</td>
  <td>TE</td>
  <td>BAL</td>
  <td>10</td>
</tr>

<tr class="WR">
  <td class="text-right">196.</td>
  <td>Rishard Matthews</td>
  <td>WR</td>
  <td>TEN</td>
  <td>8</td>
</tr>

<tr class="PK">
  <td class="text-right">197.</td>
  <td>Dan Bailey</td>
  <td>PK</td>
  <td>DAL</td>
  <td>8</td>
</tr>

<tr class="PK">
  <td class="text-right">198.</td>
  <td>Daniel Carlson</td>
  <td>PK</td>
  <td>MIN</td>
  <td>10</td>
</tr>

<tr class="DEF">
  <td class="text-right">199.</td>
  <td>Atlanta Defense</td>
  <td>DEF</td>
  <td>ATL</td>
  <td>8</td>
</tr>

<tr class="DEF">
  <td class="text-right">200.</td>
  <td>Kansas City Defense</td>
  <td>DEF</td>
  <td>KC</td>
  <td>12</td>
</tr>
`;

const $table = document.createElement('tbody');
$table.innerHTML = table;

const players = Array.from($table.children).map(p => {
  const name = p.children[1].textContent;
  const position = p.children[2].textContent;
  const team = p.children[3].textContent;
  const byeWeek = p.children[4].textContent;
  const value = 0;

  return {
    name,
    position,
    team,
    byeWeek,
    value,
  };
});

export default players;
