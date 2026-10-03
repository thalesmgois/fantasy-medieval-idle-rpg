const classDefs = {
  mage: {
    name: 'Mago',
    baseStats: { attack: 42, defense: 18, hp: 160, crit: 0.08, speed: 1.2 },
    branches: [
      { name: 'Arcanista', attack: 10, defense: 5, hp: 15, crit: 2, speed: 6 },
      { name: 'Místico', attack: 25, defense: 10, hp: 30, crit: 4, speed: 10 },
      { name: 'Elemental', attack: 42, defense: 16, hp: 55, crit: 7, speed: 15 },
      { name: 'Lâmina Arcana', attack: 60, defense: 22, hp: 80, crit: 10, speed: 20 },
      { name: 'Oráculo', attack: 80, defense: 30, hp: 110, crit: 15, speed: 24 },
      { name: 'Arcano Supremo', attack: 110, defense: 44, hp: 150, crit: 20, speed: 32 }
    ]
  },
  archer: {
    name: 'Arqueiro',
    baseStats: { attack: 50, defense: 16, hp: 145, crit: 0.1, speed: 1.4 },
    branches: [
      { name: 'Rastreador', attack: 12, defense: 6, hp: 10, crit: 3, speed: 7 },
      { name: 'Caçador', attack: 28, defense: 12, hp: 20, crit: 5, speed: 12 },
      { name: 'Flecha do Vento', attack: 44, defense: 16, hp: 45, crit: 8, speed: 17 },
      { name: 'Atirador', attack: 64, defense: 22, hp: 70, crit: 12, speed: 22 },
      { name: 'Sentinela das Estrelas', attack: 84, defense: 28, hp: 90, crit: 16, speed: 28 },
      { name: 'Guerreiro do Alvorecer', attack: 118, defense: 36, hp: 120, crit: 22, speed: 34 }
    ]
  },
  guardian: {
    name: 'Guardião',
    baseStats: { attack: 38, defense: 30, hp: 220, crit: 0.05, speed: 0.95 },
    branches: [
      { name: 'Escudeiro', attack: 8, defense: 12, hp: 20, crit: 1, speed: 3 },
      { name: 'Sentinela', attack: 18, defense: 24, hp: 38, crit: 2, speed: 5 },
      { name: 'Bastião', attack: 32, defense: 42, hp: 65, crit: 3, speed: 8 },
      { name: 'Protetor', attack: 48, defense: 58, hp: 90, crit: 4, speed: 11 },
      { name: 'Titã', attack: 66, defense: 74, hp: 130, crit: 6, speed: 15 },
      { name: 'Guardião Ancestral', attack: 90, defense: 95, hp: 170, crit: 8, speed: 18 }
    ]
  },
  swordsman: {
    name: 'Espadachim',
    baseStats: { attack: 58, defense: 22, hp: 180, crit: 0.09, speed: 1.1 },
    branches: [
      { name: 'Duelista', attack: 14, defense: 8, hp: 12, crit: 2, speed: 6 },
      { name: 'Cortador', attack: 30, defense: 14, hp: 28, crit: 4, speed: 10 },
      { name: 'Espada Rúnica', attack: 46, defense: 20, hp: 52, crit: 7, speed: 15 },
      { name: 'Vanguardista', attack: 66, defense: 28, hp: 78, crit: 10, speed: 20 },
      { name: 'Cósmico', attack: 86, defense: 35, hp: 110, crit: 14, speed: 25 },
      { name: 'Exterminador', attack: 120, defense: 45, hp: 150, crit: 18, speed: 30 }
    ]
  }
};

