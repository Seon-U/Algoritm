function solution(bandage, health, attacks) {
    const [skillTime, healSize, bonusHeal] = bandage;
    const attTime_damage = new Map();
    const lastAttTime = attacks[attacks.length - 1][0];
    const maxHealth = health;
    
    attacks.forEach((v) => attTime_damage.set(v[0], v[1]));
    
    let healCnt = 0;
    for (let cTime = 1; cTime <= lastAttTime; cTime++) {
        if (attTime_damage.get(cTime) != null) {
            health -= attTime_damage.get(cTime);
            healCnt = 0;
            if (health <= 0) return -1;
        } else {
            health = Math.min(health + healSize, maxHealth);
            healCnt++;
            if (healCnt == skillTime) {
                health = Math.min(health + bonusHeal, maxHealth);
                healCnt = 0;
            };
        }
    }
    
    return health;
}