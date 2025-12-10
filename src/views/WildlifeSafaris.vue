<template>
  <div class="wildlife-page">

    <div class="page">
      <div class="overlay"></div>
      <div class="content">
        <h1 class="title">Kenya’s Wildlife & Safaris</h1>
        <p class="subtitle">Where the Earth Still Roars</p>
        <p class="quote">“In the heartbeat of Africa, every creature has a throne.”</p>
      </div>
    </div>

    <v-container class="py-20 px-6 max-w-7xl">

      <div class="intro-section text-center mb-20">
        <h1 class="display-1 font-weight-black text-amber-900 mb-8">
          <span class="underline-gold">This Is Not a Safari.<br>This Is a Pilgrimage.</span>
        </h1>
        <p class="text-h4 font-italic text-brown-darken-4 opacity-90 leading-relaxed max-w-4xl mx-auto">
          Kenya is not just home to animals.<br>
          Kenya is the place where the world learned to walk, to hunt, to dream.<br>
          Here, lions still rule. Elephants still remember. And the land still speaks.
        </p>
      </div>

      <!-- SECTION 1: THE BIG FIVE — KINGS OF THE SAVANNA -->
      <div class="section-title text-center mb-16">
        <h2 class="text-h2 font-weight-black text-amber-900">THE BIG FIVE</h2>
        <p class="text-h5 text-brown mt-4">The Legends That Made Safari Famous</p>
      </div>

      <!-- LION -->
      <v-row class="mb-20 align-center animal-entry">
        <v-col cols="12" md="6">
          <v-carousel height="600" cycle interval="5000" show-arrows class="rounded-xl shadow-2xl">
            <v-carousel-item src="public/destinations/wildlifesafaris/lions/jeff-lemond-bwr9XpsYK98-unsplash.jpg" cover />
            <v-carousel-item src="public/destinations/wildlifesafaris/lions/lion chasing prey.png" cover />
            <v-carousel-item src="public/destinations/wildlifesafaris/lions/michael-starkie-7nRiGv33d2g-unsplash.jpg" cover />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="animal-name">1. Simba – The Lion</h3>
          <p class="animal-text">
            King of the African savanna. Ruler of the pride. Voice that shakes the earth at dawn.<br>
            In Maasai Mara, prides of 30+ lions still hunt under the same acacias their ancestors did.<br>
            <strong>Did you know?</strong> Kenya has some of the largest lion coalitions in Africa — brothers who hunt together like warriors.
            <em>Listen at night. When a lion roars, even the stars go quiet.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="gold-divider" />

      <!-- ELEPHANT -->
      <v-row class="mb-20 align-center animal-entry">
        <v-col cols="12" md="6" order-md="2">
          <v-img src="public/destinations/wildlifesafaris/elephant.png" height="600" cover class="rounded-xl shadow-2xl" />
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="animal-name">2. Tembo – The Elephant</h3>
          <p class="animal-text">
            The architect of the savanna. Gentle giant with a memory longer than time.<br>
            Amboseli’s super-tuskers carry ivory so long it touches the ground — living legends walking.<br>
            They mourn their dead. They greet with trunk hugs. They remember every human who ever hurt them.
            <em>Stand near one and feel the ground tremble — that’s Africa saying hello.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="gold-divider" />

      <!-- LEOPARD -->
      <v-row class="mb-20 align-center animal-entry">
        <v-col cols="12" md="6">
          <v-carousel height="600" cycle interval="5000" show-arrows class="rounded-xl shadow-2xl">
            <v-carousel-item src="public/destinations/wildlifesafaris/chui.png" />
            <v-carousel-item src="public/destinations/wildlifesafaris/chui2.png" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="animal-name">3. Chui – The Leopard</h3>
          <p class="animal-text">
            Ghost of the night. Master of camouflage. Most elusive of the Big Five.<br>
            Samburu’s leopards still hunt in daylight — bold, beautiful, and completely unbothered by humans.
            <em>Look up in the trees — that shadow watching you? That’s royalty.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="gold-divider" />

      <!-- BUFFALO -->
      <v-row class="mb-20 align-center animal-entry">
        <v-col cols="12" md="6" order-md="2">
          <v-img src="public/destinations/wildlifesafaris/lions/buffalo.png" height="600" cover class="rounded-xl shadow-2xl" />
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="animal-name">4. Nyati – The Buffalo</h3>
          <p class="animal-text">
            The black death. The widowmaker. The one animal even lions fear in numbers.<br>
            Old dagga boys with horns like battle axes stare you down like they own the place — because they do.
            <em>Respect the stare. It has ended more safaris than drought.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="gold-divider" />

      <!-- RHINO -->
      <v-row class="mb-20 align-center animal-entry">
        <v-col cols="12" md="6">
          <v-img src="public/destinations/wildlifesafaris/rhino.png" height="600" cover class="rounded-xl shadow-2xl" />
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="animal-name">5. Kifaru – The Rhino</h3>
          <p class="animal-text">
            Living dinosaur. Walking fortress. One of the most endangered animals on Earth.<br>
            Kenya fought wars to save them — and won. Ol Pejeta is now home to the last two northern white rhinos on the planet.
            <em>When you see a rhino, you’re looking at a miracle that refused to die.</em>
          </p>
        </v-col>
      </v-row>

      <div class="section-title text-center mb-16 mt-32">
        <h2 class="text-h2 font-weight-black text-amber-900">THE CATS OF KENYA</h2>
        <p class="text-h5 text-brown">Silent Hunters. Living Shadows.</p>
      </div>

      <!-- CHEETAH -->
      <v-row class="mb-20 align-center animal-entry">
        <v-col cols="12" md="6" order-md="2">
          <v-carousel height="600" cycle interval="4000" show-arrows class="rounded-xl shadow-2xl">
            <v-carousel-item src="public/destinations/wildlifesafaris/chui2.png" />
            <v-carousel-item src="public/destinations/wildlifesafaris/chui2.png" />
          </v-carousel>
        </v-col>
        <v-col cols="12" md="6" order-md="1">
          <h3 class="animal-name">Duma – The Cheetah</h3>
          <p class="animal-text">
            Fastest land animal alive. Tears on their face like black war paint.<br>
            Maasai Mara is the best place on Earth to see cheetah hunts — mothers teaching cubs at 120km/h.
            <em>Watch one run and understand why wind was created.</em>
          </p>
        </v-col>
      </v-row>
      <v-divider class="gold-divider" />


      <div class="section-title text-center mb-16 mt-32">
        <h2 class="text-h2 font-weight-black text-amber-900">THE ELEGANT PREY</h2>
        <p class="text-h5 text-brown">They Run. They Leap. They Survive.</p>
      </div>

      <div class="section-title text-center mb-16 mt-32">
        <h2 class="text-h2 font-weight-black text-amber-900">RIVERS OF LIFE</h2>
        <p class="text-h5 text-brown">Where Water Means Survival</p>
      </div>
      <div class="section-title text-center mb-16 mt-32">
        <h2 class="text-h2 font-weight-black text-amber-900">THE SILENT HUNTERS</h2>
        <p class="text-h5 text-brown">Even Plants Hunt in Kenya</p>
      </div>
      <!-- FLORA-->
