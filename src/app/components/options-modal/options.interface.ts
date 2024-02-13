import IIconButton from "../icon-button/icon-button.interface";

export interface IMenuOptions{
  name: string,
  alt: string,
  icon?: IMenuOptionsIcon
}

export interface IMenuOptionsIcon{
  name: string,
  size: IIconButton
}