const skillNodes = [
  { id: 'atk_1', name: 'Fúria do Ferro', type: 'attack', value: 100, gold: 180, crystal: null, crystalType: null },
  { id: 'def_1', name: 'Escudo Coração', type: 'defense', value: 90, gold: 180, crystal: null, crystalType: null },
  { id: 'hp_1', name: 'Vitalidade', type: 'hp', value: 180, gold: 200, crystal: null, crystalType: null },
  { id: 'crit_1', name: 'Olhando o Vazio', type: 'crit', value: 5, gold: 250, crystal: null, crystalType: null },
  { id: 'atk_2', name: 'Golpe de Primeira', type: 'attack', value: 220, gold: 520, crystal: null, crystalType: null, prereq: 'atk_1' },
  { id: 'def_2', name: 'Muralha', type: 'defense', value: 170, gold: 520, crystal: null, crystalType: null, prereq: 'def_1' },
  { id: 'hp_2', name: 'Força de Vida', type: 'hp', value: 350, gold: 600, crystal: null, crystalType: null, prereq: 'hp_1' },
  { id: 'crit_2', name: 'Luz do Crítico', type: 'crit', value: 9, gold: 720, crystal: null, crystalType: null, prereq: 'crit_1' },
  { id: 'atk_special', name: 'Fúria Divina', type: 'attack', value: 500, gold: 2600, crystal: 3, crystalType: 'fire', prereq: 'atk_2' },
  { id: 'def_special', name: 'Escudo da Glória', type: 'defense', value: 500, gold: 2600, crystal: 3, crystalType: 'light', prereq: 'def_2' },
  { id: 'hp_special', name: 'Regeneração Arcana', type: 'hp', value: 900, gold: 3000, crystal: 3, crystalType: 'nature', prereq: 'hp_2' },
  { id: 'crit_special', name: 'Gatilho de Lenda', type: 'crit', value: 20, gold: 3200, crystal: 3, crystalType: 'shadow', prereq: 'crit_2' }
];

const petCatalog = [
  { id: 'fox', name: 'Raposa Cinzenta', rarity: 'common', type: 'attack', buffs: { attack: 6 } },
  { id: 'owl', name: 'Coruja Lendária', rarity: 'common', type: 'crit', buffs: { crit: 3 } },
  { id: 'wolf', name: 'Lobo de Guerra', rarity: 'uncommon', type: 'attack', buffs: { attack: 12, speed: 7 } },
  { id: 'moth', name: 'Mariposa Noturna', rarity: 'uncommon', type: 'crit', buffs: { crit: 7, attack: 8 } },
  { id: 'drake', name: 'Drake Escamado', rarity: 'rare', type: 'hp', buffs: { hp: 18, defense: 10 } },
  { id: 'serpent', name: 'Serpente de Jade', rarity: 'rare', type: 'attack', buffs: { attack: 16, crit: 8 } },
  { id: 'phoenix', name: 'Fênix', rarity: 'epic', type: 'hp', buffs: { hp: 28, attack: 15, crit: 10 } },
  { id: 'wyrm', name: 'Wyrm Sombrio', rarity: 'epic', type: 'defense', buffs: { defense: 22, hp: 18, speed: 10 } },
  { id: 'griffin', name: 'Grifo Solar', rarity: 'mythic', type: 'all', buffs: { attack: 30, defense: 24, hp: 26, crit: 12, speed: 12 } },
  { id: 'dragon', name: 'Dragão Celeste', rarity: 'legendary', type: 'all', buffs: { attack: 60, defense: 50, hp: 80, crit: 24, speed: 20 } }
];

constrarityWeight = { common: 1, uncommon: 2, rare: 3, epic: 4, mythic: 5, legendary: 6 };
const stageNames = [
  'Trilha do Breu', 'Floresta de Gelo', 'Ruínas do Sol', 'Mina das Sombras', 'Talismã Vermelho',
  'Vale do Dragão', 'Campo Cindido', 'Lago da Morte', 'Castelo do Vento', 'Cidadela de Ferro',
  'Santuário de Éter', 'Território Espectral'
];

const crystalNames = {
  fire: 'Cristal de Fogo',
  ice: 'Cristal de Gelo',
  light: 'Cristal de Luz',
  nature: 'Cristal da Natureza',
  shadow: 'Cristal Sombrio',
  void: 'Cristal do Vazio'
};

const heroNames = ['Aldric', 'Elira', 'Nara', 'Dorian', 'Ryn', 'Mira', 'Cairn', 'Veyra', 'Orrin', 'Vale', 'Tarin', 'Syra'];

