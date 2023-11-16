export interface ChampionsModel {
    format: string,
    type: string
    version: string,
    data: Array<data>
}

export interface data {
    name: string,
    title: string,
    version: string
}