import { supabaseClient } from "utility";
import {
  dataProvider as supabaseDataProvider,
  liveProvider as supabaseLiveProvider,
} from "@pankod/refine-supabase";

export const dataProvider = supabaseDataProvider(supabaseClient);
export const liveProvider = supabaseLiveProvider(supabaseClient);
