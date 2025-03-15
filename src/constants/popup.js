import AboutPopup from "../components/aboutPopup";

export const SUBMENU_ACTIONS = [
    {
        menuTitle: 'Help',
        subMenuTitle: 'About',
        type: 'POPUP',
        component: AboutPopup
    },
    {
        menuTitle: 'File',
        subMenuTitle: 'Print',
        type: 'LINK',
        component: () => {
            const a = document.createElement("a");
            a.href = "https://www.linkedin.com/ambry/?x-li-ambry-ep=AQL9GhRKOUPdZgAAAZWXQXfiVzuGrnQFhAEYzJ3CYox7dBlwCpKeO2Sc7kRGl8upKZjtXN5eBCmuGb7qwUyQFY5635Qayim-NEg0BNS8QnhANPDGMEqRL4F8AzV_GPfz4Kj7VH1zwByzk6YY88QjWqR8_hRKQ2hU-JdLza9A62ugot3k_jXrHUgIrPTKUQ9PwF3wewm6rgYdCYR9chSZMVBoSyf5DJUzHaZsV4oXxXsBwDIgRpMMW20mfk6N0yKwsENZotS2FHpqb1oxoWzRjQOTfhHHT0WEMb1gbpR6YofdLSyg1bEp6bhlc-u-pZB1i0rn5p81TTpZMLK2LSbmB2aXMLbnZ-AVXMVvBysNMOQnfDsOWh1FgI98EmaMm5dC2Xkz5aMPq6gfGCAQlJMA5RIsuNQvojJRimM0TBRBoGHkwsHp8aMj4Wtsh7hcSQYqO3TRtIPL7Pl09ZbwXotm7oJ5P5WllASEIIsm3JEKM2p2VYJADzkD7xwHECrUhHuZAngOlPEPDcFWVbjiACmyCwZt8dwNi03JWjbZGKA10tuOuBSov9FADkDTF2slxmtfqO7jYw&x-ambry-um-filename=Profile.pdf";
            a.target = "_blank";
            a.click();
        }
    }
];