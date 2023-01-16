import React, { DetailedHTMLProps, Dispatch, SetStateAction } from "react";

export interface Data {
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
  prices: [{ price: number }];
  releaseDate: string;
  format: string;
  pages: string;
  characters?: string;
  creators: string;
  diamondCode: string;
}

export type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface HeaderProps {
  setFilter: Dispatch<SetStateAction<string>>;
  setOffset: Dispatch<SetStateAction<number>>;
}

export interface CardListProps {
  data: Data[];
  loadMore: () => void;
  isLoading: boolean;
}

export interface CardProps {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  extension: string;
  onMoreInfoClick: (comic: number) => void;
}

export interface SelectedComicData {
  id: number;
}

export interface DetailsCard {}

export interface FilterState {
  filter: string | null;
}
