export type State = {
  readonly code: string;
  readonly name: string;
};

export type Country = {
  readonly code: string;
  readonly name: string;
  readonly states: readonly State[];
};