const state = {
  gold: 1400,
  crystals: { fire: 0, ice: 0, light: 0, nature: 0, shadow: 0, void: 0 },
  speed: 1,
  party: [],
  inventory: [],
  selectedHeroId: null,
  skillTree: {},
  pet: null,
  stage: 1,
  enemy: null,
  log: [],
  kills: 0,
  heroCounter: 0,
  hirePrice: 250
};

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function pickFrom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function formatNumber(value) {
  return Math.floor(value).toLocaleString('pt-BR');
}

function uuid() {
  return `${Date.now()}-${Math.random().toString(16).slice(2)}-${state.heroCounter++}`;
}

function createHero(classId, name = pickFrom(heroNames)) {
  const def = classDefs[classId];
  const hero = {
    id: uuid(),
    name,
    classId,
    baseClass: classId,
    level: 1,
    xp: 0,
    xpToNext: 80,
    branchIndex: 0,
    baseAttack: def.baseStats.attack + rand(8, 25),
    baseDefense: def.baseStats.defense + rand(4, 16),
    baseHp: def.baseStats.hp + rand(25, 75),
    critChance: def.baseStats.crit,
    speed: def.baseStats.speed,
    currentHp: 0,
    attackCooldown: 0,
    attackDelay: 0.8,
    alive: true,
    equipped: {}
  };
  hero.currentHp = getHeroStats(hero).hp;
  return hero;
}

function getHeroStats(hero) {
  const classDef = classDefs[hero.classId];
  const branch = classDef.branches[Math.min(hero.branchIndex, classDef.branches.length - 1)] || classDef.branches[0];
  const skillBonus = getSkillBonuses();
  const gearBonus = calculateGearBonus(hero);
  const levelScale = 1 + (hero.level - 1) * 0.085;

  const attack = (hero.baseAttack * levelScale * (1 + branch.attack / 100)) + gearBonus.attack + skillBonus.attack;
  const defense = (hero.baseDefense * levelScale * (1 + branch.defense / 100)) + gearBonus.defense + skillBonus.defense;
  const hp = (hero.baseHp * levelScale * (1 + branch.hp / 100)) + gearBonus.hp + skillBonus.hp;
  const crit = clamp((hero.critChance + branch.crit / 100 + gearBonus.crit + skillBonus.crit) / 100, 0, 0.8);
  const speed = (hero.speed * (1 + branch.speed / 200)) * (1 + gearBonus.speed / 100 + skillBonus.speed / 100);

  return { attack, defense, hp, crit, speed };
}

function calculateGearBonus(hero) {
  const gear = state.inventory.filter((item) => item.equippedTo === hero.id);
  const bonus = { attack: 0, defense: 0, hp: 0, crit: 0, speed: 0 };
  for (const item of gear) {
    if (item.stats) {
      Object.entries(item.stats).forEach(([key, value]) => {
        if (bonus[key] !== undefined) bonus[key] += value;
      });
    }
  }
  return bonus;
}

function getSkillBonuses() {
  const bonus = { attack: 0, defense: 0, hp: 0, crit: 0, speed: 0 };
  Object.entries(state.skillTree).forEach(([id, unlocked]) => {
    if (!unlocked) return;
    const node = skillNodes.find((skill) => skill.id === id);
    if (!node) return;
    bonus[node.type] += node.value;
  });
  return bonus;
}

function addLog(text) {
  state.log.unshift(text);
  state.log = state.log.slice(0, 8);
}

function buildEnemy() {
  const stageLevel = state.stage;
  const monsterPool = [
    'Goblin Pescador', 'Lobo de Ferro', 'Bárbaro Redimido', 'Espectro de Pedra', 'Mago Infeccionado',
    'Cervo Encantado', 'Sombra do Templo', 'Orc Brazileiro', 'Rato da Morte', 'Mártir do Vale'
  ];
  const name = pickFrom(monsterPool);
  const crystalKey = ['fire', 'ice', 'light', 'nature', 'shadow', 'void'][Math.floor((stageLevel - 1) % 6)];
  const maxHp = 130 + stageLevel * 55 + state.kills * 12;
  const attack = 14 + stageLevel * 7 + state.kills * 1.4;
  const armor = 4 + stageLevel * 2.4;

  return {
    name,
    hp: maxHp,
    maxHp,
    attack,
    armor,
    crystalKey,
    rewardGold: 50 + stageLevel * 22,
    rewardCrystal: stageLevel >= 4 ? 1 : 0
  };
}