<div class="section-title text-center mb-20 mt-48">
  <h1 class="text-h1 font-weight-black text-green-900" style="font-size: 4.5rem; letter-spacing: 6px;">
    THE FLORA OF KENYA
  </h1>
  <p class="text-h4 text-green-darken-4 mt-6 opacity-95 leading-loose">
    Even the Plants Hunt Here
  </p>
</div>

<div class="flora-intro text-center mb-20">
  <p class="text-h5 max-w-5xl mx-auto leading-relaxed font-italic text-green-800">
    Kenya is not just lions and elephants.<br>
    In the shadows of the Aberdares, along the misty slopes of Mount Kenya, and in the hidden valleys of the Rift — the plants themselves have become predators.<br>
    <strong>Here, even the grass can bite.</strong>
  </p>
</div>

<v-row class="mb-24 align-center flora-entry fade-in">
  <v-col cols="12" md="6">
    <v-carousel height="650" cycle interval="6000" show-arrows class="rounded-xl shadow-2xl">
      <v-carousel-item src="public/destinations/wildlifesafaris/nepenthes2.png" cover />
      <v-carousel-item src="public/destinations/wildlifesafaris/nepenthes.png" cover />
      <v-carousel-item src="public/destinations/wildlifesafaris/nepenthes2.png" cover />
    </v-carousel>
  </v-col>
  <v-col cols="12" md="6">
    <h2 class="flora-name">1. Nepenthes (Monkey Cups)</h2>
    <p class="flora-text">
      High in the misty forests of Aberdare and Mount Kenya grows one of Africa’s rarest killers.<br>
      These tropical pitcher plants lure insects — and sometimes small frogs — into their slippery, acid-filled cups.<br>
      The lid closes slowly. The prey drowns. The plant drinks.<br>
      Local Kikuyu call them “devil’s cups” — because even monkeys fall in.
      <em>Beauty that kills without moving.</em>
    </p>
  </v-col>
