import { Icon } from 'leaflet';

const markers = [
  {
    team: 'Denver nuggets',
    location: [39.74867266532661, -105.007597732176],
    address: '1000 Chopper Cir, Denver, CO 80204',
    icon: new Icon({
      iconUrl: 'nuggets.png',
      iconSize: [32, 32],
    }),
  },
  {
    team: 'Milwaukee Bucks',
    location: [43.04509199922204, -87.91734850425911],
    address: '1111 N Vel R. Phillips Ave, Milwaukee, WI 53203',
    icon: new Icon({
      iconUrl: 'Bucks.png',
      iconSize: [32, 32],
    }),
  },
  {
    team: 'Toronto Raptors',
    location: [43.64349220962489, -79.37909562710226],
    address: '40 Bay St., Toronto, ON M5J 2X2',
    icon: new Icon({
      iconUrl: 'Raptors.png',
      iconSize: [32, 32],
    }),
  },
  {
    team: 'Boston Celtics',
    location: [42.36619542101667, -71.06215831120917],
    address: '100 Legends Way, Boston, MA 02114',
    icon: new Icon({
      iconUrl: 'Celtics.png',
      iconSize: [32, 32],
    }),
  },
  {
    team: 'Los Angeles Lakers',
    location: [34.04312667072381, -118.26702563097173],
    address: '1111 S Figueroa St, Los Angeles, CA 90015',
    icon: new Icon({
      iconUrl: 'Lakers.png',
      iconSize: [36, 36],
    }),
  },
  {
    team: 'new york knicks',
    location: [40.75071835493097, -73.99242633451308],
    address: ' New York, NY 10001',
    icon: new Icon({
      iconUrl: 'Knicks.png',
      iconSize: [40, 40],
    }),
  },
  {
    team: 'Atlanta Hawks',
    location: [33.75764248778137, -84.3961416641311],
    address: '1 State Farm Dr, Atlanta, GA 30303',
    icon: new Icon({
      iconUrl: 'Hawks.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Washington Wizards',
    location: [38.898179390003634, -77.02084624847794],
    address: '601 F St NW, Washington, DC 20004',
    icon: new Icon({
      iconUrl: 'Wizards.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Detroit Pistons',
    location: [42.341494362661955, -83.0551519622027],
    address: '2645 Woodward Ave, Detroit, MI 48201',
    icon: new Icon({
      iconUrl: 'Pistons.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'New Orleans Pelicans',
    location: [29.94922762504199, -90.08204396286676],
    address: '1501 Dave Dixon Dr, New Orleans, LA 70113',
    icon: new Icon({
      iconUrl: 'Pelicans.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Indiana Pacers',
    location: [39.764173951643265, -86.15551638780539],
    address: '125 S Pennsylvania St, Indianapolis, IN 46204',
    icon: new Icon({
      iconUrl: 'Pacers.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Philadelphia 76ers',
    location: [39.90481366770261, -75.17132897520645],
    address: '3601 S Broad St, Philadelphia, PA 19148',
    icon: new Icon({
      iconUrl: '76ers.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Oklahoma City Thunder',
    location: [35.46438581609086, -97.51498463898018],
    address: '100 W Reno Ave, Oklahoma City, OK 73102',
    icon: new Icon({
      iconUrl: 'Thunder.png',
      iconSize: [40, 40],
    }),
  },
  {
    team: 'Portland Trail Blazers',
    location: [45.531780549947676, -122.66682788478155],
    address: '1 N Center Ct St, Portland, OR 97227',
    icon: new Icon({
      iconUrl: 'TrailBlazers.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Orlando Magic',
    location: [28.53976358445202, -81.38385615719315],
    address: '400 W Church St, Orlando, FL 32801',
    icon: new Icon({
      iconUrl: 'Magic.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'PhoenixSuns',
    location: [33.44657685459291, -112.07109877200304],
    address: '201 E Jefferson St, Phoenix, AZ 85004',
    icon: new Icon({
      iconUrl: 'Suns.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Miami Heat',
    location: [25.78283480212781, -80.18711514720873],
    address: ' 601 Biscayne Blvd, Miami, FL 33132',
    icon: new Icon({
      iconUrl: 'Heat.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Sacramento Kings',
    location: [38.581396514387535, -121.49971372092479],
    address: '500 David J Stern Walk, Sacramento, CA 95814',
    icon: new Icon({
      iconUrl: 'Kings.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Minnesota Timberwolves',
    location: [44.97966853985311, -93.27611334751393],
    address: '600 N 1st Ave, Minneapolis, MN 55403',
    icon: new Icon({
      iconUrl: 'Timberwolves.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'San Antonio Spurs',
    location: [29.43620855420887, -98.43604187657935],
    address: '1 Frost Bank Center Dr, San Antonio, TX 78219',
    icon: new Icon({
      iconUrl: 'Spurs.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Golden State Warriors',
    location: [37.77147792281884, -122.38767444004293],
    address: '1 Warriors Way, San Francisco, CA 94158',
    icon: new Icon({
      iconUrl: 'Warriors.png',
      iconSize: [32, 32],
    }),
  },
  {
    team: 'Houston Rockets',
    location: [29.769105175055262, -95.36338776944349],
    address: '1510 Polk St, Houston, TX 77002,',
    icon: new Icon({
      iconUrl: 'Rockets.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Brooklyn Nets',
    location: [40.68328067488448, -73.97547086295634],
    address: '620 Atlantic Ave, Brooklyn, NY 11217',
    icon: new Icon({
      iconUrl: 'Nets.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Chicago Bulls',
    location: [41.896238606021335, -87.67536047463182],
    address: '1901 W Madison St, Chicago, IL 60612',
    icon: new Icon({
      iconUrl: 'Bulls.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Cleveland Cavaliers',
    location: [41.503130370542735, -81.6885240438692],
    address: '1 Center Court, Cleveland, OH 44115',
    icon: new Icon({
      iconUrl: 'Cavaliers.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Charlotte Hornets',
    location: [35.22783785681046, -80.83970735663499],
    address: '333 E Trade St, Charlotte, NC 28202',
    icon: new Icon({
      iconUrl: 'Hornets.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Dallas Mavericks',
    location: [32.8103442301582, -96.80950968332428],
    address: '2500 Victory Ave, Dallas, TX 75219',
    icon: new Icon({
      iconUrl: 'Mavericks.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Utah Jazz',
    location: [40.76971807394582, -111.90137289775218],
    address: '301 S Temple, Salt Lake City, UT 84101',
    icon: new Icon({
      iconUrl: 'Jazz.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Memphis Grizzlies',
    location: [35.14259406573528, -90.05163738384557],
    address: '191 Beale St, Memphis, TN 38103',
    icon: new Icon({
      iconUrl: 'Grizzlies.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Los Angeles Clippers',
    location: [33.946029198003394, -118.34200356917704],
    address: '3930 W Century Blvd, Inglewood, CA 90303',
    icon: new Icon({
      iconUrl: 'Clippers.png',
      iconSize: [34, 34],
    }),
  },
];

export default markers;
