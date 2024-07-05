const teams = [
    {team: 'Arsenal', stadium: 'The Emirates', capacity: '60,704'},
    {team: 'Aston Villa', stadium: 'Villa Park', capacity: '42,640'},
    {team: 'Bournemouth', stadium: 'The Vitality Stadium', capacity: '11,307'},
    {team: 'Brentford', stadium: 'The Gtech Community Stadium', capacity: '17,250'},
    {team: 'Brighton and Hove Albion', stadium: 'The AMEX Stadium', capacity: '31,876'},
    {team: 'Chelsea', stadium: 'Stamford Bridge', capacity: '40,341'},
    {team: 'Crystal Palace', stadium: 'Selhurst Park', capacity: '25,486'},
    {team: 'Everton', stadium: 'Goodison Park', capacity: '39,572'},
    {team: 'Fulham', stadium: 'Craven Cottage', capacity: '25,700'},
    {team: 'Ipswich Town', stadium: 'Portman Road', capacity: '29,673'},
    {team: 'Leicester City', stadium: 'King Power Stadium', capacity: '32,261'},
    {team: 'Liverpool', stadium: 'Anfield', capacity: '61,276'},
    {team: 'Manchester City', stadium: 'The Etihad', capacity: '53,400'},
    {team: 'Manchester United', stadium: 'Old Trafford', capacity: '74,310'},
    {team: 'Newcastle United', stadium: 'St. James\' Park', capacity: '52,350'},
    {team: 'Nottingham Forest', stadium: 'The City Ground', capacity: '30,445'},
    {team: 'Southampton', stadium: 'St. Mary\'s', capacity: '32,384'},
    {team: 'Tottenham Hotspur', stadium: 'The Tottenham Hotspur Stadium', capacity: '62,850'},
    {team: 'West Ham United', stadium: 'The London Stadium', capacity: '68,013'},
    {team: 'Wolverhampton Wanderers', stadium: 'Molineux', capacity: '32,050'}];
const home = teams[Math.floor(Math.random() * teams.length)];
let away = teams[Math.floor(Math.random() * teams.length)];
while (home === away) {
    away = teams[Math.floor(Math.random() * teams.length)];
};

//Score prediction
const prediction = () => {
    const homeScore = Math.floor(Math.random() * 5);
    const awayScore = Math.floor(Math.random() * 5);
    if (homeScore === awayScore) {
        return `Both teams will battle for a ${homeScore}-${awayScore} draw, securing a point each.`;
    } else if (homeScore > awayScore) {
        return `The home side will come out on top, taking all 3 points with a ${homeScore}-${awayScore} win.`;
    } else {
        return `The visitors will walk away with all 3 points, winning ${homeScore}-${awayScore}.`;
    };
};

const footballPredictor = () => {
    console.log(`Today's prediction is for the game between ${home.team} and ${away.team}.`);
    console.log(`The game will take place at ${home.stadium} in front of a capacity crowd of ${home.capacity}.`);
    console.log(`${prediction()}`);
};


footballPredictor();