</v-row>
<v-divider class="jungle-divider" />

<!-- 2. DROsera (Sundews) — Bog Warriors -->
<v-row class="mb-24 align-center flora-entry fade-in">
  <v-col cols="12" md="6" order-md="2">
    <v-img src="public/destinations/wildlifesafaris/drosera.png" height="650" cover class="rounded-xl shadow-2xl" />
  </v-col>
  <v-col cols="12" md="6" order-md="1">
    <h2 class="flora-name">2. Drosera – The Sundews</h2>
    <p class="flora-text">
      Tiny glittering jewels of death in the highland bogs.<br>
      Each leaf covered in sticky, glistening tentacles that sparkle like morning dew — but they are glue traps.<br>
      An insect lands. The tentacles fold in like a slow-motion hug. The plant digests its victim alive.<br>
      In Cherangani Hills and Mau Forest, entire meadows shimmer with these silent assassins.
      <em>They don’t chase. They wait. And they always win.</em>
    </p>
  </v-col>
</v-row>
<v-divider class="jungle-divider" />

<!-- 3. GENLISEA (Corkscrew Plants) — Underground Killers -->
<v-row class="mb-24 align-center flora-entry fade-in">
  <v-col cols="12" md="6">
    <v-img src="public/destinations/wildlifesafaris/genlisea.png" height="650" cover class="rounded-xl shadow-2xl" />
  </v-col>
  <v-col cols="12" md="6">
    <h2 class="flora-name">3. Genlisea – The Corkscrew Plants</h2>
    <p class="flora-text">
      You will never see them hunt.<br>
      Beneath the soil, they grow Y-shaped traps like underground lobster pots.<br>
      Microscopic organisms swim in — but the backward-facing hairs make escape impossible.<br>
      Found in the wet grasslands of the Rift Valley — silent, invisible, lethal.
      <em>The only plant that hunts like an eel.</em>
    </p>
  </v-col>
</v-row>
<v-divider class="jungle-divider" />

<!-- 4. UTRICULARIA (Bladderworts) — Vacuum Killers -->
<v-row class="mb-24 align-center flora-entry fade-in">
  <v-col >
    4. Utricularia – The Bladderworts
    <v-carousel height="650" cycle interval="5000" show-arrows class="rounded-xl shadow-2xl">
      <v-carousel-item src="public/destinations/wildlifesafaris/utricularia.png" />
      <v-carousel-item src="public/destinations/wildlifesafaris/utricularia2.png" />
    </v-carousel>
  </v-col>
  <v-col >
    <h2 class="flora-name">4. Utricularia – The Bladderworts</h2>
    <p class="flora-text">
      The fastest predator on Earth — and it’s a plant.<br>
      Tiny underwater bladders with trigger hairs. When a water flea brushes them — BAM — vacuum suction in 1/1000th of a second.<br>
      Found floating in Lake Naivasha and highland pools.<br>
      <strong>Faster than a Venus flytrap. Deadlier than a cobra.</strong>
      <em>Even the water is not safe in Kenya.</em>
    </p>
  </v-col>
