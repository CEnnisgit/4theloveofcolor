/**
 * Guides at /guides/<slug>.
 */

export type GuideSection = {
  heading: string;
  body: string[];
  points?: { title: string; text: string }[];
};

export type GuidePage = {
  slug: string;
  name: string;
  title: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  sections: GuideSection[];
  faqs: { question: string; answer: string }[];
  published: string;
  updated: string;
  image: string | null;
  imageAlt: string;
  closing: string;
};

export const guidePages: GuidePage[] = [
  {
    slug: "house-painting-cost-lakewood-ranch-sarasota",
    name: "What house painting costs here",
    title:
      "What House Painting Costs in Lakewood Ranch | 4 The Love of Color",
    metaDescription:
      "What actually drives the price of a repaint in Lakewood Ranch and Sarasota, and how to compare three quotes that look very different.",
    h1: "What house painting actually costs in Lakewood Ranch & Sarasota.",
    intro: [
      "We get asked this all the time, and the honest answer is that nobody can price your house properly over the internet. Two houses on the same street, same square footage, can come in miles apart — it all depends on what shape the walls are in underneath.",
      "What we can do is walk you through what moves the number. That way, when you've got a few quotes side by side, you can see why they're different instead of guessing. It's the same explanation we'd give you standing in your driveway.",
    ],
    sections: [
      {
        heading: "What actually drives the price",
        body: [
          "Painters price from surface area, condition and access. Floor area barely matters — a single-story home with tall ceilings and a lot of trim can carry more paintable surface than a larger two-story with plain walls.",
        ],
        points: [
          {
            title: "Surface area, not floor area",
            text: "Wall and ceiling area is what actually gets painted. High ceilings, vaulted rooms and lots of trim all add surface that never shows up in a square-footage number.",
          },
          {
            title: "Condition of what's already there",
            text: "The single biggest variable, and the one you cannot see from a photograph. A sound exterior needs washing and coating. A chalked, cracked, previously badly prepared one needs stabilizing first, and that is most of the labor.",
          },
          {
            title: "Stories and access",
            text: "Second-story work means ladders, staging or lifts, and slower, safer working. Landscaping tight against the wall, pool cages, screened lanais and narrow side returns all cost time.",
          },
          {
            title: "Repairs found during prep",
            text: "Cracked stucco, caulk joints that have given up, drywall damage. A straight quote either separates these out or flags them as an estimate, because nobody can price a repair they haven't opened up yet.",
          },
          {
            title: "How far the color is moving",
            text: "Dark to light is the expensive direction. A deep color going white can need extra coats regardless of what the product claims, and that is real material and real labor.",
          },
          {
            title: "Number of coats, honestly stated",
            text: "Two coats over sound existing color is typical. Anything less is a refresh, not a repaint, and it should be described that way on the quote.",
          },
          {
            title: "Trim, doors and detail",
            text: "Trim work is slow, hand-worked and priced per foot of edge rather than per wall. Crown molding, wainscoting, shutters, and a house full of six-panel doors all move the number more than people expect.",
          },
          {
            title: "Occupied or empty",
            text: "Working around furniture, pets and people is slower than working in an empty house. Not dramatically — but it is real, and it is why a pre-move-in repaint is usually the cheapest time to do it.",
          },
          {
            title: "Product grade",
            text: "Coatings vary widely in price and in how long they hold up under Florida UV and humidity. This is a genuine choice, not an upsell, and the quote should say which product it assumes.",
          },
        ],
      },
      {
        heading: "What makes one quote different from another",
        body: [
          "If three quotes come back and one is a lot lower, it usually isn't because that company buys paint cheaper. Paint is a smaller part of the bill than most people expect. Most of it is time, and most of the time is prep.",
          "So when the numbers are far apart, it's normally because the quotes cover different amounts of work — washing the walls and letting them dry, filling and sealing cracks, priming patches and stains, and putting on a genuine second coat. Those are the parts you can't see once the job is done.",
          "That's not us saying the cheaper painter is cutting corners. It's that you're probably looking at two different jobs with only the totals shown, and it's worth knowing which one you're buying.",
        ],
      },
      {
        heading: "How to compare three painting quotes properly",
        body: [
          "Put them side by side and check that each one answers the same questions. Where a quote is silent, ask — the answer is usually more informative than the number.",
        ],
        points: [
          {
            title: "What surfaces are included",
            text: "Walls only, or walls plus trim, doors, ceilings, soffits, garage door and front door? What's left out is where quotes differ most.",
          },
          {
            title: "What preparation is specified",
            text: "Washing, scraping, sanding, crack repair, caulking, priming — named individually, not summarized as \"prep as required\".",
          },
          {
            title: "How many coats, of what",
            text: "The product and the number of coats should both be written down. \"Two coats of a quality paint\" is not a specification.",
          },
          {
            title: "How repairs are handled",
            text: "Whether stucco and surface repairs are included, left out, or estimated — and what happens if more turns up once work starts.",
          },
          {
            title: "Who moves and protects what",
            text: "Furniture, wall hangings, floor protection, landscaping. Cheap in money, expensive in goodwill when it is assumed rather than agreed.",
          },
          {
            title: "What happens at the end",
            text: "Whether there is a walkthrough before final payment, and whether anything you point out gets fixed before you settle up.",
          },
        ],
      },
      {
        heading: "Questions worth asking",
        body: [
          "None of these are trick questions, and any painter worth hiring will be happy to answer them. Ask us the same ones.",
        ],
        points: [
          {
            title: "Have you actually seen the house?",
            text: "A price given over the phone or from a photo is a guess, and guesses get revised once someone is standing in front of the wall. Ask for a walkthrough before a number.",
          },
          {
            title: "What's the deposit, and what does it cover?",
            text: "A deposit is normal — paint and materials get bought before the first day, and on a bigger job that is real money up front. Ours scales with the size of the job. The fair question is what it covers and what the rest of the schedule looks like, not whether there is one at all.",
          },
          {
            title: "Is the price good for more than today?",
            text: "A discount that disappears this afternoon is a sales tactic. Take the time you need — a repaint is not a perishable good.",
          },
          {
            title: "Can I see it in writing?",
            text: "A written scope protects both of us. It is what we point at if there is ever a disagreement about what was included, and it means nobody is relying on remembering a driveway conversation.",
          },
          {
            title: "Who's responsible if something gets damaged?",
            text: "Worth knowing before anyone starts, whoever you hire. Ask what happens if a fixture, a floor, or a plant gets caught.",
          },
        ],
      },
      {
        heading: "When repainting is cheaper than waiting",
        body: [
          "Exterior paint in Florida is doing a protective job, not a decorative one. Once a coating has genuinely failed — chalking heavily, peeling, cracks open to the substrate — water starts reaching the material behind it.",
          "At that point what you're paying for isn't paint any more. It's stucco repair, and in the worst cases water that has got somewhere expensive. Repainting while the finish is just looking tired costs less than repainting after it has actually failed.",
          "Worth a look once a year: chalk that comes off on your hand, cracks opening up in the stucco, caulk pulling away around the windows and doors, and color that's noticeably faded on the west and south walls.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why won't you just tell me a price per square foot?",
        answer:
          "Because it would be wrong often enough to be useless. Per-square-foot pricing assumes surfaces are in comparable condition, and in this market they are not — two identical floorplans can differ enormously depending on how the last repaint was prepared. A number quoted before anyone has looked at your walls gets revised on site, and the revision is never downward.",
      },
      {
        question: "Is a written estimate free?",
        answer:
          "Ours is, and there is no obligation attached to it. We walk the property with you, talk through surfaces and colors, and send a written scope and price.",
      },
      {
        question: "Does painting the interior and exterior together cost less?",
        answer:
          "Usually somewhat, because setup, travel and scheduling are shared across one larger job rather than repeated. Whether it is worth doing at once depends on whether both genuinely need it — bundling work you do not need yet is not a saving.",
      },
      {
        question: "What is the cheapest time of year to have painting done?",
        answer:
          "Scheduling matters less here than in markets with a real winter, since exterior work runs most of the year. The bigger cost lever is timing around your own circumstances: an empty house between tenants or before a move-in is faster to paint than an occupied one.",
      },
      {
        question: "Should I buy the paint myself to save money?",
        answer:
          "Generally no. Materials are a smaller share of the total than most people assume, and supplying your own moves responsibility for the product onto you — if a coating fails because it was the wrong one for the surface, that becomes your problem rather than the painter's.",
      },
    ],
    published: "2026-08-06",
    updated: "2026-08-06",
    image: "/images/proj-exterior-stone.jpg",
    imageAlt:
      "Tan single-story Florida home with stone accents and an arched entry, freshly repainted, with a paver driveway",
    closing:
      "The fastest way to turn all of this into an actual number for your house is a walkthrough. We will look at the surfaces, tell you what they need, and put it in writing — including the parts you could reasonably leave until next year.",
  },
  {
    slug: "why-paint-peels-off-stucco",
    name: "Why paint peels off stucco",
    title: "Why Paint Peels Off Stucco in Florida | 4 The Love of Color",
    metaDescription:
      "Why paint blisters and peels off Florida stucco, how to tell which cause you have, and why patching the bad spot on its own never holds.",
    h1: "Why paint peels off stucco in Florida.",
    intro: [
      "This is the call we get more than any other. A wall that looked fine last year starts blistering, or a sheet of paint lifts away and takes a layer with it, usually on one elevation and usually the one that gets the weather.",
      "Peeling paint is almost never the paint's fault. It is a bond problem: something stopped the coat sticking to the wall, or something behind the wall pushed it off. Working out which one you have matters, because the two need different fixes and only one of them is cheap.",
    ],
    sections: [
      {
        heading: "The four things that normally cause it",
        body: [
          "In this market it is nearly always one of these, and often two of them together.",
        ],
        points: [
          {
            title: "The wall was never washed properly",
            text: "Old paint breaks down in the sun and leaves a chalky film. Rain, salt and dirt add to it. Paint over that and you have bonded your new coat to loose powder rather than to the wall. This is the most common cause we see, and it usually shows up in the first two or three years.",
          },
          {
            title: "Water is getting in behind it",
            text: "A failed caulk joint around a window, a gutter running down the wall, sprinklers hitting the same spot every morning. The water gets behind the paint and pushes it off from the inside. You will often see this as blisters rather than flakes, low down or under an opening.",
          },
          {
            title: "It went on before the wall was dry",
            text: "Stucco holds water for longer than people expect, especially after a summer storm or a pressure wash. Paint it too soon and the moisture is trapped underneath with nowhere to go but out through the new coat.",
          },
          {
            title: "Too many coats, none of them prepped",
            text: "Some houses are on their fifth repaint and every one went straight over the last. Eventually the stack gets too heavy and thick for the wall to hold, and it starts letting go in sheets.",
          },
        ],
      },
      {
        heading: "How to tell which one you have",
        body: [
          "You can get most of the way there yourself before anyone comes out.",
        ],
        points: [
          {
            title: "Rub the wall with your hand",
            text: "If you come away with chalky residue on your palm, the old coat has broken down. That is a preparation problem and it affects the whole elevation, not just the bit that has peeled.",
          },
          {
            title: "Look at where it is happening",
            text: "Peeling in one patch under a window or beside a downspout points at water getting in. Peeling spread evenly across a whole wall points at how the wall was prepared.",
          },
          {
            title: "Check what is above it",
            text: "Follow the wall upward. A blocked gutter, a leaking joint, or a sprinkler head aimed at the house explains a lot of peeling that gets blamed on paint.",
          },
          {
            title: "Look at the back of a loose flake",
            text: "If the flake has stucco stuck to it, the wall surface itself failed. If the back is clean and smooth, the paint simply never bonded.",
          },
        ],
      },
      {
        heading: "Why patching just the bad spot does not hold",
        body: [
          "The instinct is to scrape the peeling area, touch it up, and move on. It nearly always comes back, usually within a year, and often slightly larger than before.",
          "The reason is that peeling shows you where the bond failed first, not where it is bad. If the wall was painted over chalk, the whole elevation has the same weak bond — one patch just got there first because it takes the most sun or the most rain. Patching treats the symptom and leaves the cause across the rest of the wall.",
          "If water is getting in, patching is worse than useless. The new paint seals the wall again, the water is still arriving, and it lifts the repair off along with a bit more of what was around it.",
        ],
      },
      {
        heading: "What actually fixing it involves",
        body: [
          "It depends which cause you have, but the sequence is the same idea every time: stop the water, get back to something sound, and then rebuild.",
        ],
        points: [
          {
            title: "Deal with the water first",
            text: "Reseal the joint, move the sprinkler, clear the gutter. Painting before this is done just buys time.",
          },
          {
            title: "Take off everything loose",
            text: "Scraping until you reach paint that is genuinely stuck. Sometimes that is a small area. Sometimes it is most of a wall, and it is better to know that before the quote than after.",
          },
          {
            title: "Wash the whole elevation",
            text: "Not just the repair. The chalk has to come off everywhere the new coat is going, or you have rebuilt the same problem.",
          },
          {
            title: "Prime the bare stucco",
            text: "Anywhere you have scraped back to the wall needs priming, both so the new coat bonds and so the repaired area does not show through as a dull patch.",
          },
          {
            title: "Feather the edges",
            text: "Where old paint meets bare wall there is a ridge. Left alone it telegraphs through the new coat and you can see every repair from the street.",
          },
        ],
      },
      {
        heading: "Stopping it happening again",
        body: [
          "Once a wall has been properly stripped, washed, primed and coated, the same failure should not come back for a long time. What shortens it is usually water rather than sun.",
          "Worth checking once a year: caulk around windows and doors, gutters and downspouts running clear, and sprinklers that have drifted round to point at the house. Those three account for most of the peeling we get called out to look at.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I just paint over peeling paint?",
        answer:
          "No, and it is the most expensive shortcut in the trade. New paint bonds to whatever it lands on, so painting over a coat that is already letting go means the new one comes off with it. Everything loose has to come off first.",
      },
      {
        question: "How much of the wall will need scraping?",
        answer:
          "Nobody can tell you before they start scraping — that is why an honest quote either separates this out or gives you a range. What we can do at the walkthrough is test a few areas and give you a realistic idea rather than a number that changes once we are up there.",
      },
      {
        question: "Is peeling paint a sign of a bigger problem?",
        answer:
          "Sometimes. Paint peeling in the same spot repeatedly usually means water is still getting in, and that is worth tracking down properly — it is cheaper to fix a caulk joint than to keep repainting the same wall.",
      },
      {
        question: "Does pressure washing cause peeling?",
        answer:
          "It can reveal it rather than cause it. If a wash takes paint off, that paint was already failing and would have gone anyway. What does cause problems is painting too soon after a wash, before the stucco has dried out.",
      },
    ],
    published: "2026-08-11",
    updated: "2026-08-11",
    image: "/images/proj-exterior-palm.jpg",
    imageAlt:
      "Single-story tan Florida home with a tile roof and tall palms, freshly repainted",
    closing:
      "If a wall is peeling and you are not sure why, we will come and look at it and tell you straight — including when the answer is that it only needs one elevation done rather than the whole house.",
  },
  {
    slug: "how-often-to-repaint-a-florida-house",
    name: "How often to repaint",
    title: "How Often to Repaint a Florida House | 4 The Love of Color",
    metaDescription:
      "What decides how long exterior paint lasts in Florida, the signs your house is ready, and why waiting until the paint has failed costs more.",
    h1: "How often does a Florida house need repainting?",
    intro: [
      "There is a number people expect here, and we would rather not give you one, because it would be wrong often enough to be useless. Two houses on the same street can be years apart depending on which way they face and how well the last job was prepped.",
      "What is more useful is knowing what shortens it and what to look for. Once you know those, you can tell where your own house is without anyone selling you anything.",
    ],
    sections: [
      {
        heading: "What actually decides how long it lasts",
        body: [
          "Roughly in order of how much difference each one makes.",
        ],
        points: [
          {
            title: "How well the last job was prepped",
            text: "By some distance the biggest factor, and the one nobody can see. A wall that was washed, sealed and primed properly holds its finish far longer than the identical wall next door that got two quick coats over chalk.",
          },
          {
            title: "Which way the wall faces",
            text: "West and south walls take the afternoon sun and go first, often years ahead of the north side of the same house. It is normal for one elevation to need attention while the rest is still fine.",
          },
          {
            title: "How close you are to the water",
            text: "Salt gets into everything. Out toward the keys, Cortez or Anna Maria, exteriors chalk faster and metal fixings corrode and stain. The same house a few miles inland has an easier life.",
          },
          {
            title: "How dark the color is",
            text: "Deep colors absorb more heat and fade more visibly. A mid-tone or lighter color on a west wall will look right for longer than a deep one.",
          },
          {
            title: "What is around the house",
            text: "Sprinklers hitting the wall every morning, gutters running down it, or shrubs holding damp against it all shorten the life of a finish in one specific area rather than across the house.",
          },
        ],
      },
      {
        heading: "The signs it is time",
        body: [
          "Worth a walk round once a year. None of these are emergencies on their own, but two or three together usually mean the finish is at the end rather than the middle of its life.",
        ],
        points: [
          {
            title: "Chalk on your hand",
            text: "Rub the wall. Powdery residue means the old coat is breaking down. This is the clearest single signal, and it is the one that decides how much prep the next job needs.",
          },
          {
            title: "Cracks you can see from the driveway",
            text: "Hairline cracking is normal and easily filled. Cracks that have opened enough to see from a distance are letting water in.",
          },
          {
            title: "Caulk pulling away",
            text: "Look around windows and doors. Gaps where the caulk has shrunk back are how water gets behind the finish, and they are the cheapest thing on this list to put right.",
          },
          {
            title: "One wall lighter than the others",
            text: "Usually the west or south side. Not urgent on its own, but it tells you the coating has taken as much sun as it is going to.",
          },
          {
            title: "Any blistering or peeling",
            text: "This one is not a maintenance signal, it is a problem. Something has failed and it will spread.",
          },
        ],
      },
      {
        heading: "Why waiting past that point costs more",
        body: [
          "Exterior paint on a Florida house is doing a protective job, not a decorative one. While it is intact, it is keeping water off the stucco and the block behind it.",
          "Once it has genuinely failed, water starts reaching the wall itself. At that point the next job is no longer washing and painting — it is scraping, stucco repair, and sometimes a lot more surface work than the original repaint would have been. The paint has not got much more expensive; the preparation has.",
          "Repainting a wall that merely looks tired is straightforwardly cheaper than repainting one that has started letting go. That is the whole argument for keeping an eye on it.",
        ],
      },
      {
        heading: "You may not need the whole house",
        body: [
          "This is worth saying because it rarely gets said. If the west elevation has faded and the other three are sound, doing that one wall is a legitimate option and we will tell you so.",
          "The catch is color match. A wall painted now next to walls painted eight years ago will not match exactly even with the same product and code, because the old ones have faded. Sometimes that is invisible from the street and sometimes it is not, and it depends on the color and how the house is laid out. Worth walking round together and deciding rather than assuming it has to be all or nothing.",
        ],
      },
    ],
    faqs: [
      {
        question: "So how many years should I expect?",
        answer:
          "It varies too much here for a single number to be honest. Prep quality, which way the wall faces and how close you are to the water move it more than the paint does. Rather than quote you a figure, we would rather look at the walls — the chalk test alone tells you most of it.",
      },
      {
        question: "Do I have to do the whole house at once?",
        answer:
          "Not necessarily. If one elevation has gone and the rest is sound, doing that side is reasonable. The thing to weigh is color match against walls that have already faded, which we can look at together.",
      },
      {
        question: "Does a lighter color really last longer?",
        answer:
          "It holds its appearance longer, yes. Deeper colors absorb more heat and fade more visibly, especially on a west wall. It is one of the things worth factoring in if you are changing color anyway.",
      },
      {
        question: "Is it worth repainting before selling?",
        answer:
          "Often, and exterior more than interior. Chalked, faded walls read as a house that has not been looked after, which colors how everything else gets viewed. Whether it pays back depends on your market and your timing, so it is worth asking your agent as well as us.",
      },
    ],
    published: "2026-08-11",
    updated: "2026-08-11",
    image: "/images/proj-exterior-modern.jpg",
    imageAlt:
      "Single-story Florida home with soft gray stucco, white trim and a barrel-tile roof, freshly repainted",
    closing:
      "If you are not sure whether yours is ready, we will come and look and tell you honestly — including when the answer is that it is fine for another couple of years.",
  },
  {
    slug: "refinishing-cabinets-vs-replacing",
    name: "Refinishing cabinets vs replacing",
    title: "Refinishing Cabinets vs Replacing Them | 4 The Love of Color",
    metaDescription:
      "How to decide between refinishing your kitchen cabinets and replacing them, what refinishing can and cannot change, and when to replace.",
    h1: "Refinishing your cabinets, or replacing them?",
    intro: [
      "Most kitchens we look at do not need new cabinets. The boxes are solid, the layout works, and what the owner is actually unhappy with is a color that dates the room and doors that look tired. That is a finishing job, and replacing a working kitchen to fix it is an expensive way round.",
      "But not always. Sometimes we open a kitchen and tell people to replace, because refinishing it would be money spent on something that is going to need doing properly in a few years anyway. Here is how the decision actually goes.",
    ],
    sections: [
      {
        heading: "When refinishing is the right call",
        body: [
          "If most of these are true, refinishing will get you what you want for a fraction of the cost and a fraction of the disruption.",
        ],
        points: [
          {
            title: "The boxes are sound",
            text: "No water damage, no sagging shelves, no swelling at the base by the dishwasher. The carcasses are the expensive part of a kitchen, and if yours are fine you are mostly paying to change how they look.",
          },
          {
            title: "The layout works for you",
            text: "If you are not moving anything, you are not getting the main benefit of a new kitchen. Refinishing changes the look without touching the plumbing, the counters or the floor.",
          },
          {
            title: "The doors are solid",
            text: "Solid wood, MDF and even laminate or thermofoil can all be refinished with the right primer. What matters is that they are intact and still hanging square.",
          },
          {
            title: "Your problem is the color",
            text: "Honey oak, orange-toned cherry and dark builder maple all date a room badly and all refinish beautifully. This is the most common kitchen job we do.",
          },
        ],
      },
      {
        heading: "When we will tell you to replace",
        body: [
          "We would rather say this at the walkthrough than take the job and have you regret it.",
        ],
        points: [
          {
            title: "Water has got into the carcasses",
            text: "Swelling at the bottom of the sink or dishwasher run means the material has gone. Paint does not fix that and will not stop it spreading.",
          },
          {
            title: "The layout is the actual problem",
            text: "If the frustration is where things are rather than what color they are, a beautiful finish on the wrong kitchen will not fix it. That is a remodel, not a paint job.",
          },
          {
            title: "Thermofoil that has already lifted",
            text: "Once the film has peeled away from the board underneath, that door needs replacing. It cannot be painted back down and it will keep lifting.",
          },
          {
            title: "You want a different door style",
            text: "Refinishing changes color and sheen. It does not turn a raised panel into a flat slab. If the door profile is what you dislike, you need new doors at minimum.",
          },
        ],
      },
      {
        heading: "What refinishing can and cannot change",
        body: [
          "Being clear about this up front is what stops disappointment at the end.",
        ],
        points: [
          {
            title: "Can change: color and sheen",
            text: "Completely. This is the main event, and the difference in a dated kitchen is dramatic.",
          },
          {
            title: "Can change: hardware",
            text: "While the doors are off is the cheapest possible moment to fit new handles or move to soft-close hinges.",
          },
          {
            title: "Cannot change: the door profile",
            text: "The shape of the door stays the shape of the door. New doors on your existing boxes is a middle option worth knowing about.",
          },
          {
            title: "Cannot change: the layout or the counters",
            text: "Everything stays where it is. That is why it costs so much less.",
          },
          {
            title: "Depends: wood grain",
            text: "Oak grain will show through paint unless it is filled and sanded flat first. That is extra work and worth deciding on deliberately — some people like the texture, others are surprised by it.",
          },
        ],
      },
      {
        heading: "The other differences people forget",
        body: [
          "Cost is the obvious one, but it is not the only thing that separates these two options.",
          "A refinish keeps your kitchen usable through most of the work. Doors and drawer fronts leave to be sprayed, so you have open shelving and working drawers for a stretch, and the boxes get done in place. A replacement means the kitchen is out of action, and it usually pulls in counters, plumbing and sometimes flooring behind it.",
          "There is also the waste. Replacing a working kitchen sends a lot of perfectly sound material to a skip, which is worth a thought if that matters to you.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much cheaper is refinishing?",
        answer:
          "Substantially — you are paying for labor and materials rather than new casework, counter removal and installation. We do not publish figures because kitchens vary too much, but it is the kind of difference that changes what else you can do with the room.",
      },
      {
        question: "How long do refinished cabinets last?",
        answer:
          "If the prep is done properly, a long time. The finish is harder than wall paint and made for handling. Where refinished cabinets fail early it is almost always because the grease was not cleaned off or the wrong primer was used — which is why those two steps get the attention they do.",
      },
      {
        question: "Can you refinish just the doors and leave the boxes?",
        answer:
          "The boxes and face frames get done too, in place, because a fresh door against a dated frame looks worse than leaving both alone. What is optional is the inside of the cabinets, which most people leave.",
      },
      {
        question: "What if I want new doors but the same boxes?",
        answer:
          "That is a real middle option and worth asking about. You keep the carcasses and the layout, get the door style you want, and it still costs far less than a full replacement.",
      },
    ],
    published: "2026-08-11",
    updated: "2026-08-11",
    image: null,
    imageAlt: "",
    closing:
      "Bring us in for a walkthrough and we will tell you which way your kitchen goes — including when the honest answer is that refinishing is not worth it.",
  },
];

export const guidePageBySlug = (slug: string) =>
  guidePages.find((page) => page.slug === slug);
