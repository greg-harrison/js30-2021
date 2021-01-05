import boom from "./sounds/boom.wav"
import clap from "./sounds/clap.wav"
import hihat from "./sounds/hihat.wav"
import kick from "./sounds/kick.wav"
import openhat from "./sounds/openhat.wav"
import ride from "./sounds/ride.wav"
import snare from "./sounds/snare.wav"
import tink from "./sounds/tink.wav"
import tom from "./sounds/tom.wav"

export let data = [
    {
        type: "boom",
        src: boom,
        key: "a",
        keyCode: 65 
    },
    {
        type: "clap",
        src: clap,
        key: "s",
        keyCode: 83
    },
    {
        type: "hihat",
        src: hihat,
        key: "d",
        keyCode: 68
    },
    {
        type: "kick",
        src: kick,
        key: "f",
        keyCode: 70
    },
    {
        type: "openhat",
        src: openhat,
        key: "g",
        keyCode: 71
    },
    {
        type: "ride",
        src: ride,
        key: "h",
        keyCode: 72
    },
    {
        type: "snare",
        src: snare,
        key: "j",
        keyCode: 74
    },
    {
        type: "tink",
        src: tink,
        key: "k",
        keyCode: 75
    },
    {
        type: "tom",
        src: tom,
        key: "l",
        keyCode: 76
    }
]