</v-row>
<v-divider class="jungle-divider" />

<!-- NON-CARNIVOROUS -->
<div class="section-title text-center mb-16 mt-32">
  <h2 class="text-h2 font-weight-black text-green-900">THE GENTLE GIANTS OF FLORA</h2>
</div>

<!-- 5. BAOBAB — The Tree of Life -->
<v-row class="mb-24 align-center flora-entry fade-in">
  <v-col cols="12" md="6">
    <v-img src="public/destinations/wildlifesafaris/baobab.png" height="650" cover class="rounded-xl shadow-2xl" />
  </v-col>
  <v-col cols="12" md="6">
    <h2 class="flora-name">5. Mbuyu – The Baobab</h2>
    <p class="flora-text">
      The upside-down tree. Some are over 2,000 years old.<br>
      Elephants eat the bark. Baboons sleep in the branches. Humans drink the fruit that tastes like sherbet.<br>
      In Tsavo, one baobab is so big you can sleep inside it.
      <em>“God planted them upside down and forgot to pull them out.”</em>
    </p>
  </v-col>
</v-row>
<v-divider class="jungle-divider" />

<!-- 6. ACACIA — The Whistle Thorn -->
<v-row class="mb-24 align-center flora-entry fade-in">
  <v-col cols="12" md="6" order-md="2">
    <v-img src="public/destinations/wildlifesafaris/acacia.png" height="650" cover class="rounded-xl shadow-2xl" />
  </v-col>
  <v-col cols="12" md="6" order-md="1">
    <h2 class="flora-name">6. Acacia – The Whistle Thorn</h2>
    <p class="flora-text">
      The tree that fights back.<br>
      Hollow thorns house biting ants. When giraffe bite the leaves — the tree releases a chemical that makes the leaves taste bad AND warns nearby trees.<br>
      The wind through the thorns makes a whistling sound — hence the name.
      <em>Even the trees have bodyguards in Kenya.</em>
    </p>
  </v-col>
</v-row>
<v-divider class="jungle-divider" />

<!-- 7. FIG TREES — Strangler Kings -->
<v-row class="mb-24 align-center flora-entry fade-in">
   <v-col cols="12" md="12">
    <h2 class="flora-name">7. Wild Fig Trees</h2>
    <p class="flora-text">
      Start life in the canopy, send roots down like ropes, slowly strangle the host tree.<br>
      In Kakamega Forest, some figs are so big they have caves inside.<br>
      Bats, monkeys, hornbills, and eagles all live in one tree.
      <em>One tree. An entire ecosystem.</em>
    </p>
  </v-col>
  <v-col cols="12" md="12">
    <v-carousel height="650" cycle interval="5000" show-arrows class="rounded-xl shadow-2xl">
      <v-carousel-item src="public/destinations/wildlifesafaris/fig1.png" />
      <v-carousel-item src="public/destinations/wildlifesafaris/fig.png" />
    </v-carousel>
  </v-col>
 
</v-row>
<v-divider class="jungle-divider" />

<!-- 8. YELLOW FEVER TREE — The Fever Tree -->
<v-row class="mb-24 align-center flora-entry fade-in">
  <v-col>
    <h2 class="flora-name">8. Yellow Fever Tree</h2>
    <p class="flora-text">
      Bright lime-green bark that glows at sunset.<br>
      Early explorers thought they caused malaria — actually, they grow where mosquitoes breed.<br>
      In Lake Nakuru and Amboseli, entire forests of them look like they’re lit from within.
      <em>“The tree doesn’t give fever — it just knows where death hides.”</em>
    </p>
  </v-col>
</v-row>

