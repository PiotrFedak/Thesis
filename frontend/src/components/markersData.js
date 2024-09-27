import { Icon } from 'leaflet';

const markers = [
  {
    team: 'Denver nuggets',
    location: [39.74867266532661, -105.007597732176],
    address: '1000 Chopper Cir, Denver, CO 80204',
    icon: new Icon({
      iconUrl: 'DenverNuggets.png',
      iconSize: [32, 32],
    }),
  },
  {
    team: 'Milwaukee Bucks',
    location: [43.04509199922204, -87.91734850425911],
    address: '1111 N Vel R. Phillips Ave, Milwaukee, WI 53203',
    icon: new Icon({
      iconUrl: 'MilwaukeeBucks.png',
      iconSize: [32, 32],
    }),
  },
  {
    team: 'Toronto Raptors',
    location: [43.64349220962489, -79.37909562710226],
    address: '40 Bay St., Toronto, ON M5J 2X2',
    icon: new Icon({
      iconUrl: 'TorontoRaptors.png',
      iconSize: [32, 32],
    }),
  },
  {
    team: 'Boston Celtics',
    location: [42.36619542101667, -71.06215831120917],
    address: '100 Legends Way, Boston, MA 02114',
    icon: new Icon({
      iconUrl: 'BostonCeltics.png',
      iconSize: [32, 32],
    }),
  },
  {
    team: 'Los Angeles Lakers',
    location: [34.04312667072381, -118.26702563097173],
    address: '1111 S Figueroa St, Los Angeles, CA 90015',
    icon: new Icon({
      iconUrl: 'LosAngelesLakers.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'new york knicks',
    location: [40.75071835493097, -73.99242633451308],
    address: ' New York, NY 10001',
    icon: new Icon({
      iconUrl: 'newYorkKnicks.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Atlanta Hawks',
    location: [33.75764248778137, -84.3961416641311],
    address: '1 State Farm Dr, Atlanta, GA 30303',
    icon: new Icon({
      iconUrl: 'AtlantaHawks.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Washington Wizards',
    location: [38.898179390003634, -77.02084624847794],
    address: '601 F St NW, Washington, DC 20004',
    icon: new Icon({
      iconUrl: 'WashingtonWizards.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Detroit Pistons',
    location: [42.341494362661955, -83.0551519622027],
    address: '2645 Woodward Ave, Detroit, MI 48201',
    icon: new Icon({
      iconUrl: 'DetroitPistons.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'New Orleans Pelicans',
    location: [29.94922762504199, -90.08204396286676],
    address: '1501 Dave Dixon Dr, New Orleans, LA 70113',
    icon: new Icon({
      iconUrl: 'NewOrleansPelicans.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Indiana Pacers',
    location: [39.764173951643265, -86.15551638780539],
    address: '125 S Pennsylvania St, Indianapolis, IN 46204',
    icon: new Icon({
      iconUrl: 'IndianaPacers.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Philadelphia 76ers',
    location: [39.90481366770261, -75.17132897520645],
    address: '3601 S Broad St, Philadelphia, PA 19148',
    icon: new Icon({
      iconUrl: 'Philadelphia76ers.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Oklahoma City Thunder',
    location: [35.46438581609086, -97.51498463898018],
    address: '100 W Reno Ave, Oklahoma City, OK 73102',
    icon: new Icon({
      iconUrl: 'oklahomaCityThunder.png',
      iconSize: [40, 40],
    }),
  },
  {
    team: 'Portland Trail Blazers',
    location: [45.531780549947676, -122.66682788478155],
    address: '1 N Center Ct St, Portland, OR 97227',
    icon: new Icon({
      iconUrl: 'portlandTrailBlazers.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Orlando Magic',
    location: [28.53976358445202, -81.38385615719315],
    address: '400 W Church St, Orlando, FL 32801',
    icon: new Icon({
      iconUrl: 'orlandoMagic.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'PhoenixSuns',
    location: [33.44657685459291, -112.07109877200304],
    address: '201 E Jefferson St, Phoenix, AZ 85004',
    icon: new Icon({
      iconUrl: 'phoenixSuns.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Miami Heat',
    location: [25.78283480212781, -80.18711514720873],
    address: ' 601 Biscayne Blvd, Miami, FL 33132',
    icon: new Icon({
      iconUrl: 'MiamiHeat.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Sacramento Kings',
    location: [38.581396514387535, -121.49971372092479],
    address: '500 David J Stern Walk, Sacramento, CA 95814',
    icon: new Icon({
      iconUrl: 'SacramentoKings.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'Minnesota Timberwolves',
    location: [44.97966853985311, -93.27611334751393],
    address: '600 N 1st Ave, Minneapolis, MN 55403',
    icon: new Icon({
      iconUrl: 'minnesotaTimberwolves.png',
      iconSize: [34, 34],
    }),
  },
  {
    team: 'San Antonio Spurs',
    location: [29.43620855420887, -98.43604187657935],
    address: '1 Frost Bank Center Dr, San Antonio, TX 78219',
    icon: new Icon({
      iconUrl: 'SanAntonioSpurs.png',
      iconSize: [34, 34],
    }),
  },
];

export default markers;
