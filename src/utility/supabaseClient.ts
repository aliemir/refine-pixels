import { createClient } from "@pankod/refine-supabase";

const SUPABASE_URL = "https://ujcwhefhzncpphzxolnt.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqY3doZWZoem5jcHBoenhvbG50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTY2NTk3MDMsImV4cCI6MTk3MjIzNTcwM30.Ji4_ioiiJaGsziXlcKLwkSForDOTFJMRmvZZmLyo8Zw";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY);
