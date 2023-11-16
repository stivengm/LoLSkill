export interface ChampionsModel {
    format: string,
    type: string
    version: string,
    data: Array<data>
}

export interface data {
    id: string,
    name: string,
    "key": "266",
    title: string,
    version: string,
    blurb: string,
    info: Info,
    image: Image
}

interface Info {
    attack: number,
    defense: number,
    magic: number,
    difficulty: number,
}

interface Image {
    full: string,
    sprite: string,
    group: string,
    x: number,
    y: number,
    w: number,
    h: number,
}