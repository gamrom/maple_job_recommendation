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
      critical_rate: 70,
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

  await prisma.job.create({
    data: {
      name: "팔라딘",
      job_type: ["전사"],
      base_attack_speed: "무기에 따라 다름",
      secondary_weapon_power: "무기에 따라 다름",
      main_stat: ["STR"],
      sub_stat: "DEX",
      attack_power: 110,
      damage: 35,
      boss_damage: 30,
      final_damage: 218,
      defense_ignore: 58,
      attribute: ["물리", "성"],
      additional_hit: "불가능",
      damage_distribution: "불가능",
      abnormal_status_resist: 130,
      all_attribute_resist: 40,
      full_stance: "가능",
      super_stance: "가능",
      mp_guard: "불가능",
      damage_reduction: 50,
      guard_possible: "가능",
      critical_rate: 47,
      critical_damage: 26,
      skill_cost: "MP",
      jump: "더블",
      air_descent: "가능",
      knock_back: "가능",
      buff_disabled: "가능",
      buff_removal: "가능",
      self_bind: "가능",
      invincibility: 30,
      resurrection: "불가능",
      death_prevention: "불가능",
      link_priority: 1,
      union_priority: 1,
    },
  });

  await prisma.job.create({
    data: {
      name: "다크나이트",
      job_type: ["전사"],
      base_attack_speed: "불가능",
      secondary_weapon_power: "불가능",
      main_stat: ["STR"],
      sub_stat: "DEX",
      attack_power: 150,
      damage: 45,
      boss_damage: 15,
      final_damage: 178,
      defense_ignore: 47,
      attribute: ["물리", "암흑"],
      additional_hit: "불가능",
      damage_distribution: "불가능",
      abnormal_status_resist: 100,
      all_attribute_resist: 20,
      full_stance: "가능",
      super_stance: "가능",
      mp_guard: "불가능",
      damage_reduction: 20,
      guard_possible: "불가능",
      critical_rate: 75,
      critical_damage: 38,
      skill_cost: "MP",
      jump: "더블",
      air_descent: "가능",
      knock_back: "가능",
      buff_disabled: "가능",
      buff_removal: "가능",
      self_bind: "가능",
      invincibility: 30,
      resurrection: "불가능",
      death_prevention: "불가능",
      link_priority: 1,
      union_priority: 1,
    },
    df,
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
