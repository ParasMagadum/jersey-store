// =============================================
// src/data/Jerseys.js
// =============================================
// IMAGES: All images are imported from your local
// assets folder. Make sure filenames match exactly.
// =============================================

// --- Football Clubs ---
import rm    from "../assets/jerseys/football-club/rm.jpg";
import fcb   from "../assets/jerseys/football-club/fcb.jpg";
import mc    from "../assets/jerseys/football-club/mc.jpg";
import mu    from "../assets/jerseys/football-club/mu.jpg";
import lvp   from "../assets/jerseys/football-club/lvp.jpg";
import aln   from "../assets/jerseys/football-club/aln.jpg";
import anl  from "../assets/jerseys/football-club/anl.jpg";
import psg   from "../assets/jerseys/football-club/psg.jpg";
import imm   from "../assets/jerseys/football-club/imm.jpg";
import jut   from "../assets/jerseys/football-club/jut.jpg";

// --- Football National ---
import Argentina      from "../assets/jerseys/football-national/Argentina.jpg";
import Brasil         from "../assets/jerseys/football-national/Brasil.jpg";
import France         from "../assets/jerseys/football-national/France.jpg";
import Germany        from "../assets/jerseys/football-national/Germany.jpg";
import Portugal       from "../assets/jerseys/football-national/Portugal.jpg";
import Spain          from "../assets/jerseys/football-national/Spain.jpg";
import EnglandFootball from "../assets/jerseys/football-national/England.jpg";
import Norway         from "../assets/jerseys/football-national/Norway.jpg";
import Scotland       from "../assets/jerseys/football-national/Scotland.jpg";
import USAFootball    from "../assets/jerseys/football-national/USA.jpg";

// --- IPL (cricket-club folder) ---
import CSK  from "../assets/jerseys/cricket-club/CSK.jpg";
import MI   from "../assets/jerseys/cricket-club/MI.jpg";
import RCB  from "../assets/jerseys/cricket-club/RCB.jpg";
import KKR  from "../assets/jerseys/cricket-club/KKR.jpg";
import RR   from "../assets/jerseys/cricket-club/RR.jpg";
import SRH  from "../assets/jerseys/cricket-club/SRH.jpg";
import DC   from "../assets/jerseys/cricket-club/DC.jpg";
import PBKS from "../assets/jerseys/cricket-club/PBKS.jpg";
import GT   from "../assets/jerseys/cricket-club/GT.jpg";
import LSG  from "../assets/jerseys/cricket-club/LSG.jpg";

// --- Cricket National ---
import IND from "../assets/jerseys/cricket-national/IND.jpg";
import AUS from "../assets/jerseys/cricket-national/AUS.jpg";
import ENG from "../assets/jerseys/cricket-national/ENG.jpg";
import AFG from "../assets/jerseys/cricket-national/AFG.jpg";
import NZ  from "../assets/jerseys/cricket-national/NZ.jpg";
import SA  from "../assets/jerseys/cricket-national/SA.jpg";
import SL  from "../assets/jerseys/cricket-national/SL.jpg";
import WI  from "../assets/jerseys/cricket-national/WI.jpg";
import NP  from "../assets/jerseys/cricket-national/NP.jpg";
import NL  from "../assets/jerseys/cricket-national/NL.jpg";

// =============================================