<div class="final-flora-section py-40 text-center">
  <h1 class="final-flora-title">
    In Kenya<br>
    <span class="text-green-800">Even the Plants Are Warriors</span>
  </h1>
  <p class="final-flora-quote">
    “From the tiniest sundew that traps a fly<br>
    to the ancient baobab that outlives empires —<br>
    every leaf, every root, every thorn<br>
    is part of the same wild heartbeat.”
  </p>
  <v-btn
    size="x-large"
    color="green darken-4"
    dark
    class="mt-20 rounded-pill px-32 text-h3 font-weight-black py-8"
    to="/tour-companies"
  >
    EXPERIENCE THE LIVING JUNGLE
  </v-btn>
  <p class="karibu-flora mt-24">Karibu Kenya • Where Even the Plants Hunt</p>
</div>

      <!-- SAFARIS IN KENYA  -->
<div class="section-title text-center mb-20 mt-40">
  <h1 class="text-h1 font-weight-black text-amber-900" style="font-size: 4rem; letter-spacing: 4px;">
    KENYA SAFARIS
  </h1>
  <p class="text-h4 text-brown-darken-4 mt-6 opacity-90">
    10 Legendary Destinations Where the Wild Writes Its Own Story
  </p>
</div>

<!-- 1. MAASAI MARA — The Crown Jewel -->
<v-row class="mb-24 align-center safari-entry fade-in">
  <
  <v-col >
    <h2 class="safari-name">1. Maasai Mara National Reserve</h2>
    <p class="safari-text">
      The greatest wildlife spectacle on Earth.<br>
      Home of the Great Migration — 2 million wildebeest thundering across the Mara River while crocodiles wait like ancient gods.<br>
      Big cats everywhere. Lion prides of 30+. Cheetah sprints. Leopard in every sausage tree.<br>
      Hot air balloon at dawn over endless golden plains — this is the safari that lives in your soul forever.
      <em>“If there is one place you must see before you die — this is it.”</em>
    </p>
    
  </v-col>
</v-row>
<v-divider class="gold-divider-thick" />

<!-- 2. AMBOSELI — Land of Giants -->
<v-row class="mb-24 align-center safari-entry fade-in">
 
  <v-col >
    <h2 class="safari-name">2. Amboseli National Park</h2>
    <p class="safari-text">
      The classic postcard of Africa.<br>
      Kilimanjaro rising like a god behind endless swamps filled with hundreds of elephants.<br>
      Super-tuskers with ivory touching the ground. Lion prides hunting in the shadow of the mountain.<br>
      The best place on Earth to photograph elephants with the tallest free-standing mountain in the world behind them.
      <em>“When the clouds part and Kili appears — even the elephants look up in respect.”</em>
    </p>
    <div class="safari-highlights">
      <v-chip color="blue-grey darken-4" dark>Kilimanjaro Views</v-chip>
      <v-chip color="red darken-3" dark>Super Tuskers</v-chip>
      <v-chip color="green darken-2" dark>Swamp Elephants</v-chip>
    </div>
  </v-col>
</v-row>
<v-divider class="gold-divider-thick" />

<!-- 3. TSAVO — The Red Wilderness -->
<v-row class="mb-24 align-center safari-entry fade-in">

  <v-col >
    <h2 class="safari-name">3. Tsavo East & West — The Red Wilderness</h2>
    <p class="safari-text">
      Largest protected area in Kenya. Red dust elephants. Man-eating lions of Tsavo (yes, the real ones).<br>
      Lava flows, underground rivers, Lugard Falls, Mzima Springs with hippos and crocs under crystal water.<br>
      Vast. Wild. Untamed. This is where real adventure lives.
      <em>“The land is red from the blood of warriors and the dust of elephants.”</em>
    </p>
    <div class="safari-highlights">
      <v-chip color="red darken-4" dark>Red Elephants</v-chip>
      <v-chip color="deep-orange" dark>Man-Eaters Legend</v-chip>
      <v-chip color="blue" dark>Mzima Springs</v-chip>
    </div>
  </v-col>
</v-row>
<v-divider class="gold-divider-thick" />

