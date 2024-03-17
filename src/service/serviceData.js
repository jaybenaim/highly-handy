import { SERVICES, SERVICES_PATHS } from "../consts";

export const SERVICE_DATA = {
  [SERVICES.AERATION]: {
    title: SERVICES.AERATION,
    summary: (
      <div>
        <p>
          After the winter our lawns are compact and solid. This prevents the
          nutrients (grass seeds, topsoil, and fertilizer) to get into the lawn
          when applying applications.
        </p>

        <p>
          Lawn aeration is the process of penetrating the soil with 2–4-inch
          holes to allow air, water, and nutrients (grass seeds, topsoil, and
          fertilizer) to get deep into the lawn while thickening up the lawn.
        </p>
      </div>
    ),
    benefits: (
      <div>
        <h4>Improved Soil Oxygenation:</h4>
        <p>
          Aeration helps to alleviate soil compaction, allowing oxygen, water,
          and nutrients to penetrate deep into the soil, promoting better root
          growth and overall turf health.
        </p>

        <h4>Enhanced Nutrient Absorption:</h4>
        <p>
          By loosening compacted soil, aeration enables grass roots to access
          essential nutrients more effectively, leading to improved nutrient
          absorption and stronger, healthier turf.
        </p>

        <h4>Better Water Infiltration:</h4>
        <p>
          Aeration facilitates better water penetration into the soil, reducing
          surface runoff and promoting deeper root growth. This helps to prevent
          waterlogging and encourages drought resistance.
        </p>

        <h4>Reduction of Thatch Buildup:</h4>
        <p>
          Thatch, a layer of dead grass and organic matter, can accumulate on
          the soil surface and hinder water and nutrient absorption. Aeration
          helps to break up thatch, promoting its decomposition and reducing the
          risk of turf diseases.
        </p>

        <h4>Enhanced Lawn Resilience:</h4>
        <p>
          Regular aeration promotes a stronger, more resilient lawn that is
          better equipped to withstand foot traffic, environmental stressors,
          and pest infestations. This leads to a thicker, more vibrant lawn that
          remains healthy throughout the growing season.
        </p>
      </div>
    ),
    overview: (
      <p>
        Aeration is a vital maintenance practice that enhances the health and
        vitality of your lawn by improving soil oxygenation, promoting better
        nutrient absorption, increasing water infiltration, reducing thatch
        buildup, and ultimately fostering a resilient and lush turf that thrives
        year-round.
      </p>
    ),
    imgs: [
      { img: "aeration-785x524.png", alt: "Steps for aeration" },
      { img: "beforeAfter-785x524.jpg", alt: "Nice lawn after aeration" },
    ],
  },
  [SERVICES.DETHATCHING]: {
    title: SERVICES.DETHATCHING + " (Motorized rake)",
    summary: (
      <div>
        <p>
          Dethatching is used on most golf courses and soccer fields to keep
          them green and healthy.
        </p>
      </div>
    ),
    benefits: (
      <div>
        <h4>Reduction of Thatch:</h4>
        <p>
          Thatch is a layer of dead grass, roots, and debris that accumulates on
          the soil surface. Excessive thatch can prevent water and nutrients
          from reaching the roots. Aeration helps break up this layer, allowing
          for better nutrient absorption.
        </p>

        <h4>Enhanced Air Circulation:</h4>
        <p>
          A thick layer of thatch can restrict airflow to the soil and
          grassroots. Dethatching opens the turf, allowing for better air
          circulation, which promotes healthier grass growth.
        </p>

        <h4>Reduction of Pests and Diseases:</h4>
        <p>
          Thatch can create a hospitable environment for pests and diseases,
          such as insects and fungi, to thrive. By removing thatch, you can
          reduce the risk of these problems.
        </p>

        <h4>Improved Water Absorption:</h4>
        <p>
          Thatch acts as a barrier to water penetration, causing runoff rather
          than absorption. Dethatching helps water reach the soil where it's
          needed, promoting deeper root growth and drought resistance.
        </p>

        <h4>Aesthetic Appeal:</h4>
        <p>
          A well-dethatched lawn looks more even and tidy. Removing the layer of
          thatch can enhance the appearance of your lawn, making it look
          healthier and more vibrant.
        </p>
      </div>
    ),
    overview: (
      <p>
        Overall, dethatching is an important part of lawn maintenance,
        especially for older lawns or those with a thick layer of thatch. It
        helps ensure that your grass can access the essential elements it needs
        to thrive, leading to a greener, healthier lawn.
      </p>
    ),
    imgs: [
      {
        img: "detatcher.jpg",
        alt: "Dethatching results with thatch on the grass",
      },
      {
        img: "dethatching.jpg",
        alt: "Dethatching results",
      },
    ],
  },
  [SERVICES.WINDOW_CLEANING]: {
    title: SERVICES.WINDOW_CLEANING,
    summary: (
      <div>
        <p>
          Window cleaning is an essential aspect of home maintenance that often
          goes overlooked but plays a significant role in preserving the beauty,
          functionality, and longevity of your property. Clean windows not only
          enhance the aesthetic appeal of your home but also contribute to a
          healthier indoor environment and improved energy efficiency. Whether
          you're a homeowner looking to boost curb appeal or a business owner
          aiming to create a welcoming atmosphere for customers, professional
          window cleaning services offer a convenient and effective solution to
          keep your windows sparkling clean year-round.
        </p>
      </div>
    ),
    benefits: (
      <div>
        <h4>Enhanced Curb Appeal:</h4>
        <p>
          Clean windows significantly improve the exterior appearance of your
          home, boosting its curb appeal and leaving a positive impression on
          visitors and passersby.
        </p>

        <h4>Increased Natural Light:</h4>
        <p>
          Clean windows allow more natural light to enter your home, creating a
          brighter and more inviting interior space. This can enhance mood and
          productivity while reducing the need for artificial lighting during
          the day.
        </p>

        <h4>Improved Views:</h4>
        <p>
          Clear, streak-free windows provide unobstructed views of the outdoors,
          allowing you to fully enjoy your surroundings, whether it's a scenic
          landscape, a lush garden, or a bustling cityscape.
        </p>

        <h4>Extended Window Lifespan:</h4>
        <p>
          Regular cleaning helps prevent the buildup of dirt, grime, and
          contaminants that can etch or scratch window glass over time. By
          maintaining clean windows, you can prolong their lifespan and avoid
          costly repairs or replacements.
        </p>

        <h4>Enhanced Energy Efficiency:</h4>
        <p>
          Clean windows allow more sunlight to enter your home, reducing the
          need for artificial heating and lighting. This can lead to lower
          energy bills and improved energy efficiency over time.
        </p>

        <h4>Healthier Indoor Environment:</h4>
        <p>
          Removing dust, pollen, and other allergens from your windows can
          contribute to a healthier indoor environment, particularly for
          individuals with allergies or respiratory conditions.
        </p>

        <h4>Prevention of Damage:</h4>
        <p>
          Regular cleaning helps identify and address issues such as mold,
          mildew, or water damage early on, preventing further deterioration and
          preserving the structural integrity of your windows and surrounding
          areas.
        </p>

        <h4>Professional Touch:</h4>
        <p>
          Professional window cleaners have the expertise, tools, and techniques
          to achieve superior results safely and efficiently. They can access
          hard-to-reach windows, use eco-friendly cleaning solutions, and ensure
          streak-free, spotless windows every time.
        </p>
      </div>
    ),
    overview: (
      <p>
        From enhancing curb appeal to improving indoor comfort and energy
        efficiency, professional window cleaning offers a multitude of benefits
        for homeowners and businesses alike. By removing dirt, grime, and
        contaminants from your windows, you can enjoy unobstructed views,
        increased natural light, and a healthier indoor environment. Regular
        window cleaning also helps extend the lifespan of your windows, prevent
        costly damage, and maintain the overall integrity of your property. With
        professional expertise and specialized equipment, window cleaning
        services ensure impeccable results, leaving your windows streak-free,
        spotless, and gleaming with brilliance.
      </p>
    ),
    imgs: [
      {
        img: "window-cleaning-clean.jpg",
        alt: "Clean windows after window cleaning",
      },
      {
        img: "window-cleaning-dirty.jpg",
        alt: "Dirty windows before window cleaning",
      },
    ],
  },
  [SERVICES.INTERLOCK_CLEANING]: {
    title: SERVICES.INTERLOCK_CLEANING,
    summary: (
      <div>
        <p>
          Interlock cleaning offers numerous benefits for homeowners seeking to
          enhance the appearance and longevity of their outdoor spaces. By
          removing weeds, replacing sand, and sealing the surface.
        </p>
      </div>
    ),
    benefits: (
      <div>
        <h4>Weed Removal:</h4>
        <p>
          Interlock cleaning involves thorough weed removal from the
          interlocking bricks, ensuring a clean and pristine appearance for your
          outdoor space. By eliminating weeds, you prevent them from detracting
          from the beauty of your interlock surface and reduce the need for
          ongoing maintenance.
        </p>

        <h4>Sand Replacement:</h4>
        <p>
          As part of the interlock cleaning process, the old sand between the
          interlocking bricks is removed and replaced with fresh, high-quality
          joint sand. This helps to stabilize the bricks, prevent shifting, and
          maintain the structural integrity of your outdoor surface.
        </p>

        <h4>Sealing:</h4>
        <p>
          After weed removal and sand replacement, the interlock surface is
          sealed to provide long-lasting protection against weed growth,
          moisture infiltration, and erosion. The sealant creates a protective
          barrier that enhances the durability and appearance of your interlock,
          ensuring it remains beautiful and resilient for years to come.
        </p>

        <h4>Enhanced Appearance:</h4>
        <p>
          Interlock cleaning revitalizes the appearance of your outdoor space,
          restoring the original beauty and luster of your interlocking bricks.
          With weeds removed, joints refilled, and a fresh sealant applied, your
          interlock surface will look clean, uniform, and visually appealing.
        </p>

        <h4>Extended Lifespan:</h4>
        <p>
          By removing weeds, replacing sand, and sealing the interlock surface,
          interlock cleaning helps to prolong the lifespan of your outdoor
          hardscape. Proper maintenance and protection against weed growth and
          erosion ensure that your interlocking bricks remain structurally sound
          and aesthetically pleasing for many years.
        </p>

        <h4>Reduced Maintenance:</h4>
        <p>
          Interlock cleaning reduces the need for ongoing maintenance by
          eliminating weeds and stabilizing the surface with fresh joint sand
          and sealant. With fewer weeds and a sealed surface, you'll spend less
          time and effort maintaining your outdoor space, allowing you to enjoy
          it to the fullest.
        </p>
      </div>
    ),
    overview: (
      <p>
        Overall, interlock cleaning offers a cost-effective solution to enhance
        the beauty, functionality, and longevity of your outdoor hardscape,
        ensuring years of enjoyment and satisfaction.
      </p>
    ),
    imgs: [
      { img: "interlock.jpeg", alt: "Before picture of interlock with weeds" },
      {
        img: "interlock1.jpeg",
        alt: "Interlock after cleaning without weeds and a fresh seal",
      },
      { img: "interlock2.jpeg", alt: "Before picture of interlock with weeds" },
      {
        img: "interlock3.jpeg",
        alt: "Interlock after cleaning without weeds and a fresh seal",
      },
    ],
  },
};

export const SERVICE_PATH_TO_SERVICE_MAP = {
  [SERVICES_PATHS.AERATION]: SERVICES.AERATION,
  [SERVICES_PATHS.DETHATCHING]: SERVICES.DETHATCHING,
  [SERVICES_PATHS.WINDOW_CLEANING]: SERVICES.WINDOW_CLEANING,
  [SERVICES_PATHS.INTERLOCK_CLEANING]: SERVICES.INTERLOCK_CLEANING,
};
