if (config.enabled) {
  const treasureclassexFilename = 'global\\excel\\treasureclassex.txt';
  const treasureclassex = D2RMM.readTsv(treasureclassexFilename);

  // q = quest, f = farm
  const bosses = [
    {
      q: "Andarielq",
      f: "Andariel",
    },
    {
      q: "Andarielq (N)",
      f: "Andariel (N)",
    },
    {
      q: "Andarielq (H)",
      f: "Andariel (H)",
    },
    {
      q: "Durielq - Base",
      f: "Duriel - Base",
    },
    {
      q: "Durielq (N) - Base",
      f: "Duriel (N) - Base",
    },
    {
      q: "Durielq (H) - Base",
      f: "Duriel (H) - Base",
    },
    {
      q: "Durielq",
      f: "Duriel",
    },
    {
      q: "Durielq (N)",
      f: "Duriel (N)",
    },
    {
      q: "Durielq (H)",
      f: "Duriel (H)",
    },
    {
      q: "Mephistoq",
      f: "Mephisto",
    },
    {
      q: "Mephistoq (N)",
      f: "Mephisto (N)",
    },
    {
      q: "Mephistoq (H)",
      f: "Mephisto (H)",
    },
    {
      q: "Diabloq",
      f: "Diablo",
    },
    {
      q: "Diabloq (N)",
      f: "Diablo (N)",
    },
    {
      q: "Diabloq (H)",
      f: "Diablo (H)",
    },
    {
      q: "Baalq",
      f: "Baal",
    },
    {
      q: "Baalq (N)",
      f: "Baal (N)",
    },
    {
      q: "Baalq (H)",
      f: "Baal (H)"
    },
  ]

  treasureclassex.rows.forEach((row) => {
    update_row(row, treasureclassex.rows);
  });


  D2RMM.writeTsv(treasureclassexFilename, treasureclassex);
}

function update_row(row, rows) {
  const treasureClass = row['Treasure Class'];
  bosses.forEach((boss) => {
    if (treasureClass == boss.f) {
      quest_row = get_row(rows, boss.q);
      row["group"] = quest_row["group"];
      row["level"] = quest_row["level"];
      row["Picks"] = quest_row["Picks"];
      row["Unique"] = quest_row["Unique"];
      row["Set"] = quest_row["Set"];
      row["Rare"] = quest_row["Rare"];
      row["Magic"] = quest_row["Magic"];
      row["NoDrop"] = quest_row["NoDrop"];
      row["Item1"] = quest_row["Item1"];
      row["Prob1"] = quest_row["Prob1"];
      row["Item2"] = quest_row["Item2"];
      row["Prob2"] = quest_row["Prob2"];
      row["Item3"] = quest_row["Item3"];
      row["Prob3"] = quest_row["Prob3"];
      row["Item4"] = quest_row["Item4"];
      row["Prob4"] = quest_row["Prob4"];
      row["Item5"] = quest_row["Item5"];
      row["Prob5"] = quest_row["Prob5"];
      row["Item6"] = quest_row["Item6"];
      row["Prob6"] = quest_row["Prob6"];
      row["Item7"] = quest_row["Item7"];
      row["Prob7"] = quest_row["Prob7"];
      row["Item8"] = quest_row["Item8"];
      row["Prob8"] = quest_row["Prob8"];
      row["Item9"] = quest_row["Item9"];
      row["Prob9"] = quest_row["Prob9"];
      row["Item10"] = quest_row["Item10"];
      row["Prob10"] = quest_row["Prob10"];
      row["SumItems"] = quest_row["SumItems"];
      row["TotalProb"] = quest_row["TotalProb"];
      row["DropChance"] = quest_row["DropChance"];
      row["Term"] = quest_row["Term"];
    }
  });
}

function get_row(rows, name) {
  rows.find((row) => {
    return name == row['Treasure Class'];
  });
}
