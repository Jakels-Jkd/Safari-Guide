<template>
  <div class="blog-page">

    <div class="page">
      <div class="overlay"></div>
      <div class="content">
        <h1 class="title">TALES FROM THE BUSH</h1>
        <p class="subtitle">Real Stories. Real Kenya. Real Wild.</p>
        <p class="byline">By Safari Guide Kenya Explorers</p>
      </div>
    </div>

    <v-container class="py-20 px-6 max-w-5xl">

      <!-- POST 1: The Night the Lions Came to Camp -->
      <div class="blog-post mb-32">
        <h2 class="post-title">The Night the Lions Came to Camp</h2>
        <p class="post-meta">Maasai Mara • December 2025 • 3 min read</p>

        <v-img src="public/destinations/wildlifesafaris/lions/lion chasing prey.png" height="500" cover class="rounded-xl mb-10 shadow-2xl" />

        <div class="post-body">
          <p>It was 2:17 AM when the first roar hit the tent like a physical force.</p>
          <p>Not the distant rumble you hear on TV. This was close. Inside-your-chest close.</p>
          <p>We were in a mobile camp deep in the Mara Triangle. No fences. No electricity. Just canvas between us and whatever decided to walk through.</p>
          <p>Then came the second roar — deeper, closer, answered by a third from the opposite side. They were circling.</p>
          <p>The Maasai askari outside whispered "Simba" and tapped his spear on the ground — the signal to stay dead still.</p>
          <p>For forty-seven minutes (I counted), three male lions argued over territory right through our camp. One walked so close I could smell him — hot breath, old blood, pure power.</p>
          <p>When they finally moved on, the silence that followed was heavier than the roars.</p>
          <p>That night, I didn’t sleep. I listened. And I understood: we are guests here. The land doesn’t belong to us — we belong to it.</p>
          <p class="post-quote">“In Kenya, you don’t find the wild. The wild finds you.”</p>
        </div>
      </div>
      <v-divider class="blog-divider" />

      <!-- POST 2: Swimming with Whale Sharks in Watamu -->
      <div class="blog-post mb-32">
        <h2 class="post-title">I Swam with a Bus-Sized Gentle Giant</h2>
        <p class="post-meta">Watamu Marine Park • November 2025 • 4 min read</p>

        <v-carousel height="520" cycle interval="6000" show-arrows class="rounded-xl mb-10 shadow-2xl">
          <v-carousel-item src="public/destinations/travelblog/Screenshot 2025-12-10 063300.png" cover />
          <v-carousel-item src="public/destinations/travelblog/Screenshot 2025-12-10 063210.png" cover />
        </v-carousel>

        <div class="post-body">
          <p>The captain cut the engine and whispered “Ndovu wa baharini” — sea elephant.</p>
          <p>Then I saw it. A whale shark longer than our boat, gliding beneath us like a slow-motion submarine.</p>
          <p>We slipped into the water. No cages. No fear. Just me and a 12-meter spotted monster that eats only plankton.</p>
          <p>It turned toward me — mouth wide open like a cave — and I froze. Then it gently banked away, brushing my leg with its tail the size of a door.</p>
          <p>For ten minutes, I swam alongside the largest fish on Earth. It didn’t care I was there. I was just another piece of plankton in its universe.</p>
          <p>When it finally disappeared into the blue, I floated on the surface and cried inside my mask.</p>
          <p class="post-quote">“Some moments don’t fit in cameras. They only fit in souls.”</p>
        </div>
      </div>
      <v-divider class="blog-divider" />

      <!-- POST 3: The Day I Became Maasai for 24 Hours -->
      <div class="blog-post mb-32">
        <h2 class="post-title">They Made Me a Warrior in One Day</h2>
        <p class="post-meta">Loita Hills • October 2025 • 5 min read</p>

        <v-img src="public/destinations/cultures/degleex-ganzorig-0kIbj3yEvOM-unsplash.jpg" height="520" cover class="rounded-xl mb-10 shadow-2xl" />

        <div class="post-body">
          <p>They took my phone, my watch, my shoes.</p>
          <p>Gave me a shuka, a spear, and a name: “Ole Ntimama” — the fearless one.</p>
          <p>I walked 30km with warriors half my age who laughed when I complained. Milked cows at 4 AM. Learned to throw a spear (badly). Drank fresh blood mixed with milk (surprisingly sweet).</p>
          <p>At night, around the fire, an elder told me: “You think you came to see Maasai. But we have been waiting for you.”</p>
          <p>The next morning, they painted my face with ochre and said: “Now you carry our story.”</p>
          <p>I left with blisters on my feet and fire in my heart.</p>
          <p class="post-quote">“Some cultures don’t teach you who they are.<br>They remind you who you were always meant to be.”</p>
        </div>
      </div>
      <v-divider class="blog-divider" />

      <!-- POST 4: The Ghost Forest of Diani -->
      <div class="blog-post mb-32">
        <h2 class="post-title">I Found a Forest That Only Exists at Low Tide</h2>
        <p class="post-meta">Diani Beach • September 2025 • 3 min read</p>

        <v-carousel height="520" cycle interval="5000" show-arrows class="rounded-xl mb-10 shadow-2xl">
          <v-carousel-item src="public/destinations/travelblog/Screenshot 2025-12-10 062822.png" cover />
          <v-carousel-item src="public/destinations/travelblog/Screenshot 2025-12-10 062837.png" cover />
        </v-carousel>

        <div class="post-body">
          <p>Every day at low tide, the ocean pulls back its curtain and reveals a forest of ancient coral skeletons.</p>
          <p>Trees that died 4,000 years ago when sea levels rose. Now they stand like white ghosts in the sand.</p>
          <p>I walked among them barefoot. The coral cut my feet. The sun burned my back. The tide started coming in fast.</p>
          <p>I ran laughing as the ocean reclaimed its dead forest — wave by wave, tree by tree.</p>
          <p class="post-quote">“Some places only exist when the sea forgets to hide them.”</p>
        </div>
      </div>

      <!-- NEWSLETTER SECTION — EXACTLY AS YOU WANTED -->
      <div class="newsletter-section py-20 mt-20">
        <v-container class="text-center">
          <h2 class="text-h3 md:text-h2 font-black text-white mb-6">
            Never Miss a Story
          </h2>
          <p class="text-h5 text-white mb-10 opacity-90">
            Get wild tales delivered straight from the bush to your inbox
          </p>
          <div class="max-w-2xl mx-auto">
            <v-text-field
              label="Your email"
              variant="outlined"
              append-inner-icon="mdi-send"
              bg-color="white"
              class="rounded-full"
              placeholder="name@wildsoul.com"
            />
          </div>
        </v-container>
      </div>

    </v-container>

    <!-- FOOTER -->
    <footer class="blog-footer">
      <p class="text-h5">© 2025 Safari Guide Kenya — Stories That Stay With You Forever</p>
      <p class="highlight">These are not travel stories.<br>These are love letters to Kenya.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
