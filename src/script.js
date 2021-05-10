const header = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link rel="stylesheet" href="style.css" />
  </head>
  <body >
    <header>
      <h2> 
        My Team
      </h2>
    </header>
    <main>  
      <section class="team">`;

const footer =`</section>
</main>
</body>
</html>    `;

const card1= `<section class="card">
  <header>`;
const card2 = `</header>
<div class ="cardDetails">
  <div id="Id">`;
const card3 = `</div>
<div id="email">`;
const card4 = `</div>
<div id="number">`;
const card5 =`</div>
</div>
</section>`;

//export { header, footer,card1 , card2,card3, card4 };
module.exports = {header, footer,card1 , card2,card3, card4 ,card5 };