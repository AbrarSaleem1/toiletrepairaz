/**
 * Comprehensive Localized Data & Architectural Intelligence for Arizona Regions & Counties.
 * Prevents Google duplicate content penalties by injecting genuine localized entities,
 * geological data, water utilities, water hardness ratings, and foundation dynamics.
 */

export interface RegionalContext {
  regionName: string;
  counties: string[];
  waterSource: string;
  waterHardnessGPG: string;
  waterHardnessDesc: string;
  soilFoundationProfile: string;
  climateThermalStress: string;
  housingEraProfile: string;
  primaryHighwayCorridors: string[];
  localWaterUtility: string;
  plumbingRiskFocus: string;
  faqs: { q: string; a: string }[];
}

export const regionalContextMap: Record<string, RegionalContext> = {
  // 1. GREATER PHOENIX & MARICOPA COUNTY
  maricopa_metro: {
    regionName: 'Greater Phoenix Metro',
    counties: ['Maricopa'],
    waterSource: 'Central Arizona Project (CAP) canal water blended with Salt River Project (SRP) reservoirs and municipal deep aquifers.',
    waterHardnessGPG: '15 to 22 GPG (Grains Per Gallon)',
    waterHardnessDesc: 'Extremely Hard. Contains heavy concentrations of dissolved calcium carbonate and magnesium.',
    soilFoundationProfile: 'Post-tension concrete slabs constructed over expansive caliche and alluvial clay beds that shift between wet and dry seasons.',
    climateThermalStress: 'Triple-digit desert summers with 110°F+ ambient temperatures that overheat attic cavities, wall chases, and soften conventional wax seals.',
    housingEraProfile: 'Ranging from 1950s historic cast-iron homes in Central Phoenix/Tempe to modern post-2000 master-planned builds in the outer corridors.',
    primaryHighwayCorridors: ['Loop 101', 'Loop 202', 'I-10', 'I-17', 'SR-51', 'Loop 303'],
    localWaterUtility: 'City of Phoenix Water Services / Municipal Water Utilities',
    plumbingRiskFocus: 'Siphon jet calcification, chloramine oxidation of rubber flappers, and high municipal pressure spikes exceeding 85 PSI.',
    faqs: [
      {
        q: 'Why do toilets in this area develop thick white or brown crust inside the bowl?',
        a: 'The white or brownish crust is rock-hard calcium carbonate (calcite) and magnesium precipitated from the municipal CAP and Salt River water blend. As water flushes and evaporates around the rim jets and bottom siphon orifice, mineral crystals bond tenaciously to the unglazed porcelain, choking water delivery velocity.',
      },
      {
        q: 'How does high summer desert heat affect toilet tank parts in Maricopa County?',
        a: 'During summer months, interior water supply lines heat up significantly, and bathroom wall cavities can stay above 100°F. This thermal stress causes standard neoprene flappers to become gummy and warp, while traditional beeswax closet rings can liquefy and slump, breaking the sanitary base seal.',
      },
      {
        q: 'Why does my toilet shake or rock on finished floor tile?',
        a: 'Rocking bowls on concrete slab foundations indicate either sheared closet bolts or a cracked PVC/cast-iron closet flange collar caused by expansive soil movement. A rocking fixture must be leveled and anchored immediately to prevent the porcelain base from fracturing.',
      },
    ],
  },

  // 2. SOUTHERN ARIZONA & PIMA COUNTY (Tucson, Marana, Sahuarita, Sierra Vista, etc.)
  southern_sonoran: {
    regionName: 'Southern Arizona & Sonoran Foothills',
    counties: ['Pima', 'Cochise', 'Santa Cruz'],
    waterSource: 'Tucson Water CAP recharge through Avra Valley spreading basins combined with regional deep Sonoran basin groundwater.',
    waterHardnessGPG: '12 to 18 GPG',
    waterHardnessDesc: 'Very Hard. High alkaline mineral solids with localized silica deposits.',
    soilFoundationProfile: 'Dense cemented caliche hardpan and alluvial soils, frequently causing severe ground movement around drain laterals.',
    climateThermalStress: 'Intense high-desert sun, seasonal monsoon moisture surges, and rapid diurnal temperature drops of 30°F+ between day and night.',
    housingEraProfile: 'Extensive mid-century 1950s-1970s territorial ranch homes with vintage cast-iron and clay sewer pipes alongside contemporary foothills custom builds.',
    primaryHighwayCorridors: ['I-10 Corridor', 'I-19', 'SR-77 (Oracle Rd)', 'SR-86', 'Highway 90'],
    localWaterUtility: 'Tucson Water Department / Regional Water Companies',
    plumbingRiskFocus: 'Cast-iron closet flange rot, caliche soil pipe shearing, and mineral crusting on intake valves.',
    faqs: [
      {
        q: 'Why do mid-century homes in Southern Arizona have chronic toilet base leaks?',
        a: 'Homes built between 1950 and 1980 in Pima and Cochise counties commonly feature cast-iron closet flanges sealed with lead-and-oakum joints. Decades of sewer moisture and caliche soil movement cause the cast-iron lips to corrode away, leaving closet bolts with nothing to grip.',
      },
      {
        q: 'Does Tucson water require special toilet rebuild components?',
        a: 'Yes. The blended CAP and groundwater supply carries both dissolved calcite and disinfectant chloramines. We exclusively install commercial-grade silicone flappers and stainless steel supply lines that resist chemical breakdown and mineral pitting.',
      },
      {
        q: 'How do monsoon moisture cycles impact toilet drain lines in Southern Arizona?',
        a: 'Heavy summer monsoon rains saturate dry caliche clay, causing ground swelling that shifts monolithic slabs and stresses underground DWV pipes. If you notice sewer odors or toilet gurgling after a summer storm, your base wax seal or vent stack may be compromised.',
      },
    ],
  },

  // 3. CENTRAL ARIZONA & PINAL COUNTY (Casa Grande, Maricopa, Apache Junction, Florence, Coolidge)
  central_agricultural: {
    regionName: 'Central Arizona Valley & Pinal Basin',
    counties: ['Pinal'],
    waterSource: 'Deep valley alluvial aquifers and agricultural groundwater basins supplemented by regional irrigation project allocations.',
    waterHardnessGPG: '18 to 28+ GPG',
    waterHardnessDesc: 'Extremely Severe Hardness. Some of the highest mineral and dissolved solid concentrations in Arizona.',
    soilFoundationProfile: 'Expansive agricultural silt, alluvial desert clay, and deep caliche layers subject to ground subsidence and foundation settling.',
    climateThermalStress: 'Exposed open valley desert conditions with summer temperatures reaching 118°F and intense thermal radiation.',
    housingEraProfile: 'Rapid post-2000 suburban expansion with modern residential subdivisions alongside rural acreage properties.',
    primaryHighwayCorridors: ['I-10', 'SR-347', 'SR-287', 'US-60 Superstition Freeway', 'Hunt Highway'],
    localWaterUtility: 'Arizona Water Company / Pinal County Water Resources',
    plumbingRiskFocus: 'Rapid fill valve failure within 18 months, extreme siphon jet choking, and foundation shift collar fractures.',
    faqs: [
      {
        q: 'Why do toilet fill valves fail so rapidly in Pinal County communities?',
        a: 'Pinal County tap water carries extraordinary mineral hardness (frequently 22+ GPG). Fine calcium grit enters the intake valve and scores the delicate internal rubber diaphragm, causing loud shrieking, continuous running, or sudden shutoff failure.',
      },
      {
        q: 'What causes toilets to rock or tilt in newly developed subdivisions?',
        a: 'Many modern master-planned communities in Central Arizona were constructed over former agricultural fields. Natural soil settlement and soil moisture fluctuations cause subtle slab movement that breaks the plastic closet flange ring beneath your toilet.',
      },
      {
        q: 'Can high water pressure in Central Arizona damage toilet tanks?',
        a: 'Yes. Municipal pressure surges can spike above 90 PSI in fast-growing utility zones. Excess pressure blows out tank flappers and can rupture flexible supply lines, creating an immediate bathroom flood risk.',
      },
    ],
  },

  // 4. VERDE VALLEY & CENTRAL/NORTHERN ARIZONA (Prescott, Sedona, Cottonwood, Camp Verde, Chino Valley)
  verde_valley: {
    regionName: 'Verde Valley & Bradshaw Mountain Foothills',
    counties: ['Yavapai'],
    waterSource: 'Verde River watershed, Big Chino aquifer, and private deep mountain well systems.',
    waterHardnessGPG: '10 to 17 GPG',
    waterHardnessDesc: 'Moderately to Very Hard. Mineral composition includes volcanic basalt minerals and calcium bicarbonate.',
    soilFoundationProfile: 'Decomposed granite bedrock, volcanic clay, and raised stem-wall foundations with crawlspaces on sloping grades.',
    climateThermalStress: 'Four-season climate at 3,300 to 5,400 feet elevation with freezing winter nights (18°F to 28°F) and warm summer days.',
    housingEraProfile: 'Custom hillside stone and timber homes, historic Victorian residences in Prescott, and Verde Valley ranch properties.',
    primaryHighwayCorridors: ['SR-89', 'SR-89A', 'SR-69', 'SR-260', 'I-17 corridor'],
    localWaterUtility: 'City of Prescott Water / Verde Valley Water Utilities',
    plumbingRiskFocus: 'Thermal shock porcelain cracking, frozen crawlspace supply stops, and well sediment infiltration.',
    faqs: [
      {
        q: 'Why do toilet porcelain tanks crack in Yavapai County during winter?',
        a: 'In winter, overnight temperatures in Prescott and the Verde Valley drop below freezing. Cold incoming well water entering a warm bathroom creates intense thermal gradient shock across ceramic tanks, triggering hairline fractures near bottom bolt penetrations.',
      },
      {
        q: 'How does well water in the Verde Valley affect internal toilet parts?',
        a: 'Private wells and local mountain water contain fine silica and sediment that bypasses simple filtration, eroding rubber flappers and causing fill valves to stick open or leak phantom flushes.',
      },
      {
        q: 'What should homeowners do if a toilet supply line runs through an unheated crawlspace?',
        a: 'Supply lines in raised crawlspaces must be insulated with closed-cell elastomeric foam. We also install commercial quarter-turn brass ball valves that withstand freezing stresses better than older multi-turn compression valves.',
      },
    ],
  },

  // 5. HIGH COUNTRY & NORTHERN ARIZONA (Flagstaff, Williams, Page, Grand Canyon, Show Low, Snowflake)
  high_country_mountain: {
    regionName: 'High Country Plateau & White Mountains',
    counties: ['Coconino', 'Navajo'],
    waterSource: 'Coconino Sandstone Aquifer (C-Aquifer), Inner Basin snowmelt springs, and Lake Mary municipal surface reservoir.',
    waterHardnessGPG: '5 to 10 GPG',
    waterHardnessDesc: 'Moderate Hardness. Highly variable seasonally during heavy winter snowmelt.',
    soilFoundationProfile: 'Basalt volcanic rock, cinder loam, deep frost-depth perimeter stem walls, and full basement foundations.',
    climateThermalStress: 'Alpine climate at 6,500 to 7,200+ feet elevation. Heavy winter snow, sub-zero cold (-10°F to 15°F), and intense freeze-thaw cycles.',
    housingEraProfile: 'Alpine cabins, timber frame lodges, mountain craftsman homes, and rural septic-served mountain estates.',
    primaryHighwayCorridors: ['I-40', 'I-17', 'US-180', 'US-89', 'Route 66', 'SR-260'],
    localWaterUtility: 'City of Flagstaff Water Services / Northern AZ Utilities',
    plumbingRiskFocus: 'Sub-zero freeze fractures of angle stop valves, cold-brittle wax ring detachment, and septic back-venting.',
    faqs: [
      {
        q: 'Why did my toilet base seal leak after a sub-zero winter storm?',
        a: 'Standard petroleum beeswax becomes brittle and loses all plasticity at sub-freezing temperatures. When floors contract during extreme winter freezes, the hardened wax ring cracks and fails to reseal. We install synthetic elastomeric gaskets that maintain flexibility down to -30°F.',
      },
      {
        q: 'How do I protect my toilet plumbing when winterizing a mountain cabin?',
        a: 'When vacating an unheated high-country cabin, turn off the main water, flush the toilet to empty the tank, sponge out residual water, and pour non-toxic RV plumbing antifreeze into the bowl trapway to prevent freezing porcelain breakage.',
      },
      {
        q: 'Why does my mountain home toilet flush poorly during heavy winter snow?',
        a: 'Heavy snow accumulations on your roof can bury the plumbing vent pipe termination. Without atmospheric venting, toilet flushes suffer from hydraulic air-lock, causing sluggish draining or bubbling in nearby bathtub drains.',
      },
    ],
  },

  // 6. COLORADO RIVER CORRIDOR & WESTERN ARIZONA (Lake Havasu City, Bullhead City, Kingman, Parker, Yuma)
  colorado_river_west: {
    regionName: 'Western Desert & Colorado River Corridor',
    counties: ['Mohave', 'La Paz', 'Yuma'],
    waterSource: 'Colorado River surface withdrawals and deep alluvial desert aquifers along the river basin.',
    waterHardnessGPG: '18 to 30+ GPG',
    waterHardnessDesc: 'Extremely Hard & Saline. Elevated dissolved mineral salts, calcium, and municipal chlorine treatment.',
    soilFoundationProfile: 'Desert wash gravels, sand alluvium, and monolithic concrete slabs exposed to extreme ground surface heat.',
    climateThermalStress: 'Record-setting summer heat (118°F to 125°F) with virtually zero humidity, causing rapid evaporation of standing water.',
    housingEraProfile: 'Vacation river homes, snowbird winter residences, manufactured homes, and RV resort properties.',
    primaryHighwayCorridors: ['Highway 95', 'I-40', 'I-8', 'Route 66', 'SR-68'],
    localWaterUtility: 'City of Lake Havasu City / Yuma Utilities / EPCOR Water',
    plumbingRiskFocus: 'Trap evaporation during summer vacancy, severe silica scale buildup, and wax ring liquefaction.',
    faqs: [
      {
        q: 'Why does my vacation home smell like sewer gas when returning for the winter season?',
        a: 'In extreme western Arizona summer heat (120°F+), standing water inside the toilet trap evaporates in less than three weeks. Without water in the P-trap, sewer gases flow freely into your home. Adding a mineral oil vapor barrier before leaving prevents evaporation.',
      },
      {
        q: 'Why do flappers in river towns deteriorate within one year?',
        a: 'Colorado River municipal treatment requires elevated chlorine to combat warm water bacteria. Combined with extreme dissolved mineral salts, standard rubber flappers dissolve into a black tarry film that causes continuous leaks.',
      },
      {
        q: 'Can extreme heat melt the wax ring under my toilet in Western Arizona?',
        a: 'Yes. With slab temperatures reaching high levels in non-air-conditioned homes during summer, traditional wax rings melt, slip out from under the flange collar, and allow sewage seepage when winter residents return.',
      },
    ],
  },

  // 7. GILA VALLEY & SOUTHEASTERN MINING BASIN (Safford, Globe, Clifton, Morenci, Willcox, Miami, Benson)
  southeast_basin: {
    regionName: 'Gila Valley & Eastern Mountain Basin',
    counties: ['Gila', 'Graham', 'Greenlee'],
    waterSource: 'Upper Gila River basin groundwater, San Carlos reservoir watershed, and mountain aquifer springs.',
    waterHardnessGPG: '14 to 21 GPG',
    waterHardnessDesc: 'Very Hard. Mineral-rich mountain runoff with localized copper and iron mineral content.',
    soilFoundationProfile: 'Alluvial valley riverbeds, hard rock foothill slopes, and mixed historic foundation footings.',
    climateThermalStress: 'Wide elevation shifts from valley floors to mountain communities, with sharp thermal swings and monsoon flood events.',
    housingEraProfile: 'Historic mining era bungalows (1920s-1950s) with original lead/oakum plumbing alongside rural valley ranch properties.',
    primaryHighwayCorridors: ['US-70', 'US-60', 'SR-77', 'SR-191'],
    localWaterUtility: 'City of Safford Utilities / Regional Water Companies',
    plumbingRiskFocus: 'Galvanized and cast-iron DWV deterioration, wooden subfloor flange rot, and mineral scaling.',
    faqs: [
      {
        q: 'Why do older homes in historic mining communities experience toilet flange collapse?',
        a: 'Historic homes in Globe, Miami, Clifton, and Morenci often feature tongue-and-groove wooden subfloors. A minor undetected wax seal leak slowly rots the subfloor timber around the closet flange, causing the entire toilet to tilt or sink.',
      },
      {
        q: 'How does mineral-rich river basin water affect flush velocity?',
        a: 'The high calcium and mineral salt content in the Gila River basin encrusts internal toilet siphon jets. We use specialized mechanical descaling tools to bore out the jet channel without scratching the porcelain.',
      },
      {
        q: 'What type of shutoff valve works best in older Eastern Arizona homes?',
        a: 'Older multi-turn compression valves freeze up from mineral corrosion and leak when turned. We replace them with solid brass, quarter-turn ball valves that do not seize over time.',
      },
    ],
  },
};

/**
 * Helper to match any city to its most accurate RegionalContext based on county and region.
 */
export function getCityRegionalContext(county: string, region: string): RegionalContext {
  const c = county.toLowerCase();
  const r = region.toLowerCase();

  if (c.includes('maricopa')) {
    return regionalContextMap.maricopa_metro;
  }
  if (c.includes('pima') || c.includes('santa cruz') || c.includes('cochise')) {
    return regionalContextMap.southern_sonoran;
  }
  if (c.includes('pinal')) {
    return regionalContextMap.central_agricultural;
  }
  if (c.includes('yavapai')) {
    return regionalContextMap.verde_valley;
  }
  if (c.includes('coconino') || c.includes('navajo') || c.includes('apache')) {
    return regionalContextMap.high_country_mountain;
  }
  if (c.includes('mohave') || c.includes('la paz') || c.includes('yuma')) {
    return regionalContextMap.colorado_river_west;
  }
  if (c.includes('gila') || c.includes('graham') || c.includes('greenlee')) {
    return regionalContextMap.southeast_basin;
  }

  // Default fallback
  return regionalContextMap.maricopa_metro;
}
