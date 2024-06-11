import localFont from "next/font/local";
import {Montserrat , Roboto} from "next/font/google";


export  const neueRemanGt = localFont({
    src: [
        {
            path: './NeueRemanGt-Heavy.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './NeueRemanGt-HeavyCondensed.otf',
            weight: '400',
            style: 'normal',
        },
    ],
})

export const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400','700']
})

export  const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400','700', '800', '900']
})
