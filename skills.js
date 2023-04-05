let skills = [
    {
        name: 'Body Slam',
        element: 'Neutral',
        type: 'Physical',
        power: 80,
        accuracy: 100,
        range: 1,
        areatype: 'forward',
        blockedByObstacles: true,
        secondaryEffect: 'none',
        cost: 1,
        description: `The Manamal throws itself at its opponent with its full body. Depending on the attributes of either side, damage
                      may be done either way. If the attacker is larger, it pushes the smaller Manamal back 1 square and takes its spot`
    },{
        name: 'Foul Breath',
        element: 'Neutral',
        type: 'Special',
        power: 85,
        accuracy: 100,
        range: 1,
        areatype: 'forward spread',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 2,
        description: `The Manamal exhales a cloud of foul-smelling air in a burst in front of it, causing a chance for the enemy to
                      be repulsed and try to move away from the attacker for 2 turns`
    },{
        name: 'Claw',
        element: 'Neutral',
        type: 'Physical',
        power: 85,
        accuracy: 100,
        range: 1,
        areatype: 'forward',
        blockedByObstacles: true,
        secondaryEffect: 'none',
        cost: 1,
        description: `The Manamal lashes out with its claws`
    },{
        name: 'Tail Whip',
        element: 'Neutral',
        type: 'Physical',
        power: 70,
        accuracy: 100,
        range: 1,
        areatype: 'forward & diagonal',
        blockedByObstacles: true,
        secondaryEffect: 'none',
        cost: 1,
        description: `The Manamal uses its tail to lash at the enemy`
    },{
        name: 'Fly',
        element: 'Winged',
        type: 'Physical',
        power: 0,
        accuracy: 0,
        range: 0,
        areatype: 'none',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 3,
        description: `The Manamal uses its wings to fly. Adds 6 squares to the creature's movement`
    },{
        name: 'Bite',
        element: 'Neutral',
        type: 'Physical',
        power: 100,
        accuracy: 95,
        range: 1,
        areatype: 'forward spread',
        blockedByObstacles: true,
        secondaryEffect: 'none',
        cost: 1,
        description: `The Manamal instantly lunges to bite the enemy`
    },{
        name: 'Whirlpool',
        element: 'Water',
        type: 'Special',
        power: 100,
        accuracy: 100,
        range: 2
        areatype: 'radius',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 4,
        description: `Can only be activated in water. The Manamal spins rapidly, forming a worldpool that damages enemies and drags them toward
                      the center. The whirlpool lasts 3 rounds, or until the Manamal leaves the water tile`
    },{
        name: 'Piercing Scream',
        element: 'Neutral',
        type: 'Special',
        power: 0,
        accuracy: 100,
        range: 3,
        areatype: 'forward',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 2,
        description: `The Manamal lets out an ear-splitting shreik that disorients any opponent within range. Its defense will be lowered`
    },{
        name: 'Burning Breath',
        element: 'Fire',
        type: 'Physical',
        power: 110,
        accuracy: 80,
        range: 3,
        areatype: 'forward',
        blockedByObstacles: true,
        secondaryEffect: 'Burn',
        secondaryChance: 33,
        cost: 2,
        description: `The Manamal sprays forward a stream of fire. This has a chance to burn the enemy`
    },{
        name: 'Water Bullet',
        element: 'Water',
        type: 'Physical',
        power: 100,
        accuracy: 100,
        range: 4,
        areatype: 'Queen',
        blockedByObstacles: true,
        secondaryEffect: 'none',
        cost: 2,
        description: `The Manamal shoots pressurised water at its enemy`
    },{
        name: 'Vine Lash',
        element: 'Plant',
        type: 'Physical',
        power: 100,
        accuracy: 100,
        range: 3,
        areatype: 'Rook',
        blockedByObstacles: true,
        secondaryEffect: 'none',
        cost: 2,
        description: `The Manamal uses vines to lash out at its enemy`
    },{
        name: 'Iron Sights',
        element: 'Metal',
        type: 'none',
        power: 0,
        accuracy: 200,
        range: 0,
        areatype: 'self',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 1,
        description: `The Manamal locks onto its target, making its next attack have double accuracy. However, its defense is reduced to half`
    },{
        name: 'Void Eyes',
        element: 'Paranormal',
        type: 'none',
        power: 0,
        accuracy: 100,
        range: 2,
        areatype: 'Rook',
        blockedByObstacles: true,
        secondaryEffect: 'none',
        cost: 2,
        description: `The Manamal uses its dark, unsettling eyes to lure its prey into a trance, making it easier to hunt it. If affected,
                      the enemy's movements will be reduced by 2`
    },{
        name: 'Haustorium',
        element: 'Plant',
        type: 'Special',
        power: 50,
        accuracy: 200,
        range: 2,
        areatype: 'radius',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 3,
        description: `The Manamal surrounds itself with hiden, specialised roots that attach to any Manamals nearby. They steadily leech health
                      from the enemy, strengthening the Manamal. The more enemies that are within range, the greater healing factor this
                      becomes. Once activated, the Manamal will lose this effect if they leave its area of effect`
    },{
        name: 'Wing Attack',
        element: 'Winged',
        type: 'Physical',
        power: 100,
        accuracy: 90,
        range: 1
        areatype: 'Rook',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 1,
        description: `The Manamal flies into the sky, then dives, using its momentum to strike at its enemy. Smaller enemies may be pushed back
                      1 square`
    },{
        name: 'Black Magic',
        element: 'Magic',
        type: 'Special',
        power: 80,
        accuracy: 100,
        range: 2
        areatype: 'radius',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 3,
        description: `The Manamal calls upon dark powers to lay a curse on surrounding enemies, dealing damage over 3 turns`
    },{
        name: 'Ritual',
        element: 'Magic',
        type: 'Special',
        power: 0,
        accuracy: 200,
        range: 0,
        areatype: 'self',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 2,
        description: `The Manamal performs a complex series of movements that activate pathways within its own body, boosting its attack and
                      movement for the duration of combat`
    },{
        name: 'Cleanse',
        element: 'Magic',
        type: 'Special',
        power: 0,
        accuracy: 200,
        range: 1,
        areatype: 'radius',
        blockedByObstacles: true,
        secondaryEffect: 'none',
        cost: 2,
        description: `The Manamal spreads Mana-infused water over itself and any allies within range, cleansing them of any status-altering
                      conditions`
    },{
        name: 'Greek Fire',
        element: 'Fire',
        type: 'Special',
        power: 60,
        accuracy: 100,
        range: 3,
        areatype: 'forward',
        blockedByObstacles: true,
        secondaryEffect: 'Burn',
        secondaryChance: 100,
        cost: 2,
        description: `The Manamal throws a fluid onto its enemy, which catches the creature on fire. It will dissipate after 3 turns, and
                      cannot be cleansed`
    },{
        name: 'Seed Bomb',
        element: 'Plant',
        type: 'Physical',
        power: 100,
        accuracy: 100,
        range: 3,
        areatype: 'radius',
        blockedByObstacles: true,
        secondaryEffect: 'none',
        cost: 2,
        description: `The Manamal scatters seeds in an area around itself, sticking to any enemies within range. They will deal a small
                      amount of damage for 3 turns. After 3 turns they will explode, harming the enemy and any enemy within 1 tile of
                      them, including the Manamal who used this skill. Seed bombs will be removed if a creature is burning`
    },{
        name: 'Breeze',
        element: 'Wind',
        type: 'Special',
        power: 0,
        accuracy: 200,
        range: 3,
        areatype: 'self and allies',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 2,
        description: `The Manamal conjures up a light breeze to stir behind itself and allies, granting them an extra movement point
                      for their next turn`
    },{
        name: 'Gas Bomb',
        element: 'Natural',
        type: 'Special',
        power: 100,
        accuracy: 200,
        range: 2,
        areatype: 'radius',
        blockedByObstacles: false,
        secondaryEffect: 'none',
        cost: 3,
        description: `The Manamal releases a thick cloud of noxious gas. Any enemies without Stong Stomach, Repulsive, or Nodeblind attributes
                      will take damage. If this cloud touches flame, it may explode`
    }
];

