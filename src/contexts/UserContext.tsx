import { User } from "@supabase/supabase-js";
import React from "react";

export const UserContext = React.createContext<User | null>(null);