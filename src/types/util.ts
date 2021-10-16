type Expand<T> = T extends (...args: infer A) => infer R
  ? (...args: Expand<A>) => Expand<R>
  : T extends infer O
  ? { readonly [K in keyof O]: O[K] }
  : never;

export type RequireOnly<T, R extends keyof T> = Expand<Partial<T> & Pick<T, R>>;