function spawnEnemy() {
  state.enemy = buildEnemy();
  document.getElementById('enemyName').textContent = state.enemy.name;
  renderBattleUI();
}

function ensureParty() {
  if (state.party.length === 0) {
    state.party.push(createHero('mage', 'Arieth'));
    state.selectedHeroId = state.party[0].id;
  }
}

function canHireHero() {
  return state.party.length < 5 && state.gold >= state.hirePrice;
}

function hireHero() {
  if (!canHireHero()) {
    addLog('Faltam ouro ou o time está cheio.');
    renderAll();
    return;
  }

  const classPool = ['mage', 'archer', 'guardian', 'swordsman'];
  const chosenClass = pickFrom(classPool);
  const hero = createHero(chosenClass, `${pickFrom(heroNames)} ${state.party.length + 1}`);
  state.party.push(hero);
  state.gold -= state.hirePrice;
  state.hirePrice = Math.round(state.hirePrice * 1.25);
  state.selectedHeroId = hero.id;
  addLog(`${hero.name} entrou na equipe.`);
  renderAll();
}

function getSelectedHero() {
  return state.party.find((hero) => hero.id === state.selectedHeroId) || state.party[0] || null;
}

function chooseClass(heroId, targetClass) {
  const hero = state.party.find((h) => h.id === heroId);
  if (!hero) return;
  hero.classId = targetClass;
  hero.branchIndex = Math.min(Math.floor(hero.level / 30), classDefs[targetClass].branches.length - 1);
  hero.baseAttack += 6;
  hero.baseDefense += 4;
  hero.baseHp += 18;
  addLog(`${hero.name} agora é ${classDefs[targetClass].name}.`);
  renderAll();
}

function buySkill(skillId) {
  const skill = skillNodes.find((node) => node.id === skillId);
  if (!skill) return;
  if (state.skillTree[skill.id]) {
    addLog(`${skill.name} já foi adquirido.`);
    return;
  }

  const prereq = skill.prereq ? state.skillTree[skill.prereq] : true;
  if (!prereq) {
    addLog(`Você precisa desbloquear ${skill.prereq} antes.`);
    return;
  }

  const hasGold = state.gold >= skill.gold;
  const hasCrystal = !skill.crystal || state.crystals[skill.crystalType] >= skill.crystal;
  if (!hasGold || !hasCrystal) {
    addLog(`Recursos insuficientes para ${skill.name}.`);
    return;
  }

  state.gold -= skill.gold;
  if (skill.crystal && skill.crystalType) {
    state.crystals[skill.crystalType] -= skill.crystal;
  }

  state.skillTree[skill.id] = true;
  addLog(`${skill.name} foi adquirido.`);
  renderAll();
}

function gainHeroXp(hero, amount) {
  hero.xp += amount;
  while (hero.xp >= hero.xpToNext) {
    hero.xp -= hero.xpToNext;
    hero.level += 1;
    hero.xpToNext = Math.round(hero.xpToNext * 1.28);
    hero.branchIndex = Math.min(Math.floor(hero.level / 30), classDefs[hero.classId].branches.length - 1);
    if (hero.level >= 1500) {
      hero.level = 1500;
      hero.xp = 0;
      hero.xpToNext = 999999;
      break;
    }
  }
}

function rollPet() {
  const commonRoll = Math.random();
  let rarity = 'common';
  if (commonRoll > 0.9) rarity = 'legendary';
  else if (commonRoll > 0.75) rarity = 'mythic';
  else if (commonRoll > 0.55) rarity = 'epic';
  else if (commonRoll > 0.35) rarity = 'rare';
  else if (commonRoll > 0.18) rarity = 'uncommon';

  const candidates = petCatalog.filter((pet) => pet.rarity === rarity);
  const pet = { ...pickFrom(candidates), level: 1, maxLevel: 750 };
  state.pet = pet;
  addLog(`Você obteve ${pet.name} (${rarity}).`);
  renderAll();
}