// Each Manamal has only 1 attribute, except Mana Beasts that have 2
let attributes = [
    { name: 'Hydrophobic', desc: `This Manamal despises water and will struggle to operate in it. On Dry land, they gain a movement bonus`},
    { name: 'Slime Skin', desc: `This Manamal cannot be grabbed or bound`},
    { name: 'Great Swimmer', desc: `This Manamal gains a movement bonus in water tiles`},
    { name: 'Burning Body', desc: `This Manamal exhudes a heat or cold so extreme it will burn any opponent that touches it, if they are not a fire or water type`},
    { name: 'Poison Fangs', desc: `This Manamal inflicts poison for 3 turns if it uses a Bite attack`},
    { name: 'Clear Body', desc: `This Manamal becomes invisible when in water`},
    { name: 'Resistance', desc: `This Manamal cannot become poisoned`},
    { name: 'Unshakable', desc: `This Manamal is unaffected by stat changes (attack / defense / sp-attack / sp-defense / speed)`},
    { name: 'Deep Diver', desc: `This Manamal cannot be attacked while in water, except by creatures that also have Deep Diver`},
    { name: 'Black Magic', desc: `This Manamal's Magic attacks gain the Paranormal attribute`},
    { name: 'Flexible', desc: `This Manamal is very pliant despite its size. It can pass through single tile spaces or diagonally between obstacles`},
    { name: 'Airborne', desc: `This Manamal rarely touches the ground. It will ignore terrain obstacles unless grounded`},
    { name: 'Thin-Skinned', desc: `This Manamal takes increased damage from attacks, but its own attacks increase from the damage it takes`},
    { name: 'Consume', desc: `This Manamal has a 20% chance to swallow a smaller enemy in front of them, dealing double Bite damage per turn. It cannot move until it either kills the enemy or spits it out`},
    { name: 'Repulsive', desc: `This Manamal deals a small amount of damage to any nearby enemies (if they don't have Repulsive or Strong Stomach attributes)`},
    { name: 'Strong Stomach', desc: `This Manamal is not affected by Repulsive creatures, noxious fumes or slimed tiles`},
    { name: 'Patience', desc: `This Manamal will get double MP if it has 2 or more MP left at the end of its last turn`},
    { name: 'Dreamer', desc: `This Manamal can move & attack while asleep. It will also heal a small amount each turn`},
    { name: 'Noseblind', desc: `This Manamal doesn't break or can't smell. It is not affected by odor-based attacks`},
    { name: 'Swift', desc: `This Manamal gets a speed bonus across all terrain except water`},
    { name: 'Toxic Slime', desc: `This Manamal poisons the attacker when attacked with physical skills`},
    { name: 'Deep Focus', desc: `This Manamal cannot be interrupted from attacks that require build-up`},
    { name: 'Drowsy', desc: `This Manamal will fall asleep every 3 turns for 3 turns. When they awake, they will have full HP`},
    { name: 'Prickly', desc: `This Manamal has sharp thorns on its skin that will deal minor damage to nearby enemies`},
    { name: 'Thick Hide', desc: `This Manamal has thick skin. Only 20% of can harm it, and those that do only deal half damage`}
];

