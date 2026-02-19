import fs from "fs/promises";


export async function readFromCsv(path) {

  const data = await fs.readFile(path, "utf-8");

  const lines = data.trim().split("\n");

  
  const rows = lines.slice(1);
    const fiftyRows = rows.slice(0,49);
  const result = fiftyRows.map((row) => {
    const [eventid, iyear, country_txt, region_txt,city,summary,attacktype1_txt,targsubtype1_txt,corp1,target1,motive] = row.split(",");
    return { eventid, iyear, country_txt, region_txt,city,summary,attacktype1_txt,targsubtype1_txt,corp1,target1,motive };
  });
    console.log(result)
  return result;
}

export async function getQuestions(req,res){
   try{
      const data = await readFromCsv('src/db/terrorData.csv');
      return res.json([data])
   } catch (err) {
    console.log(err.message);
    return res.status(500).json({err:err.message});
   }
}