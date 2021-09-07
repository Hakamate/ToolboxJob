export interface IFieldButton {
  label: string,
  url: string
}

export interface IFieldImagesThumbnail {
  height: number,
  url: string,
  width: number,
}

export interface IFieldImagesThumbnails {
  full: IFieldImagesThumbnail,
  large: IFieldImagesThumbnail,
  smal: IFieldImagesThumbnail,
}

export interface IFieldImages {
  filename: string
  height: number
  id: string
  size: number
  thumbnails: IFieldImagesThumbnails
  type: string
  url: string
  width: number
}

export interface IField {
  'Bouton Fondateur URL': IFieldButton
  'Bouton Site Web': IFieldButton
  Description: string
  Logo: Array<IFieldImages>
  Nom: string
  'Nom Fondateur': string
  'Photo Fondateur': Array<IFieldImages>
  'Photo de couverture': Array<IFieldImages>
  Tags: Array<string>
}

export interface ITool {
  id: string
  fields: Array<IField>
  createdTime: Date
}
