export interface PanelFormat {
  id: number;
  width: number;
  height: number;
  color: string;
  veta: boolean;
  blade: number;
}

export interface PanelStock {
  stock: {
    monocromo: PanelFormat[];
    woods: PanelFormat[];
  };
}

export interface PieceFormat {
  width: number;
  height: number;
  panel: string;
  banding: [BandingFormat];
}

export interface BandingFormat {
  length: BandingLength;
  color: string;
  width: number;
  label: string;
  amount: string;
}

export type BandingLength = 0 | 15 | 19 | 25;
