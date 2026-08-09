/**
 * Service × city pages at /painters/<citySlug>/<serviceSlug>.
 *
 * These target the highest-intent searches in the trade — "exterior painters
 * Lakewood Ranch", "cabinet refinishing Sarasota" — where the searcher has
 * already decided what they need and where they need it.
 *
 * THIS IS THE MOST DANGEROUS FILE IN THE REPO.
 *
 * Four cities times four services is sixteen possible pages, and generating
 * all sixteen from a template is the textbook doorway-page pattern Google
 * demotes. The rule here is stricter than for cityPages.ts or servicePages.ts,
 * because these pages sit underneath two parents that already rank:
 *
 *   A page belongs here only if it says something true of THIS service in
 *   THIS city that neither /painters/<city> nor /services/<service> already
 *   says. If the honest answer is "the same as anywhere else we work", the
 *   page must not exist — the two parent pages already cover that searcher,
 *   and a thin third page competes with both of them for the same query.
 *
 * That is why there are six entries below and not sixteen. Interior painting
 * in Venice is not meaningfully different from interior painting in Nokomis;
 * exterior painting in Bradenton genuinely is different from exterior painting
 * in Lakewood Ranch, because the housing stock is forty years apart.
 *
 * Before adding one, write the `intro` and `points` first. If they come out
 * generic, that is the answer: do not add the page.
 */

export type CityServicePage = {
  /** Must match a slug in cityPages.ts. */
  citySlug: string;
  /** Must match a slug in servicePages.ts. */
  serviceSlug: string;
  title: string;
  metaDescription: string;
  h1: string;
  /** Why this service is different in this city. First paragraph is the lead. */
  intro: string[];
  /** The specifics. These must not restate either parent page. */
  points: { title: string; text: string }[];
  closing: string;
};

