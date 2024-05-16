import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  await prisma.job.create({
    data: {
      name: "히어로",
      job_type: ["전사"],
      base_attack_speed: "무기에 따라 다름",
      secondary_weapon_power: "무기에 따라 다름",
      main_stat: ["STR"],
      sub_stat: "DEX",
      attack_power: 154,
      damage: 65,
      boss_damage: 24,
      final_damage: 536,
      defense_ignore: 58,
      attribute: ["물리"],
      additional_hit: "불가능",
      damage_distribution: "불가능",
      abnormal_status_resist: 210,
      all_attribute_resist: 100,
      full_stance: "가능",
      super_stance: "가능",
      mp_guard: "불가능",
      damage_reduction: 40,
      guard_possible: "불가능",
      critical_damage: 20,
      skill_cost: "MP",
      jump: "더블",
      air_descent: "불가능",
      knock_back: "가능",
      buff_disabled: "가능",
      buff_removal: "가능",
      self_bind: "불가능",
      invincibility: 1.6,
      resurrection: "불가능",
      death_prevention: "가능",
      link_priority: 1,
      union_priority: 1,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
