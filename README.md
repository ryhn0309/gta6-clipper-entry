# gta6-clipper-entry

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/ryhn0309/gta6-clipper-entry/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/ryhn0309/gta6-clipper-entry/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

A vertical Short cut from Windah Basudara's GTA VI Gameplay #3 livestream (19 Nov 2026): the moment Windah meets Bigfoot in the Grassrivers marsh — the stream's biggest reaction of the night — followed by the make.fun pitch: make clips like this with AI and earn money on make.fun.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

Entered on [make.fun](https://make.fun/?ref=4sr636m7&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards

## The clip

- Source: https://www.youtube.com/live/B2Bon2X1jPQ
- Moment: Bigfoot in the Grassrivers swamp, VOD 1:03:44–1:04:12
- Format: 1080x1920 vertical, 28 seconds
- Pitch on screen + end card: `make.fun/bounty/gta6-clipper-01`
- Published video: https://www.youtube.com/shorts/bmvJ7oPZzg4

## The program

`main.ts` (Node 22, standard library only) copies `VIDEO.json` — the public
YouTube address of the clip — to the output directory, where the house reads
it and fetches the video's views from the YouTube Data API. The video itself
is the entry.

## Files

- `main.ts` — the entry program
- `VIDEO.json` — the clip's YouTube address
- `LICENSE` — MIT
