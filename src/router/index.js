import { createRouter, createWebHistory } from "vue-router";

import Home from "@/components/Home.vue";
import Destinations from "@/components/Destinations.vue";
import Hotels from "@/components/Hotels.vue";          
import HotelItems from "@/views/HotelItems.vue";  
import TourCompanies from "@/components/TourCompanies.vue";
import TourCompaniesDetails from "@/views/TourCompaniesDetails.vue";
import SignUp from "@/components/SignUp.vue";
import LogIn from "@/components/LogIn.vue";
import UserProfile from "@/components/UserProfile.vue";
import Cultures from "@/views/Cultures.vue";
import HistoricalSites from "@/views/HistoricalSites.vue";
import WildlifeSafaris from "@/views/WildlifeSafaris.vue";
import NatureScenicTourism from "@/views/NatureScenicTourism.vue";
import TravelBlog from "@/components/TravelBlog.vue";
import lakesWestlands from "@/views/LakesWestlands.vue";
import ContactUs from "@/components/ContactUs.vue";
import MarineBeachTourism from "@/views/MarineBeachTourism.vue";
import DesertTourism from "@/views/DesertTourism.vue";
import WaterSports from "@/views/waterSports.vue";
import ForestTourism from "@/views/ForestTourism.vue";
import Ecotourism from "@/views/ecotourism.vue";
import Admin from "@/views/Admin.vue";

const routes = [
  {
    name     : "Home",
    path     : "/",
    component: Home
  },
  {
    name     : "Destinations",
    path     : "/destinations",
    component: Destinations
  },
  {
    name     : "Hotels",
    path     : "/hotels",
    component: Hotels
  },
  {
    name     : "HotelItems",
    path     : "/hotels/:id",
    component: HotelItems,
    props    : true
  },
  {
    name     : "TourCompanies",
    path     : "/tourcompanies",
    component: TourCompanies
  },
  {
    name     : "TourCompaniesDetails",
    path     : "/tourcompanies/:id",
    component: TourCompaniesDetails,
    props    : true
  },
  {
    name     : "SignUp",
    path     : "/signup",
    component: SignUp
  },
  {
    name     : "LogIn",
    path     : "/login",
    component: LogIn
  },
  {
    name     : "UserProfile",
    path     : "/userprofile",
    component: UserProfile
  },
  {
    name     : "MarineBeachTourism",
    path     : "/marinebeachtourism",
    component: MarineBeachTourism
  },
  {
    name     : "Cultures",
    path     : "/cultures",
    component: Cultures
  },
  {
    name     : "HistoricalSites",
    path     : "/historicalsites",
    component: HistoricalSites
  },
  {
    name     : "WildlifeSafaris",
    path     : "/wildlifesafaris",
    component: WildlifeSafaris
  },
  {
    name     : "NatureScenicTourism",
    path     : "/naturescenictourism",
    component: NatureScenicTourism
  },
  {
    name     : "TravelBlog",
    path     : "/travelblog",
    component: TravelBlog
  },
  {
    name     : "LakesWestlands",
    path     : "/lakeswestlands",
    component: lakesWestlands
  },
  {
    name     : "Contact Us",
    path     : "/contactus",
    component: ContactUs
  },
  {
    name     : "DesertTourism",
    path     : "/deserttourism",
    component: DesertTourism
  },
  {
    name:'waterSports',
    path:'/watersports',
    component:WaterSports
  },
  {
    name:'forestTourism',
    path:'/forestsandnaturereserves',
    component:ForestTourism
  },
  {
    name:'ecoutourism',
    path:'/ecotourism',
    component:Ecotourism
  },
  {
    name:'Admin',
    path:'/admin',
    component:Admin
  }

];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;