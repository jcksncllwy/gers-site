import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Session, User } from "@supabase/supabase-js";
import React, { useContext, useEffect, useState } from "react";
import { supabase, getProfile, SupabaseProfile } from "../APIClients/supabaseClient";
import { ProfileContext } from "./ProfileContext";
import { SessionContext } from "./SessionContext";

export type Props = {
    children: React.ReactNode;
}

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: 'rgb(0, 30, 60)',
            paper: 'rgb(0, 30, 60)'
        }
    },
});

/**
 * Aggregates all app-level contexts into one wrapper provider
 * Initializes all app-level contexts
 */
export const AppProvider = ({ children }: Props) => {
    const [profile, setProfile] = useState<SupabaseProfile | null>(null)
    const [session, setSession] = useState<Session | null>(null)

    // Session Management
    useEffect(() => {
        const initialSession = supabase.auth.session()
        setSession(initialSession)

        // Initialize User Profile using existing session if not null
        const initProfile = async (session: Session | null) => {
            if (session) {
                console.log('Populating User Profile from Session')
                const userProfile = await getProfile(session);
                setProfile(userProfile)
            }
        }
        initProfile(initialSession);

        // Automagically updates session state whenever a supabase call changes the session
        supabase.auth.onAuthStateChange((event, newSession) => {
            setSession(newSession)
            if(event==="SIGNED_IN") initProfile(newSession);
            if(event==='SIGNED_OUT') setProfile(null)
        })
    }, [])

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <ProfileContext.Provider value={[profile, setProfile]}>
                <SessionContext.Provider value={[session, setSession]}>
                    {children}
                </SessionContext.Provider>
            </ProfileContext.Provider>
        </ThemeProvider>
    )
}