export const cityServicePages: CityServicePage[] = [
  // ---------------------------------------------------------------- exteriors
  {
    citySlug: "lakewood-ranch",
    serviceSlug: "exterior-painting",
    title:
      "Exterior House Painters in Lakewood Ranch, FL | 4 The Love of Color Painting",
    metaDescription:
      "Exterior repaints for Lakewood Ranch homes — stucco crack bridging, HOA color approval, and coatings chosen for west-facing elevations. Free written estimates.",
    h1: "Exterior painting in Lakewood Ranch.",
    intro: [
      "Lakewood Ranch exteriors are unusually consistent to work on and unusually constrained to decide on. Almost everything here is block-and-stucco built from the 1990s onward, so the preparation is predictable in a way that older markets never are. The color, on the other hand, is rarely entirely yours to choose.",
      "The other thing that defines this market right now is timing. The earliest villages are well past the life of their original builder-applied coat, and builder exteriors were not specified to last forever. A large share of the exterior work here is a first proper repaint on a house whose original finish has quietly reached the end.",
    ],
    points: [
      {
        title: "Color approval comes before scheduling",
        text: "Most villages require the color to be reviewed and approved before work starts, and an approval turnaround does not care about your painting schedule. Getting the submission in early is the difference between painting when you wanted to and painting six weeks later.",
      },
      {
        title: "Approved palettes are narrower than they look",
        text: "A community palette that lists dozens of options often collapses to a handful once your elevation, roof tile and stone or brick accents are taken into account. Walking it with the actual materials in front of you beats picking from a sheet.",
      },
      {
        title: "Builder stucco cracks on a schedule",
        text: "Block settles, stucco moves, and hairline cracking on a fifteen-year-old Lakewood Ranch elevation is expected rather than alarming. It has to be opened, patched and bridged — coating straight over it puts the crack back through the new finish inside a season.",
      },
      {
        title: "Neighboring houses set the reference",
        text: "In a village where the houses share an architectural language, your exterior is read against the two either side of it. Colors that would be unremarkable on an isolated lot can look wrong in a row, which is worth knowing before the approval goes in rather than after.",
      },
      {
        title: "West elevations age first, visibly",
        text: "Afternoon sun on a west or south wall is the harshest exposure a Florida house gets. On a deep color that means one elevation fading ahead of the rest, so the coating has to be rated for it or the house ends up two-tone in a few years.",
      },
    ],
    closing:
      "If your village needs color approval, tell us at the walkthrough — it changes the order things happen in, and it is much easier to plan around at the start than to discover halfway through.",
  },
  {
    citySlug: "sarasota",
    serviceSlug: "exterior-painting",
    title: "Exterior House Painters in Sarasota, FL | 4 The Love of Color Painting",
    metaDescription:
      "Exterior painting for Sarasota homes — salt-exposed coastal elevations, midcentury detail work, and careful handling of pre-1978 paint. Free written estimates.",
    h1: "Exterior painting in Sarasota.",
    intro: [
      "There is no typical Sarasota exterior. A 1950s Sarasota School house with wide eaves and exposed structure, a downtown condo, a 1970s ranch in Gulf Gate and a new build out east are four genuinely different jobs, and pricing or scoping them the same way is how exterior quotes go wrong here.",
      "Two things cut across all of them: how close the house sits to the water, and how old the paint underneath is. Those two questions decide most of the preparation on any Sarasota exterior.",
    ],
    points: [
      {
        title: "Salt changes the failure mode, not just the speed",
        text: "West of the Trail and out toward the keys, exteriors do not simply fade — they chalk, and metal fixings corrode and bleed rust down the wall. That means washing down to a sound surface and treating fixings, not just applying a tougher topcoat.",
      },
      {
        title: "Pre-1978 homes need a decision before sanding",
        text: "Older Sarasota houses can have lead-based paint hiding under later coats. That changes how we prep and clean up, and it's worth knowing before anyone puts a sander to it rather than after.",
      },
      {
        title: "Midcentury detail takes a brush",
        text: "Wide overhangs, exposed beams and original window frames are what give these houses their character. They want cutting in by hand rather than a fast spray, and that's where most of the time on one of these goes.",
      },
      {
        title: "Access is half the job on the keys",
        text: "Narrow lots, landscaping grown up tight against the wall, and buildings with rules about lifts, work hours and parking. Getting that sorted before day one is what keeps a job from stalling halfway.",
      },
    ],
    closing:
      "Older Sarasota houses turn up surprises, and we would rather find them at the walkthrough and tell you than quote around them and come back asking for more.",
  },
  {
    citySlug: "bradenton",
    serviceSlug: "exterior-painting",
    title: "Exterior House Painters in Bradenton, FL | 4 The Love of Color Painting",
    metaDescription:
      "Exterior repaints for Bradenton homes — old paint that's failing, block and older siding, tired caulk joints. Straight answers on older houses, free written estimates.",
    h1: "Exterior painting in Bradenton.",
    intro: [
      "Bradenton has the oldest houses we regularly work on, so an exterior here is usually more of a restoration than a fresh coat. Plenty of them are on their fourth or fifth repaint, and every one of those made a decision about the wall.",
      "That's why the first question on a Bradenton exterior isn't what color. It's what's already on there, and whether it's sound enough to paint over. Getting that wrong is why repaints around here fail early.",
    ],
    points: [
      {
        title: "The old paint is what you're painting onto",
        text: "Chalking, cracking and peeling all mean the last coat has let go. Paint on top of that fails right along with it. How much has to come off first is the biggest single thing that moves a Bradenton quote.",
      },
      {
        title: "Block and older siding want different things",
        text: "Mid-century block and older siding sit right next to each other in these neighborhoods, and they need different primers and different crack treatment. Treating a whole street the same way is an expensive mistake.",
      },
      {
        title: "Old caulk hiding under old caulk",
        text: "Repaint after repaint tends to caulk over what was already there. Eventually those joints stop sealing anything, and they have to be cut out and done properly. It's invisible work, and it's most of what keeps water out of the wall.",
      },
      {
        title: "Salt out toward the water",
        text: "Head west toward Cortez, Palma Sola and Anna Maria and the salt picks up sharply. Everything above happens faster out there, and the same house a few miles inland is an easier job.",
      },
    ],
    closing:
      "On a house this age we'd rather look properly, tell you what we find, and let you decide — instead of quoting a low number and renegotiating it in your driveway.",
  },

  // ---------------------------------------------------------------- cabinets
  {
    citySlug: "lakewood-ranch",
    serviceSlug: "cabinet-refinishing",
    title:
      "Kitchen Cabinet Refinishing in Lakewood Ranch, FL | 4 The Love of Color Painting",
    metaDescription:
      "Cabinet refinishing for Lakewood Ranch kitchens — builder-grade boxes in good shape with dated finishes, sprayed to a durable modern color. Free written estimates.",
    h1: "Cabinet refinishing in Lakewood Ranch.",
    intro: [
      "Lakewood Ranch kitchens are close to the ideal case for refinishing rather than replacing. The homes are new enough that the boxes are structurally sound and the layouts still work, and old enough that the finish is squarely of its build year — honey oak, orange-toned cherry, or a builder maple that has darkened.",
      "What people here are usually unhappy with is the color and the wear, not the cabinetry. That is a finishing problem, and replacing a functioning kitchen to solve it is an expensive way round.",
    ],
    points: [
      {
        title: "Open-plan means the kitchen is never off-stage",
        text: "In these floorplans the cabinets are visible from the living area, the dining area and often the entry. Finish quality carries further than it does in a closed kitchen — a brushed door that would pass in a galley is obvious across a great room.",
      },
      {
        title: "Builder cabinetry is a mixed bag of substrates",
        text: "One kitchen can combine solid-wood doors, veneered boxes and thermofoil ends, and each of those needs a different primer. Identifying which is which before quoting is the difference between a finish that holds and one that peels off the end panel first.",
      },
      {
        title: "Islands take the real punishment",
        text: "The island is where people sit, lean, and knock things. It wears differently from the perimeter run, and it is worth deciding early whether it gets the same color or is deliberately treated as a separate piece.",
      },
      {
        title: "No approval needed — this one is entirely yours",
        text: "Unlike an exterior in the same community, nobody reviews your kitchen color. For a lot of homeowners here this is the first decision about their house that no committee gets an opinion on.",
      },
      {
        title: "Twenty-year-old hinges are worth replacing now",
        text: "While the doors are off is the only cheap moment to change tired hinges or move to soft-close. Doing it later means taking a finished kitchen apart again.",
      },
    ],
    closing:
      "If you are weighing refinishing against a new kitchen, we will look at the boxes and tell you honestly which one yours justifies — including when the answer is replacement.",
  },
  {
    citySlug: "sarasota",
    serviceSlug: "cabinet-refinishing",
    title:
      "Kitchen Cabinet Refinishing in Sarasota, FL | 4 The Love of Color Painting",
    metaDescription:
      "Cabinet refinishing for Sarasota kitchens and condos — midcentury woodwork, small high-impact condo kitchens, and building access handled. Free written estimates.",
    h1: "Cabinet refinishing in Sarasota.",
    intro: [
      "Sarasota cabinet work splits into two jobs that have almost nothing in common. One is a condo kitchen — small, heavily used, and the single most visible surface in the unit. The other is original cabinetry in an older house, where the first question is whether it should be painted at all.",
      "Both are strong candidates for refinishing, for opposite reasons: the condo because the footprint is small enough that a refinish transforms it cheaply, and the older house because what is there is often better made than anything that would replace it.",
    ],
    points: [
      {
        title: "Some original woodwork should not be painted",
        text: "Occasionally we open a midcentury kitchen and find joinery worth keeping as wood. We will say so. Painting over genuinely good original cabinetry is not a decision to take by default, and it is not reversible in any practical sense.",
      },
      {
        title: "Condo buildings have rules before they have kitchens",
        text: "Work hours, elevator booking, protection of common corridors, and where materials can be staged. On a key or downtown building this is settled with management before the first door comes off, or the job stops on day one.",
      },
      {
        title: "Small kitchens punish poor sequencing",
        text: "In a compact condo kitchen there is nowhere to put anything. Doors and drawer fronts leaving for spraying is what makes the job liveable, and the order things come off in matters more than it does in a large house.",
      },
      {
        title: "Pre-1978 finishes need checking first",
        text: "Original cabinetry in an older Sarasota home may carry lead-based paint under later coats. That changes how it is prepared and cleaned up, and it is worth establishing before sanding rather than after.",
      },
      {
        title: "Seasonal homes give you an empty-kitchen window",
        text: "If the property is seasonal, the months you are away are the easiest possible time to do this. An unoccupied kitchen removes the only genuinely disruptive part of the job.",
      },
    ],
    closing:
      "Whether it is a condo galley or an original kitchen in an older house, the walkthrough settles what the cabinetry actually needs — and whether painting it is the right call at all.",
  },

  // ---------------------------------------------------------------- interiors
  {
    citySlug: "lakewood-ranch",
    serviceSlug: "interior-painting",
    title:
      "Interior House Painters in Lakewood Ranch, FL | 4 The Love of Color Painting",
    metaDescription:
      "Interior painting for Lakewood Ranch homes — replacing builder-grade flat with a washable finish, tall ceilings, tray detail and open-plan color. Free estimates.",
    h1: "Interior painting in Lakewood Ranch.",
    intro: [
      "The defining interior job in Lakewood Ranch is the first repaint of a production-built home. Builders spray a single thin coat of flat paint across the whole house: it looks fine on handover day, marks if you look at it hard, and cannot be cleaned without burnishing a shiny patch into the wall.",
      "Replacing that with a properly applied washable finish is the biggest single improvement most homes here can get, and it is the one people put off longest because the walls are not obviously damaged — just impossible to keep clean.",
    ],
    points: [
      {
        title: "Builder flat cannot be washed, only repainted",
        text: "Scuffs, handprints and furniture marks do not come off builder-grade flat. Wiping it burnishes the surface and leaves a shinier patch than the mark you were removing. No product fixes this from the outside.",
      },
      {
        title: "Open plan means one color across a lot of wall",
        text: "These floorplans run a single color through kitchen, dining and living space with few breaks. That makes consistency between batches, coats and touch-ups far more visible than it would be in a house of separate rooms.",
      },
      {
        title: "Tall and tray ceilings add real surface",
        text: "Two-story entries, vaulted great rooms and tray detail carry a lot of paintable area and need staging to reach safely. It is why square footage alone is a poor predictor of what an interior here costs.",
      },
      {
        title: "There is more trim than the floorplan suggests",
        text: "Eight-foot doors, wide baseboard, crown in the main rooms and niche detailing are standard in these builds. Trim is slow hand-work and it is frequently the larger half of an interior quote.",
      },
      {
        title: "Builder touch-up paint has usually gone off",
        text: "The labelled cans in the garage are typically a decade old, no longer match the faded walls, and were the unwashable flat to begin with. They are not the shortcut people hope they are.",
      },
    ],
    closing:
      "If the walls are sound and the problem is that nothing wipes clean, that is the easiest interior job there is to fix properly — and the difference is immediate.",
  },
];

export const cityServiceBySlugs = (citySlug: string, serviceSlug: string) =>
  cityServicePages.find(
    (page) => page.citySlug === citySlug && page.serviceSlug === serviceSlug,
  );

/** Every combination page for a given city, for cross-linking from the city page. */
export const cityServicesForCity = (citySlug: string) =>
  cityServicePages.filter((page) => page.citySlug === citySlug);

/** Every combination page for a given service, for cross-linking from the service page. */
export const cityServicesForService = (serviceSlug: string) =>
  cityServicePages.filter((page) => page.serviceSlug === serviceSlug);
