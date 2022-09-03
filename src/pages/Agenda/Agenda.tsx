import { KeyboardReturnRounded } from "@mui/icons-material"
import { Box, Link, Paper, Typography } from "@mui/material"
import { PageTitle } from "../../components/atoms/PageTitle"
import BasicPage from "../../components/layouts/BasicPage"

const days = [`Day 1:
8:00 – 8:30 am: Opening ceremony
8:30 – 9:00 How the summit works, schedules.
9:00 – 9:45. Keynote, John D. Liu
9:45  - 10:00 Question & answer period.
10:00 – 11:00. Small groups, random selection. Everyone introduces themselves and their restoration work.  Look for ways you can assist each other. Exchange restoration visions.
11:00 – 12:00. Break
12:00– 1:30 Concurrent workshops period with Q & A period.
1:30 –2:30.  Small group session.  By tracks or caucus.
 2:30 – 3:30. Reports
3:30 – 4:00 Ending remarks, song.
`,
    `Day 2:
8:00 – 8:30 am: Opening ceremony
8:30 – 9:00 How the summit works, schedules.
9:00 – 10:00. Keynotes
9:45  - 10:00 Question & answer period.
10:00 – 11:00. Small groups, random selection. Everyone introduces themselves and their restoration work.  Look for ways you can assist each other. Exchange restoration visions.
11:00 – 12:00. Break
12:00– 1:30 Concurrent workshops period with Q & A period.
1:30 –2:30.  Small group session.  By tracks or caucus.
 2:30 – 3:30. Reports
3:30 – 4:00 Ending remarks, song.
`,
    `Day 3, Is Hands-on, in-person events held around the world. Decentralized, autonomous.
An introduction to the day will be posted at 8:00 am London time.
In-person events set their own schedule.
Livestreams, photos and reports will be posted on our website as they come in.
Participants can watch live streams and photos as they come available
`,
    `Day 4:
8:00 am – 8:30. Ceremony and Opening remarks
8:30 -9:00. Introduction to the day. Global Earth Repair Action Plan: Goals and pathways.
9:00 – 10:30. Concurrent presentations by authors of some of the best currently available global restoration plans. Q &A.
10:30 – 11:30. Working groups meet by Track.
11:30 – 12:00 Report back.
12:00 – 1:00 Break.
1:00 – 2:00. Working groups meet by Track.
2:00 – 2:30 Report back.
2:30 – 3:30. Working groups meet by Track.
3:30 – 4:00 Reports, assessment and next steps.
`]

export const Agenda = () => {
    return (
        <BasicPage sx={{ mb: 4, 'white-space': 'pre-wrap' }}>
            <PageTitle>
                Agenda
            </PageTitle>
            <Typography sx={{
                mb: 2,
                fontSize: {
                    xs: 40,
                    sm: 80
                }
            }}>
                72 Hours of programming over 3 days!
            </Typography>
            <Typography>
                The Summit includes three days (October 21,22 and 24) of 24 hours of round the world programming. 3 different time regions of the world each have  8-hour summits .  This is nine 8-hour programs over three days.  72 hours total (each segment has a one hour break).
            </Typography>
            <Typography>* The Americas. 8:00 am to 4:00 pm Pacific time (Seattle).</Typography>
            <Typography>* East Asia and Oceania: 8:00 am to 4:00 pm, New Delhi time.</Typography>
            <Typography>* Africa, Europe and West Asia. 8:00 am to 4:00 pm, London time.</Typography>
            <Typography>
                <Link href="https://www.worldtimebuddy.com/">Here is my favorite way to figure out time zone conversions</Link>

            </Typography>
            <Typography>
                <Link href="https://en.wikipedia.org/wiki/Time_zone#/media/File:World_Time_Zones_Map.png">Here is a great map of the world’s time zones.</Link>
            </Typography>
            <Typography sx={{ mt: 2 }} textAlign="center">
                Global Earth Repair Summit
            </Typography>
            <Typography textAlign="center">
                SCHEDULE
            </Typography>
            <Typography>
                We have decided to do three days of 8-hour summits in 3 different time regions of the world.  So this would be nine 8-hour programs over three days.  72 hours total (of which 9 hours are breaks).
            </Typography>
            <Typography>
                Here is our current thinking. A work in progress.  This does not cover how we will work in caucuses and discussion rooms.  Comments, suggestions?
            </Typography>
            {days.map((day) => {
                return (
                    <Typography sx={{ m: 2 }}>
                        {day}
                    </Typography>
                )
            })}


        </BasicPage>
    )
}