</script>

<style scoped>
.blog-page {
  background: linear-gradient(to bottom, #fffdf7, #fff8e8, #fff3e0);
  min-height: 100vh;
  font-family: 'Georgia', serif;
}

.page {
  position: relative;
  height: 90vh;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.85));

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.title {
  font-size: 7rem;
  font-weight: 900;
  letter-spacing: 8px;
  text-shadow: 8px 8px 40px rgba(0,0,0,0.9);
}

.subtitle {
  font-size: 3rem;
  font-weight: 300;
  letter-spacing: 10px;
  margin-top: 1rem;
}

.byline {
  font-size: 1.8rem;
  font-style: italic;
  margin-top: 2rem;
  opacity: 0.9;
}

.post-title {
  font-size: 4.5rem;
  font-weight: 900;
  color: #8B4513;
  text-align: center;
  margin-bottom: 1rem;
  text-shadow: 3px 3px 15px rgba(0,0,0,0.2);
}

.post-meta {
  text-align: center;
  font-size: 1.2rem;
  color: #A0522D;
  margin-bottom: 3rem;
  font-style: italic;
}

.post-body {
  font-size: 1.5rem;
  line-height: 2.4;
  background: rgba(255,255,255,0.95);
  padding: 4rem;
  border-radius: 40px;
  box-shadow: 0 25px 60px rgba(0,0,0,0.15);
  backdrop-filter: blur(10px);
  border: 3px solid rgba(139,69,19,0.2);
}

.post-quote {
  display: block;
  margin-top: 3rem;
  font-size: 2rem;
  font-weight: bold;
  color: #B8860B;
  font-style: italic;
  text-align: center;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.2);
}

.blog-divider {
  height: 8px;
  background: linear-gradient(90deg, transparent, #D2691E, #B8860B, #D2691E, transparent);
  border: none;
  margin: 8rem 0;
  border-radius: 10px;
}

.newsletter-section {
  background: linear-gradient(135deg, #1b5e20, #2e7d32, #388e3c);
  border-radius: 50px;
  margin: 8rem 4rem;
  box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

.blog-footer {
  background: linear-gradient(135deg, #8B4513, #A0522D, #CD853F);
  color: white;
  padding: 6rem 2rem;
  text-align: center;
}

.blog-footer .highlight {
  font-size: 2.5rem;
  font-weight: bold;
  margin-top: 2rem;
  text-shadow: 3px 3px 15px rgba(0,0,0,0.7);
  line-height: 1.8;
  color: #FFF8DC;
}
</style>