function upgradePet() {
  if (!state.pet) {
    addLog('Nenhum pet ativo para evoluir.');
    return;
  }
  const cost = 120 + state.pet.level * 44;
  if (state.gold < cost) {
    addLog('Ouro insuficiente para evoluir o pet.');
    return;
  }
  if (state.pet.level >= state.pet.maxLevel) {
    addLog('Seu pet já atingiu o nível máximo.');
    return;
  }
  state.gold -= cost;
  state.pet.level += 1;
  addLog(`${state.pet.name} evoluiu para o nível ${state.pet.level}.`);
  renderAll();
}

function getPetBonus() {
  if (!state.pet) return { attack: 0, defense: 0, hp: 0, crit: 0, speed: 0 };
  const multiplier = 1 + (state.pet.level / 750) * 1.6;
  const bonus = { attack: 0, defense: 0, hp: 0, crit: 0, speed: 0 };
  Object.entries(state.pet.buffs).forEach(([key, value]) => {
    bonus[key] = value * multiplier;
  });
  return bonus;
}

function handleEnemyDefeat() {
  const rewardGold = state.enemy.rewardGold;
  const rewardCrystal = Math.random() < 0.55 ? 1 : 0;
  state.gold += rewardGold;
  if (rewardCrystal) state.crystals[state.enemy.crystalKey] += 1;

  state.kills += 1;
  if (state.kills % 6 === 0) {
    state.stage += 1;
    addLog(`Novo andar desbloqueado: ${stageNames[(state.stage - 1) % stageNames.length]}.`);
  }

  const xpGain = 26 + state.stage * 10;
  state.party.forEach((hero) => {
    gainHeroXp(hero, xpGain * (0.85 + Math.random() * 0.35));
  });

  if (Math.random() < 0.68) {
    const item = generateItem();
    state.inventory.push(item);
    addLog(`Drop: ${item.name}.`);
  }

  addLog(`${state.enemy.name} derrotado. +${rewardGold} ouro.`);
  spawnEnemy();
}

function generateItem() {
  const rareRoll = Math.random();
  let rarity = 'common';
  if (rareRoll > 0.92) rarity = 'legendary';
  else if (rareRoll > 0.78) rarity = 'mythic';
  else if (rareRoll > 0.6) rarity = 'epic';
  else if (rareRoll > 0.4) rarity = 'rare';
  else if (rareRoll > 0.18) rarity = 'uncommon';

  const statKeys = ['attack', 'defense', 'hp', 'crit', 'speed'];
  const stats = {};
  const randomCount = rarity === 'legendary' ? 5 : rarity === 'mythic' ? 4 : rarity === 'epic' ? 3 : 2;
  for (let i = 0; i < randomCount; i += 1) {
    const key = pickFrom(statKeys);
    const value = rarity === 'legendary' ? rand(28, 72) : rarity === 'mythic' ? rand(16, 42) : rarity === 'epic' ? rand(10, 24) : rand(5, 18);
    stats[key] = (stats[key] || 0) + value;
  }

  const slots = ['weapon', 'armor', 'ring', 'helmet', 'boots'];
  const chosenClass = pickFrom(Object.keys(classDefs));
  const item = {
    id: uuid(),
    name: `${classDefs[chosenClass].name} ${pickFrom(['Lâmina', 'Couraça', 'Anel', 'Elmo', 'Botas', 'Talismã'])} ${rarity.toUpperCase()}`,
    rarity,
    slot: pickFrom(slots),
    classId: chosenClass,
    stats,
    equippedTo: null
  };

  return item;
}

function equipItem(itemId) {
  const hero = getSelectedHero();
  if (!hero) return;
  const item = state.inventory.find((entry) => entry.id === itemId);
  if (!item) return;
  const currentEquipped = hero.equipped[item.slot];
  if (currentEquipped) {
    const oldItem = state.inventory.find((entry) => entry.id === currentEquipped);
    if (oldItem) oldItem.equippedTo = null;
  }
  item.equippedTo = hero.id;
  hero.equipped[item.slot] = item.id;
  addLog(`${item.name} equipado em ${hero.name}.`);
  renderAll();
}

