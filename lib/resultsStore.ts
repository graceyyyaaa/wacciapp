import { supabase } from "./supabase";

export async function saveResult(data: any) {
  const percentage = (data.score / data.total) * 100;

  const status = percentage >= 50 ? "PASS" : "FAIL";

  const { data: result, error } = await supabase
    .from("results")
    .insert([
      {
        candidate_name: data.candidate_name,
        score: data.score,
        total: data.total,
        date: data.date,
        status,
      },
    ])
    .select();

  if (error) {
    alert(JSON.stringify(error));
    console.log(error);
    throw error;
  }

  return result;
}

export async function getResults() {
  const { data, error } = await supabase
    .from("results")
    .select("*")
    .order("score", { ascending: false });

  if (error) {
    console.log(error);
  }

  return data || [];
}