// Manamals have 2 randomly selected Personality Traits
let personality = [
    { name: 'Spunky',  bonus: ['Attack', 'SPAttack'], penalty: ['Defense']},
    { name: 'Sweet',   bonus: ['Bonding'], penalty: ['Attack', 'SPAttack']},
    { name: 'Lazy',    bonus: ['Defense'], penalty: ['Speed']},
    { name: 'Aloof',   bonus: ['SPAttack', 'SPDefense'], penalty: ['Speed']},
    { name: 'Grouchy', bonus: ['Attack', 'Defense'], penalty: ['SPDefense']},
    { name: 'Loud',    bonus: ['Attack', 'SPAttack'], penalty: ['Defense']},
    { name: 'Ditzy',   bonus: ['Speed'], penalty: ['Defense', 'SPDefense']},
    { name: 'Lively',  bonus: ['Speed', 'Bonding'], penalty: ['SPAttack', 'SPDefense']},
    { name: 'Clingy',  bonus: ['Bonding'], penalty: ['Attack', 'SPAttack', 'Defense', 'SPDefense', 'Speed', 'Comfort in Crystal', 'XP gain']},
    { name: 'Cold',    bonus: ['Attack', 'SPAttack', 'Defense', 'SPDefense', 'Speed', 'Comfort in Crystal', 'XP gain'], penalty: ['Bonding']},
    { name: 'Hardy',   bonus: ['Attack', 'SPAttack', 'Defense', 'SPDefense', 'Bonding', 'Comfort in Crystal', 'XP gain'], penalty: ['Speed']},
    { name: 'Cruel',   bonus: ['Attack', 'SPAttack', 'Defense', 'SPDefense', 'Speed', 'Comfort in Crystal', 'XP gain'], penalty: ['Bonding']},
    { name: 'Fierce',  bonus: ['Attack', 'SPAttack'], penalty: ['Speed']},
    { name: 'Gentle',  bonus: ['Defense', 'SPDefense'], penalty: ['Attack', 'SPAttack']},
    { name: 'Wild',    bonus: ['Attack', 'Defense'], penalty: ['Bonding']},
    { name: 'Tame',    bonus: ['Bonding'], penalty: ['Defense', 'SPDefense']},
    { name: 'Fearful', bonus: ['Attack', 'Defense'], penalty: ['Bonding']},
    { name: 'Timid',   bonus: ['Defense'], penalty: ['Attack']},
    { name: 'Messy',   bonus: ['Comfort in Crystal'], penalty: ['Speed']},
    { name: 'Picky',   bonus: ['XP gain'], penalty: ['Bonding', 'Comfort in Crystal']}
];


