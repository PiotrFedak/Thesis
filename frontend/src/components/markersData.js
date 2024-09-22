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
];

export default markers;