<!-- 4. SAMBURU — The Wild North -->
<v-row class="mb-24 align-center safari-entry fade-in">
  
  <v-col >
    <h2 class="safari-name">4. Samburu National Reserve</h2>
    <p class="safari-text">
      The land of rare beauty. Home of the Samburu Special Five: Grevy’s zebra, reticulated giraffe, Somali ostrich, gerenuk, beisa oryx.<br>
      Leopards in daylight. Lions with black manes. Elephants drinking from the Ewaso Nyiro River.<br>
      Warrior culture meets wildlife — this is raw, untouched Africa.
      <em>“Here, even the animals wear jewelry.”</em>
    </p>
  </v-col>
</v-row>
<v-divider class="gold-divider-thick" />

<!-- 5. LAIKIPIA — The New Frontier -->
<v-row class="mb-24 align-center safari-entry fade-in">

  <v-col >
    <h2 class="safari-name">5. Laikipia Plateau</h2>
    <p class="safari-text">
      Kenya’s conservation success story. Second highest wildlife density after Mara.<br>
      Black & white rhinos. Wild dogs. Half of Kenya’s black rhinos live here.<br>
      Horseback safaris among giraffe. Night drives with aardvark and pangolin.<br>
      This is the future of safari — and it’s winning.
      <em>“Where conservation meets luxury — and wins.”</em>
    </p>
  </v-col>
</v-row>
<v-divider class="gold-divider-thick" />

<!-- 6. LAKE NAKURU — A Million Flamingos -->
<v-row class="mb-24 align-center safari-entry fade-in">
  <v-col >
    <h2 class="safari-name">6. Lake Nakuru National Park</h2>
    <p class="safari-text">
      The pink lake. Once home to 2 million flamingos — a moving carpet of pink.<br>
      Tree-climbing lions. Black & white rhinos. Rothschild giraffes.<br>
      The only place in Kenya where you can see both species of rhino in one day.
      <em>“Nature painted with a flamingo brush.”</em>
    </p>
  </v-col>
</v-row>
<v-divider class="gold-divider-thick" />

<!-- 7. MERU — The Complete Wilderness -->
<v-row class="mb-24 align-center safari-entry fade-in">
 
  <v-col >
    <h2 class="safari-name">7. Meru National Park</h2>
    <p class="safari-text">
      Elsa the lioness was released here. Born Free was filmed here.<br>
      13 rivers. Palm forests. Rhino sanctuary. Few tourists.<br>
      This is the park Hemingway wrote about — wild, untouched, magical.
      <em>“The closest thing to Eden left on Earth.”</em>
    </p>
  </v-col>
</v-row>
<v-divider class="gold-divider-thick" />

<!-- 8. ABERDARE — Misty Mountains -->
<v-row class="mb-24 align-center safari-entry fade-in">
  
  <v-col>
    <h2 class="safari-name">8. Aberdare National Park</h2>
    <p class="safari-text">
      Tree hotels. Waterholes lit at night. Elephants drinking while you sleep.<br>
      Black rhinos. Bongo antelopes. Waterfalls. Moorlands.<br>
      Queen Elizabeth II became Queen here (Treetops Hotel, 1952).
      <em>“Where royalty meets the wild — literally.”</em>
    </p>
  </v-col>
</v-row>
<v-divider class="gold-divider-thick" />

<!-- 9. HELL’S GATE — Walk With Giants -->
<v-row class="mb-24 align-center safari-entry fade-in">
  
  <v-col>
    <h2 class="safari-name">9. Hell’s Gate National Park</h2>
    <p class="safari-text">
      The only park in Kenya where you can WALK or CYCLE among zebra, giraffe, and buffalo.<br>
      Towering red cliffs. Geothermal steam. Gorges carved by ancient floods.<br>
      Inspired Pride Rock in The Lion King.
      <em>“Where you become part of the herd.”</em>
    </p>
  </v-col>
</v-row>
<v-divider class="gold-divider-thick" />

