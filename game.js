const STORAGE_KEY = 'fantasy_idle_rpg_save_v1';

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
  { id: 'atk_1', type: 'attack', name: 'Fúria de Ferro', value: 100, gold: 190 },
  { id: 'def_1', type: 'defense', name: 'Escudo do Coração', value: 90, gold: 190 },
  { id: 'hp_1', type: 'hp', name: 'Vitalidade', value: 180, gold: 220 },
  { id: 'crit_1', type: 'crit', name: 'Olho da Chance', value: 5, gold: 260 },
  { id: 'atk_2', type: 'attack', name: 'Golpe de Primeira', value: 220, gold: 520, prereq: 'atk_1' },
  { id: 'def_2', type: 'defense', name: 'Muralha', value: 170, gold: 520, prereq: 'def_1' },
  { id: 'hp_2', type: 'hp', name: 'Força de Vida', value: 350, gold: 600, prereq: 'hp_1' },
  { id: 'crit_2', type: 'crit', name: 'Luz do Crítico', value: 9, gold: 720, prereq: 'crit_1' },
  { id: 'atk_special', type: 'attack', name: 'Fúria Divina', value: 500, gold: 2600, crystal: 3, crystalType: 'fire', prereq: 'atk_2' },
  { id: 'def_special', type: 'defense', name: 'Escudo da Glória', value: 500, gold: 2600, crystal: 3, crystalType: 'light', prereq: 'def_2' },
  { id: 'hp_special', type: 'hp', name: 'Regeneração Arcana', value: 900, gold: 3000, crystal: 3, crystalType: 'nature', prereq: 'hp_2' },
  { id: 'crit_special', type: 'crit', name: 'Gatilho de Lenda', value: 20, gold: 3200, crystal: 3, crystalType: 'shadow', prereq: 'crit_2' }
];

const petCatalog = [
  { id: 'fox', name: 'Raposa Cinzenta', rarity: 'common', buffs: { attack: 6 } },
  { id: 'owl', name: 'Coruja das Sombras', rarity: 'common', buffs: { crit: 3 } },
  { id: 'wolf', name: 'Lobo de Guerra', rarity: 'uncommon', buffs: { attack: 12, speed: 6 } },
  { id: 'moth', name: 'Mariposa Noturna', rarity: 'uncommon', buffs: { crit: 7, attack: 8 } },
  { id: 'drake', name: 'Drake Escamado', rarity: 'rare', buffs: { hp: 18, defense: 10 } },
  { id: 'serpent', name: 'Serpente de Jade', rarity: 'rare', buffs: { attack: 16, crit: 8 } },
  { id: 'phoenix', name: 'Fênix', rarity: 'epic', buffs: { hp: 28, attack: 15, crit: 11 } },
  { id: 'wyrm', name: 'Wyrm Sombrio', rarity: 'epic', buffs: { defense: 22, hp: 18, speed: 10 } },
  { id: 'griffin', name: 'Grifo Solar', rarity: 'mythic', buffs: { attack: 30, defense: 24, hp: 26, crit: 12, speed: 12 } },
  { id: 'dragon', name: 'Dragão Celeste', rarity: 'legendary', buffs: { attack: 60, defense: 50, hp: 80, crit: 24, speed: 20 } }
];

const crystals = {
  fire: 'Cristal de Fogo',
  ice: 'Cristal de Gelo',
  light: 'Cristal de Luz',
  nature: 'Cristal da Natureza',
  shadow: 'Cristal Sombrio',
  void: 'Cristal do Vazio'
};

const heroNames = ['Aldric', 'Elira', 'Nara', 'Dorian', 'Ryn', 'Mira', 'Cairn', 'Veyra', 'Orrin', 'Tarin', 'Valen', 'Syra'];
const stageNames = ['Trilha do Breu', 'Floresta de Gelo', 'Ruínas do Sol', 'Mina das Sombras', 'Talismã Rubro', 'Vale do Dragão', 'Campo de Cinzas', 'Lago da Morte', 'Castelo do Vento', 'Cidadela de Ferro'];