const jerseys = [

  // ========== FOOTBALL CLUBS ==========
  {
    id: 1,
    name: "Real Madrid Home Jersey 2025",
    team: "Real Madrid",
    category: "Football Club",
    sport: "Football",
    image: rm,
    price: 2999,
    oldPrice: 3999,
    rating: 4.9,
  },
  {
    id: 2,
    name: "FC Barcelona Home Jersey 2025",
    team: "Barcelona",
    category: "Football Club",
    sport: "Football",
    image: fcb,
    price: 2999,
    oldPrice: 3999,
    rating: 4.8,
  },
  {
    id: 3,
    name: "Manchester City Home Jersey 2025",
    team: "Manchester City",
    category: "Football Club",
    sport: "Football",
    image: mc,
    price: 2899,
    oldPrice: 3699,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Manchester United Home Jersey 2025",
    team: "Manchester United",
    category: "Football Club",
    sport: "Football",
    image: mu,
    price: 2899,
    oldPrice: 3699,
    rating: 4.7,
  },
  {
    id: 5,
    name: "Liverpool Home Jersey 2025",
    team: "Liverpool",
    category: "Football Club",
    sport: "Football",
    image: lvp,
    price: 2899,
    oldPrice: 3699,
    rating: 4.8,
  },
  {
    id: 6,
    name: "Arsenal Home Jersey 2025",
    team: "Arsenal",
    category: "Football Club",
    sport: "Football",
    image: aln,
    price: 2799,
    oldPrice: 3499,
    rating: 4.7,
  },
  {
    id: 7,
    name: "Chelsea Home Jersey 2025",
    team: "Chelsea",
    category: "Football Club",
    sport: "Football",
    image: anl,
    price: 2799,
    oldPrice: 3499,
    rating: 4.7,
  },
  {
    id: 8,
    name: "Paris Saint-Germain Jersey 2025",
    team: "PSG",
    category: "Football Club",
    sport: "Football",
    image: psg,
    price: 2899,
    oldPrice: 3599,
    rating: 4.8,
  },
  {
    id: 9,
    name: "Inter Miami CF Jersey 2025",
    team: "Inter Miami",
    category: "Football Club",
    sport: "Football",
    image: imm,
    price: 2899,
    oldPrice: 3599,
    rating: 4.7,
  },
  {
    id: 10,
    name: "Juventus Home Jersey 2025",
    team: "Juventus",
    category: "Football Club",
    sport: "Football",
    image: jut,
    price: 2799,
    oldPrice: 3499,
    rating: 4.7,
  },

  // ========== FOOTBALL NATIONAL ==========
  {
    id: 11,
    name: "Argentina Home Jersey 2025",
    team: "Argentina",
    category: "Football National",
    sport: "Football",
    image: Argentina,
    price: 2599,
    oldPrice: 3299,
    rating: 4.9,
  },
  {
    id: 12,
    name: "Brazil Home Jersey 2025",
    team: "Brazil",
    category: "Football National",
    sport: "Football",
    image: Brasil,
    price: 2599,
    oldPrice: 3299,
    rating: 4.9,
  },
  {
    id: 13,
    name: "France Home Jersey 2025",
    team: "France",
    category: "Football National",
    sport: "Football",
    image: France,
    price: 2599,
    oldPrice: 3299,
    rating: 4.8,
  },
  {
    id: 14,
    name: "Germany Home Jersey 2025",
    team: "Germany",
    category: "Football National",
    sport: "Football",
    image: Germany,
    price: 2599,
    oldPrice: 3299,
    rating: 4.8,
  },
  {
    id: 15,
    name: "Portugal Home Jersey 2025",
    team: "Portugal",
    category: "Football National",
    sport: "Football",
    image: Portugal,
    price: 2599,
    oldPrice: 3299,
    rating: 4.8,
  },
  {
    id: 16,
    name: "Spain Home Jersey 2025",
    team: "Spain",
    category: "Football National",
    sport: "Football",
    image: Spain,
    price: 2599,
    oldPrice: 3299,
    rating: 4.8,
  },
  {
    id: 17,
    name: "England Home Jersey 2025",
    team: "England",
    category: "Football National",
    sport: "Football",
    image: EnglandFootball,
    price: 2599,
    oldPrice: 3299,
    rating: 4.8,
  },
  {
    id: 18,
    name: "Norway Home Jersey 2025",
    team: "Norway",
    category: "Football National",
    sport: "Football",
    image: Norway,
    price: 2499,
    oldPrice: 3199,
    rating: 4.7,
  },
  {
    id: 19,
    name: "Scotland Home Jersey 2025",
    team: "Scotland",
    category: "Football National",
    sport: "Football",
    image: Scotland,
    price: 2499,
    oldPrice: 3199,
    rating: 4.6,
  },
  {
    id: 20,
    name: "USA Home Jersey 2025",
    team: "USA",
    category: "Football National",
    sport: "Football",
    image: USAFootball,
    price: 2499,
    oldPrice: 3199,
    rating: 4.7,
  },

  // ========== IPL ==========
  {
    id: 21,
    name: "Chennai Super Kings Jersey 2025",
    team: "CSK",
    category: "IPL",
    sport: "Cricket",
    image: CSK,
    price: 1899,
    oldPrice: 2499,
    rating: 4.9,
  },
  {
    id: 22,
    name: "Mumbai Indians Jersey 2025",
    team: "Mumbai Indians",
    category: "IPL",
    sport: "Cricket",
    image: MI,
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
  },
  {
    id: 23,
    name: "Royal Challengers Bengaluru Jersey 2025",
    team: "RCB",
    category: "IPL",
    sport: "Cricket",
    image: RCB,
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
  },
  {
    id: 24,
    name: "Kolkata Knight Riders Jersey 2025",
    team: "KKR",
    category: "IPL",
    sport: "Cricket",
    image: KKR,
    price: 1899,
    oldPrice: 2499,
    rating: 4.8,
  },
  {
    id: 25,
    name: "Rajasthan Royals Jersey 2025",
    team: "Rajasthan Royals",
    category: "IPL",
    sport: "Cricket",
    image: RR,
    price: 1799,
    oldPrice: 2399,
    rating: 4.7,
  },
  {
    id: 26,
    name: "Sunrisers Hyderabad Jersey 2025",
    team: "SRH",
    category: "IPL",
    sport: "Cricket",
    image: SRH,
    price: 1799,
    oldPrice: 2399,
    rating: 4.7,
  },
  {
    id: 27,
    name: "Delhi Capitals Jersey 2025",
    team: "Delhi Capitals",
    category: "IPL",
    sport: "Cricket",
    image: DC,
    price: 1799,
    oldPrice: 2399,
    rating: 4.6,
  },
  {
    id: 28,
    name: "Punjab Kings Jersey 2025",
    team: "Punjab Kings",
    category: "IPL",
    sport: "Cricket",
    image: PBKS,
    price: 1799,
    oldPrice: 2399,
    rating: 4.6,
  },
  {
    id: 29,
    name: "Gujarat Titans Jersey 2025",
    team: "Gujarat Titans",
    category: "IPL",
    sport: "Cricket",
    image: GT,
    price: 1799,
    oldPrice: 2399,
    rating: 4.7,
  },
  {
    id: 30,
    name: "Lucknow Super Giants Jersey 2025",
    team: "LSG",
    category: "IPL",
    sport: "Cricket",
    image: LSG,
    price: 1799,
    oldPrice: 2399,
    rating: 4.6,
  },

  // ========== CRICKET NATIONAL ==========
  {
    id: 31,
    name: "India ODI Jersey 2025",
    team: "India",
    category: "Cricket National",
    sport: "Cricket",
    image: IND,
    price: 2299,
    oldPrice: 2999,
    rating: 5.0,
  },
  {
    id: 32,
    name: "Australia ODI Jersey 2025",
    team: "Australia",
    category: "Cricket National",
    sport: "Cricket",
    image: AUS,
    price: 2299,
    oldPrice: 2999,
    rating: 4.9,
  },
  {
    id: 33,
    name: "England ODI Jersey 2025",
    team: "England",
    category: "Cricket National",
    sport: "Cricket",
    image: ENG,
    price: 2199,
    oldPrice: 2899,
    rating: 4.8,
  },
  {
    id: 34,
    name: "Afghanistan ODI Jersey 2025",
    team: "Afghanistan",
    category: "Cricket National",
    sport: "Cricket",
    image: AFG,
    price: 2099,
    oldPrice: 2799,
    rating: 4.7,
  },
  {
    id: 35,
    name: "New Zealand ODI Jersey 2025",
    team: "New Zealand",
    category: "Cricket National",
    sport: "Cricket",
    image: NZ,
    price: 2199,
    oldPrice: 2899,
    rating: 4.8,
  },
  {
    id: 36,
    name: "South Africa ODI Jersey 2025",
    team: "South Africa",
    category: "Cricket National",
    sport: "Cricket",
    image: SA,
    price: 2199,
    oldPrice: 2899,
    rating: 4.8,
  },
  {
    id: 37,
    name: "Sri Lanka ODI Jersey 2025",
    team: "Sri Lanka",
    category: "Cricket National",
    sport: "Cricket",
    image: SL,
    price: 2099,
    oldPrice: 2799,
    rating: 4.7,
  },
  {
    id: 38,
    name: "West Indies ODI Jersey 2025",
    team: "West Indies",
    category: "Cricket National",
    sport: "Cricket",
    image: WI,
    price: 2099,
    oldPrice: 2799,
    rating: 4.7,
  },
  {
    id: 39,
    name: "Nepal ODI Jersey 2025",
    team: "Nepal",
    category: "Cricket National",
    sport: "Cricket",
    image: NP,
    price: 1999,
    oldPrice: 2699,
    rating: 4.6,
  },
  {
    id: 40,
    name: "Netherlands ODI Jersey 2025",
    team: "Netherlands",
    category: "Cricket National",
    sport: "Cricket",
    image: NL,
    price: 1999,
    oldPrice: 2699,
    rating: 4.6,
  },
];

export default jerseys;