<!-- 10. DIANI BEACH + WASINI + KISITE — Marine Safari -->
<v-row class="mb-24 align-center safari-entry fade-in">

  <v-col>
    <h2 class="safari-name">10. The Indian Ocean Safari</h2>
    <p class="safari-text">
      Dolphins dancing in your bow wave. Whale sharks (seasonal). Coral gardens.<br>
      Wasini Island dhow cruises. Kisite Mpunguti Marine Park.<br>
      Swim with turtles. Eat fresh lobster on a sandbank.
      <em>“The safari doesn’t end on land — it continues under the waves.”</em>
    </p>
  </v-col>
</v-row>
      <div class="section-title text-center mb-16 mt-40">
        <h2 class="text-h2 font-weight-black text-amber-900">THE GREATEST SAFARI DESTINATIONS</h2>
        <p class="text-h5 text-brown">Where These Legends Live</p>
      </div>

      <div class="final-wild-section py-32 text-center">
        <h2 class="final-title">
          Kenya Is Not a Destination<br>
          <span class="text-amber-700">It Is a Calling</span>
        </h2>
        <p class="final-quote">
          “Come not to see animals.<br>
          Come to remember who you are.”
        </p>
       
        <p class="karibu mt-20">Karibu Kenya • The Wild Is Waiting</p>
      </div>

    </v-container>

    <!-- FOOTER -->
    <footer class="wild-footer">
      <p class="text-h5">© 2025 Safari Guide Kenya — Guardians of the Wild</p>
      <div class="contact">
        <p>+254 113 268 956 • safari@safariguide.co.ke</p>
      </div>
      <p class="highlight">Harambee • One Heartbeat with the Wild</p>
    </footer>
  </div>
</template>

<style scoped>
.wildlife-page {
  background: linear-gradient(to bottom, #fff8e1, #ffeb3b 3%, #fff59d 97%, #fff8e1);
  min-height: 100vh;
  font-family: 'Georgia', serif;
  overflow-x: hidden;
}

.page {
  position: relative;
  height: 100vh;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)),
              url('public/wildlife/safari.jpg') center/cover no-repeat fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.title {
  font-size: 5rem;
  font-weight: 900;
  letter-spacing: 6px;
  text-shadow: 6px 6px 30px rgba(0,0,0,0.9);
}

.subtitle {
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 10px;
  margin-top: 1rem;
}

.quote {
  font-size: 2rem;
  font-style: italic;
  margin-top: 3rem;
  opacity: 0.9;
}

.underline-gold {
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
}

