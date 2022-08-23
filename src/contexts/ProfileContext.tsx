import React from "react";
import { SupabaseProfile } from "../APIClients/supabaseClient";
import { WriteableContextType } from "./types";

export type ContextType = WriteableContextType<SupabaseProfile | null>

export const ProfileContext = React.createContext<ContextType | null>(null);
