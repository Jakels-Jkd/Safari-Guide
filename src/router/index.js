import { createRouter, createWebHistory } from 'vue-router'




import Home from '@/components/Home.vue'
import Destinations from '@/components/Destinations.vue'
import Hotels from '@/components/Hotels.vue'
import TourCompanies from '@/components/TourCompanies.vue'
import SignUp from '@/components/SignUp.vue'
import LogIn from '@/components/LogIn.vue'
import UserProfile from '@/components/UserProfile.vue'
import SandyBeaches from '@/components/SandyBeaches.vue'
import Cultures from '@/components/Cultures.vue'
import HistoricalSites from '@/components/HistoricalSites.vue'
import WildlifeSafaris from '@/components/WildlifeSafaris.vue'
import Sceneries from '@/components/Sceneries.vue'
import FAQs from '@/components/FAQs.vue'
import TravelBlog from '@/components/TravelBlog.vue'
import IslandsMarineAttractions from '@/components/IslandsMarineAttractions.vue'
import lakesWestlands from '@/components/LakesWestlands.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
     {
      name:"Home",
      path:"/",
    component: Home
     },
     {
      name:"Destinations",
      path:"/destinations",
      component:Destinations
     },
     {
      name:"hotels",
      path:"/hotels",
      component: Hotels
     },
     {
      name:"SignUp",
      path:"/signup",
      component:SignUp
     },
     {
      name:"LogIn",
      path:"/login",
      component:LogIn
     },
     {
      name:"UserProfile",
      path:"/userprofile",
      component:UserProfile
     },
     {
      name:"SandyBeaches",
      path:"/sandybeaches",
      component:SandyBeaches
     },
     {
      name:"Cultures",
      path:"/cultures",
      component:Cultures
     },
          {
      name:"HistoricalSites",
      path:"/historicalsites",
      component:HistoricalSites
     },
          {
      name:"TourCompanies",
      path:"/tourcompanies",
      component:TourCompanies
     },
          {
      name:"WIldlifeSafaris",
      path:"/wildlifesafaris",
      component:WildlifeSafaris
     },
          {
      name:"Sceneries",
      path:"/sceneries",
      component:Sceneries
     },
     {
      name:"FAQs",
      path:"/faqs",
      component:FAQs
     },
     {
      name:"TravelBlog",
      path:"/travelblog",
      component:TravelBlog
     },
     {
      name:"IslandsMarineAttractions",
      path:"/islandsmarineattractions",
      component:IslandsMarineAttractions
     },
    {
      name:"LakesWestlands",
      path:"/lakeswestlands",
      component:lakesWestlands
    }
  ],
})

export default router

