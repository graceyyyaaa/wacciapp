import { supabase } from "./supabase";

export async function saveSubmission(data: any) {
  console.log("DATA TO SAVE:", data);

  const { data: result, error } = await supabase
    .from("submissions")
    .insert([data])
    .select();

  console.log("RESULT:", result);
  console.log("ERROR:", error);

  if (error) {
    alert(JSON.stringify(error));
    throw error;
  }

  return result;
}

export async function getSubmissions() {
  const { data, error } = await supabase.from("submissions").select("*");

  console.log("GET SUBMISSIONS:", data);
  console.log("GET SUBMISSIONS ERROR:", error);

  return data || [];
}