function uid() {
  return `id-${Math.random().toString(16).slice(2)}-${Date.now()}`;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function pick(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function formatNumber(value) {
  return Math.floor(value).toLocaleString('pt-BR');
}

function getDefaultState() {
  return {
    gold: 1400,
    crystals: { fire: 0, ice: 0, light: 0, nature: 0, shadow: 0, void: 0 },
    speed: 1,
    stage: 1,
    kills: 0,
    hirePrice: 250,
    selectedHeroId: null,
    party: [],
    inventory: [],
    skillTree: {},
    pet: null,
    enemy: null,
    log: [],
    lastSave: Date.now()
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    const base = getDefaultState();
    return { ...base, ...parsed, crystals: { ...base.crystals, ...(parsed.crystals || {}) }, skillTree: parsed.skillTree || {} };
  } catch (error) {
    return getDefaultState();
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

let state = loadState();

function createHero(classKey, customName) {
  const def = classDefs[classKey];
  const hero = {
    id: uid(),
    name: customName || pick(heroNames),
    classKey,
    level: 1,
    xp: 0,
    xpToNext: 80,
    branchIndex: 0,
    attackBase: def.baseStats.attack + rand(8, 28),
    defenseBase: def.baseStats.defense + rand(4, 16),
    hpBase: def.baseStats.hp + rand(20, 60),
    critBase: def.baseStats.crit,
    speedBase: def.baseStats.speed,
    currentHp: 0,
    cooldown: 0,
    equipped: {}
  };
  hero.currentHp = getHeroStats(hero).hp;
  return hero;
}

function getClassBranch(hero) {
  const def = classDefs[hero.classKey];
  return def.branches[Math.min(hero.branchIndex, def.branches.length - 1)] || def.branches[0];
}

function getGearBonus(hero) {
  const bonus = { attack: 0, defense: 0, hp: 0, crit: 0, speed: 0 };
  const gearIds = Object.values(hero.equipped || {});
  for (const item of state.inventory) {
    if (gearIds.includes(item.id)) {
      for (const [key, value] of Object.entries(item.stats || {})) {
        if (bonus[key] !== undefined) bonus[key] += value;
      }
    }
  }
  return bonus;
}

function getSkillBonuses() {
  const bonus = { attack: 0, defense: 0, hp: 0, crit: 0, speed: 0 };
  for (const skill of skillNodes) {
    if (state.skillTree[skill.id]) {
      bonus[skill.type] += skill.value;
    }
  }
  return bonus;
}

function getPetBonus() {
  if (!state.pet) return { attack: 0, defense: 0, hp: 0, crit: 0, speed: 0 };
  const levelBoost = 1 + (state.pet.level / 750) * 1.7;
  const bonus = { attack: 0, defense: 0, hp: 0, crit: 0, speed: 0 };
  for (const [key, value] of Object.entries(state.pet.buffs || {})) {
    bonus[key] = value * levelBoost;
  }
  return bonus;
}

function getHeroStats(hero) {
  const def = classDefs[hero.classKey];
  const branch = getClassBranch(hero);
  const skillBonus = getSkillBonuses();
  const gearBonus = getGearBonus(hero);
  const petBonus = getPetBonus();
  const levelScale = 1 + (hero.level - 1) * 0.1;

  const attack = (hero.attackBase * levelScale * (1 + branch.attack / 100)) + gearBonus.attack + skillBonus.attack + petBonus.attack;
  const defense = (hero.defenseBase * levelScale * (1 + branch.defense / 100)) + gearBonus.defense + skillBonus.defense + petBonus.defense;
  const hp = (hero.hpBase * levelScale * (1 + branch.hp / 100)) + gearBonus.hp + skillBonus.hp + petBonus.hp;
  const crit = clamp((hero.critBase + branch.crit / 100 + gearBonus.crit + skillBonus.crit + petBonus.crit) * 100, 0, 80) / 100;
  const speed = (hero.speedBase * (1 + branch.speed / 200)) * (1 + gearBonus.speed / 100 + skillBonus.speed / 100 + petBonus.speed / 100);

  return { attack, defense, hp, crit, speed };
}

function ensureParty() {
  if (state.party.length === 0) {
    const hero = createHero('mage', 'Arieth');
    state.party.push(hero);
    state.selectedHeroId = hero.id;
  }
}

function getSelectedHero() {
  return state.party.find((hero) => hero.id === state.selectedHeroId) || state.party[0] || null;
}

function addLog(text) {
  state.log.unshift(text);
  state.log = state.log.slice(0, 10);
}

function spawnEnemy() {
  const stage = state.stage;
  const monsterNames = ['Goblin Pescador', 'Lobo de Ferro', 'Bárbaro Redimido', 'Espectro de Pedra', 'Mago Infeccionado', 'Rato da Morte', 'Orc da Mina', 'Sentinela do Vale'];
  const crystalTypes = Object.keys(crystals);
  const crystalKey = crystalTypes[(stage - 1) % crystalTypes.length];
  const maxHp = 180 + stage * 72;
  state.enemy = {
    name: pick(monsterNames),
    maxHp,
    hp: maxHp,
    attack: 18 + stage * 8,
    armor: 3 + stage * 2.8,
    crystalKey,
    rewardGold: 60 + stage * 26,
    rewardCrystal: stage >= 4 ? 1 : 0
  };
  renderBattleUI();
}

function canHireHero() {
  return state.party.length < 5 && state.gold >= state.hirePrice;
}

function hireHero() {
  if (!canHireHero()) {
    addLog('Faltam ouro para contratar um novo herói.');
    renderAll();
    return;
  }

  const classKey = pick(Object.keys(classDefs));
  const hero = createHero(classKey, `${pick(heroNames)} ${state.party.length + 1}`);
  state.party.push(hero);
  state.gold -= state.hirePrice;
  state.hirePrice = Math.round(state.hirePrice * 1.25);
  state.selectedHeroId = hero.id;
  addLog(`${hero.name} entrou na equipe.`);
  saveState();
  renderAll();
}

function chooseClass(classKey) {
  const hero = getSelectedHero();
  if (!hero) return;
  hero.classKey = classKey;
  hero.branchIndex = 0;
  addLog(`${hero.name} virou ${classDefs[classKey].name}.`);
  saveState();
  renderAll();
}

function setBranch(branchIndex) {
  const hero = getSelectedHero();
  if (!hero) return;
  hero.branchIndex = Math.min(Math.max(branchIndex, 0), classDefs[hero.classKey].branches.length - 1);
  addLog(`${hero.name} avançou para a ramificação ${getClassBranch(hero).name}.`);
  saveState();
  renderAll();
}

function buySkill(skillId) {
  const skill = skillNodes.find((node) => node.id === skillId);
  if (!skill) return;
  if (state.skillTree[skillId]) {
    addLog(`${skill.name} já está adquirido.`);
    return;
  }

  if (skill.prereq && !state.skillTree[skill.prereq]) {
    addLog(`Você precisa desbloquear ${skill.prereq} antes.`);
    return;
  }

  const canAffordGold = state.gold >= skill.gold;
  const canAffordCrystal = !skill.crystal || state.crystals[skill.crystalType] >= skill.crystal;
  if (!canAffordGold || !canAffordCrystal) {
    addLog(`Recursos insuficientes para ${skill.name}.`);
    return;
  }

  state.gold -= skill.gold;
  if (skill.crystalType) {
    state.crystals[skill.crystalType] -= skill.crystal;
  }
  state.skillTree[skillId] = true;
  addLog(`${skill.name} foi adicionado à árvore de habilidades.`);
  saveState();
  renderAll();
}

function generateItem() {
  const rarityRoll = Math.random();
  let rarity = 'common';
  if (rarityRoll > 0.93) rarity = 'legendary';
  else if (rarityRoll > 0.78) rarity = 'mythic';
  else if (rarityRoll > 0.60) rarity = 'epic';
  else if (rarityRoll > 0.38) rarity = 'rare';
  else if (rarityRoll > 0.18) rarity = 'uncommon';

  const statKeys = ['attack', 'defense', 'hp', 'crit', 'speed'];
  const stats = {};
  const count = rarity === 'legendary' ? 5 : rarity === 'mythic' ? 4 : rarity === 'epic' ? 3 : 2;

  for (let i = 0; i < count; i += 1) {
    const key = pick(statKeys);
    const value = rarity === 'legendary' ? rand(24, 68) : rarity === 'mythic' ? rand(16, 42) : rarity === 'epic' ? rand(12, 24) : rand(6, 16);
    stats[key] = (stats[key] || 0) + value;
  }

  const y = pick(Object.keys(classDefs));
  const item = {
    id: uid(),
    name: `${classDefs[y].name} ${pick(['Lâmina', 'Couraça', 'Anel', 'Elmo', 'Botas', 'Talismã'])} ${rarity.toUpperCase()}`,
    rarity,
    classKey: y,
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

  const slot = item.slot || 'weapon';
  const existing = hero.equipped[slot];
  if (existing) {
    const previous = state.inventory.find((entry) => entry.id === existing);
    if (previous) previous.equippedTo = null;
  }

  item.equippedTo = hero.id;
  hero.equipped[slot] = item.id;
  addLog(`${item.name} foi equipado em ${hero.name}.`);
  saveState();
  renderAll();
}

function generatePet() {
  const rarityRoll = Math.random();
  let rarity = 'common';
  if (rarityRoll > 0.90) rarity = 'legendary';
  else if (rarityRoll > 0.75) rarity = 'mythic';
  else if (rarityRoll > 0.55) rarity = 'epic';
  else if (rarityRoll > 0.35) rarity = 'rare';
  else if (rarityRoll > 0.18) rarity = 'uncommon';

  const candidates = petCatalog.filter((pet) => pet.rarity === rarity);
  const template = pick(candidates);
  state.pet = { ...template, level: 1, maxLevel: 750 };
  addLog(`${state.pet.name} foi convocado.`);
  saveState();
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
    addLog('O pet já alcançou o nível máximo.');
    return;
  }

  state.gold -= cost;
  state.pet.level += 1;
  addLog(`${state.pet.name} subiu para o nível ${state.pet.level}.`);
  saveState();
  renderAll();
}

function grantHeroXp(hero, amount) {
  hero.xp += amount;
  while (hero.xp >= hero.xpToNext) {
    hero.xp -= hero.xpToNext;
    hero.level += 1;
    hero.xpToNext = Math.round(hero.xpToNext * 1.25);
    if (hero.level >= 1500) {
      hero.level = 1500;
      hero.xp = 0;
      hero.xpToNext = 999999;
      break;
    }
  }
}

function handleVictory() {
  const enemy = state.enemy;
  state.gold += enemy.rewardGold;
  if (Math.random() < 0.6) {
    const crystalKey = enemy.crystalKey;
    state.crystals[crystalKey] += enemy.rewardCrystal || 1;
  }

  state.kills += 1;

  if (state.kills % 5 === 0) {
    state.stage += 1;
    addLog(`Você avançou para o andar ${state.stage}: ${stageNames[(state.stage - 1) % stageNames.length]}.`);
  }

  const xpGain = 25 + state.stage * 10;
  for (const hero of state.party) {
    grantHeroXp(hero, xpGain * (0.8 + Math.random() * 0.5));
  }

  if (Math.random() < 0.72) {
    const drop = generateItem();
    state.inventory.push(drop);
    addLog(`Drop: ${drop.name}.`);
  }

  addLog(`${enemy.name} foi derrotado. +${enemy.rewardGold} ouro.`);
  spawnEnemy();
  saveState();
  renderAll();
}

function processEnemyAttack() {
  if (!state.enemy) return;
  const heroes = state.party;
  for (const hero of heroes) {
    const stats = getHeroStats(hero);
    const damage = Math.max(4, state.enemy.attack - stats.defense * 0.7 + rand(-12, 10));
    hero.currentHp = Math.max(0, (hero.currentHp || stats.hp) - damage);
    if (hero.currentHp <= 0) {
      hero.currentHp = stats.hp * 0.45;
      addLog(`${hero.name} foi derrubado, mas se recompôs no campo de batalha.`);
    }
  }
}

function updateCombat(delta) {
  if (!state.enemy) return;

  const heroes = state.party;
  if (!heroes.length) return;

  for (const hero of heroes) {
    hero.cooldown -= delta * state.speed;
    if (hero.cooldown <= 0) {
      const stats = getHeroStats(hero);
      const critical = Math.random() < stats.crit;
      const baseDamage = stats.attack * (0.7 + Math.random() * 0.5);
      const dmg = Math.max(12, baseDamage - state.enemy.armor * 0.9 + rand(0, 20)) * (critical ? 2 : 1);
      state.enemy.hp = Math.max(0, state.enemy.hp - dmg);
      hero.cooldown = Math.max(0.3, 1.1 / stats.speed);
      addLog(`${hero.name} atacou ${state.enemy.name} por ${Math.round(dmg)}${critical ? ' crítico!' : ''}`);
      if (state.enemy.hp <= 0) {
        handleVictory();
        return;
      }
    }
  }

  if (state.enemy.hp > 0) {
    state.enemyCounter = (state.enemyCounter || 0) - delta * state.speed;
    if (state.enemyCounter <= 0) {
      processEnemyAttack();
      state.enemyCounter = 1.2;
    }
  }
}

function renderParty() {
  const list = document.getElementById('partyList');
  if (!state.party.length) {
    list.innerHTML = '<div class="hero-card">Nenhum herói na equipe.</div>';
    return;
  }

  list.innerHTML = state.party.map((hero) => {
    const stats = getHeroStats(hero);
    const selected = hero.id === state.selectedHeroId;
    return `
      <div class="hero-card ${selected ? 'selected' : ''}" data-hero-id="${hero.id}">
        <div class="hero-topline">
          <span class="hero-name">${hero.name}</span>
          <span class="badge gold">Lv ${hero.level}</span>
        </div>
        <div class="hero-meta">
          <span>${classDefs[hero.classKey].name}</span>
          <span>${hero.branchIndex + 1}/6</span>
        </div>
        <div class="hero-badges">
          <span class="badge">AT ${Math.round(stats.attack)}</span>
          <span class="badge">DF ${Math.round(stats.defense)}</span>
          <span class="badge">HP ${Math.round(stats.hp)}</span>
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
  const mount = document.getElementById('classTree');
  const hero = getSelectedHero();
  if (!hero) {
    mount.innerHTML = '<div class="class-option">Nenhum herói selecionado.</div>';
    return;
  }

  const html = Object.entries(classDefs).map(([classKey, def]) => {
    const selected = hero.classKey === classKey;
    return `
      <div class="class-option">
        <div class="class-header">
          <strong>${def.name}</strong>
          <button class="branch-btn ${selected ? 'active' : ''}" data-class="${classKey}">${selected ? 'Selecionado' : 'Escolher'}</button>
        </div>
        <div class="branch-row">
          ${def.branches.map((branch, index) => `
            <button class="branch-btn ${hero.classKey === classKey && hero.branchIndex === index ? 'active' : ''}" data-class="${classKey}" data-branch="${index}">${branch.name}</button>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  mount.innerHTML = html;
  mount.querySelectorAll('[data-class]').forEach((button) => {
    button.addEventListener('click', () => {
      const classKey = button.dataset.class;
      const branchIndex = Number(button.dataset.branch ?? 0);
      if (button.dataset.branch !== undefined) {
        if (classKey !== hero.classKey) {
          hero.classKey = classKey;
        }
        setBranch(branchIndex);
      } else {
        chooseClass(classKey);
      }
    });
  });
}

function renderSkillTree() {
  const mount = document.getElementById('skillTree');
  const html = skillNodes.map((skill) => {
    const unlocked = !!state.skillTree[skill.id];
    const prereqOk = !skill.prereq || !!state.skillTree[skill.prereq];
    const canBuy = !unlocked && prereqOk && state.gold >= skill.gold && (!skill.crystalType || state.crystals[skill.crystalType] >= skill.crystal);
    const crystalText = skill.crystalType ? ` • ${skill.crystal} ${crystals[skill.crystalType]}` : '';
    return `
      <div class="skill-item">
        <div class="skill-text">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-meta">${skill.type.toUpperCase()} +${skill.value}${crystalText} • ${formatNumber(skill.gold)} ouro</span>
        </div>
        <button data-skill="${skill.id}" ${unlocked ? 'disabled' : ''}>${unlocked ? 'OK' : (canBuy ? 'Comprar' : 'Bloq')}</button>
      </div>
    `;
  }).join('');

  mount.innerHTML = html;
  mount.querySelectorAll('[data-skill]').forEach((button) => {
    button.addEventListener('click', () => buySkill(button.dataset.skill));
  });
}

function renderInventory() {
  const mount = document.getElementById('inventoryList');
  if (!state.inventory.length) {
    mount.innerHTML = '<div class="inventory-item">Nenhum item encontrado.</div>';
    return;
  }

  mount.innerHTML = state.inventory.map((item) => {
    const statsText = Object.entries(item.stats || {}).map(([key, value]) => `${key} +${Math.round(value)}`).join(' • ');
    return `
      <div class="inventory-item">
        <div class="inventory-meta">
          <span class="item-name">${item.name}</span>
          <span class="rarity-tag rarity-${item.rarity}">${item.rarity}</span>
          <span class="skill-meta">${statsText}</span>
        </div>
        <button data-item-id="${item.id}">Equipar</button>
      </div>
    `;
  }).join('');

  mount.querySelectorAll('[data-item-id]').forEach((button) => {
    button.addEventListener('click', () => equipItem(button.dataset.itemId));
  });
}

function renderPetPanel() {
  const mount = document.getElementById('petPanel');
  if (!state.pet) {
    mount.innerHTML = '<div class="pet-header"><span>Sem pet</span></div><div class="pet-stats">Gere um pet para receber buffs permanentes.</div>';
    return;
  }

  const bonus = getPetBonus();
  mount.innerHTML = `
    <div class="pet-header">
      <span>${state.pet.name}</span>
      <span class="rarity-tag rarity-${state.pet.rarity}">${state.pet.rarity}</span>
    </div>
    <div class="pet-stats">
      Nível ${state.pet.level}/${state.pet.maxLevel}<br>
      AT +${Math.round(bonus.attack)} • DF +${Math.round(bonus.defense)} • HP +${Math.round(bonus.hp)}<br>
      CRIT +${(bonus.crit || 0).toFixed(1)}% • SPD +${(bonus.speed || 0).toFixed(1)}%
    </div>
  `;
}

function renderBattleUI() {
  const enemy = state.enemy;
  if (!enemy) return;
  const healthPct = (enemy.hp / enemy.maxHp) * 100;
  document.getElementById('enemyName').textContent = enemy.name;
  document.getElementById('enemyLevel').textContent = `Nvl ${state.stage}`;
  document.getElementById('enemyHpText').textContent = `${Math.round(enemy.hp)} / ${Math.round(enemy.maxHp)}`;
  document.getElementById('enemyHealthBar').style.width = `${Math.max(0, healthPct)}%`;
  document.getElementById('stageName').textContent = stageNames[(state.stage - 1) % stageNames.length];
  document.getElementById('stageValue').textContent = String(state.stage);
}

function renderResources() {
  document.getElementById('goldValue').textContent = formatNumber(state.gold);
  const totalCrystals = Object.values(state.crystals).reduce((acc, val) => acc + val, 0);
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
  document.querySelectorAll('.speed-btn').forEach((button) => {
    button.classList.toggle('active', Number(button.dataset.speed) === state.speed);
  });
}

function bindEvents() {
  document.getElementById('hireHeroBtn').addEventListener('click', hireHero);
  document.getElementById('rollPetBtn').addEventListener('click', generatePet);
  document.getElementById('upgradePetBtn').addEventListener('click', upgradePet);
  document.getElementById('nextStageBtn').addEventListener('click', () => {
    state.stage += 1;
    state.kills += 2;
    spawnEnemy();
    addLog('Você avançou para um novo andar do mapa.');
    renderAll();
    saveState();
  });

  document.querySelectorAll('.speed-btn').forEach((button) => {
    button.addEventListener('click', () => {
      state.speed = Number(button.dataset.speed);
      renderAll();
      saveState();
    });
  });
}

function drawScene() {
  const canvas = document.getElementById('gameCanvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.imageSmoothingEnabled = false;

  ctx.fillStyle = '#1b2f3a';
  ctx.fillRect(0, 330, canvas.width, canvas.height - 330);

  ctx.fillStyle = '#2d3d53';
  ctx.fillRect(25, 170, 118, 160);
  ctx.fillRect(58, 132, 52, 42);
  ctx.fillStyle = '#90a5ba';
  ctx.fillRect(40, 195, 18, 26);
  ctx.fillRect(88, 195, 18, 26);

  const enemy = state.enemy;
  if (enemy) {
    const ex = 548;
    const ey = 210;
    ctx.fillStyle = '#d96464';
    ctx.fillRect(ex, ey, 72, 72);
    ctx.fillStyle = '#2c1212';
    ctx.fillRect(ex + 16, ey + 14, 10, 10);
    ctx.fillRect(ex + 46, ey + 14, 10, 10);
    ctx.fillStyle = '#f1d1a0';
    ctx.fillRect(ex + 20, ey + 28, 28, 8);
    ctx.fillStyle = '#3f1a17';
    ctx.fillRect(ex + 8, ey + 58, 14, 22);
    ctx.fillRect(ex + 52, ey + 58, 14, 22);
  }

  state.party.forEach((hero, index) => {
    const x = 60 + index * 110;
    const y = 250;
    const stats = getHeroStats(hero);
    ctx.fillStyle = index % 2 === 0 ? '#8dd7ff' : '#9ae788';
    ctx.fillRect(x, y, 52, 52);
    ctx.fillStyle = '#1c2d3d';
    ctx.fillRect(x - 6, y + 58, 68, 8);
    ctx.fillStyle = '#7fe39d';
    ctx.fillRect(x - 6, y + 58, 68 * ((hero.currentHp || stats.hp) / Math.max(1, stats.hp)), 8);
    ctx.fillStyle = '#eef9ff';
    ctx.fillRect(x + 12, y + 13, 7, 7);
    ctx.fillRect(x + 30, y + 13, 7, 7);
  });
}

function gameLoop() {
  const delta = 1 / 60;
  updateCombat(delta);
  drawScene();
  requestAnimationFrame(gameLoop);
}

function init() {
  ensureParty();
  if (!state.enemy) spawnEnemy();
  if (!state.skillTree || Object.keys(state.skillTree).length === 0) {
    state.skillTree = {};
  }
  state.enemyCounter = 1.2;
  bindEvents();
  renderAll();
  requestAnimationFrame(gameLoop);
}

init();
