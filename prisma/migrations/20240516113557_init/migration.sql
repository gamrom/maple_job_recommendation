-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "job_type" TEXT[],
    "base_attack_speed" TEXT,
    "secondary_weapon_power" TEXT,
    "main_stat" TEXT,
    "sub_stat" TEXT,
    "attack_power" INTEGER,
    "damage" INTEGER,
    "boss_damage" INTEGER,
    "final_damage" INTEGER,
    "defense_ignore" TEXT,
    "attribute" TEXT[],
    "additional_hit" TEXT,
    "damage_distribution" TEXT,
    "abnormal_status_resist" TEXT,
    "all_attribute_resist" TEXT,
    "full_stance" TEXT,
    "super_stance" TEXT,
    "mp_guard" TEXT,
    "damage_reduction" TEXT,
    "guard_possible" TEXT,
    "critical_rate" INTEGER,
    "critical_damage" INTEGER,
    "skill_cost" TEXT,
    "jump" TEXT,
    "air_descent" TEXT,
    "knock_back" TEXT,
    "buff_disabled" TEXT,
    "buff_removal" TEXT,
    "self_bind" TEXT,
    "invincibility" TEXT,
    "resurrection" TEXT,
    "death_prevention" TEXT,
    "link_priority" TEXT,
    "union_priority" TEXT,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Job_name_key" ON "Job"("name");
