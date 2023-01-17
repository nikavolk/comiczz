import React, { DetailedHTMLProps, Dispatch, SetStateAction } from "react";

export interface ComicsData {
  id: number;
  thumbnail: {
    path: string;
    extension: string;
  };
  title: string;
  prices: [{ price: number }];
}

export interface ComicData {
  title: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  dates: [{ date: string }, { date: string }];
  format: string;
  pageCount: number;
  characters: {
    items: [{ name: string }];
  };
  creators: {
    items: [{ name: string }];
  };
  diamondCode: string;
  prices: [{ price: number }];
}

export type ButtonProps = DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface HeaderProps {
  setFilter: Dispatch<SetStateAction<string>>;
  setOffset: Dispatch<SetStateAction<number>>;
  setBreadcrumb: Dispatch<SetStateAction<string>>;
}

export interface CardListProps {
  data: ComicsData[];
  loadMore: () => void;
  isLoading: boolean;
  setSelectedComic: Dispatch<SetStateAction<number>>;
}

export interface CardProps {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  extension: string;
  setSelectedComic: Dispatch<SetStateAction<number>>;
}

export interface DetailsCardProps {
  selectedComic: number;
  setSelectedComic: Dispatch<SetStateAction<number>>;
}

export interface BreadcrumbsProps {
  breadcrumb: string;
}
