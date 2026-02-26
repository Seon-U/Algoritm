function solution(bandage, health, attacks) {
    const [skillTime, healSize, bonusHeal] = bandage;
    const maxHealth = health;
    
    let formerAttTime = 0;
    for (const [attTime, damage] of attacks) {
        const diffTime = attTime - formerAttTime - 1;
        
        if (diffTime > 0) {            
            const bonus = Math.floor(diffTime / skillTime) * bonusHeal;
            const defHeal = (diffTime) * healSize;
            health = Math.min(health + bonus + defHeal, maxHealth);
        }
        
        formerAttTime = attTime;
        health -= damage;
        
        if (health <= 0) return -1;        
    }
    return health;
}