.underline-gold::after {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 0;
  width: 300px;
  height: 8px;
  background: linear-gradient(90deg, transparent, #FFD700, transparent);
  transform: translateX(-50%);
  border-radius: 4px;
}

.section-title h2 {
  font-size: 3.5rem;
  text-shadow: 3px 3px 15px rgba(0,0,0,0.2);
}

.animal-name {
  font-size: 2.5rem;
  font-weight: 900;
  color: #8B4513;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.15);
}
.flora-name {
  font-size: 3.2rem;
  font-weight: 900;
  color: #1B5E20;
  text-shadow: 4px 4px 15px rgba(0,0,0,0.25);
  letter-spacing: 2px;
}

.flora-text {
  font-size: 1.55rem;
  line-height: 2.5;
  background: rgba(240,255,240,0.97);
  padding: 4.5rem;
  border-radius: 40px;
  box-shadow: 0 30px 80px rgba(27,94,32,0.2);
  backdrop-filter: blur(12px);
  border: 4px solid rgba(27,94,32,0.25);
}

.flora-text em {
  display: block;
  margin-top: 2.5rem;
  font-size: 1.7rem;
  color: #2E7D32;
  font-weight: bold;
  font-style: italic;
}

.jungle-divider {
  height: 12px;
  background: linear-gradient(90deg, transparent, #4CAF50, #2E7D32, #1B5E20, #4CAF50, transparent);
  border: none;
  margin: 9rem 0;
  border-radius: 6px;
}

.final-flora-section {
  background: linear-gradient(135deg, rgba(76,175,80,0.15), rgba(27,94,32,0.25));
  border-radius: 60px;
  padding: 12rem 4rem;
  margin: 14rem 0;
  border: 6px solid #2E7D32;
}

.final-flora-title {
  font-size: 4.5rem;
  color: #1B5E20;
  line-height: 1.1;
  text-shadow: 6px 6px 25px rgba(0,0,0,0.4);
}

.final-flora-quote {
  font-size: 3.2rem;
  font-style: italic;
  color: #2E7D32;
  line-height: 2.2;
  margin: 5rem 0;
}

.karibu-flora {
  font-size: 4.5rem;
  font-weight: bold;
  color: #1B5E20;
  font-style: italic;
  text-shadow: 5px 5px 20px rgba(0,0,0,0.5);
}
.safari-name {
  font-size: 3rem;
  font-weight: 900;
  color: #8B4513;
  text-shadow: 4px 4px 15px rgba(0,0,0,0.2);
  letter-spacing: 2px;
}

.safari-text {
  font-size: 1.5rem;
  line-height: 2.4;
  background: rgba(255,255,255,0.96);
  padding: 4rem;
  border-radius: 40px;
  box-shadow: 0 30px 70px rgba(0,0,0,0.18);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(184,134,11,0.3);
}

.safari-text em {
  display: block;
  margin-top: 2.5rem;
  font-size: 1.6rem;
  color: #B8860B;
  font-weight: bold;
  font-style: italic;
}

.safari-highlights {
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
}

.gold-divider-thick {
  height: 10px;
  background: linear-gradient(90deg, transparent, #FFD700, #B8860B, #FFD700, transparent);
  border: none;
  margin: 8rem 0;
}

.final-safari-section {
  background: linear-gradient(135deg, rgba(255,193,7,0.15), rgba(184,134,11,0.25));
  border-radius: 50px;
  padding: 10rem 4rem;
  margin: 12rem 0;
  border: 5px solid #B8860B;
}

.final-safari-title {
  font-size: 4rem;
  color: #654321;
  line-height: 1.1;
  text-shadow: 5px 5px 20px rgba(0,0,0,0.3);
}

.final-safari-quote {
  font-size: 2rem;
  font-style: italic;
  color: #8B4513;
  line-height: 2;
  margin: 4rem 0;
}

.karibu-safari {
  font-size: 4rem;
  font-weight: bold;
  color: #B8860B;
  font-style: italic;
  text-shadow: 4px 4px 15px rgba(0,0,0,0.4);
}

.animal-text {
  font-size: 1.4rem;
  line-height: 2.4;
  background: rgba(255,255,255,0.95);
  padding: 3rem;
  border-radius: 30px;
  box-shadow: 0 20px 50px rgba(0,0,0,0.15);
  backdrop-filter: blur(8px);
  border: 2px solid rgba(139,69,19,0.2);
}

.animal-text em {
  display: block;
  margin-top: 2rem;
  font-size: 1.3rem;
  color: #B8860B;
  font-style: italic;
  font-weight: bold;
}

.gold-divider {
  height: 6px;
  background: linear-gradient(90deg, transparent, #FFD700, #B8860B, #FFD700, transparent);
  border: none;
  margin: 6rem 0;
}

.final-wild-section {
  background: linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,193,7,0.2));
  border-radius: 40px;
  padding: 8rem 3rem;
  margin: 10rem 0;
  border: 3px solid #B8860B;
}

.final-title {
  font-size: 4rem;
  color: #654321;
  line-height: 1.2;
}

.final-quote {
  font-size: 2.5rem;
  font-style: italic;
  color: #8B4513;
  line-height: 2;
  margin: 3rem 0;
}

.karibu {
  font-size: 3rem;
  font-weight: bold;
  color: #B8860B;
  font-style: italic;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.3);
}

.wild-footer {
  background: linear-gradient(135deg, #1b5e20, #2e7d32, #388e3c, #4caf50);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
}

.highlight {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 2rem;
  color: #fff59d;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
}

.animal-entry {
  opacity: 0;
  animation: fadeInUp 1.2s ease-out forwards;
}
@keyframes fadeInUp {
  to { opacity: 1; transform: translateY(0); }
}
</style>