function updateCombat(delta) {
  if (!state.enemy) return;
  const heroes = state.party.filter((hero) => hero.alive);
  if (heroes.length === 0) return;

  heroes.forEach((hero) => {
    hero.attackCooldown -= delta * state.speed;
    if (hero.attackCooldown <= 0) {
      const stats = getHeroStats(hero);
      const critMultiplier = Math.random() < stats.crit ? 2.0 : 1;
      let dmg = (stats.attack * (0.65 + Math.random() * 0.55)) * critMultiplier;
      dmg = Math.max(10, dmg - state.enemy.armor * 0.8 + rand(0, 20));
      state.enemy.hp = Math.max(0, state.enemy.hp - dmg);
      const critText = critMultiplier > 1 ? ' crítico!' : '';
      addLog(`${hero.name} atacou ${state.enemy.name} por ${Math.floor(dmg)}${critText}`);
      hero.attackCooldown = Math.max(0.35, 1.2 / stats.speed);
      if (state.enemy.hp <= 0) {
        handleEnemyDefeat();
        return;
      }
    }
  });

  if (!state.enemy) return;
  if (state.enemy.hp > 0) {
    const enemyAttack = state.enemy.attack * (0.8 + Math.random() * 0.7);
    heroes.forEach((hero) => {
      const stats = getHeroStats(hero);
      let heroHp = hero.currentHp || stats.hp;
      const defenseResist = Math.max(0, stats.defense * 0.8);
      const total = Math.max(3, enemyAttack - defenseResist * 0.7 + rand(-8, 10));
      hero.currentHp = Math.max(0, heroHp - total);
      if (hero.currentHp <= 0) {
        hero.currentHp = stats.hp * 0.45;
        addLog(`${hero.name} foi derrubado, mas se recuperou no campo de batalha.`);
      }
    });
  }
}

function renderParty() {
  const list = document.getElementById('partyList');
  if (!state.party.length) {
    list.innerHTML = '<div class="hero-card">Equipe vazia.</div>';
    return;
  }

  list.innerHTML = state.party.map((hero) => {
    const stats = getHeroStats(hero);
    const isSelected = hero.id === state.selectedHeroId;
    return `
      <div class="hero-card ${isSelected ? 'selected' : ''}" data-hero-id="${hero.id}">
        <div class="hero-topline">
          <span class="hero-name">${hero.name}</span>
          <span class="badge gold">Lv ${hero.level}</span>
        </div>
        <div class="hero-meta">
          <span>${classDefs[hero.classId].name}</span>
          <span>${hero.branchIndex + 1}/6</span>
        </div>
        <div class="hero-badges">
          <span class="badge">AT ${Math.floor(stats.attack)}</span>
          <span class="badge">DF ${Math.floor(stats.defense)}</span>
          <span class="badge">HP ${Math.floor(stats.hp)}</span>
        </div>
      </div>
    `;
  }).join('');

  list.querySelectorAll('.hero-card').forEach((card) => {
    card.addEventListener('click', () => {
      state.selectedHeroId = card.dataset.heroId;
      renderAll();
    });
  });
}

function renderClassTree() {
  const container = document.getElementById('classTree');
  const selectedHero = getSelectedHero();
  if (!selectedHero) {
    container.innerHTML = '<div class="class-option">Sem herói selecionado.</div>';
    return;
  }

  const items = Object.entries(classDefs).map(([id, def]) => {
    const active = selectedHero.classId === id;
    return `
      <div class="class-option ${active ? 'active' : ''}">
        <div class="class-header">
          <strong>${def.name}</strong>
          <button class="branch-btn" data-class="${id}">${active ? 'Selecionado' : 'Escolher'}</button>
        </div>
        <div class="class-branches">
          ${def.branches.map((branch, index) => `
            <button class="branch-btn ${selectedHero.branchIndex === index && active ? 'active' : ''}" data-class="${id}" data-branch="${index}">${branch.name}</button>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = items;
  container.querySelectorAll('[data-class]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const classId = btn.dataset.class;
      const branchIndex = Number(btn.dataset.branch ?? 0);
      const hero = getSelectedHero();
      if (!hero) return;
      hero.classId = classId;
      hero.branchIndex = branchIndex;
      hero.baseAttack += 5;
      hero.baseDefense += 4;
      hero.baseHp += 10;
      addLog(`${hero.name} mudou para ${classDefs[classId].name}.`);
      renderAll();
    });
  });
}

function renderSkillTree() {
  const container = document.getElementById('skillTree');
  const html = skillNodes.map((skill) => {
    const unlocked = !!state.skillTree[skill.id];
    const canBuy = !unlocked && (!skill.prereq || state.skillTree[skill.prereq]);
    const crystalText = skill.crystal ? ` + ${skill.crystal} ${crystalNames[skill.crystalType]}` : '';
    return `
      <div class="skill-item">
        <div class="skill-info">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-meta">${skill.type.toUpperCase()} +${skill.value}${crystalText} · ${formatNumber(skill.gold)} ouro</span>
        </div>
        <button data-skill="${skill.id}" ${unlocked ? 'disabled' : ''}>${unlocked ? 'OK' : canBuy ? 'Comprar' : 'Bloqueado'}</button>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
  container.querySelectorAll('[data-skill]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const skillId = btn.dataset.skill;
      buySkill(skillId);
    });
  });
}

function renderInventory() {
  const container = document.getElementById('inventoryList');
  if (!state.inventory.length) {
    container.innerHTML = '<div class="inventory-item">Nenhum item dropado ainda.</div>';
    return;
  }
  const hero = getSelectedHero();
  container.innerHTML = state.inventory.map((item) => {
    const equips = item.equippedTo === hero?.id ? 'Equipado' : 'Equipar';
    const statsText = Object.entries(item.stats).map(([key, value]) => `${key} +${Math.round(value)}`).join(' · ');
    return `
      <div class="inventory-item">
        <div class="inventory-meta">
          <span class="item-name">${item.name}</span>
          <span class="rarity-badge rarity-${item.rarity}">${item.rarity}</span>
          <span class="skill-meta">${statsText}</span>
        </div>
        <button data-item="${item.id}">${equips}</button>
      </div>
    `;
  }).join('');

  container.querySelectorAll('[data-item]').forEach((btn) => {
    btn.addEventListener('click', () => equipItem(btn.dataset.item));
  });
}

function renderPetPanel() {
  const panel = document.getElementById('petPanel');
  if (!state.pet) {
    panel.innerHTML = '<div class="pet-header"><span>Sem pet</span></div><div class="pet-stats">Gere um pet com ouro para ganhar buffs permanentes.</div>';
    return;
  }

  const bonus = getPetBonus();
  panel.innerHTML = `
    <div class="pet-header">
      <span>${state.pet.name}</span>
      <span class="rarity-badge rarity-${state.pet.rarity}">${state.pet.rarity}</span>
    </div>
    <div class="pet-stats">
      Nível ${state.pet.level}/${state.pet.maxLevel}<br>
      AT +${Math.round(bonus.attack)} · DF +${Math.round(bonus.defense)} · HP +${Math.round(bonus.hp)}<br>
      CRIT +${(bonus.crit || 0).toFixed(1)}% · SPD +${(bonus.speed || 0).toFixed(1)}%
    </div>
  `;
}

function renderBattleUI() {
  const enemy = state.enemy;
  if (!enemy) return;
  const enemyHpPercent = (enemy.hp / enemy.maxHp) * 100;
  document.getElementById('enemyName').textContent = enemy.name;
  document.getElementById('enemyLevel').textContent = `Nvl ${state.stage}`;
  document.getElementById('enemyHpText').textContent = `${Math.floor(enemy.hp)} / ${Math.floor(enemy.maxHp)}`;
  document.getElementById('enemyHealthBar').style.width = `${Math.max(0, enemyHpPercent)}%`;
  document.getElementById('stageName').textContent = stageNames[(state.stage - 1) % stageNames.length];
  document.getElementById('stageValue').textContent = String(state.stage);
}

function renderResources() {
  document.getElementById('goldValue').textContent = formatNumber(state.gold);
  const totalCrystals = Object.values(state.crystals).reduce((sum, value) => sum + value, 0);
  document.getElementById('crystalValue').textContent = formatNumber(totalCrystals);
}

function renderLog() {
  const list = document.getElementById('combatLog');
  list.innerHTML = state.log.map((entry) => `<li>${entry}</li>`).join('');
}

function renderAll() {
  renderResources();
  renderParty();
  renderClassTree();
  renderSkillTree();
  renderInventory();
  renderPetPanel();
  renderBattleUI();
  renderLog();
  document.querySelectorAll('.speed-btn').forEach((btn) => {
    btn.classList.toggle('active', Number(btn.dataset.speed) === state.speed);
  });
}

function bindEvents() {
  document.getElementById('hireHeroBtn').addEventListener('click', hireHero);
  document.getElementById('rollPetBtn').addEventListener('click', rollPet);
  document.getElementById('upgradePetBtn').addEventListener('click', upgradePet);
  document.getElementById('nextStageBtn').addEventListener('click', () => {
    state.stage += 1;
    state.kills += 2;
    spawnEnemy();
    addLog('Você avançou para um novo andar de campanha.');
    renderAll();
  });

  document.querySelectorAll('.speed-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.speed = Number(btn.dataset.speed);
      renderAll();
    });
  });
}

function gameLoop() {
  const delta = 1 / 60;
  updateCombat(delta);
  requestAnimationFrame(gameLoop);
}

function drawScene() {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = false;

  // Ground
  ctx.fillStyle = '#1b2a34';
  ctx.fillRect(0, 320, canvas.width, 100);

  // Castle / dungeon draw
  ctx.fillStyle = '#2a3a47';
  ctx.fillRect(20, 180, 120, 140);
  ctx.fillRect(54, 150, 52, 30);
  ctx.fillStyle = '#798e9c';
  ctx.fillRect(36, 195, 18, 25);
  ctx.fillRect(82, 195, 18, 25);
  ctx.fillRect(60, 120, 20, 30);

  // Enemy sprite
  const enemy = state.enemy;
  if (enemy) {
    const x = 520;
    const y = 220;
    ctx.fillStyle = '#d95f5f';
    ctx.fillRect(x, y, 60, 60);
    ctx.fillStyle = '#4e1b1b';
    ctx.fillRect(x + 16, y + 10, 10, 10);
    ctx.fillRect(x + 36, y + 10, 10, 10);
    ctx.fillStyle = '#f7d4a3';
    ctx.fillRect(x + 18, y + 26, 24, 8);
    ctx.fillStyle = '#3b1f1f';
    ctx.fillRect(x + 10, y + 52, 14, 20);
    ctx.fillRect(x + 36, y + 52, 14, 20);
  }

  // Party sprites
  state.party.forEach((hero, index) => {
    const sx = 60 + index * 100;
    const sy = 250;
    const stats = getHeroStats(hero);
    ctx.fillStyle = index % 2 === 0 ? '#88d4ff' : '#9ae789';
    ctx.fillRect(sx, sy, 48, 48);
    ctx.fillStyle = '#203142';
    ctx.fillRect(sx - 8, sy + 52, 64, 8);
    ctx.fillStyle = '#7fe39d';
    ctx.fillRect(sx - 8, sy + 52, 64 * (hero.currentHp / Math.max(1, stats.hp)), 8);
    ctx.fillStyle = '#e2f3ff';
    ctx.fillRect(sx + 12, sy + 12, 8, 8);
    ctx.fillRect(sx + 28, sy + 12, 8, 8);
  });
}

function init() {
  ensureParty();
  state.skillTree = Object.fromEntries(skillNodes.map((skill) => [skill.id, false]));
  state.enemy = buildEnemy();
  bindEvents();
  renderAll();
  requestAnimationFrame(() => {
    const interval = setInterval(() => {
      drawScene();
    }, 1000 / 30);
    return interval;
  });
  requestAnimationFrame(gameLoop);
}

init();
